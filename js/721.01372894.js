"use strict";(self["webpackChunkmedicine"]=self["webpackChunkmedicine"]||[]).push([[721],{2721:function(e,l,a){a.r(l),a.d(l,{default:function(){return _}});var t=a(3396),n=a(7139);const r={class:"Form tra cứu danh sách các đầu đơn xin cấp phát"},o=(0,t._)("br",null,null,-1),s=(0,t._)("br",null,null,-1),u=(0,t._)("br",null,null,-1),i={style:{color:"#66CDAA",cursor:"pointer","font-size":"small"}},p=(0,t._)("br",null,null,-1);function c(e,l,a,c,h,g){const d=(0,t.up)("el-input"),b=(0,t.up)("el-col"),m=(0,t.up)("el-button"),_=(0,t.up)("el-row"),C=(0,t.up)("el-table-column"),A=(0,t.up)("el-table"),w=(0,t.up)("el-pagination"),z=(0,t.Q2)("loading");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(_,{gutter:24,justify:"end"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{md:4},{default:(0,t.w5)((()=>[o,(0,t.Wm)(d,{modelValue:h.search,"onUpdate:modelValue":l[0]||(l[0]=e=>h.search=e),placeholder:e.$t("Đầu đơn/Mã thẻ/Tên"),clearable:""},null,8,["modelValue","placeholder"])])),_:1}),(0,t.Wm)(b,{md:3},{default:(0,t.w5)((()=>[s,(0,t.Wm)(m,{onClick:g.SearchData},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.$t("Tìm kiếm")),1)])),_:1},8,["onClick"])])),_:1})])),_:1}),u,(0,t.wy)(((0,t.wg)(),(0,t.j4)(A,{data:h.tableData,key:h.tableKey,"element-loading-text":e.$t("Đang tải"),"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{sortable:"",label:e.$t("Mã đầu đơn"),fixed:"",width:"160"},{default:(0,t.w5)((e=>[(0,t.Wm)(m,{size:"small",link:!0,onClick:l=>g.GotoDetailDocNumPage(e.row.F_RECEIVE_DOC_NUM)},{default:(0,t.w5)((()=>[(0,t._)("span",i,(0,n.zw)(e.row.F_RECEIVE_DOC_NUM),1)])),_:2},1032,["onClick"])])),_:1},8,["label"]),(0,t.Wm)(C,{prop:"APPLY_EMP",sortable:"",label:e.$t("Mã thẻ người tạo đơn")},null,8,["label"]),(0,t.Wm)(C,{prop:"APPLY_NAME",sortable:"",label:e.$t("Họ tên người tạo đơn")},null,8,["label"]),(0,t.Wm)(C,{prop:"F_RECEIVE_UNIT",sortable:"",label:e.$t("Tên đơn vị xin cấp phát")},null,8,["label"]),(0,t.Wm)(C,{prop:"APPLY_TIME",sortable:"",label:e.$t("Thời gian xin đơn")},null,8,["label"]),(0,t.Wm)(C,{prop:"F_STATUS",sortable:"",label:e.$t("Trạng thái đơn")},null,8,["label"]),(0,t.Wm)(C,{prop:"F_SYSDATE",sortable:"",label:e.$t("Ngày cập nhật")},null,8,["label"]),(0,t.Wm)(C,{prop:"F_SYSID",sortable:"",label:e.$t("Người cập nhật")},null,8,["label"])])),_:1},8,["data","element-loading-text"])),[[z,h.Loading]]),p,(0,t.Wm)(w,{onSizeChange:g.handleSizeChange,onCurrentChange:g.handleCurrentChange,"current-page":h.currentPage,"page-sizes":[10,20,30,40],"page-size":h.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:h.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])}a(560);var h=a(1822),g=a(7178),d={name:"SearchAppForIssuance",data(){return{Loading:!1,tableData:[],tableKey:0,search:"",currentPage:1,pageSize:10,total:0}},methods:{GotoDetailDocNumPage(e){this.$router.push({path:"/NewApplicationForIssuance",hash:"",query:{receiveDocNum:e}})},GetAllAppForIssuanceLs(){this.Loading=!0,h.Z.GetAllAppForIssuanceLs({search:this.search,page:this.currentPage,pageSize:this.pageSize},(e=>{if(this.Loading=!1,"error"==e.data.status)g.z8.error(e?.data?.message);else{let l=e.data.data;this.tableData=l.items,this.total=l.totalCount,this.tableKey+=1}}),(e=>{this.Loading=!1,g.z8.error(e.message)}))},SearchData(){this.GetAllAppForIssuanceLs()},handleSizeChange(e){this.pageSize=e,this.GetAllAppForIssuanceLs()},handleCurrentChange(e){this.currentPage=e,this.GetAllAppForIssuanceLs()}},mounted(){},created(){this.GetAllAppForIssuanceLs()}},b=a(89);const m=(0,b.Z)(d,[["render",c]]);var _=m}}]);