import { IncomingHttpHeaders } from "http2";
interface MyCustomsHeaders {
  token: string;
}
export type IncomingCustomHeaders = IncomingHttpHeaders & MyCustomsHeaders;
