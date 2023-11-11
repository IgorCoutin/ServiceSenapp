const ApiError = require("../controllers/ApiErrorController");

module.exports = function apiErrorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    if (err.error === null) {
      return res.status(err.status).json({
        status: "error",
        success: false,
        message: err.message,
      });
    }

    return res.status(err.status).json({
      status: "error",
      success: false,
      message: err.message,
      error: err.error,
    });
  }
};
