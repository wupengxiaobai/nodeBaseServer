(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],f=0,l=[];f<s.length;f++)o=s[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-2d0c4883":"ed75feaf","chunk-32c87da2":"4c35acf4","chunk-726b5d81":"6fcc21a2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-726b5d81":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-2d0c4883":"31d6cfe0","chunk-32c87da2":"31d6cfe0","chunk-726b5d81":"42da7ac0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],f=u.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=s(e),u=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=f;c.push([0,"vendors~app"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c8b":function(e,t){(function(e,t){var n=document.documentElement||document.body,r="orientationchange"in window?"orientationchange":"resize",o=function(){var e=n.clientWidth;n.style.fontSize=e>=750?"100px":e/750*100+"px"};o(),e.addEventListener(r,o,!1)})(window)},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("7c55"),n("2877")),s={},i=Object(c["a"])(s,o,a,!1,null,null,null),u=i.exports,f=n("75fc"),l=n("8c4f"),p=[{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-32c87da2"),n.e("chunk-726b5d81")]).then(n.bind(null,"78c1"))}}],d=p,m=[{path:"/mine",name:"mine",component:function(){return n.e("chunk-2d0c4883").then(n.bind(null,"3adc"))}}],h=m;r["a"].use(l["a"]);var g,b=new l["a"]({mode:"history",linkActiveClass:"active",routes:[{path:"/",redirect:"/test"}].concat(Object(f["a"])(d),Object(f["a"])(h))}),v=n("2f62"),y=(n("96cf"),n("3b8d")),j=n("bd86"),O="SET_LIST",w="SET_TEMP_LIST",T="SET_TOKEN",S=n("bc3a"),k=n.n(S),P={TestDefault:"vuex -- > TestModules",list:[],tempList:[]},E=(g={},Object(j["a"])(g,O,function(e,t){e.list=t}),Object(j["a"])(g,w,function(e,t){e.tempList=t}),g),_={getListAndSet:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,r=t.commit,e.next=3,k.a.get("api/test/test1",{params:n}).then(function(e){return e.data.data});case 3:o=e.sent,r(O,o),r(w,o),localStorage.setItem("_list",o);case 7:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},L={list:function(e){return e.list},tempList:function(e){return e.tempList},whiteUser:function(e){return e.list.filter(function(e){return/白/g.test(e.nickname)})},TestDefault:function(e){return e.TestDefault}},x={state:P,actions:_,getters:L,mutations:E},A={listNameSpace:[]},D=Object(j["a"])({},"SET_LIST",function(e,t){e.listNameSpace=t}),N={getListAndSetNamespace:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a,c,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,o=t.commit,a=t.rootState,c=t.rootGetters,e.next=3,k.a.get("api/test/test1",{params:n}).then(function(e){return e.data.data});case 3:s=e.sent,o("SET_LIST",s),o("SET_LIST",s,{root:!0}),r("getListAndSet",s,{root:!0}),console.log("rootState: ",a),console.log("rootGetters: ",c);case 9:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},C={ListNameSpaceGetters:function(e,t,n,r){return r.tempList}},M={namespaced:!0,state:A,actions:N,getters:C,mutations:D},R=n("d225"),I=n("335a"),B=function e(){Object(R["a"])(this,e),Object(j["a"])(this,"save",function(e,t){return I["a"].set(e,t)}),Object(j["a"])(this,"get",function(e){return I["a"].get(e,"")}),Object(j["a"])(this,"has",function(e){return I["a"].has(e)}),Object(j["a"])(this,"remove",function(e){return I["a"].remove(e)})},U=new B,q="token",G={token:U.get(q)||""},$=Object(j["a"])({},T,function(e,t){e.token=t}),z={setToken:function(e,t){e.state;var n=e.commit;t&&(U.save(q,t),n(T,t))}},F={token:function(e){return e.token}},J={state:G,actions:z,getters:F,mutations:$},K=n("b054"),H=n.n(K);r["a"].use(v["a"]);var V=!1,W=new v["a"].Store({modules:{test:x,test_namespace:M,global:J},strict:V,plugins:V?[H()()]:[]}),Q=W,X=(n("66b9"),n("b650"));r["a"].use(X["a"]);n("2c8b");var Y={DEVT_BASE_URL:"http://localhost:5000/",TEST_BASE_URL:"http://localhost:3005/"},Z=Y.TEST_BASE_URL,ee={getTest:Z+"test/test1",postTest:Z+"test/test2"},te=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("e7e5"),n("d399")),ne=n("4328"),re=n.n(ne);function oe(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach(function(t){Object(j["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ce=function(e){Object(te["a"])({message:e,duration:1e3,forbidClick:!1})},se=function(){b.replace({path:"/login",query:{redirect:b.currentRoute.fullPath}})},ie=function(e,t){switch(e){case 401:se();break;case 403:ce("登录过期，请重新登录"),setTimeout(function(){se()},300);break;case 404:ce("请求资源不存在");break;default:ce(t)}},ue=k.a.create({timeout:2e4});ue.defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",ue.interceptors.request.use(function(e){if("post"===e.method){var t=re.a.parse(e.data);e.data=re.a.stringify(ae({},t))}else if("get"===e.method){var n=re.a.parse(e.params);e.params=re.a.stringify(ae({},n))}return e},function(e){return Promise.reject(e)}),ue.interceptors.response.use(function(e){return 200===e.status?Promise.resolve(e):Promise.reject(e)},function(e){var t=e.response;if(t)return ie(t.status,t.data.message),Promise.reject(t);console.log("请求超时或断网.....")});var fe=ue,le={getTestData:function(){return fe({url:ee.getTest}).then(function(e){return 200==e.status?Promise.resolve(e.data):Promise.reject("err")}).catch(function(e){return Promise.reject("err")})},postMassage:function(){return fe({method:"post",url:ee.postTest}).then(function(e){return 200==e.status?Promise.resolve(e.data):Promise.reject("err")}).catch(function(e){return Promise.reject("err")})}},pe={testModel:le};r["a"].prototype.$api=pe,r["a"].config.productionTip=!1,new r["a"]({router:b,store:Q,render:function(e){return e(u)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),o=n.n(r);o.a}});
//# sourceMappingURL=app.26caf2f4.js.map