import React from 'react'

import { Form } from 'react-bootstrap'
import { ErrorMessage } from '@hookform/error-message'
import StringUtils from '@/common/utils/StringUtils';
import DataTypesUtils from '@/common/utils/DataTypesUtils';

export default function ArrayTextField({ name, arrayName, elementId, label, methods, groupClassName, ...props }) {
    const { register, formState: { errors }, watch } = methods;
    const { required, readOnly } = props;
    const value = watch(name);

    return (
        <Form.Group className={`text-start form-group ${groupClassName}`}>
            {label && <Form.Label>{label} {required && <span className="tx-danger">*</span>}</Form.Label>}
            {readOnly ? (
                !DataTypesUtils.isDefined(value) || StringUtils.isEmpty(value) ? "N/A" : value
            ) :
                (
                    <Form.Control
                        className={`form-control ${errors[arrayName]?.[elementId] ? 'invalid' : ''}`}
                        {...register(name)}
                        {...props}
                    />
                )
            }
            <Form.Control.Feedback className="invalid-feedback">
                <ErrorMessage errors={errors} name={name} />
            </Form.Control.Feedback>
        </Form.Group>
    )
}
