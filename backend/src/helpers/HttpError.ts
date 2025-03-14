export interface HttpError extends Error {
  status: number;
}

const messageList: { [key: number]: string } = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Internal Server Error',
};

export const HttpError = (
  status: number,
  message: string = messageList[status],
): HttpError => {
  const error = new Error(message) as HttpError;
  error.status = status;

  return error;
};
