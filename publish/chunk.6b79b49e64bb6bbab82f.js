(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{305:function(t,e,r){"use strict";r(43);var i=r(33),a=r(52),s=r(101),n=r(55),o=r(2),d=r(40),l=r(10),c=r(81),_=r(267),u=r(338),p={name:"EcOrderInfo",components:{ShippingLine:_.a,EcSummary:u.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>l.a},ecomPassport:{type:Object,default:()=>d.a}},data(){return{isLoaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order,canReopenOrder:!1}},computed:{i19buyAgain:()=>Object(a.a)(i.w),i19cancelOrder:()=>Object(a.a)(i.C),i19codeCopied:()=>Object(a.a)(i.N),i19copyCode:()=>Object(a.a)(i.W),i19copyErrorMsg:()=>Object(a.a)(i.X),i19doPaymentMsg:()=>Object(a.a)(i.fb),i19freight:()=>Object(a.a)(i.zb),i19login:()=>Object(a.a)(i.Xb),i19loginForOrderDetailsMsg:()=>Object(a.a)(i.Zb),i19myOrders:()=>Object(a.a)(i.jc),i19notes:()=>Object(a.a)(i.tc),i19of:()=>Object(a.a)(i.xc),i19orderConfirmationMsg:()=>Object(a.a)(i.Ec),i19orderNumber:()=>Object(a.a)(i.Gc),i19printBillet:()=>Object(a.a)(i.Sc),i19redirectToPayment:()=>Object(a.a)(i.ad),i19referenceCode:()=>Object(a.a)(i.cd),i19reopenOrder:()=>Object(a.a)(i.id),i19shippingAddress:()=>Object(a.a)(i.Fd),i19transactionCode:()=>Object(a.a)(i.Sd),i19ticketCode:()=>Object(a.a)(i.Od),i19trackDelivery:()=>Object(a.a)(i.Rd),i19zipCode:()=>Object(a.a)(i.he),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},canShowShippingAddress(){const{localOrder:t,shippingAddress:e}=this;return!(!e||!e.street)&&!/(retira|pick\s?up|e-?mail)/i.test(t.shipping_method_label)},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach((t=>{t&&(!e||!t.date_time||t.date_time>=e.date_time)&&(e=t)})),e)return e.status}const r=t.financial_status&&t.financial_status.current;return r||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null},statusEntries(){const t=[];let e=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(e=e.concat(this.localOrder[t]))})),e.length&&(e=e=e.sort(((t,e)=>t.date_time&&e.date_time?t.date_time>e.date_time?-1:1:0)),e.forEach(((r,i)=>{i>0&&r.status===e[i-1].status||t.push(r)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()}},methods:{i19FinancialStatus:t=>Object(a.a)(i.a)[t],i19FulfillmentStatus:t=>Object(a.a)(i.b)[t],i19OrderStatus:t=>Object(a.a)(i.e)[t],formatMoney:s.a,formatDate:n.a,formatTime(t){const e=Date.parse(t);return new Date(e).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i19codeCopied,body:t,variant:"success",delay:2e3})}),(e=>{console.error(e),this.$toast({title:"Oops",body:"".concat(this.i19copyErrorMsg,": <i>").concat(t,"</i>"),variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&e.requestApi("/me.json").then((r=>{let{data:i}=r;const a=i.orders?i.orders.slice(-300):[],s={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((e=>{t[e]&&(s[e]=t[e])}));const n=a.findIndex((e=>{let{_id:r,number:i}=e;return r===t._id||i===t.number}));n>-1?Object.assign(a[n],s):a.push(s),e.requestApi("/me.json","patch",{orders:a})}))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;l.a.clear(),e.forEach(((t,r)=>{l.a.addItem(t,!1),r+1===e.length&&(l.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};d.a.requestApi("/orders/".concat(this.order._id,".json"),"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},watch:{isLoaded:{handler(t){if(t&&this.isAuthenticated&&"cancelled"===this.status){const{items:t}=this.localOrder;if(t&&t.length){const e=t.map((t=>t.product_id)),r=new c.a;r.setPageSize(e.length).setProductIds(e).fetch(!0).then((()=>{for(let e=0;e<t.length;e++){const i=t[e],a=r.getItems().find((t=>{let{_id:e}=t;return e===i.product_id}));if(a){if(i.variation_id&&a.variations){const t=a.variations.find((t=>{let{sku:e}=t;return e===i.sku}));if(t&&t.quantity>=i.quantity)continue}if(a.quantity>=i.quantity)continue}return void(this.canReopenOrder=!1)}this.canReopenOrder=!0})).catch(console.error)}}},immediate:!0}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t="/orders/".concat(this.order._id,".json"),e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((t=>{let{data:e}=t;this.localOrder={...this.localOrder,...e}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((()=>{e().finally((()=>{this.isLoaded=!0}))}),this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},f=(r(389),r(61)),m=Object(f.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-info py-4"},[t.isNew?r("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),r("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.isLoaded?r("div",{key:"loaded"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5 col-lg-3"},[r("h2",{staticClass:"order-info__number"},[r("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),r("span",[t._v(t._s(t.localOrder.number))])]),r("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():r("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),r("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.canReopenOrder?r("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-secondary",on:{click:t.toggle}},[r("i",{staticClass:"i-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()])],1)]),t.statusEntries.length?r("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(e,i){return r("li",{key:"status-"+i,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+e.status},[e.date_time?r("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(e.date_time))+" "+t._s(t.formatTime(e.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(e.status)||t.i19FulfillmentStatus(e.status))+" ")])})),0):t._e(),t.accountOrdersUrl?r("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[r("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),r("div",{staticClass:"col-md-7 col-lg-9"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?r("div",{staticClass:"order-info__billet"},[r("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[r("p",[t._v(" "+t._s(t.i19ticketCode)+": "),r("br"),r("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),r("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[r("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?r("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[r("i",{staticClass:"i-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?r("div",{staticClass:"order-info__redirect"},[r("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),r("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[r("i",{staticClass:"i-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),r("div",{staticClass:"order-info__details"},[t._t("payment",(function(){return[r("div",{staticClass:"order-info__payment card"},[r("div",{staticClass:"card-header"},[r("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[r("i",{staticClass:"i-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(e){return r("div",{key:"t-"+e._id,staticClass:"card-body"},[r("p",{staticClass:"order-info__payment-value"},[e.payment_method.name?[t._v(" "+t._s(e.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),e.installments&&e.installments.value?r("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):r("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&e.status?[r("br"),r("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(e.status.current))+" ")])]:t._e()],2),e.notes?r("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"},domProps:{innerHTML:t._s(e.notes)}}):t._e(),e.credit_card?r("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?r("span",[e.credit_card.company?t._e():r("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?r("div",{staticClass:"order-info__transaction-code"},[r("small",[t._v(t._s(t.i19transactionCode))]),r("br"),r("code",[t._v(t._s(e.intermediator.transaction_code))]),r("br"),r("button",{staticClass:"btn btn-sm btn-light",on:{click:function(){return t.toClipboard(e.intermediator.transaction_code)}}},[r("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]):t._e(),e.intermediator.transaction_reference?r("div",{staticClass:"order-info__transaction-reference"},[r("small",[t._v(t._s(t.i19referenceCode))]),r("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)]}),null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",(function(){return[r("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(e){return r("div",{key:"s-"+e._id,staticClass:"order-info__shipping-freight card"},[r("div",{staticClass:"card-header"},[t.fulfillmentStatus?r("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[r("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[r("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),r("div",{staticClass:"card-body"},[e.app?r("span",[t._v(" "+t._s(e.app.label)+" ")]):t._e(),r("shipping-line",{attrs:{"shipping-line":e}}),e.tracking_codes?r("div",{staticClass:"order-info__shipping-tracking"},[r("hr"),r("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(e.tracking_codes,(function(e,i){return r("samp",{key:"track-"+i},[e.link?r("a",{attrs:{href:""+e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):r("span",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e()],1)])})),t.canShowShippingAddress?r("div",{staticClass:"order-info__shipping-address card"},[r("div",{staticClass:"card-header"},[r("i",{staticClass:"i-map-marked mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),r("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t.shippingAddress.complement?[t._v(" , "+t._s(t.shippingAddress.complement)+" ")]:t._e(),t.shippingAddress.near_to?[r("br"),t._v(t._s(t.shippingAddress.near_to)+" ")]:t._e(),r("br"),t._l(["borough","city","province_code"],(function(e,i){return t.shippingAddress[e]?r("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===i?".":","))+" ")]):t._e()})),r("br"),r("span",[t._v(" "+t._s(t.i19zipCode)+": "),r("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)]}),null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus}),t._t("notes",(function(){return[t.localOrder.notes?r("div",{staticClass:"order-info__notes card"},[r("div",{staticClass:"card-header"},[r("span",[t._v(" "+t._s(t.i19notes)+" ")])]),r("div",{staticClass:"card-body"},[r("span",[t._v(" "+t._s(t.localOrder.notes)+" ")])])]):t._e()]}),null,{order:t.localOrder})],2),t.isAuthenticated?t._e():r("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),r("br"),r("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[r("i",{staticClass:"i-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"order-info__summary card"},[r("div",{staticClass:"card-body"},[r("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():r("button",{staticClass:"order-info__toggle btn btn-danger",on:{click:t.toggle}},[r("i",{staticClass:"i-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")]),t._t("buy",(function(){return[r("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[r("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])]}))],2):t._e()])])])]):r("div",{key:"loading"},[r("div",{staticClass:"spinner-border",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?r("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[r("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=m.exports},329:function(t,e,r){var i=r(390);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(203).default)("0cb08df4",i,!0,{})},389:function(t,e,r){"use strict";r(329)},390:function(t,e,r){(e=r(202)(!0)).push([t.i,".order-info__number{color:var(--secondary);font-weight:var(--font-light);margin-top:var(--spacer-2)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);display:block;font-size:var(--font-size-sm)}.order-info__timeline{display:flex;flex-wrap:nowrap;font-size:var(--font-size-sm);list-style:none;margin:var(--spacer-4) 0;overflow-x:auto;padding:0}@media(min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{border:solid var(--border-color);border-width:0 0 5px;margin-right:var(--spacer-1);min-width:165px;padding:var(--spacer-2)}@media(min-width:768px){.order-info__timeline-status{border-bottom-width:0;border-left-width:5px;margin-bottom:var(--spacer-1);margin-right:0;min-width:0;padding-left:var(--spacer-3)}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{color:var(--text-muted);font-size:85%}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{color:var(--info);font-weight:var(--font-bold)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{font-size:var(--font-size-lg);margin-bottom:var(--spacer-5);text-align:center}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again,.order-info__toggle{margin-right:var(--spacer-3);margin-top:var(--spacer-3)}.order-info__cancelled{color:var(--danger)}","",{version:3,sources:["EcOrderInfo.scss"],names:[],mappings:"AAAA,oBAAoB,sBAAsB,CAAC,6BAA6B,CAAC,0BAA0B,CAAC,yBAAyB,4BAA4B,CAAC,0BAA0B,iBAAiB,CAAC,aAAa,CAAC,6BAA6B,CAAC,sBAAsB,YAAY,CAAC,gBAAgB,CAAC,6BAA6B,CAAC,eAAe,CAAC,wBAAwB,CAAC,eAAe,CAAC,SAAS,CAAC,wBAAwB,sBAAsB,aAAa,CAAC,CAAC,6BAA6B,gCAAgC,CAAC,oBAAoB,CAAC,4BAA4B,CAAC,eAAe,CAAC,uBAAuB,CAAC,wBAAwB,6BAA6B,qBAAqB,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,cAAc,CAAC,WAAW,CAAC,4BAA4B,CAAC,CAAC,mFAAmF,2BAA2B,CAAC,sCAAsC,wBAAwB,CAAC,yHAAyH,0BAA0B,CAAC,2EAA2E,2BAA2B,CAAC,2BAA2B,uBAAuB,CAAC,aAAa,CAAC,uCAAuC,0BAA0B,CAAC,iFAAiF,6BAA6B,CAAC,8DAA8D,iBAAiB,CAAC,4BAA4B,CAAC,uCAAuC,oBAAoB,CAAC,8CAA8C,iBAAiB,CAAC,4HAA4H,mBAAmB,CAAC,gGAAgG,oBAAoB,CAAC,iBAAiB,6BAA6B,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,yBAAyB,gBAAgB,CAAC,0BAA0B,CAAC,qBAAqB,uBAAuB,CAAC,6BAA6B,CAAC,2CAA2C,4BAA4B,CAAC,0BAA0B,CAAC,uBAAuB,mBAAmB",file:"EcOrderInfo.scss",sourcesContent:[".order-info__number{color:var(--secondary);font-weight:var(--font-light);margin-top:var(--spacer-2)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);display:block;font-size:var(--font-size-sm)}.order-info__timeline{display:flex;flex-wrap:nowrap;font-size:var(--font-size-sm);list-style:none;margin:var(--spacer-4) 0;overflow-x:auto;padding:0}@media(min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{border:solid var(--border-color);border-width:0 0 5px;margin-right:var(--spacer-1);min-width:165px;padding:var(--spacer-2)}@media(min-width:768px){.order-info__timeline-status{border-bottom-width:0;border-left-width:5px;margin-bottom:var(--spacer-1);margin-right:0;min-width:0;padding-left:var(--spacer-3)}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{color:var(--text-muted);font-size:85%}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{color:var(--info);font-weight:var(--font-bold)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{font-size:var(--font-size-lg);margin-bottom:var(--spacer-5);text-align:center}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again,.order-info__toggle{margin-right:var(--spacer-3);margin-top:var(--spacer-3)}.order-info__cancelled{color:var(--danger)}"]}]),t.exports=e}}]);