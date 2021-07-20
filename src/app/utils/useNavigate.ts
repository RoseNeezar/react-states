import { createBrowserHistory, History } from "history";

let useNavigate: History | undefined;

if (typeof document !== "undefined") {
  useNavigate = createBrowserHistory({
    basename: "/app",
  });
}

export default useNavigate;
