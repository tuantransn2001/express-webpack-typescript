import { Server, Socket } from "socket.io";
import logger from "../src/utils/logger";

const EVENTS = {
  connection: "connection",
  example: "example",
};

function socket({ io }: { io: Server }) {
  logger.info(`Sockets enabled`);

  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`User connected ${socket.id}`);
    /*
     * Set user status online
     */
    socket.on(EVENTS.example, () => {
      logger.info(`example`);
    });
  });
}

export default socket;
