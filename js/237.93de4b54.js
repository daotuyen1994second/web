"use strict";(self["webpackChunkmedicine"]=self["webpackChunkmedicine"]||[]).push([[237],{6237:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var l=t(3396),n=t(7139);const r={class:"Form tra cứu danh sách các đầu đơn xin cấp phát"},o=(0,l._)("br",null,null,-1),i={style:{color:"#66CDAA",cursor:"pointer"}};function u(e,a,t,u,s,p){const c=(0,l.up)("el-input"),h=(0,l.up)("el-col"),g=(0,l.up)("el-button"),d=(0,l.up)("el-row"),m=(0,l.up)("el-table-column"),b=(0,l.up)("el-table"),C=(0,l.up)("el-pagination"),_=(0,l.Q2)("loading");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(d,{gutter:24,justify:"end"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{md:4},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{modelValue:s.search,"onUpdate:modelValue":a[0]||(a[0]=e=>s.search=e),placeholder:e.$t("Đầu đơn/Mã thẻ/Tên")},null,8,["modelValue","placeholder"])])),_:1}),(0,l.Wm)(h,{md:3},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onClick:p.SearchData},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Tìm kiếm")),1)])),_:1},8,["onClick"])])),_:1})])),_:1}),o,(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{data:s.tableData,key:s.tableKey,"element-loading-text":e.$t("Đang tải"),"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{label:e.$t("Mã đầu đơn"),fixed:"",width:"160"},{default:(0,l.w5)((e=>[(0,l.Wm)(g,{size:"small",link:!0,onClick:a=>p.GotoDetailDocNumPage(e.row.F_RECEIVE_DOC_NUM)},{default:(0,l.w5)((()=>[(0,l._)("span",i,(0,n.zw)(e.row.F_RECEIVE_DOC_NUM),1)])),_:2},1032,["onClick"])])),_:1},8,["label"]),(0,l.Wm)(m,{prop:"APPLY_EMP",label:e.$t("Mã thẻ người tạo đơn")},null,8,["label"]),(0,l.Wm)(m,{prop:"APPLY_NAME",label:e.$t("Họ tên người tạo đơn")},null,8,["label"]),(0,l.Wm)(m,{prop:"F_RECEIVE_UNIT",label:e.$t("Tên đơn vị xin cấp phát")},null,8,["label"]),(0,l.Wm)(m,{prop:"APPLY_TIME",label:e.$t("Thời gian xin đơn")},null,8,["label"]),(0,l.Wm)(m,{prop:"F_STATUS",label:e.$t("Trạng thái đơn")},null,8,["label"]),(0,l.Wm)(m,{prop:"F_SYSDATE",label:e.$t("Ngày cập nhật")},null,8,["label"]),(0,l.Wm)(m,{prop:"F_SYSID",label:e.$t("Người cập nhật")},null,8,["label"])])),_:1},8,["data","element-loading-text"])),[[_,s.Loading]]),(0,l.Wm)(C,{onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange,"current-page":s.currentPage,"page-sizes":[10,20,30,40],"page-size":s.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:s.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])}t(560);var s=t(1822),p=t(7178),c={name:"SearchAppForIssuance",data(){return{Loading:!1,tableData:[],tableKey:0,search:"",currentPage:1,pageSize:10,total:0}},methods:{GotoDetailDocNumPage(e){this.$router.push({name:"NewApplicationForIssuance",query:{receiveDocNum:e}})},GetAllAppForIssuanceLs(){this.Loading=!0,s.Z.GetAllAppForIssuanceLs({search:this.search,page:this.currentPage,pageSize:this.pageSize},(e=>{if(this.Loading=!1,"error"==e.data.status)p.z8.error(e?.data?.message);else{let a=e.data.data;this.tableData=a.items,this.total=a.totalCount,this.tableKey+=1}}),(e=>{this.Loading=!1,p.z8.error(e.message)}))},SearchData(){this.GetAllAppForIssuanceLs()},handleSizeChange(e){this.pageSize=e,this.GetAllAppForIssuanceLs()},handleCurrentChange(e){this.currentPage=e,this.GetAllAppForIssuanceLs()}},mounted(){this.GetAllAppForIssuanceLs()}},h=t(89);const g=(0,h.Z)(c,[["render",u]]);var d=g}}]);
//# sourceMappingURL=237.93de4b54.js.map