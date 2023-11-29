import { ZodError } from "zod";
import { RestFullAPI } from "./apiResponse";
import { STATUS_CODE } from "../common/enums/api.enums";
import HttpException from "./http.exception";

export const errorHandler = (err: Error | ZodError) => {
  if (err instanceof ZodError) {
    return RestFullAPI.onFail(STATUS_CODE.BAD_REQUEST, {
      message: err.issues.map((err) => err.message).join(" || "),
    } as HttpException);
  }

  return RestFullAPI.onFail(STATUS_CODE.INTERNAL_SERVER_ERROR, {
    message: err.message,
  } as HttpException);
};
