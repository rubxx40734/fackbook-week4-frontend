(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34f22f16"],{"08a9":function(e,t,s){},"0ff9":function(e,t,s){"use strict";var o=s("7a23"),c={class:"col-md-8"},n=Object(o["h"])('<div class="overlapping mt-4 position-relative"><div class="box1 p-3 w-100"><p class="mb-0 text-center">張貼動態</p></div><div class="box2 p-3 w-100"><p class="mb-0 text-center">張貼動態2</p></div></div>',1),a={class:"content mt-4 p-4 d-flex flex-column"},r=Object(o["g"])("p",{class:"mb-0 fw-bold"},"貼文內容",-1),l={class:"form-floating"},i=Object(o["g"])("label",{for:"floatingTextarea2"},"請輸入您的內容",-1),d={class:"row p-2"},u={class:"row g-3"},b={class:"col-md-4"},p={class:"col-md-8"},m={class:"form-control",type:"file",id:"formFile",name:"imgur",ref:"fileInput"},f={class:"row mt-2"},g={class:"col-md-12"},h=["src"],j={class:"text-center text-danger fw-bold"};function O(e,t,s,O,w,v){var x=Object(o["w"])("successModal");return Object(o["r"])(),Object(o["f"])("div",c,[n,Object(o["g"])("div",a,[r,Object(o["g"])("div",l,[Object(o["F"])(Object(o["g"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return w.content=e}),class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"}},null,512),[[o["C"],w.content]]),i]),Object(o["g"])("div",d,[Object(o["g"])("form",u,[Object(o["g"])("div",b,[Object(o["g"])("button",{type:"button",onClick:t[1]||(t[1]=function(){return v.upfile&&v.upfile.apply(v,arguments)}),class:"btn btn-dark mb-3 w-75"},"上傳圖片")]),Object(o["g"])("div",p,[Object(o["g"])("input",m,null,512)])])]),Object(o["g"])("div",f,[Object(o["g"])("div",g,[this.imgUrl?(Object(o["r"])(),Object(o["f"])("img",{key:0,src:w.imgUrl,alt:"",class:"w-100 bgCoverBottom card-img heigh mb-3"},null,8,h)):Object(o["e"])("",!0)])]),Object(o["g"])("p",j,Object(o["y"])(w.errorMessage),1),Object(o["g"])("button",{type:"button",class:"btn btn-info w-75 text-secondary fw-bold mt-2 align-self-center",onClick:t[2]||(t[2]=function(){return v.sendPost&&v.sendPost.apply(v,arguments)})}," 送出貼文 "),Object(o["i"])(x,{ref:"modal"},null,512)])])}var w=s("882e"),v={data:function(){return{content:"",image:"",errorMessage:"",imgUrl:""}},components:{successModal:w["a"]},props:["currentUser"],methods:{sendPost:function(){var e=this,t=window.localStorage.getItem("userToken");console.log(t,this.currentUser);var s={content:this.content,user:this.currentUser._id,image:this.imgUrl};this.axios.post("https://rocky-wave-99178.herokuapp.com/posts",s).then((function(t){console.log(t),e.content="",e.imgUrl="",e.errorMessage="",e.$refs.modal.showModal()})).catch((function(t){e.errorMessage=t.response.data.message,console.log(t.response.data.message)}))},upfile:function(){var e=this,t=this.$refs.fileInput.files[0],s=new FormData;s.append("imgur",t),this.axios.post("https://rocky-wave-99178.herokuapp.com/upload",s).then((function(t){console.log(t.data.imgUrl),e.imgUrl=t.data.imgUrl,e.errorMessage=""})).catch((function(t){e.errorMessage=t.response.data.message,console.log(t.response.data.message)}))}}},x=(s("82c5"),s("6b0d")),k=s.n(x);const y=k()(v,[["render",O]]);t["a"]=y},"2efb":function(e,t,s){},"309d":function(e,t,s){"use strict";s("f374")},"56bf":function(e,t,s){},7475:function(e,t,s){"use strict";s("56bf")},"82c5":function(e,t,s){"use strict";s("08a9")},"882e":function(e,t,s){"use strict";var o=s("7a23"),c={class:"modal fade",id:"exampleModal",tabindex:"-1",ref:"modal"},n=Object(o["h"])('<div class="modal-dialog"><div class="modal-content"><div class="modal-body text-center"><p class="modalTxt fs-3 fw-bold"><i class="bi bi-check-circle-fill"></i>更新新增成功!</p></div><div class="modal-footer"><button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal">Close</button></div></div></div>',1),a=[n];function r(e,t,s,n,r,l){return Object(o["r"])(),Object(o["f"])("div",c,a,512)}var l=s("7c2b"),i=s.n(l),d={data:function(){return{modal:{}}},methods:{showModal:function(){this.modal.show()}},mounted:function(){this.modal=new i.a(this.$refs.modal)}},u=(s("7475"),s("6b0d")),b=s.n(u);const p=b()(d,[["render",r]]);t["a"]=p},aa95:function(e,t,s){"use strict";s("2efb")},c66d:function(e,t,s){"use strict";s.r(t);s("b0c0");var o=s("7a23"),c={class:"container-fluid p-0"},n={class:"container p-3"},a={class:"row"},r={key:1,class:"col-md-8"},l=Object(o["h"])('<div class="overlapping mt-4 position-relative mb-5"><div class="box1 p-3 w-100"><p class="mb-0 text-center text">修改個人資料</p></div><div class="box2 p-3 w-100"><p class="mb-0 text-center text">修改個人資料2</p></div></div>',1),i={class:"upBox d-flex border ms-4"},d={key:0,class:"downBox d-flex flex-column align-items-center"},u={class:"downBox-editName d-flex flex-column align-items-center w-75"},b=["src"],p=["src"],m={class:"checkImg d-flex flex-column align-items-center"},f={type:"file",class:"form-control w-75",name:"image",ref:"fileInputUser"},g={class:"mb-3 w-50"},h=Object(o["g"])("label",{for:"exampleFormControlInput1",class:"form-label text"},"暱稱",-1),j=Object(o["g"])("p",{class:"mt-3 mb-3 text"},"性別",-1),O={class:"form-check form-check-inline"},w=Object(o["g"])("label",{class:"form-check-label text",for:"inlineRadio1"},"男性",-1),v={class:"form-check form-check-inline"},x=Object(o["g"])("label",{class:"form-check-label text",for:"inlineRadio2"},"女性",-1),k={class:"text-center text-danger fw-bold mb-3"},y={key:1,class:"downBox d-flex flex-column align-items-center py-5"},U={class:"downBox-editName d-flex flex-column align-items-center w-75"},P={class:"mb-3 w-75"},C=Object(o["g"])("label",{for:"exampleFormControlInput1",class:"form-label text"},"輸入新密碼",-1),M={class:"mb-3 w-75"},F=Object(o["g"])("label",{for:"exampleFormControlInput1",class:"form-label text"},"再次輸入",-1),I={class:"text-center text-danger text"},$=Object(o["g"])("div",{class:"col-md-1"},null,-1);function B(e,t,s,B,S,A){var N=Object(o["w"])("Navbar"),T=Object(o["w"])("Addpost"),V=Object(o["w"])("Aboutuser"),E=Object(o["w"])("successModal");return Object(o["r"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",c,[Object(o["i"])(N,{current:S.currentUser},null,8,["current"])]),Object(o["g"])("div",n,[Object(o["g"])("div",a,[S.isShow?(Object(o["r"])(),Object(o["d"])(T,{key:0})):Object(o["e"])("",!0),S.isShow?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["f"])("div",r,[l,Object(o["g"])("div",i,[Object(o["g"])("button",{type:"button",class:"bigborder py-2 px-3 btn btn-outline-dark text",onClick:t[0]||(t[0]=function(){return A.editName&&A.editName.apply(A,arguments)})}," 暱稱修改 "),Object(o["g"])("button",{type:"button",class:"bigborder py-2 px-3 btn btn-outline-dark text",onClick:t[1]||(t[1]=function(){return A.editPassword&&A.editPassword.apply(A,arguments)})}," 重設密碼 ")]),S.isFull?(Object(o["r"])(),Object(o["f"])("div",d,[Object(o["g"])("div",u,[S.updateUser.photo?(Object(o["r"])(),Object(o["f"])("img",{key:0,src:S.updateUser.photo,alt:"",class:"mt-5 uploadimg bgCover card-img mb-3"},null,8,b)):(Object(o["r"])(),Object(o["f"])("img",{key:1,src:S.currentUser.photo,alt:"",class:"mt-5 uploadimg bgCover card-img mb-3"},null,8,p)),Object(o["g"])("div",m,[Object(o["g"])("input",f,null,512),Object(o["g"])("button",{class:"btn btn-dark mt-4 mb-4 px-5 text w-75",type:"button",onClick:t[2]||(t[2]=function(){return A.upfileUser&&A.upfileUser.apply(A,arguments)})}," 上傳大頭貼 ")]),Object(o["g"])("div",g,[h,Object(o["F"])(Object(o["g"])("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"請輸入新暱稱","onUpdate:modelValue":t[3]||(t[3]=function(e){return S.updateUser.name=e})},null,512),[[o["C"],S.updateUser.name]]),j,Object(o["g"])("div",O,[Object(o["F"])(Object(o["g"])("input",{class:"form-check-input",type:"radio",name:"sex",id:"inlineRadio1",value:"male","onUpdate:modelValue":t[4]||(t[4]=function(e){return S.updateUser.sex=e})},null,512),[[o["A"],S.updateUser.sex]]),w]),Object(o["g"])("div",v,[Object(o["F"])(Object(o["g"])("input",{class:"form-check-input",type:"radio",name:"sex",id:"inlineRadio2",value:"female","onUpdate:modelValue":t[5]||(t[5]=function(e){return S.updateUser.sex=e})},null,512),[[o["A"],S.updateUser.sex]]),x])]),Object(o["g"])("p",k,Object(o["y"])(S.errMessage),1),Object(o["g"])("button",{type:"button",class:"btn btn-primary w-50 mb-5",onClick:t[6]||(t[6]=function(){return A.updateProfileUser&&A.updateProfileUser.apply(A,arguments)})}," 送出更新 ")])])):Object(o["e"])("",!0),S.isdrink?(Object(o["r"])(),Object(o["f"])("div",y,[Object(o["g"])("div",U,[Object(o["g"])("div",P,[C,Object(o["F"])(Object(o["g"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return S.updatePassword.password=e}),type:"password",class:"form-control",id:"checkexampleFormControlInput1",placeholder:"請輸入新密碼"},null,512),[[o["C"],S.updatePassword.password]])]),Object(o["g"])("div",M,[F,Object(o["F"])(Object(o["g"])("input",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return S.updatePassword.confirmpassword=e}),type:"password",class:"form-control",id:"exampleFormControlInput1",placeholder:"再次輸入"},null,512),[[o["C"],S.updatePassword.confirmpassword]])]),Object(o["g"])("p",I,Object(o["y"])(S.errMessage),1),Object(o["g"])("button",{type:"button",class:"btn btn-primary w-75 mt-3",onClick:t[9]||(t[9]=function(){return A.updateProfilePassword&&A.updateProfilePassword.apply(A,arguments)})},"確認送出")])])):Object(o["e"])("",!0)])),$,Object(o["i"])(V,{current:S.currentUser,onChange:A.changeContent,onEmitGotoIclick:A.gotoIclick},null,8,["current","onChange","onEmitGotoIclick"])])]),Object(o["i"])(E,{ref:"sucmodal"},null,512)],64)}var S=s("d178"),A=s("c7e9"),N=s("0ff9"),T=s("882e"),V={data:function(){return{currentUser:{},isShow:!1,isFull:!0,isdrink:!1,updateUser:{name:"",sex:"",photo:""},updatePassword:{password:"",confirmpassword:""},errMessage:""}},components:{Navbar:S["a"],Aboutuser:A["a"],Addpost:N["a"],successModal:T["a"]},methods:{init:function(){var e=this,t=window.localStorage.getItem("userToken");this.axios.defaults.headers.common.Authorization="Bearer ".concat(t),this.axios.get("https://rocky-wave-99178.herokuapp.com/posts").then((function(t){console.log(t.data.allPost),e.posts=t.data.allPost})).catch((function(e){console.log(e)})),this.getProfile()},getProfile:function(){var e=this;this.axios.get("https://rocky-wave-99178.herokuapp.com/users/profile").then((function(t){console.log(t.data.user),e.currentUser=t.data.user})).catch((function(e){console.log(e)}))},changeContent:function(){this.isShow=!this.isShow,console.log(this.isShow)},editName:function(){this.isFull=!0,this.isdrink=!1,this.errMessage="",console.log(this.isFull)},editPassword:function(){this.isFull=!1,this.isdrink=!0,this.errMessage=""},updateProfileUser:function(){var e=this;this.axios.patch("https://rocky-wave-99178.herokuapp.com/users/profile",this.updateUser).then((function(t){console.log(t),e.errMessage="",e.$refs.sucmodal.showModal(),e.getProfile()})).catch((function(t){e.errMessage=t.response.data.message,console.log(t)}))},updateProfilePassword:function(){var e=this;console.log(this.updatePassword),this.axios.post("https://rocky-wave-99178.herokuapp.com/users/updatePassword",this.updatePassword).then((function(t){console.log(t),e.$refs.sucmodal.showModal(),e.errMessage="",e.updatePassword.password="",e.updatePassword.confirmpassword=""})).catch((function(t){e.errMessage=t.response.data.message,console.log(t.response.data.message)}))},upfileUser:function(){var e=this,t=this.$refs.fileInputUser.files[0],s=new FormData;s.append("image",t),this.axios.post("https://rocky-wave-99178.herokuapp.com/upload",s).then((function(t){e.updateUser.photo=t.data.imgUrl})).catch((function(e){console.log(e)}))},gotoIclick:function(){this.$router.push("/greatepost")}},created:function(){this.init()}},E=(s("309d"),s("6b0d")),R=s.n(E);const G=R()(V,[["render",B]]);t["default"]=G},c7e9:function(e,t,s){"use strict";s("b0c0");var o=s("7a23"),c={class:"col-md-3 mt-3 py-3 content h-100"},n={class:"addPost d-flex flex-column"},a={class:"detail"},r={class:"d-flex align-items-center mb-4"},l=["src"],i={class:"d-flex mb-4 d-flex align-items-center"},d=Object(o["g"])("div",{class:"iconBox me-3 d-flex align-items-center justify-content-center boxBorder"},[Object(o["g"])("i",{class:"bi bi-bell d-block fw-bold"})],-1),u={class:"d-flex d-flex align-items-center"},b=Object(o["g"])("div",{class:"iconBox me-3 d-flex align-items-center justify-content-center"},[Object(o["g"])("i",{class:"bi bi-hand-thumbs-up d-block fw-bold"})],-1);function p(e,t,s,p,m,f){var g=this;return Object(o["r"])(),Object(o["f"])("div",c,[Object(o["g"])("div",n,[Object(o["g"])("button",{class:"btn btn-yellow fw-bold mt-3 mb-3 w-75 align-self-center",onClick:t[0]||(t[0]=function(e){return g.$emit("change")})}," 張貼動態 "),Object(o["g"])("ul",a,[Object(o["g"])("li",r,[Object(o["g"])("img",{src:s.current.photo,alt:"",class:"ms-1 me-3 userphoto bgCover card-img"},null,8,l),Object(o["g"])("button",{class:"fw-bold btn btn-link",onClick:t[1]||(t[1]=function(e){return g.$emit("emit-personPost")})},Object(o["y"])(s.current.name),1)]),Object(o["g"])("li",i,[d,Object(o["g"])("button",{class:"mb-0 fw-bold btn btn-link",onClick:t[2]||(t[2]=function(e){return g.$emit("emit-showFollow")})},"追蹤名單")]),Object(o["g"])("li",u,[b,Object(o["g"])("button",{class:"mb-0 fw-bold btn btn-link",onClick:t[3]||(t[3]=function(e){return g.$emit("emit-gotoIclick")})},"我按讚的文章")])])])])}var m={props:["current"]},f=s("6b0d"),g=s.n(f);const h=g()(m,[["render",p]]);t["a"]=h},d178:function(e,t,s){"use strict";s("b0c0");var o=s("7a23"),c={class:"navbar navbar-light bg-light"},n={class:"container"},a={class:"user d-flex align-items-center"},r=["src"],l={class:"nav-item dropdown position-relative"},i={class:"nav-link dropdown-toggle person mb-0 text-dark fw-bold","data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"},d={class:"dropdown-menu content minW"},u=Object(o["g"])("a",{class:"dropdown-item fw-bold"},"修改個人資料",-1),b=Object(o["g"])("li",null,[Object(o["g"])("a",{class:"dropdown-item fw-bold",href:"#"},"登出")],-1);function p(e,t,s,p,m,f){var g=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["f"])("nav",c,[Object(o["g"])("div",n,[Object(o["g"])("a",{class:"navbar-brand titleTxt",href:"#",onClick:t[0]||(t[0]=Object(o["G"])((function(){return f.checkPostpage&&f.checkPostpage.apply(f,arguments)}),["prevent"]))},"MetaWall"),Object(o["g"])("div",a,[Object(o["g"])("img",{src:s.current.photo,alt:"",class:"me-3 userphoto bgCover card-img"},null,8,r),Object(o["g"])("div",l,[Object(o["g"])("a",i,Object(o["y"])(s.current.name),1),Object(o["g"])("ul",d,[Object(o["i"])(g,{to:"/postpage"},{default:Object(o["E"])((function(){return[Object(o["g"])("li",null,[Object(o["g"])("a",{class:"dropdown-item fw-bold",onClick:t[1]||(t[1]=function(){return f.myPost&&f.myPost.apply(f,arguments)})},"我的貼文牆")])]})),_:1}),Object(o["i"])(g,{to:"/profile"},{default:Object(o["E"])((function(){return[u]})),_:1}),b])])])])])}var m={data:function(){},methods:{checkPostpage:function(){this.$router.push("/postpage"),this.$emit("emit-showPosatpage")},myPost:function(){this.$emit("emit-personPost")}},props:["current"]},f=(s("aa95"),s("6b0d")),g=s.n(f);const h=g()(m,[["render",p]]);t["a"]=h},f374:function(e,t,s){}}]);
//# sourceMappingURL=chunk-34f22f16.a5644491.js.map