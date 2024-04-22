"use strict";(self["webpackChunkmedicine"]=self["webpackChunkmedicine"]||[]).push([[72],{5072:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var i=a(3396),r=a(7139);const n={key:0,class:"Form nhap ma dau don xin cap phat va nhan kiem tra"},s={key:1,class:"Form chon thuoc can bao phe va nhan gui di"},l={style:{"text-align":"left"}},o={key:0,class:"Form show list thuoc bao phe"},c={style:{"text-align":"left"}},m={key:1,class:"Form chọn lưu trình ký"},p={style:{"text-align":"left"}},u={class:"Form thao tac ky duyet",style:{"margin-top":"40px"}};function h(t,e,a,h,d,g){const f=(0,i.up)("el-input"),S=(0,i.up)("el-form-item"),_=(0,i.up)("el-col"),w=(0,i.up)("Pointer"),b=(0,i.up)("el-icon"),D=(0,i.up)("el-button"),F=(0,i.up)("el-row"),N=(0,i.up)("el-form"),y=(0,i.up)("Back"),W=(0,i.up)("el-text"),C=(0,i.up)("el-divider"),k=(0,i.up)("el-table-column"),L=(0,i.up)("el-table"),M=(0,i.up)("el-step"),$=(0,i.up)("el-tooltip"),x=(0,i.up)("el-steps"),z=(0,i.up)("EditPen"),I=(0,i.up)("el-popconfirm");return d.isShowInputScrapDocNum?((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(N,{"label-width":"auto",style:{"max-width":"500px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{label:t.$t("Mã đầu đơn xin báo phế thuốc")},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{modelValue:d.frm.scrapDocNum,"onUpdate:modelValue":e[0]||(e[0]=t=>d.frm.scrapDocNum=t),placeholder:t.$t("Nhập vào mã đầu đơn xin báo phế thuốc"),clearable:""},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(F,{gutter:24,justify:"center"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{md:8}),(0,i.Wm)(_,{md:8},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{size:"large",type:"success",plain:"",onClick:e[1]||(e[1]=t=>g.CheckScrapDocNum())},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w)])),_:1}),(0,i.Uk)("  "+(0,r.zw)(t.$t("Kiểm tra")),1)])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1})])):((0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",l,[(0,i.Wm)(D,{style:{border:"none"},onClick:e[2]||(e[2]=t=>g.ResetSomeThing())},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y)])),_:1}),(0,i.Uk)("   "+(0,r.zw)(t.$t("Trở lại")),1)])),_:1})]),null!=this.scrapMedinceLs&&this.scrapMedinceLs.length>0?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("h3",c,[(0,i.Wm)(W,{size:"large"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(t.$t("Chi tiết các sản phẩm xin báo phế:")),1)])),_:1})]),(0,i.Wm)(C),(0,i.Wm)(L,{data:this.scrapMedinceLs,style:{width:"100%"},onSelectionChange:g.handleSelectionChange},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{type:"selection",width:"55"}),(0,i.Wm)(k,{type:"index",label:t.$t("Số thứ tự"),width:"100"},null,8,["label"]),(0,i.Wm)(k,{prop:"F_MEDICINE_ID",label:t.$t("Số hiệu")},null,8,["label"]),(0,i.Wm)(k,{prop:"F_MEDICINE_NAME",label:t.$t("Tên hàng")},null,8,["label"]),(0,i.Wm)(k,{prop:"F_MEDICINE_OBJ_UNIT",label:t.$t("Quy cách")},null,8,["label"]),(0,i.Wm)(k,{prop:"F_MEDICINE_EXPIRED_DATE",label:t.$t("Hạn sử dụng")},null,8,["label"]),(0,i.Wm)(k,{prop:"F_QTY_SCRAP",label:t.$t("Số lượng báo phế")},null,8,["label"]),(0,i.Wm)(k,{prop:"F_REQUEST_DATE",label:t.$t("Ngày yêu cầu")},null,8,["label"])])),_:1},8,["data","onSelectionChange"])])):(0,i.kq)("",!0),null!=this.frm.signStationLs&&this.frm.signStationLs.length>0?((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("h3",p,[(0,i.Wm)(W,{size:"large"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(t.$t("Lưu trình ký:")),1)])),_:1})]),(0,i.Wm)(C),(0,i.Wm)(x,{style:{"max-width":"100%","margin-top":"30px"},active:0,"finish-status":"success","align-center":""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.frm.signStationLs,(t=>((0,i.wg)(),(0,i.j4)($,{key:t,class:"box-item",content:t.F_SIGN_STATION+"/"+t.F_SIGN_NAME+"/"+t.F_SIGN_EMP,placement:"top-start"},{default:(0,i.w5)((()=>[(0,i.Wm)(M,{title:t.F_SIGN_STATION,description:t.F_SIGN_NAME},null,8,["title","description"])])),_:2},1032,["content"])))),128))])),_:1})])):(0,i.kq)("",!0),(0,i._)("div",u,[(0,i.Wm)(F,{gutter:24},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{md:10}),(0,i.Wm)(_,{md:8},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{"confirm-button-text":t.$t("Có"),"cancel-button-text":t.$t("Không"),icon:t.InfoFilled,"icon-color":"#626AEF",title:t.$t("Bạn có chắc chắn muốn thao tác?"),onConfirm:e[3]||(e[3]=t=>g.DoSign())},{reference:(0,i.w5)((()=>[(0,i.Wm)(D,{type:"primary",size:"large",plain:""},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(z)])),_:1}),(0,i.Uk)("   "+(0,r.zw)(t.$t("Gửi đi")),1)])),_:1})])),_:1},8,["confirm-button-text","cancel-button-text","icon","title"])])),_:1}),(0,i.Wm)(_,{md:10})])),_:1})])]))}var d=a(1822),g=a(7178),f=a(6e3),S={name:"NewAppForCScrap",data(){return{frm:{scrapDocNum:"",scrapMedinceLs:[],signStationLs:[],FactoryZone:"",remark:"",RejectStation:"BeforeStation",isReject:!1},scrapMedinceLs:[],isShowInputScrapDocNum:!0}},methods:{DoSignApplicationForCScrap(){d.Z.DoSignApplicationForCScrap(this.frm,(t=>{"error"==t.data.status?f.T.alert(` <div style="color:red"> ${t?.data?.message} </div>`,this.$t("Thông báo"),{dangerouslyUseHTMLString:!0,showClose:!1}):(this.isShowSignDialog=!1,this.frm.receiveDocNum=t.data.data,(0,g.z8)({message:t.data.message,type:"success",dangerouslyUseHTMLString:!0,duration:3e3,onClose:()=>{this.$router.go()}}))}),(t=>{g.z8.error(t.message)}))},DoSign(){this.frm.scrapDocNum?.trim()?null==this.frm.scrapMedinceLs||this.frm.scrapMedinceLs.length<=0?g.z8.error(this.$t("Vui lòng chọn vật phẩm cần báo phế")):null==this.frm.signStationLs||this.frm.signStationLs.length<=0?g.z8.error(this.$t("Không có danh sách trạm ký")):this.frm.FactoryZone?.trim()?this.DoSignApplicationForCScrap():g.z8.error(this.$t("Không có thông tin khu xưởng/phòng y tế của đơn xin báo phế")):g.z8.error(this.$t("Vui lòng nhập đầu đơn xin báo phế"))},handleSelectionChange(t){this.frm.scrapMedinceLs=t},ResetSomeThing(){this.frm.scrapDocNum="",this.frm.scrapMedinceLs=[],this.frm.signStationLs=[],this.frm.FactoryZone="",this.frm.remark="",this.scrapMedinceLs=[],this.isShowInputScrapDocNum=!0},ResetSomeThing1(){this.frm.scrapMedinceLs=[],this.frm.signStationLs=[],this.frm.FactoryZone="",this.frm.remark="",this.scrapMedinceLs=[]},CheckScrapDocNum(){this.frm.scrapDocNum?.trim()?(this.ResetSomeThing1(),d.Z.CheckScrapDocNumForCScrap({scrapDocNum:this.frm.scrapDocNum?.trim()},(t=>{"error"==t?.data?.status?g.z8.error(t?.data?.message):(g.z8.success(t?.data?.message),this.GetScrapMedicineLsValidForCScrap())}),(t=>{g.z8.error(t.message)}))):g.z8.error(this.$t("Vui lòng nhập vào mã đầu đơn xin báo phế"))},GetScrapMedicineLsValidForCScrap(){this.scrapMedinceLs=[],this.frm.scrapDocNum?.trim()&&d.Z.GetScrapMedicineLsValidForCScrap({scrapDocNum:this.frm.scrapDocNum?.trim()},(t=>{"error"==t?.data?.status?g.z8.error(t?.data?.message):t?.data?.data.length>0&&(this.scrapMedinceLs=t?.data?.data,this.isShowInputScrapDocNum=!1,this.frm.FactoryZone=t?.data?.data[0].F_FACTORYZONE,this.GetSignRoutingOfAppForCScrap(this.frm.FactoryZone))}),(t=>{g.z8.error(t.message)}))},GetSignRoutingOfAppForCScrap(t){this.frm.signStationLs=[],d.Z.GetSignRoutingOfAppForCScrap({FactoryZone:t},(t=>{"error"==t?.data?.status?g.z8.error(t?.data?.message):t?.data?.data.length>0&&(this.frm.signStationLs=t?.data?.data)}),(t=>{g.z8.error(t.message)}))}},created(){}},_=a(89);const w=(0,_.Z)(S,[["render",h]]);var b=w}}]);