import { createBrowserHistory, History } from "history";

let useNavigate: History | undefined;

if (typeof document !== "undefined") {
  useNavigate = createBrowserHistory();
}

export default useNavigate;
