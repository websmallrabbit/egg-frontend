(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a5a8976","chunk-62e0d189"],{2017:function(e,t,s){"use strict";var n=s("3b76"),a=s.n(n);a.a},"22d1c":function(e,t,s){},"393a":function(e,t,s){"use strict";var n=s("592c"),a=s.n(n);a.a},"3b76":function(e,t,s){},"592c":function(e,t,s){},"63c2":function(e,t,s){},7427:function(e,t,s){e.exports=s.p+"static/img/App.9a88e3d7.jpg"},"9ed6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"系统登录",name:"first"}},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("login.title"))+"\n          ")]),e._v(" "),s("lang-select",{staticClass:"set-language"})],1),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{attrs:{placeholder:e.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n          "+e._s(e.$t("login.logIn"))+"\n        ")]),e._v(" "),s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"tips"},[s("span",[e._v(e._s(e.$t("login.username"))+" : admin")]),e._v(" "),s("span",[e._v(e._s(e.$t("login.password"))+" : 123456")])]),e._v(" "),s("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("\n            "+e._s(e.$t("login.thirdparty"))+"\n          ")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:e.$t("login.thirdparty"),visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[e._v("\n        "+e._s(e.$t("login.thirdpartyTips"))+"\n        "),s("br"),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),(new Date).getTime()?s("social-sign"):e._e()],1)],1),e._v(" "),s("el-tab-pane",{attrs:{label:"系统注册",name:"second"}},[s("register",{on:{success:function(t){e.activeName="first"}}})],1)],1)],1)},a=[],i=(s("61f7"),s("1131")),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"social-signup-container"},[s("div",{staticClass:"sign-btn",on:{click:function(t){return e.wechatHandleClick("wechat")}}},[s("span",{staticClass:"wx-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v(" 微信\n  ")]),e._v(" "),s("div",{staticClass:"sign-btn",on:{click:function(t){return e.tencentHandleClick("tencent")}}},[s("span",{staticClass:"qq-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v(" QQ\n  ")]),e._v(" "),e._m(0),e._v(" "),e._m(1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-btn"},[n("a",{attrs:{href:"https://github.com/login/oauth/authorize?client_id=6fd9bb9ad92200bb9191"}},[n("span",{staticClass:"qq-svg-container"},[n("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:s("7427"),alt:""}})]),e._v(" github\n    ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-btn"},[n("a",{attrs:{href:"https://localhost:7001/study/githubLogin"}},[n("span",{staticClass:"qq-svg-container"},[n("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:s("7427"),alt:""}})]),e._v(" github登录 egg-passport\n    ")])])}],c=(s("bc3a"),s("c24f")),l=s("ed08"),u={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")},githubHandleClick:function(e){var t=this;Object(c["d"])().then(function(e){200===e.code||t.$notify.error(e.msg)})}}},d=u,p=(s("df86"),s("2877")),g=Object(p["a"])(d,r,o,!1,null,"21e2abbb",null),m=g.exports,f=s("b953"),h={name:"Login",components:{Register:f["default"],LangSelect:i["a"],SocialSign:m},data:function(){return{activeName:"first",loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",messages:"请输入账户名"}],password:[{required:!0,trigger:"blur",messages:"请输入密码"}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.getUser(),Object(c["b"])().then(function(e){console.log(e)})},destroyed:function(){},methods:{getUser:function(){var e=this,t=Object(l["e"])("code");t&&this.$store.dispatch("user/thirlogin",t).then(function(t){200!==t.code?(e.$notify.error(t.msg),e.loading=!1):(e.$notify.success(t.msg),e.$router.push({path:"/"}),e.loading=!1)}).catch(function(){e.loading=!1})},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(function(t){200!==t.code?(e.$notify.error(t.msg),e.loading=!1):(e.$notify.success(t.msg),e.$router.push({path:"/"}),e.loading=!1)}).catch(function(){e.loading=!1})})}}},v=h,w=(s("2017"),s("393a"),Object(p["a"])(v,n,a,!1,null,"7ecbc8ee",null));t["default"]=w.exports},b953:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-container"},[s("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.registerRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("\n        系统注册\n      ")]),e._v(" "),s("lang-select",{staticClass:"set-language"})],1),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{attrs:{placeholder:e.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleregister(t)}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),s("upload",{on:{success:e.success}}),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleregister(t)}}},[e._v("\n      注册\n    ")])],1)],1)},a=[],i=s("1131"),r=s("c24f"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{position:"relative","margin-bottom":"20px"}},[s("el-upload",{ref:"uploadFile",staticClass:"flex-sb",attrs:{data:e.dataObj,headers:e.headers,"http-request":e.myUpload,action:"",multiple:"",limit:1,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"file-list":e.fileList,"show-file-list":!0}},[s("el-button",{attrs:{type:"primary"}},[e._v("点击上传")])],1)],1)},c=[],l=(s("c5f6"),s("b775"));function u(e){return Object(l["a"])({url:"/study/uploadFile",method:"post",data:e})}var d={name:"UploadFile",props:{index:{type:Number,default:0},isClear:{type:Number,default:0}},data:function(){return{dataObj:{userCode:"hep-batch",systemId:"hep_batch",bussType:"hep"},action:"",headers:{"Content-Type":"utf-8"},fileList:[]}},watch:{isClear:function(e,t){e!==t&&(this.fileList=[])}},methods:{handleExceed:function(e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(e.length," 个文件"))},handleRemove:function(){this.fileList=[]},myUpload:function(e){var t=this,s=new FormData;s.append("file",e.file),s.append("userCode","hep-batch"),s.append("systemId","hep-batch"),s.append("bussType","hep"),u(s).then(function(e){200===e.code?(t.$message({type:"success",message:e.msg}),t.$emit("success",{imgUrl:e.imgUrl})):(t.$message({type:"error",message:e.msg}),t.fileList=[],t.loading=!1)}).catch(function(e){t.$message({type:"error",message:e}),t.fileList=[],t.loading=!1})}}},p=d,g=s("2877"),m=Object(g["a"])(p,o,c,!1,null,null,null),f=m.exports,h={name:"Register",components:{Upload:f,LangSelect:i["a"]},data:function(){return{imgUrlValue:"http://uploadImg",registerForm:{username:"",password:"",avatar:""},registerRules:{username:[{required:!0,trigger:"blur",message:"请输入账号"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{success:function(e){this.registerForm.avatar=e.imgUrl},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleregister:function(){var e=this;this.$refs.registerForm.validate(function(t){if(!t)return e.loading=!1,!1;e.loading=!0,Object(r["g"])(e.registerForm).then(function(t){200===t.code?(e.$notify.success(t.msg),e.registerForm={},e.$emit("success")):e.$notify.error(t.msg),e.loading=!1})})}}},v=h,w=(s("f28e"),s("c47d"),Object(g["a"])(v,n,a,!1,null,"b6cd715c",null));t["default"]=w.exports},c47d:function(e,t,s){"use strict";var n=s("c60d"),a=s.n(n);a.a},c60d:function(e,t,s){},df86:function(e,t,s){"use strict";var n=s("63c2"),a=s.n(n);a.a},f28e:function(e,t,s){"use strict";var n=s("22d1c"),a=s.n(n);a.a}}]);