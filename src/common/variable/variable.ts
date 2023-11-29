import { getCurrentTime } from "@/src/utils/dateConvert";

export const healthCheck = {
  uptime: process.uptime(),
  timestamp: getCurrentTime(),
  message: "OK",
};
