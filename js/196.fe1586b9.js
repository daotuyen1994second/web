"use strict";(self["webpackChunkmedicine"]=self["webpackChunkmedicine"]||[]).push([[196],{9196:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var s=i(3396),a=i(7139);const r=["src"];function n(e,t,i,n,o,h){return o.isShowDashBoard?((0,s.wg)(),(0,s.iD)("iframe",{key:0,style:(0,a.j5)({width:"100%",height:o.iframeHeight}),src:o.dashboardLink},null,12,r)):(0,s.kq)("",!0)}var o=i(1822),h=i(7178),d={name:"ImportGoodsReport",data(){return{dashboardLink:"",isShowDashBoard:!1,iframeHeight:"100px"}},methods:{ResetSomeThing(){this.isShowDashBoard=!1,this.dashboardLink=""},OpenLinkData(){this.ResetSomeThing(),o.Z.GetTableauTrustKey(this.$store.state.Tableau.MedicineReportTrustLink,(e=>{if(200==e.status){let i=e.data;var t=this.$store.state.Tableau.ImportGoodsLink;this.dashboardLink=this.$store.state.Tableau.TrustLink+i+t,this.isShowDashBoard=!0}else h.z8.error(e.statusText)}),(e=>{h.z8.error(e.message)}))}},created(){this.iframeHeight=window.innerHeight+"px",this.OpenLinkData();var e=this;window.addEventListener("resize",(function(t){e.iframeHeight=window.innerHeight+"px",console.log(t)}),!0)}},u=i(89);const c=(0,u.Z)(d,[["render",n]]);var k=c}}]);