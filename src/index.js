import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import '../node_modules/react-bootstrap/dist/react-bootstrap.min'
import './bower_components/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
