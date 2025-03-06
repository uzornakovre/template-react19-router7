import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { ROUTE_ALL } from "./utils/constants";

export default [
  index("./routes/home/home.tsx"),
  route(ROUTE_ALL, "./routes/not-found/not-found.tsx"),
] satisfies RouteConfig;
