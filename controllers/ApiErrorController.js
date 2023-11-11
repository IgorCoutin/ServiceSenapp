module.exports = class ApiError {
  message;
  status;
  error;

  constructor(message, status, error = null) {
    this.message = message;
    this.status = status;
    this.error = error;
  }

  static NotFound(message = "Resource not found") {
    return new ApiError(message, 404);
  }

  static BadRequest(message) {
    return new ApiError(message, 400);
  }

  static Internal(error) {
    return new ApiError("Internal server error", 500, error);
  }

  static Unauthorized() {
    return new ApiError("Unauthorized!", 401);
  }

  static CustomError(message, status, error) {
    return new ApiError(message, status, error);
  }
};
