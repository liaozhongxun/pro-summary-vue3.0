"use strict";(self["webpackChunkpro_summary_vue3_0"]=self["webpackChunkpro_summary_vue3_0"]||[]).push([[512],{2939:function(){},2404:function(e,i,n){n.d(i,{Z:function(){return C}});var t=n(3396),a=n(7139);const s=e=>((0,t.dD)("data-v-2cf10288"),e=e(),(0,t.Cn)(),e),o={class:"footer"},l={class:"tablist"},r=s((()=>(0,t._)("i",{class:"iconfont iconhome1"},null,-1))),c=s((()=>(0,t._)("span",null,"首页",-1))),d=[r,c],u=s((()=>(0,t._)("i",{class:"iconfont iconduihuakuang"},null,-1))),f=s((()=>(0,t._)("span",null,"群聊",-1))),m=[u,f],v=s((()=>(0,t._)("i",{class:"iconfont icondongtai"},null,-1))),g=s((()=>(0,t._)("span",null,"动态",-1))),p=[v,g],h=s((()=>(0,t._)("i",{class:"iconfont iconwodewo"},null,-1))),_=s((()=>(0,t._)("span",null,"我的",-1))),b=[h,_];function x(e,i,n,s,r,c){return(0,t.wg)(),(0,t.iD)("footer",o,[(0,t._)("ul",l,[(0,t._)("li",{class:(0,a.C_)(["item",{active:0==n.tabIndex}]),onClick:i[0]||(i[0]=i=>e.$toPath("/index"))},d,2),(0,t._)("li",{class:(0,a.C_)(["item",{active:1==n.tabIndex}]),onClick:i[1]||(i[1]=i=>e.$toPath("/groupchat"))},m,2),(0,t._)("li",{class:(0,a.C_)(["item",{active:2==n.tabIndex}]),onClick:i[2]||(i[2]=i=>e.$toPath("/dynamic"))},p,2),(0,t._)("li",{class:(0,a.C_)(["item",{active:3==n.tabIndex}]),onClick:i[3]||(i[3]=i=>e.$toPath("/user"))},b,2)])])}n(7658);var y={props:{leftFont:{typeof:String,default:""},tabIndex:{typeof:Number,default:0}},methods:{goBack(){"-1"==this.isback?this.$router.go(-1):this.$router.push({path:this.isback})}},setup(){return{}}},k=n(89);const S=(0,k.Z)(y,[["render",x],["__scopeId","data-v-2cf10288"]]);var C=S},9:function(e,i,n){n.r(i),n.d(i,{default:function(){return Q}});var t=n(2404),a=n(1404),s=n(3396),o=n(4870),l=n(610),r=n(5323),c=n(7936),d=n(253),u=n(3444);const f=Symbol(),m=()=>(0,s.f3)(f,null);var v=n(2229);const[g,p,h]=(0,l["do"])("list"),_={error:Boolean,offset:(0,r.SI)(300),loading:Boolean,finished:Boolean,errorText:String,direction:(0,r.SQ)("down"),loadingText:String,finishedText:String,immediateCheck:r.J5};var b=(0,s.aZ)({name:g,props:_,emits:["load","update:error","update:loading"],setup(e,{emit:i,slots:n}){const t=(0,o.iH)(!1),a=(0,o.iH)(),l=(0,o.iH)(),r=m(),f=(0,d.eo)(a),g=()=>{(0,s.Y3)((()=>{if(t.value||e.finished||e.error||!1===(null==r?void 0:r.value))return;const{offset:n,direction:s}=e,o=(0,d.EL)(f);if(!o.height||(0,c.xj)(a))return;let u=!1;const m=(0,d.EL)(l);u="up"===s?o.top-m.top<=n:m.bottom-o.bottom<=n,u&&(t.value=!0,i("update:loading",!0),i("load"))}))},_=()=>{if(e.finished){const i=n.finished?n.finished():e.finishedText;if(i)return(0,s.Wm)("div",{class:p("finished-text")},[i])}},b=()=>{i("update:error",!1),g()},x=()=>{if(e.error){const i=n.error?n.error():e.errorText;if(i)return(0,s.Wm)("div",{role:"button",class:p("error-text"),tabindex:0,onClick:b},[i])}},y=()=>{if(t.value&&!e.finished)return(0,s.Wm)("div",{class:p("loading")},[n.loading?n.loading():(0,s.Wm)(v.g,{class:p("loading-icon")},{default:()=>[e.loadingText||h("loading")]})])};return(0,s.YP)((()=>[e.loading,e.finished,e.error]),g),r&&(0,s.YP)(r,(e=>{e&&g()})),(0,s.ic)((()=>{t.value=e.loading})),(0,s.bv)((()=>{e.immediateCheck&&g()})),(0,u.F)({check:g}),(0,d.OR)("scroll",g,{target:f,passive:!0}),()=>{var i;const o=null==(i=n.default)?void 0:i.call(n),r=(0,s.Wm)("div",{ref:l,class:p("placeholder")},null);return(0,s.Wm)("div",{ref:a,role:"feed",class:p(),"aria-busy":t.value},["down"===e.direction?o:r,y(),_(),x(),"up"===e.direction?o:r])}}});const x=(0,a.n)(b);n(1958),n(2939);var y=n(4250),k=(n(368),n(6742),n(3094),n(7139));const S=e=>((0,s.dD)("data-v-4ed89349"),e=e(),(0,s.Cn)(),e),C={class:"dynamic-page page tabbar-page header-page"},w={class:"top"},I=S((()=>(0,s._)("div",{class:"bgbanner"},null,-1))),W={class:"avatarInfo"},L={class:"self-name"},z={class:"name"},Z=["src"],$={class:"dynamic-list"},B={class:"inner-box"},T={class:"left"},D=["src"],N={class:"right-info"},P={class:"display-name"},H={class:"content"};function O(e,i,n,a,o,l){const r=(0,s.up)("si-header"),c=y.b,d=x,u=t.Z;return(0,s.wg)(),(0,s.iD)("div",C,[(0,s.Wm)(r,{title:"动态",isback:"-1"}),(0,s._)("div",w,[I,(0,s._)("div",W,[(0,s._)("div",L,[(0,s._)("div",z,(0,k.zw)(o.userInfo.displayName||"未设置"),1),(0,s._)("img",{class:"avatarimg",src:e.$config.baseUrl+o.userInfo.headurl},null,8,Z)])])]),(0,s._)("div",$,[(0,s.Wm)(d,{loading:o.loading,"onUpdate:loading":i[0]||(i[0]=e=>o.loading=e),finished:o.finished,offset:"50","finished-text":"没有更多了",onLoad:l.onLoad},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.dynamicList,(i=>((0,s.wg)(),(0,s.j4)(c,{class:"item",key:i.id},{default:(0,s.w5)((()=>[(0,s._)("div",B,[(0,s._)("div",T,[(0,s._)("img",{src:e.$config.baseUrl+i.users.headurl},null,8,D)]),(0,s._)("div",N,[(0,s._)("div",P,(0,k.zw)(i.users.displayName||"未设置"),1),(0,s._)("div",H,(0,k.zw)(i.content),1)])])])),_:2},1024)))),128))])),_:1},8,["loading","finished","onLoad"])]),(0,s.Wm)(u,{tabIndex:2})])}var Y=n(2641);function F(e){return(0,Y.Z)({url:"/api/dynamic",params:e,method:"get"})}var U=n(5859),j={name:"Dynamic",data(){return{userInfo:JSON.parse(localStorage.getItem("userInfo")),dynamicList:[],finished:!1,loading:!1,size:10,number:1}},components:{SiHeader:U.Z,TabBar:t.Z},methods:{onLoad(){this.getList()},getList(){let e={pageSize:this.size,pageNumber:this.number};F(e).then((e=>{this.dynamicList=[...this.dynamicList,...e.result.list],this.number++,this.loading=!1,0==e.result.list.length&&(this.finished=!0)}))}},mounted(){}},E=n(89);const J=(0,E.Z)(j,[["render",O],["__scopeId","data-v-4ed89349"]]);var Q=J},2229:function(e,i,n){n.d(i,{g:function(){return g}});var t=n(1404),a=n(3396),s=n(610),o=n(5323),l=n(2220),r=n(6048);const[c,d]=(0,s["do"])("loading"),u=Array(12).fill(null).map(((e,i)=>(0,a.Wm)("i",{class:d("line",String(i+1))},null))),f=(0,a.Wm)("svg",{class:d("circular"),viewBox:"25 25 50 50"},[(0,a.Wm)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),m={size:o.Or,type:(0,o.SQ)("circular"),color:String,vertical:Boolean,textSize:o.Or,textColor:String};var v=(0,a.aZ)({name:c,props:m,setup(e,{slots:i}){const n=(0,a.Fl)((()=>(0,l.l7)({color:e.color},(0,r.Xn)(e.size)))),t=()=>{var n;if(i.default)return(0,a.Wm)("span",{class:d("text"),style:{fontSize:(0,r.Nn)(e.textSize),color:null!=(n=e.textColor)?n:e.color}},[i.default()])};return()=>{const{type:i,vertical:s}=e;return(0,a.Wm)("div",{class:d([i,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[(0,a.Wm)("span",{class:d("spinner",i),style:n.value},["spinner"===i?u:f]),t()])}}});const g=(0,t.n)(v)}}]);
//# sourceMappingURL=512.0877c8a4.js.map