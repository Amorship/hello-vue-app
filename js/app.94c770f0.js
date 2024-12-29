(function(){"use strict";var e={1255:function(e,t,a){var s=a(3751),o=a(641);function n(e,t,a,s,n,l){const r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(r)}var l={name:"App"},r=a(6262);const i=(0,r.A)(l,[["render",n]]);var c=i,u=a(5220),d=a.p+"img/logoweb.65018c05.png";const m={class:"login-page"},p={class:"login-box"},k={class:"form-group"},h={class:"form-group"};function v(e,t,a,n,l,r){return(0,o.uX)(),(0,o.CE)("div",m,[t[11]||(t[11]=(0,o.Lk)("div",{class:"logo"},[(0,o.Lk)("img",{src:d,alt:"公司標誌"})],-1)),(0,o.Lk)("div",p,[t[8]||(t[8]=(0,o.Lk)("h2",null,"內部作業平台",-1)),t[9]||(t[9]=(0,o.Lk)("hr",null,null,-1)),t[10]||(t[10]=(0,o.Lk)("p",null,"請輸入您的帳號密碼",-1)),(0,o.Lk)("form",{onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>r.handleLogin&&r.handleLogin(...e)),["prevent"]))},[(0,o.Lk)("div",k,[t[4]||(t[4]=(0,o.Lk)("label",{for:"username"},"帳號：",-1)),(0,o.bo)((0,o.Lk)("input",{id:"username",type:"text",placeholder:"請輸入帳號","onUpdate:modelValue":t[0]||(t[0]=e=>l.username=e)},null,512),[[s.Jo,l.username]])]),(0,o.Lk)("div",h,[t[5]||(t[5]=(0,o.Lk)("label",{for:"password"},"密碼：",-1)),(0,o.bo)((0,o.Lk)("input",{id:"password",type:"password",placeholder:"請輸入密碼","onUpdate:modelValue":t[1]||(t[1]=e=>l.password=e)},null,512),[[s.Jo,l.password]])]),(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>l.rememberMe=e)},null,512),[[s.lH,l.rememberMe]]),t[6]||(t[6]=(0,o.eW)(" 記住帳號 ")),t[7]||(t[7]=(0,o.Lk)("button",{type:"submit",class:"login-btn"},"登入",-1))],32)])])}a(4114);var g=a(4335),f={data(){return{username:"",password:"",rememberMe:!1,error:null}},methods:{loadRememberedAccount(){const e=localStorage.getItem("rememberedUsername");e&&(this.username=e,this.rememberMe=!0)},async handleLogin(){this.rememberMe?localStorage.setItem("rememberedUsername",this.username):localStorage.removeItem("rememberedUsername");try{const e=await g.A.post("https://us-central1-nft-linegame.cloudfunctions.net/function-1/login",{username:this.username,password:this.password});e.data.success?(alert("登入成功！"),this.$router.push({path:"/dashboard",query:{username:this.username}})):alert("帳號或密碼錯誤！")}catch(e){console.error("登入錯誤",e);const t=e.response?.data?.message||"伺服器發生錯誤！";alert(t)}}},mounted(){this.loadRememberedAccount()}};const L=(0,r.A)(f,[["render",v],["__scopeId","data-v-565e8de8"]]);var A=L,b=a(33),y="data:image/png;base64,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",w=a.p+"img/image 5.01561ec1.png",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ3SURBVHgB7Zk9axRBHMYf9SxFsVADigu2VhZ2QsBGUFHwA0RRYhW0ULQRFAWjhSAWfgFtrGwsrEQs/AKCoEUSSEhIICQkhJCQl+fPbMjc5vZuZufldsL+4OE2uSGZ380ze7t3QEMaHEJ6nGAuMWeZTWYRifOIWWa28sjxMyTOELOBXamdPESCvGaG8+PbULXTpVaYY0iIV1ATF5FuYleQAAeYUbRPXETu5s8Xq3gZCVAU0sWKK7bOZKgxskI7lSuLvmJ3mOeoMZ0qZyLWRks7PsIcRXiWUP6GKWe5JzAn6zXgOsxeIZf8Z053+N8mlStmFAaElhKhMyVCppWzEgotVSYESyHZRy/Rg1aX5yaZKbizwNzL/56OrJBM0GYPvYXltV5xpR4jHEErpxNTynvlyoghFewsV0YMqSiV0wktFa1yOqGkoldOJ5RU9MrphJCyrZxXIcGnlM/KZVAX25XwKWVbubKTwjlmAp0vgo3wJeWrciI0no/pm5Tvyo1hV7xvUr4qJ/xC+2paSbXghxcwv9qWifa62naa10G4I7UbthgvQk8REB9St5hTUK/8bJdxskKy54IKCT6khqA2tUx4kJnpMMakct5wlcqYa8zn/Oe/UGLThXHBK6fjKvUgf/yo/e4f1KoJ0Sqn43KWOczcZL5CrcxxZgRqj51n5qFW6A0i4yJ1Fap+35kvzA0o0R9Qn5x+gvqMOzouUiP5431mjnnHvMfe/RSdqlIZ1PeuP5kPzDdmFTWhqtQAc4H5gxpSVeo3aoyPN9/a0UilQiOVCt3OfoNQ90r9YACeiPH1aJVY3843eyoV9D1zkrmIeiJ3Amto2GdsAytg35tW3SJBAAAAAElFTkSuQmCC";const E={class:"scale-container"},C={class:"dashboard"},O={class:"header"},x={class:"username"},S={class:"search-bar"},M={class:"orders"},Q={class:"order-top"},R={class:"order-info"},T={class:"bold"},B={class:"bold"},J=["onClick"],V={key:0,class:"completed-container"},Y={class:"completion-time"},X={class:"order-middle"},K={class:"image-section"},U=["src","onClick"],H={class:"details-section"},q={class:"right-column"},G={class:"workflow"},D={class:"workflow-buttons"},P={class:"vendors"},W={class:"vendor-buttons"},Z={class:"financials"},F={class:"financials-item"},z={class:"amount"},j={class:"financials-item"},N={class:"amount"},_={class:"financials-item"},$={class:"amount"},ee=["src"];function te(e,t,a,n,l,r){return(0,o.uX)(),(0,o.CE)("div",E,[(0,o.Lk)("div",C,[(0,o.Lk)("header",O,[(0,o.Lk)("div",x,"登入帳號："+(0,b.v_)(l.username),1),(0,o.Lk)("div",S,[t[5]||(t[5]=(0,o.Lk)("img",{src:y,alt:"搜尋圖標",class:"search-icon"},null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"請輸入客戶名稱","onUpdate:modelValue":t[0]||(t[0]=e=>l.searchQuery=e)},null,512),[[s.Jo,l.searchQuery]])]),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.handleLogout&&r.handleLogout(...e)),class:"logout-btn"},"登出")]),t[15]||(t[15]=(0,o.Lk)("div",{class:"header-divider"},null,-1)),(0,o.Lk)("div",M,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.filteredOrders,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a,class:"order-card"},[(0,o.Lk)("div",Q,[(0,o.Lk)("div",R,[e.urgent?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[t[6]||(t[6]=(0,o.Lk)("div",{class:"urgent-wrapper"},[(0,o.Lk)("img",{src:w,alt:"急件",class:"urgent-image"})],-1)),(0,o.Lk)("span",null,(0,b.v_)(e.deliveryDate)+" 前完成",1)],64)):(0,o.Q3)("",!0),(0,o.Lk)("span",T,"下單："+(0,b.v_)(e.orderDate),1),(0,o.Lk)("span",B,"客戶："+(0,b.v_)(e.customer),1)]),(0,o.Lk)("button",{class:"edit-button",onClick:t=>r.goToEditPage(e.id,e.image)},t[7]||(t[7]=[(0,o.Lk)("img",{src:I,alt:"修改圖標",class:"edit-icon"},null,-1),(0,o.eW)(" 資料修改 ")]),8,J)]),t[14]||(t[14]=(0,o.Lk)("div",{class:"divider"},null,-1)),e.completionTime?((0,o.uX)(),(0,o.CE)("div",V,[t[8]||(t[8]=(0,o.Lk)("div",{class:"completed-circle"},null,-1)),(0,o.Lk)("div",Y,"完成時間："+(0,b.v_)(e.completionTime),1)])):(0,o.Q3)("",!0),(0,o.Lk)("div",X,[(0,o.Lk)("div",K,[(0,o.Lk)("img",{src:e.image,alt:"商品圖片",class:"product-image",onClick:t=>r.openModal(e.image)},null,8,U)]),(0,o.Lk)("div",H,[(0,o.Lk)("div",q,[(0,o.Lk)("div",G,[t[9]||(t[9]=(0,o.Lk)("h3",null,"內部作業",-1)),(0,o.Lk)("div",D,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.steps,((e,t)=>((0,o.uX)(),(0,o.CE)("button",{key:t,class:(0,b.C4)({active:e.completed})},(0,b.v_)(e.name),3)))),128))])]),(0,o.Lk)("div",P,[t[10]||(t[10]=(0,o.Lk)("h3",null,"廠商",-1)),(0,o.Lk)("div",W,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.vendors,(e=>((0,o.uX)(),(0,o.CE)("button",{key:e.name,class:(0,b.C4)({active:e.active})},(0,b.v_)(e.name),3)))),128))])]),(0,o.Lk)("div",Z,[(0,o.Lk)("div",F,[t[11]||(t[11]=(0,o.Lk)("span",null,"貨款金額",-1)),(0,o.Lk)("div",z,(0,b.v_)(e.amount),1)]),(0,o.Lk)("div",j,[t[12]||(t[12]=(0,o.Lk)("span",null,"稅金",-1)),(0,o.Lk)("div",N,(0,b.v_)(e.tax),1)]),(0,o.Lk)("div",_,[t[13]||(t[13]=(0,o.Lk)("span",null,"尾款",-1)),(0,o.Lk)("div",$,(0,b.v_)(e.balance),1)])])])])])])))),128))]),l.isModalOpen?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"modal-overlay",onClick:t[4]||(t[4]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,o.Lk)("div",{class:"modal-content",onClick:t[3]||(t[3]=(0,s.D$)((()=>{}),["stop"]))},[(0,o.Lk)("img",{src:l.currentImage,alt:"完整圖片",class:"modal-image"},null,8,ee),(0,o.Lk)("button",{class:"close-button",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},"關閉")])])):(0,o.Q3)("",!0)])])}a(8992),a(4520),a(1454);var ae={data(){return{username:this.$route.query.username||"未知用戶",orders:[],searchQuery:"",isModalOpen:!1,currentImage:""}},computed:{filteredOrders(){return this.searchQuery?this.orders.filter((e=>e.customer.includes(this.searchQuery))):this.orders}},mounted(){this.fetchData()},methods:{async fetchData(){try{const e=await g.A.get("https://us-central1-nft-linegame.cloudfunctions.net/function-1/dashboard-data");this.orders=e.data.data.map((e=>{const t=e.image.match(/\/d\/(.+?)\//);return t&&(e.image=`https://drive.google.com/thumbnail?id=${t[1]}&sz=w2000`),e.urgent=!!e.urgent,e}))}catch(e){console.error("獲取 Dashboard 資料失敗",e)}},openModal(e){this.currentImage=e,this.isModalOpen=!0},closeModal(){this.isModalOpen=!1,this.currentImage=""},handleLogout(){this.$router.push("/")},goToEditPage(e,t){this.$router.push({name:"EditPage",params:{id:e},query:{image:t,username:this.username}})}}};const se=(0,r.A)(ae,[["render",te],["__scopeId","data-v-da1be138"]]);var oe=se;const ne={class:"edit-page"},le={class:"header"},re={key:0,class:"main-content"},ie={class:"image-container"},ce=["src"],ue={class:"workflow-container"},de={class:"workflow-buttons"},me=["onClick"],pe={key:0,class:"circle"},ke={key:1,class:"loading"},he={class:"history-section"},ve={key:2,class:"modal-overlay"},ge={class:"modal-content"},fe=["value"],Le=["value"],Ae={class:"form-actions"};function be(e,t,a,n,l,r){return(0,o.uX)(),(0,o.CE)("div",ne,[(0,o.Lk)("header",le,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.goBack&&r.goBack(...e)),class:"back-button"},"回首頁"),(0,o.Lk)("h1",null,"資料修改 - 訂單 "+(0,b.v_)(l.orderId),1),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.handleLogout&&r.handleLogout(...e)),class:"logout-button"},"登出")]),t[18]||(t[18]=(0,o.Lk)("div",{class:"divider"},null,-1)),l.loading?((0,o.uX)(),(0,o.CE)("div",ke," 加載中... ")):((0,o.uX)(),(0,o.CE)("div",re,[(0,o.Lk)("div",ie,[(0,o.Lk)("img",{src:l.orderImage,alt:"訂單圖片",class:"order-image"},null,8,ce)]),(0,o.Lk)("div",ue,[(0,o.Lk)("div",de,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.workflowSteps,((e,t)=>((0,o.uX)(),(0,o.CE)("button",{key:t,class:(0,b.C4)(["workflow-button",{completed:e.completed}]),onClick:e=>r.openForm(t)},[e.completed?((0,o.uX)(),(0,o.CE)("span",pe)):(0,o.Q3)("",!0),(0,o.eW)(" "+(0,b.v_)(e.name),1)],10,me)))),128))]),t[7]||(t[7]=(0,o.Lk)("div",{class:"workflow-description"},[(0,o.Lk)("p",null,"製作說明：紅色圓圈代表，狀態已完成")],-1))])])),(0,o.Lk)("div",he,[t[9]||(t[9]=(0,o.Lk)("h2",null,"歷史更新記錄",-1)),(0,o.Lk)("table",null,[t[8]||(t[8]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"時間戳記"),(0,o.Lk)("th",null,"項目名稱"),(0,o.Lk)("th",null,"處理人員"),(0,o.Lk)("th",null,"回報事項")])],-1)),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.historyLogs,((e,t)=>((0,o.uX)(),(0,o.CE)("tr",{key:t},[(0,o.Lk)("td",null,(0,b.v_)(e.timestamp),1),(0,o.Lk)("td",null,(0,b.v_)(e.item),1),(0,o.Lk)("td",null,(0,b.v_)(e.user),1),(0,o.Lk)("td",null,(0,b.v_)(e.feedback),1)])))),128))])])]),l.isModalOpen?((0,o.uX)(),(0,o.CE)("div",ve,[(0,o.Lk)("div",ge,[t[17]||(t[17]=(0,o.Lk)("h3",null,"填寫資料",-1)),(0,o.Lk)("form",{onSubmit:t[6]||(t[6]=(0,s.D$)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",null,[t[10]||(t[10]=(0,o.Lk)("label",null,"案件編號",-1)),(0,o.Lk)("input",{type:"text",value:l.orderId,readonly:""},null,8,fe)]),(0,o.Lk)("div",null,[t[11]||(t[11]=(0,o.Lk)("label",null,"客戶名稱",-1)),(0,o.Lk)("input",{type:"text",value:l.customerName,readonly:""},null,8,Le)]),(0,o.Lk)("div",null,[t[12]||(t[12]=(0,o.Lk)("label",null,"處理人員",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.formData.user=e),placeholder:"輸入人名",required:""},null,512),[[s.Jo,l.formData.user]])]),(0,o.Lk)("div",null,[t[13]||(t[13]=(0,o.Lk)("label",null,"回報事項",-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.formData.feedback=e),placeholder:"輸入文字",required:""},null,512),[[s.Jo,l.formData.feedback]])]),(0,o.Lk)("div",null,[t[15]||(t[15]=(0,o.Lk)("label",null,"是否完成",-1)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.formData.completed=e),required:""},t[14]||(t[14]=[(0,o.Lk)("option",{disabled:"",value:""},"請選擇",-1),(0,o.Lk)("option",{value:"true"},"已完成",-1),(0,o.Lk)("option",{value:"false"},"未完成",-1)]),512),[[s.u1,l.formData.completed]])]),(0,o.Lk)("div",Ae,[t[16]||(t[16]=(0,o.Lk)("button",{type:"submit",class:"submit-btn"},"提交",-1)),(0,o.Lk)("button",{type:"button",class:"cancel-btn",onClick:t[5]||(t[5]=(...e)=>r.closeModal&&r.closeModal(...e))},"取消")])],32)])])):(0,o.Q3)("",!0)])}var ye={props:{id:{type:String,required:!0},image:{type:String,default:""}},data(){return{orderId:this.id,orderImage:this.image||"/path/to/default-image.jpg",workflowSteps:[],historyLogs:[],loading:!0,isModalOpen:!1,currentStepIndex:null,customerName:"",formData:{user:"",feedback:"",completed:""}}},mounted(){const e=this.$route.query.username||"未知用戶";this.formData.user=e,this.fetchWorkflowSteps(),this.fetchCompletedRecords()},methods:{goBack(){this.$router.push({name:"Dashboard",query:{username:this.$route.query.username}})},handleLogout(){this.$router.push("/")},async fetchWorkflowSteps(){try{const e=await g.A.get(`https://us-central1-nft-linegame.cloudfunctions.net/function-1/get-workflow-steps/${this.orderId}`);e.data.success?(this.workflowSteps=e.data.workflowSteps,this.customerName=e.data.customerName||"未知客戶"):alert("無法獲取步驟數據："+e.data.message)}catch(e){console.error("加載步驟數據時出錯：",e),alert("加載步驟數據時出錯："+e.message)}finally{this.loading=!1}},async fetchCompletedRecords(){try{const e=await g.A.get(`https://us-central1-nft-linegame.cloudfunctions.net/function-1/get-completed-records/${this.orderId}`);e.data.success?this.historyLogs=e.data.historyLogs||[]:console.error("伺服器回應錯誤訊息：",e.data.message)}catch(e){console.error("加載完成記錄時出錯：",e.message),alert("加載完成記錄時出錯："+e.message)}},openForm(e){this.currentStepIndex=e,this.isModalOpen=!0,this.formData.user=this.$route.query.username||"未知用戶"},closeModal(){this.isModalOpen=!1,this.formData={user:"",feedback:"",completed:""}},async handleSubmit(){const e=this.workflowSteps[this.currentStepIndex],t="true"===this.formData.completed,a={orderId:this.orderId,stepName:e.name,completed:t,user:this.formData.user,feedback:this.formData.feedback,isfinish:t?"已完成":"未完成"};try{const t=await g.A.post("https://us-central1-nft-linegame.cloudfunctions.net/function-1/update-workflow-step",a);t.data.success?(e.completed=a.completed,this.historyLogs.unshift({timestamp:(new Date).toLocaleString(),item:e.name,user:a.user,feedback:a.feedback,isfinish:a.isfinish}),alert("提交成功！"),this.closeModal(),await this.fetchCompletedRecords()):alert("提交失敗："+t.data.message)}catch(s){console.error("提交過程中發生錯誤：",s),alert("提交過程中發生錯誤："+s.message)}}}};const we=(0,r.A)(ye,[["render",be],["__scopeId","data-v-6ecef5e8"]]);var Ie=we;const Ee=[{path:"/",name:"Login",component:A},{path:"/dashboard",name:"Dashboard",component:oe},{path:"/edit/:id",name:"EditPage",component:Ie,props:e=>({id:e.params.id,image:e.query.image})}],Ce=(0,u.aE)({history:(0,u.Bt)(),routes:Ee});var Oe=Ce;const xe=(0,s.Ef)(c);xe.use(Oe),xe.mount("#app")}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,n){if(!s){var l=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],n=e[u][2];for(var r=!0,i=0;i<s.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(r=!1,n<l&&(l=n));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,o,n]}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/hello-vue-app/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,l=s[0],r=s[1],i=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(i)var u=i(a)}for(t&&t(s);c<l.length;c++)n=l[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},s=self["webpackChunkmade_clothing"]=self["webpackChunkmade_clothing"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(1255)}));s=a.O(s)})();
//# sourceMappingURL=app.94c770f0.js.map