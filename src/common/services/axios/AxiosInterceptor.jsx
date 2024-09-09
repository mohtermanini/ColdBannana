"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import { axiosClient } from "@/common/services/axios/axiosClient";
import { appMessagesData } from "@/common/data/appMessagesData";
import AxiosUtils from "@/common/utils/AxiosUtils";
import ToastUtils from "@/common/utils/notifications/ToastUtils";
import { useAuth } from "@/common/contexts/AuthProvider";

export function AxiosInterceptor() {
  const { token } = useSelector(state => state.auth);
  const { logout } = useAuth();

  useEffect(() => {
    const updateInterceptor = axiosClient.interceptors.request.use(
      function (config) {
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        if ((config.method === 'get' || config.method === 'GET')) {
          config.headers['Accept'] = 'text/plain';
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    return () => {
      axiosClient.interceptors.request.eject(updateInterceptor);
    };
  }, [token]);

  useEffect(() => {
    axiosClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (AxiosUtils.isUnauthorizedError(error)) {
          logout({ expiredSession: true });
        }
        else if (AxiosUtils.isNetworkError(error)) {
          ToastUtils.showErrorMessage({ body: appMessagesData.errors.noNetworkConnectivity });
        }
        else if (AxiosUtils.isNotFoundError(error)) {
          ToastUtils.showErrorMessage({ body: appMessagesData.errors.routeNotFound });
        }
        else if (AxiosUtils.isMethodNotAllowedError(error)) {
          ToastUtils.showErrorMessage({ body: appMessagesData.errors.methodNotAllowed });
        }
        else if (AxiosUtils.isServerError(error)) {
          ToastUtils.showErrorMessage({ body: appMessagesData.errors.serverError });
        } else if (AxiosUtils.isForbiddenError(error) || AxiosUtils.isValidationError(error) || AxiosUtils.isBadRequestError(error)) {
          ToastUtils.showErrorMessage({ body: AxiosUtils.getErrorMessage(error) });
        }
        return Promise.reject(error);
      }
    );
  }, []);
}
