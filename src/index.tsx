import { render } from "solid-js/web";
import { liff } from "@line/liff";

import "./index.css";
import App from "./App";
import { getLiffId } from "./utils/environment";

var script = document.createElement('script');
script.src = 'https://static.line-scdn.net/liff/edge/2/sdk.js';
script.onload= () => {
  // console.log('liff :>> ', liff);
  // console.log('getLiffId() :>> ', getLiffId());
  // console.log('window.liff :>> ', window.liff);
  window.liff.init({ liffId: getLiffId() }).then((value) => {
    render(() => <App />, document.getElementById("root"));
  });
}
document.body.appendChild(script);


