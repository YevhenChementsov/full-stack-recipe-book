const messageList: { [key: number]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

export const HttpError = (
  status: number,
  message: string = messageList[status]
): Error => {
  const error = new Error(message);
  (error as any).status = status;

  return error;
};
