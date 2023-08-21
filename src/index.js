import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Components/Router";
import "./index.css";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(<Router />);
