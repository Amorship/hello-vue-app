(function(){"use strict";var e={9658:function(e,t,a){var o=a(3751),s=a(641);function n(e,t,a,o,n,r){const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(l)}var r={name:"App"},l=a(6262);const i=(0,l.A)(r,[["render",n]]);var c=i,u=a(5220),d=a.p+"img/logoweb.65018c05.png";const m={class:"login-page"},p={class:"login-box"},k={class:"form-group"},h={class:"form-group"};function v(e,t,a,n,r,l){return(0,s.uX)(),(0,s.CE)("div",m,[t[11]||(t[11]=(0,s.Lk)("div",{class:"logo"},[(0,s.Lk)("img",{src:d,alt:"公司標誌"})],-1)),(0,s.Lk)("div",p,[t[8]||(t[8]=(0,s.Lk)("h2",null,"內部作業平台",-1)),t[9]||(t[9]=(0,s.Lk)("hr",null,null,-1)),t[10]||(t[10]=(0,s.Lk)("p",null,"請輸入您的帳號密碼",-1)),(0,s.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>l.handleLogin&&l.handleLogin(...e)),["prevent"]))},[(0,s.Lk)("div",k,[t[4]||(t[4]=(0,s.Lk)("label",{for:"username"},"帳號：",-1)),(0,s.bo)((0,s.Lk)("input",{id:"username",type:"text",placeholder:"請輸入帳號","onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e)},null,512),[[o.Jo,r.username]])]),(0,s.Lk)("div",h,[t[5]||(t[5]=(0,s.Lk)("label",{for:"password"},"密碼：",-1)),(0,s.bo)((0,s.Lk)("input",{id:"password",type:"password",placeholder:"請輸入密碼","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e)},null,512),[[o.Jo,r.password]])]),(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>r.rememberMe=e)},null,512),[[o.lH,r.rememberMe]]),t[6]||(t[6]=(0,s.eW)(" 記住帳號 ")),t[7]||(t[7]=(0,s.Lk)("button",{type:"submit",class:"login-btn"},"登入",-1))],32)])])}a(4114);var g=a(4335),f={data(){return{username:"",password:"",rememberMe:!1,error:null}},methods:{loadRememberedAccount(){const e=localStorage.getItem("rememberedUsername");e&&(this.username=e,this.rememberMe=!0)},async handleLogin(){this.rememberMe?localStorage.setItem("rememberedUsername",this.username):localStorage.removeItem("rememberedUsername");try{const e=await g.A.post("https://us-central1-nft-linegame.cloudfunctions.net/function-1/login",{username:this.username,password:this.password});e.data.success?(alert("登入成功！"),this.$router.push({path:"/dashboard",query:{username:this.username}})):alert("帳號或密碼錯誤！")}catch(e){console.error("登入錯誤",e);const t=e.response?.data?.message||"伺服器發生錯誤！";alert(t)}}},mounted(){this.loadRememberedAccount()}};const L=(0,l.A)(f,[["render",v],["__scopeId","data-v-31ff6b9f"]]);var A=L,b=a(33),y="data:image/png;base64,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",w=a.p+"img/image 5.01561ec1.png",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ3SURBVHgB7Zk9axRBHMYf9SxFsVADigu2VhZ2QsBGUFHwA0RRYhW0ULQRFAWjhSAWfgFtrGwsrEQs/AKCoEUSSEhIICQkhJCQl+fPbMjc5vZuZufldsL+4OE2uSGZ380ze7t3QEMaHEJ6nGAuMWeZTWYRifOIWWa28sjxMyTOELOBXamdPESCvGaG8+PbULXTpVaYY0iIV1ATF5FuYleQAAeYUbRPXETu5s8Xq3gZCVAU0sWKK7bOZKgxskI7lSuLvmJ3mOeoMZ0qZyLWRks7PsIcRXiWUP6GKWe5JzAn6zXgOsxeIZf8Z053+N8mlStmFAaElhKhMyVCppWzEgotVSYESyHZRy/Rg1aX5yaZKbizwNzL/56OrJBM0GYPvYXltV5xpR4jHEErpxNTynvlyoghFewsV0YMqSiV0wktFa1yOqGkoldOJ5RU9MrphJCyrZxXIcGnlM/KZVAX25XwKWVbubKTwjlmAp0vgo3wJeWrciI0no/pm5Tvyo1hV7xvUr4qJ/xC+2paSbXghxcwv9qWifa62naa10G4I7UbthgvQk8REB9St5hTUK/8bJdxskKy54IKCT6khqA2tUx4kJnpMMakct5wlcqYa8zn/Oe/UGLThXHBK6fjKvUgf/yo/e4f1KoJ0Sqn43KWOczcZL5CrcxxZgRqj51n5qFW6A0i4yJ1Fap+35kvzA0o0R9Qn5x+gvqMOzouUiP5431mjnnHvMfe/RSdqlIZ1PeuP5kPzDdmFTWhqtQAc4H5gxpSVeo3aoyPN9/a0UilQiOVCt3OfoNQ90r9YACeiPH1aJVY3843eyoV9D1zkrmIeiJ3Amto2GdsAytg35tW3SJBAAAAAElFTkSuQmCC";const I={class:"dashboard"},C={class:"header"},O={class:"username"},x={class:"search-bar"},S={class:"orders"},Q={class:"order-top"},M={class:"order-info"},R={class:"bold"},T={class:"bold"},Y=["onClick"],J={key:0,class:"completed-container"},B={class:"completion-time"},V={class:"order-middle"},X={class:"image-section"},K=["src","onClick"],U={class:"details-section"},H={class:"right-column"},q={class:"workflow"},G={class:"workflow-buttons"},D={class:"vendors"},P={class:"vendor-buttons"},W={key:0,class:"vendor active"},Z={key:1,class:"vendor active"},F={key:2,class:"vendor active"},z={class:"financials"},j={class:"financials-item"},N={class:"amount"},_={class:"financials-item"},$={class:"amount"},ee={class:"financials-item"},te={class:"amount"},ae=["src"];function oe(e,t,a,n,r,l){return(0,s.uX)(),(0,s.CE)("div",I,[(0,s.Lk)("header",C,[(0,s.Lk)("div",O,"登入帳號："+(0,b.v_)(r.username),1),(0,s.Lk)("div",x,[t[5]||(t[5]=(0,s.Lk)("img",{src:y,alt:"搜尋圖標",class:"search-icon"},null,-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",placeholder:"請輸入客戶名稱","onUpdate:modelValue":t[0]||(t[0]=e=>r.searchQuery=e)},null,512),[[o.Jo,r.searchQuery]])]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.handleLogout&&l.handleLogout(...e)),class:"logout-btn"},"登出")]),t[15]||(t[15]=(0,s.Lk)("div",{class:"header-divider"},null,-1)),(0,s.Lk)("div",S,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.filteredOrders,((e,a)=>((0,s.uX)(),(0,s.CE)("div",{key:a,class:"order-card"},[(0,s.Lk)("div",Q,[(0,s.Lk)("div",M,[e.urgent?((0,s.uX)(),(0,s.CE)(s.FK,{key:0},[t[6]||(t[6]=(0,s.Lk)("div",{class:"urgent-wrapper"},[(0,s.Lk)("img",{src:w,alt:"急件",class:"urgent-image"})],-1)),(0,s.Lk)("span",null,(0,b.v_)(e.deliveryDate)+" 前完成",1)],64)):(0,s.Q3)("",!0),(0,s.Lk)("span",R,"下單："+(0,b.v_)(e.orderDate),1),(0,s.Lk)("span",T,"客戶："+(0,b.v_)(e.customer),1)]),(0,s.Lk)("button",{class:"edit-button",onClick:t=>l.goToEditPage(e.id,e.image)},t[7]||(t[7]=[(0,s.Lk)("img",{src:E,alt:"修改圖標",class:"edit-icon"},null,-1),(0,s.eW)(" 資料修改 ")]),8,Y)]),t[14]||(t[14]=(0,s.Lk)("div",{class:"divider"},null,-1)),e.completionTime?((0,s.uX)(),(0,s.CE)("div",J,[t[8]||(t[8]=(0,s.Lk)("div",{class:"completed-circle"},null,-1)),(0,s.Lk)("div",B,"完成時間："+(0,b.v_)(e.completionTime),1)])):(0,s.Q3)("",!0),(0,s.Lk)("div",V,[(0,s.Lk)("div",X,[(0,s.Lk)("img",{src:e.image,alt:"商品圖片",class:"product-image",onClick:t=>l.openModal(e.image)},null,8,K)]),(0,s.Lk)("div",U,[(0,s.Lk)("div",H,[(0,s.Lk)("div",q,[t[9]||(t[9]=(0,s.Lk)("h3",null,"內部作業",-1)),(0,s.Lk)("div",G,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.steps,((e,t)=>((0,s.uX)(),(0,s.CE)("button",{key:t,class:(0,b.C4)({active:e.completed})},(0,b.v_)(e.name),3)))),128))])]),(0,s.Lk)("div",D,[t[10]||(t[10]=(0,s.Lk)("h3",null,"廠商",-1)),(0,s.Lk)("div",P,["Y"===e.customername1?((0,s.uX)(),(0,s.CE)("button",W,"名軒")):(0,s.Q3)("",!0),"Y"===e.customername2?((0,s.uX)(),(0,s.CE)("button",Z,"鴻昇")):(0,s.Q3)("",!0),"Y"===e.customername3?((0,s.uX)(),(0,s.CE)("button",F,"冠達")):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",z,[(0,s.Lk)("div",j,[t[11]||(t[11]=(0,s.Lk)("span",null,"貨款金額",-1)),(0,s.Lk)("div",N,(0,b.v_)(e.amount),1)]),(0,s.Lk)("div",_,[t[12]||(t[12]=(0,s.Lk)("span",null,"稅金",-1)),(0,s.Lk)("div",$,(0,b.v_)(e.tax),1)]),(0,s.Lk)("div",ee,[t[13]||(t[13]=(0,s.Lk)("span",null,"尾款",-1)),(0,s.Lk)("div",te,(0,b.v_)(e.balance),1)])])])])])])))),128))]),r.isModalOpen?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"modal-overlay",onClick:t[4]||(t[4]=(...e)=>l.closeModal&&l.closeModal(...e))},[(0,s.Lk)("div",{class:"modal-content",onClick:t[3]||(t[3]=(0,o.D$)((()=>{}),["stop"]))},[(0,s.Lk)("img",{src:r.currentImage,alt:"完整圖片",class:"modal-image"},null,8,ae),(0,s.Lk)("button",{class:"close-button",onClick:t[2]||(t[2]=(...e)=>l.closeModal&&l.closeModal(...e))},"關閉")])])):(0,s.Q3)("",!0)])}a(8992),a(4520),a(1454);var se={data(){return{username:this.$route.query.username||"未知用戶",orders:[],searchQuery:"",isModalOpen:!1,currentImage:""}},computed:{filteredOrders(){return this.searchQuery?this.orders.filter((e=>e.customer.includes(this.searchQuery))):this.orders}},mounted(){this.fetchData()},methods:{async fetchData(){try{const e=await g.A.get("https://us-central1-nft-linegame.cloudfunctions.net/function-1/dashboard-data");this.orders=e.data.data.map((e=>{const t=e.image.match(/\/d\/(.+?)\//);return t&&(e.image=`https://drive.google.com/thumbnail?id=${t[1]}&sz=w2000`),e.urgent=!!e.urgent,e}))}catch(e){console.error("獲取 Dashboard 資料失敗",e)}},openModal(e){this.currentImage=e,this.isModalOpen=!0},closeModal(){this.isModalOpen=!1,this.currentImage=""},handleLogout(){this.$router.push("/")},goToEditPage(e,t){this.$router.push({name:"EditPage",params:{id:e},query:{image:t,username:this.username}})}}};const ne=(0,l.A)(se,[["render",oe],["__scopeId","data-v-2daac8ba"]]);var re=ne;const le={class:"edit-page"},ie={class:"header"},ce={key:0,class:"main-content"},ue={class:"image-container"},de=["src"],me={class:"workflow-container"},pe={class:"workflow-buttons"},ke=["onClick"],he={key:0,class:"circle"},ve={key:1,class:"loading"},ge={class:"history-section"},fe={key:2,class:"modal-overlay"},Le={class:"modal-content"},Ae=["value"],be=["value"];function ye(e,t,a,n,r,l){return(0,s.uX)(),(0,s.CE)("div",le,[(0,s.Lk)("header",ie,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.goBack&&l.goBack(...e)),class:"back-button"},"回首頁"),(0,s.Lk)("h1",null,"資料修改 - 訂單 "+(0,b.v_)(r.orderId),1),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.handleLogout&&l.handleLogout(...e)),class:"logout-button"},"登出")]),t[18]||(t[18]=(0,s.Lk)("div",{class:"divider"},null,-1)),r.loading?((0,s.uX)(),(0,s.CE)("div",ve," 加載中... ")):((0,s.uX)(),(0,s.CE)("div",ce,[(0,s.Lk)("div",ue,[(0,s.Lk)("img",{src:r.orderImage,alt:"訂單圖片",class:"order-image"},null,8,de)]),(0,s.Lk)("div",me,[(0,s.Lk)("div",pe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.workflowSteps,((e,t)=>((0,s.uX)(),(0,s.CE)("button",{key:t,class:(0,b.C4)(["workflow-button",{completed:e.completed}]),onClick:e=>l.openForm(t)},[e.completed?((0,s.uX)(),(0,s.CE)("span",he)):(0,s.Q3)("",!0),(0,s.eW)(" "+(0,b.v_)(e.name),1)],10,ke)))),128))]),t[7]||(t[7]=(0,s.Lk)("div",{class:"workflow-description"},[(0,s.Lk)("p",null,"製作說明：紅色圓圈代表，狀態已完成")],-1))])])),(0,s.Lk)("div",ge,[t[9]||(t[9]=(0,s.Lk)("h2",null,"歷史更新記錄",-1)),(0,s.Lk)("table",null,[t[8]||(t[8]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"時間戳記"),(0,s.Lk)("th",null,"項目名稱"),(0,s.Lk)("th",null,"處理人員"),(0,s.Lk)("th",null,"回報事項")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.historyLogs,((e,t)=>((0,s.uX)(),(0,s.CE)("tr",{key:t},[(0,s.Lk)("td",null,(0,b.v_)(e.timestamp),1),(0,s.Lk)("td",null,(0,b.v_)(e.item),1),(0,s.Lk)("td",null,(0,b.v_)(e.user),1),(0,s.Lk)("td",null,(0,b.v_)(e.feedback),1)])))),128))])])]),r.isModalOpen?((0,s.uX)(),(0,s.CE)("div",fe,[(0,s.Lk)("div",Le,[t[17]||(t[17]=(0,s.Lk)("h3",null,"填寫資料",-1)),(0,s.Lk)("form",{onSubmit:t[6]||(t[6]=(0,o.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,s.Lk)("div",null,[t[10]||(t[10]=(0,s.Lk)("label",null,"案件編號",-1)),(0,s.Lk)("input",{type:"text",value:r.orderId,readonly:""},null,8,Ae)]),(0,s.Lk)("div",null,[t[11]||(t[11]=(0,s.Lk)("label",null,"客戶名稱",-1)),(0,s.Lk)("input",{type:"text",value:r.customerName,readonly:""},null,8,be)]),(0,s.Lk)("div",null,[t[12]||(t[12]=(0,s.Lk)("label",null,"處理人員",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>r.formData.user=e),placeholder:"輸入人名",required:""},null,512),[[o.Jo,r.formData.user]])]),(0,s.Lk)("div",null,[t[13]||(t[13]=(0,s.Lk)("label",null,"回報事項",-1)),(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.formData.feedback=e),placeholder:"輸入文字",required:""},null,512),[[o.Jo,r.formData.feedback]])]),(0,s.Lk)("div",null,[t[15]||(t[15]=(0,s.Lk)("label",null,"是否完成",-1)),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.formData.completed=e),required:""},t[14]||(t[14]=[(0,s.Lk)("option",{disabled:"",value:""},"請選擇",-1),(0,s.Lk)("option",{value:"true"},"已完成",-1),(0,s.Lk)("option",{value:"false"},"未完成",-1)]),512),[[o.u1,r.formData.completed]])]),t[16]||(t[16]=(0,s.Lk)("button",{type:"submit"},"提交",-1)),(0,s.Lk)("button",{type:"button",onClick:t[5]||(t[5]=(...e)=>l.closeModal&&l.closeModal(...e))},"取消")],32)])])):(0,s.Q3)("",!0)])}var we={props:{id:{type:String,required:!0},image:{type:String,default:""}},data(){return{orderId:this.id,orderImage:this.image||"/path/to/default-image.jpg",workflowSteps:[],historyLogs:[],loading:!0,isModalOpen:!1,currentStepIndex:null,customerName:"",formData:{user:"",feedback:"",completed:""}}},mounted(){const e=this.$route.query.username||"未知用戶";this.formData.user=e,this.fetchWorkflowSteps(),this.fetchCompletedRecords()},methods:{goBack(){this.$router.push({name:"Dashboard",query:{username:this.$route.query.username}})},handleLogout(){this.$router.push("/")},async fetchWorkflowSteps(){try{const e=await g.A.get(`https://us-central1-nft-linegame.cloudfunctions.net/function-1/get-workflow-steps/${this.orderId}`);e.data.success?(this.workflowSteps=e.data.workflowSteps,this.customerName=e.data.customerName||"未知客戶"):alert("無法獲取步驟數據："+e.data.message)}catch(e){console.error("加載步驟數據時出錯：",e),alert("加載步驟數據時出錯："+e.message)}finally{this.loading=!1}},async fetchCompletedRecords(){try{const e=await g.A.get(`https://us-central1-nft-linegame.cloudfunctions.net/function-1/get-completed-records/${this.orderId}`);e.data.success?this.historyLogs=e.data.historyLogs||[]:console.error("伺服器回應錯誤訊息：",e.data.message)}catch(e){console.error("加載完成記錄時出錯：",e.message),alert("加載完成記錄時出錯："+e.message)}},openForm(e){this.currentStepIndex=e,this.isModalOpen=!0,this.formData.user=this.$route.query.username||"未知用戶"},closeModal(){this.isModalOpen=!1,this.formData={user:"",feedback:"",completed:""}},async handleSubmit(){const e=this.workflowSteps[this.currentStepIndex],t="true"===this.formData.completed,a={orderId:this.orderId,stepName:e.name,completed:t,user:this.formData.user,feedback:this.formData.feedback,isfinish:t?"已完成":"未完成"};try{const t=await g.A.post("https://us-central1-nft-linegame.cloudfunctions.net/function-1/update-workflow-step",a);t.data.success?(e.completed=a.completed,this.historyLogs.unshift({timestamp:(new Date).toLocaleString(),item:e.name,user:a.user,feedback:a.feedback,isfinish:a.isfinish}),alert("提交成功！"),this.closeModal()):alert("提交失敗："+t.data.message)}catch(o){console.error("提交過程中發生錯誤：",o),alert("提交過程中發生錯誤："+o.message)}}}};const Ee=(0,l.A)(we,[["render",ye],["__scopeId","data-v-79a1c7ba"]]);var Ie=Ee;const Ce=[{path:"/",name:"Login",component:A},{path:"/dashboard",name:"Dashboard",component:re},{path:"/edit/:id",name:"EditPage",component:Ie,props:e=>({id:e.params.id,image:e.query.image})}],Oe=(0,u.aE)({history:(0,u.LA)(),routes:Ce});var xe=Oe;const Se=(0,o.Ef)(c);Se.use(xe),Se.mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,n){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],n=e[u][2];for(var l=!0,i=0;i<o.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(l=!1,n<r&&(r=n));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,s,n]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/hello-vue-app/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,r=o[0],l=o[1],i=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(i)var u=i(a)}for(t&&t(o);c<r.length;c++)n=r[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunkmade_clothing"]=self["webpackChunkmade_clothing"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(9658)}));o=a.O(o)})();
//# sourceMappingURL=app.b5ac0d4c.js.map