(()=>{"use strict";var e={2617:(e,o,r)=>{var t=r(1957),n=r(1947),a=r(499),i=r(9835);function l(e,o,r,t,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}var s=r(432);const c=(0,i.aZ)({name:"App",data(){return{ready:!1}},methods:{onVolumeUp(){console.log("up"),this.simulateEnter()},onVolumeDown(){console.log("down"),this.simulateEnter()},onKeyPress(e){console.log("keypress.app",e)},onCordovacallbackerror(e){console.log("onCordovacallbackerror",e)},onDeviceReady(){this.ready||(console.log("ready"),s.Z.create("App.onDeviceReady"),document.addEventListener("volumeupbutton",this.onVolumeUp,!1),document.addEventListener("volumedownbutton",this.onVolumeDown,!1),window.addEventListener("keypress",this.onKeyPress),window.addEventListener("cordovacallbackerror",this.onCordovacallbackerror),this.ready=!0)},simulateEnter(){this.simulateEnterNative(),console.log("simulateEnter")},simulateEnterNative(){let e=1,o=66,r=0;window.sendKeystroke(e,o,r,this.callbackEnter),console.log("simulateEnterNative")},callbackEnter(){console.log("callbackEnter fired"),this.$bus.emit("enter-event","arg1 value","arg2 value","arg3 value")}},mounted(){console.log("mounted"),document.addEventListener("deviceready",this.onDeviceReady,!1),this.onDeviceReady(),this.$bus.on("enter-event",((e,o,r)=>{s.Z.create("bus.enter-event")})),s.Z.create("App.mounted")}});var u=r(1639);const d=(0,u.Z)(c,[["render",l]]),p=d;var v=r(3340),f=r(8339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(641)]).then(r.bind(r,1641)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(176)]).then(r.bind(r,9176))},{path:"camera",component:()=>Promise.all([r.e(736),r.e(900)]).then(r.bind(r,2900))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=h,b=(0,v.BC)((function(){const e=f.r5,o=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return o}));async function g(e,o){const r=e(p);r.use(n.Z,o);const t=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:r,router:t}}const w={config:{},plugins:{Notify:s.Z}};var y=r(368);(0,y.z)("service-worker.js",{ready(){console.log("Service worker is active.")},registered(){console.log("Service worker has been registered.")},cached(){},updatefound(){},updated(){s.Z.create({message:"New update avaiable",icon:"mdi-cloud-download-outline",closeBtn:"Update",timeout:1e4,onDismiss(){location.reload(!0)}})},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const k="";async function E({app:e,router:o},r){let t=!1;const n=e=>{try{return o.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(t=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const o=n(e);null!==o&&(window.location.href=o,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===t&&s<r.length;s++)try{await r[s]({app:e,router:o,ssrContext:null,redirect:a,urlPath:i,publicPath:k})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==t&&(e.use(o),e.mount("#q-app"))}g(t.ri,w).then((e=>{const[o,t]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[o]([Promise.resolve().then(r.bind(r,8514))]).then((o=>{const r=t(o).filter((e=>"function"===typeof e));E(e,r)}))}))},8514:(e,o,r)=>{r.r(o),r.d(o,{default:()=>a});var t=r(6307),n=r(3340);const a=(0,n.xr)((({app:e})=>{const o=new t.Z;e.config.globalProperties.$bus=o,e.provide("bus",o)}))}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(o,t,n,a)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,n,a]=e[u],l=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(o=c)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,n,a]}})(),(()=>{r.n=e=>{var o=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(o,{a:o}),o}})(),(()=>{r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((o,t)=>(r.f[t](e,o),o)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{176:"4624b686",641:"080d42d9",862:"0e450cfa",900:"5c6b16ba"}[e]+".js"})(),(()=>{r.miniCssF=e=>{}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o)})(),(()=>{var e={},o="quasar-pwa:";r.l=(t,n,a,i)=>{if(e[t])e[t].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",o+a),l.src=t),e[t]=[n];var p=(o,r)=>{l.onerror=l.onload=null,clearTimeout(v);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),o)return o(r)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(o,t)=>{var n=r.o(e,o)?e[o]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((r,t)=>n=e[o]=[r,t]));t.push(n[2]=a);var i=r.p+r.u(o),l=new Error,s=t=>{if(r.o(e,o)&&(n=e[o],0!==n&&(e[o]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+o+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+o,o)}},r.O.j=o=>0===e[o];var o=(o,t)=>{var n,a,[i,l,s]=t,c=0;if(i.some((o=>0!==e[o]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var u=s(r)}for(o&&o(t);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},t=globalThis["webpackChunkquasar_pwa"]=globalThis["webpackChunkquasar_pwa"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var t=r.O(void 0,[736],(()=>r(2617)));t=r.O(t)})();