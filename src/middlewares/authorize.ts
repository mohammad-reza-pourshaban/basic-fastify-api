import { error, ERRORS } from "../helpers/reply";

export const authorize = async (request, reply) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : request?.body?.token;
  if (!token) {
    return error(reply, "ERROR401", ERRORS.invalidToken);
  }
  //todo: check user token
  const userId = { id: 1 };
  if (userId) {
    const user = { id: 1 };
    request.user = user;
  } else {
    return error(reply, "ERROR401", ERRORS.tokenError);
  }
};
