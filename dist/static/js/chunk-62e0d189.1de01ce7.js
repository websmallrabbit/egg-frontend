(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62e0d189"],{"22d1c":function(e,t,s){},b953:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-container"},[s("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.registerRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("\n        系统注册\n      ")]),e._v(" "),s("lang-select",{staticClass:"set-language"})],1),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{attrs:{placeholder:e.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleregister(t)}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),s("upload",{on:{success:e.success}}),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleregister(t)}}},[e._v("\n      注册\n    ")])],1)],1)},a=[],n=s("1131"),i=s("c24f"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{position:"relative","margin-bottom":"20px"}},[s("el-upload",{ref:"uploadFile",staticClass:"flex-sb",attrs:{data:e.dataObj,headers:e.headers,"http-request":e.myUpload,action:"",multiple:"",limit:1,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"file-list":e.fileList,"show-file-list":!0}},[s("el-button",{attrs:{type:"primary"}},[e._v("点击上传")])],1)],1)},l=[],c=(s("c5f6"),s("b775"));function d(e){return Object(c["a"])({url:"/study/uploadFile",method:"post",data:e})}var u={name:"UploadFile",props:{index:{type:Number,default:0},isClear:{type:Number,default:0}},data:function(){return{dataObj:{userCode:"hep-batch",systemId:"hep_batch",bussType:"hep"},action:"",headers:{"Content-Type":"utf-8"},fileList:[]}},watch:{isClear:function(e,t){e!==t&&(this.fileList=[])}},methods:{handleExceed:function(e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(e.length," 个文件"))},handleRemove:function(){this.fileList=[]},myUpload:function(e){var t=this,s=new FormData;s.append("file",e.file),s.append("userCode","hep-batch"),s.append("systemId","hep-batch"),s.append("bussType","hep"),d(s).then(function(e){200===e.code?(t.$message({type:"success",message:e.msg}),t.$emit("success",{imgUrl:e.imgUrl})):(t.$message({type:"error",message:e.msg}),t.fileList=[],t.loading=!1)}).catch(function(e){t.$message({type:"error",message:e}),t.fileList=[],t.loading=!1})}}},p=u,m=s("2877"),g=Object(m["a"])(p,o,l,!1,null,null,null),f=g.exports,h={name:"Register",components:{Upload:f,LangSelect:n["a"]},data:function(){return{imgUrlValue:"http://uploadImg",registerForm:{username:"",password:"",avatar:""},registerRules:{username:[{required:!0,trigger:"blur",message:"请输入账号"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{success:function(e){this.registerForm.avatar=e.imgUrl},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleregister:function(){var e=this;this.$refs.registerForm.validate(function(t){if(!t)return e.loading=!1,!1;e.loading=!0,Object(i["g"])(e.registerForm).then(function(t){200===t.code?(e.$notify.success(t.msg),e.registerForm={},e.$emit("success")):e.$notify.error(t.msg),e.loading=!1})})}}},v=h,y=(s("f28e"),s("c47d"),Object(m["a"])(v,r,a,!1,null,"b6cd715c",null));t["default"]=y.exports},c47d:function(e,t,s){"use strict";var r=s("c60d"),a=s.n(r);a.a},c60d:function(e,t,s){},f28e:function(e,t,s){"use strict";var r=s("22d1c"),a=s.n(r);a.a}}]);