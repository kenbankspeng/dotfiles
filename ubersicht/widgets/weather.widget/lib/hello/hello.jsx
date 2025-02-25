import { injectStyles } from "../utils";
import { css } from "./css";

injectStyles("hello-styles", [css]);
export const Widget = () => <div className="hello">Hello</div>;
