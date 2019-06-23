// Creates a generic global error logging function for easy access and so I don't have to be tightly coupled with Sentry

const Sentry = require("@sentry/node");

Sentry.init({
  maxBreadcrumbs: 50,
  debug: process.env.NODE_ENV === "development",
  environment: process.env.NODE_ENV
});

exports.logError = (error, code, message) => {
  Sentry.configureScope(scope => {
    if (code) scope.setTag("code", code);
    if (message) scope.setExtra("message", message);
  });
  Sentry.captureException(error);
};
