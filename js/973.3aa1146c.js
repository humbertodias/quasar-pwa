"use strict";(globalThis["webpackChunkquasar_pwa"]=globalThis["webpackChunkquasar_pwa"]||[]).push([[973],{4973:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var r=t(9835);const o=(0,r._)("p",{class:"text-h6"},"Camera",-1),s={class:"row"},c={class:"col-12 text-center"},l={autoplay:"",width:"250",ref:"videoplay"},i={class:"col-12 text-center"},n={class:"col-12 text-center"},d={src:"",ref:"imgTakePhoto",width:"250"};function m(e,a,t,m,u,h){const g=(0,r.up)("q-btn"),p=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(p,{padding:""},{default:(0,r.w5)((()=>[o,(0,r._)("div",s,[(0,r._)("div",c,[(0,r._)("video",l,null,512)]),(0,r._)("div",i,[u.cameraStart?((0,r.wg)(),(0,r.j4)(g,{key:1,label:"Tirar Foto",color:"primary",icon:"camera",onClick:h.takePhoto},null,8,["onClick"])):((0,r.wg)(),(0,r.j4)(g,{key:0,label:"Acessar Camera",color:"primary",icon:"camera",disable:!u.enableCamera,onClick:h.useCamera},null,8,["disable","onClick"]))]),(0,r._)("div",n,[(0,r._)("img",d,null,512)])])])),_:1})}const u={name:"PageCamera",data(){return{enableCamera:!1,cameraStart:!1,imageCapture:null,track:null}},mounted(){navigator.mediaDevices.getUserMedia&&(this.enableCamera=!0)},methods:{useCamera(){navigator.mediaDevices.getUserMedia({video:!0}).then((e=>{this.cameraStart=!0,this.$refs.videoplay.srcObject=e,this.track=e.getVideoTracks()[0],this.imageCapture=new ImageCapture(this.track)})).catch((e=>console.error(e)))},takePhoto(){this.imageCapture.takePhoto().then((e=>{createImageBitmap(e);const a=new FileReader;a.readAsDataURL(e),a.onloadend=()=>{this.$refs.imgTakePhoto.src=a.result,console.log(a.result)}})).catch((e=>console.error(e)))}}};var h=t(1639),g=t(9885),p=t(7065),k=t(9984),C=t.n(k);const v=(0,h.Z)(u,[["render",m]]),b=v;C()(u,"components",{QPage:g.Z,QBtn:p.Z})}}]);