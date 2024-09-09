export const appMessagesData = {
  errors: {
    noNetworkConnectivity: "No Internet Connection!",
    routeNotFound: "The requested API endpoint does not exist!",
    methodNotAllowed: "The action you are trying to perform is not allowed!",
    serverError: "Server Error!",
  },
  success: {
    resource: {
      create: ({ label, isPlural = false }) => `${label} ${isPlural ? "have" : "has"} been successfully created.`,
      update: ({ label, isPlural = false }) => `${label} ${isPlural ? "have" : "has"} been successfully updated.`,
      delete: ({ label, isPlural = false }) => `${label} ${isPlural ? "have" : "has"} been successfully deleted.`,
      remove: ({ label, isPlural = false }) => `${label} ${isPlural ? "have" : "has"} been successfully removed.`,
    },
  },
};
