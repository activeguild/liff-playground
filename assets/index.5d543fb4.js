import{t,d as n,c as e,i as o,a as c,r as s,b as r}from"./vendor.f88b9979.js";var d="_App_9g4xh_1";const i=()=>(console.log("({}).VITE_LIFF_PLAYGROUND_LIFF_ID :>> ",{}.VITE_LIFF_PLAYGROUND_LIFF_ID),{}.VITE_LIFF_PLAYGROUND_LIFF_ID),l=t("<div></div>"),a=t('<input type="text">'),I=t("<button>LIFF.init</button>"),u=()=>{const[t,n]=e(i());console.log("liffId :>> ",t);const s=()=>{window.liff.init({liffId:i()})};return(()=>{const e=l.cloneNode(!0);return o(e,t?(()=>{const n=l.cloneNode(!0);return o(n,t),n})():[(()=>{const t=a.cloneNode(!0);return t.$$input=t=>n(t.currentTarget.value),t})(),(()=>{const t=I.cloneNode(!0);return t.$$click=s,t})()]),c((()=>e.className=d)),e})()};n(["input","click"]);var _=document.createElement("script");_.src="https://static.line-scdn.net/liff/edge/2/sdk.js",_.onload=()=>{s((()=>r(u,{})),document.getElementById("root"))},document.body.appendChild(_);
