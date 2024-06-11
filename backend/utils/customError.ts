export type customErrorType = {
    statusCode: number;
    message: string;
}

class extendedError extends Error {
    statusCode: number | undefined;
}

export default function customError(message: string, statusCode: number): extendedError {
    const error = new extendedError();
    error.message = message;
    error.statusCode = statusCode;
    return error;
}
