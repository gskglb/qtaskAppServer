(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["aec723ce"],{8380:function(t,a,e){"use strict";var s=e("2b0e"),n=e("594d");a["a"]=s["a"].extend({name:"QSpinnerDots",mixins:[n["a"]],render:function(t){return t("svg",{staticClass:"q-spinner",class:this.classes,on:this.$listeners,attrs:{fill:"currentColor",width:this.size,height:this.size,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":".3"}},[t("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}})},eb39:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"bg-grey-10",attrs:{padding:""}},[e("NewTask")],1)},n=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-form",{on:{submit:t.addTask}},[e("q-input",{staticClass:"q-ma-sm",attrs:{label:"Task *",dark:"",rules:[function(t){return t&&t.length>0||"What is your task?"}]},model:{value:t.taskData.title,callback:function(a){t.$set(t.taskData,"title",a)},expression:"taskData.title"}}),e("q-input",{staticClass:"q-ma-sm",attrs:{label:"Summary *",dark:"",type:"textarea",rows:"2",rules:[function(t){return t&&t.length>0||"Please add few lines about task"}]},model:{value:t.taskData.summary,callback:function(a){t.$set(t.taskData,"summary",a)},expression:"taskData.summary"}}),e("q-input",{staticClass:"q-ma-sm",attrs:{label:"Expected Start Date / Time *",dark:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm"},model:{value:t.taskData.start_date_time,callback:function(a){t.$set(t.taskData,"start_date_time",a)},expression:"taskData.start_date_time"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-time",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.taskData.start_date_time,callback:function(a){t.$set(t.taskData,"start_date_time",a)},expression:"taskData.start_date_time"}})],1)],1)]},proxy:!0}]),model:{value:t.taskData.start_date_time,callback:function(a){t.$set(t.taskData,"start_date_time",a)},expression:"taskData.start_date_time"}}),e("q-input",{staticClass:"q-ma-sm",attrs:{label:"Expected Completion Date / Time (Optional)",dark:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm"},model:{value:t.taskData.end_date_time,callback:function(a){t.$set(t.taskData,"end_date_time",a)},expression:"taskData.end_date_time"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-time",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.taskData.end_date_time,callback:function(a){t.$set(t.taskData,"end_date_time",a)},expression:"taskData.end_date_time"}})],1)],1)]},proxy:!0}]),model:{value:t.taskData.end_date_time,callback:function(a){t.$set(t.taskData,"end_date_time",a)},expression:"taskData.end_date_time"}}),e("div",{staticClass:"row no-wrap text-white"},[e("q-checkbox",{staticClass:"q-mr-md",attrs:{dark:"",label:"Urgent"},model:{value:t.taskData.urgent,callback:function(a){t.$set(t.taskData,"urgent",a)},expression:"taskData.urgent"}}),e("q-checkbox",{attrs:{dark:"",label:"Important"},model:{value:t.taskData.important,callback:function(a){t.$set(t.taskData,"important",a)},expression:"taskData.important"}})],1),e("q-btn",{staticClass:"full-width q-mt-md",attrs:{color:"primary",type:"submit"}},[t.loading?e("q-spinner-dots"):e("span",[t._v("Add Task")])],1)],1)},i=[],l=e("a34a"),o=e.n(l),c=(e("96cf"),e("c973")),u=e.n(c),d=e("8380"),m={name:"NewTask",components:{QSpinnerDots:d["a"]},data:function(){return{taskData:{keyRef:"",title:"",summary:"",important:!1,urgent:!1,start_date_time:null,end_date_time:null,priority:"",completed:!1,percentage_completion:0,dependent:"",dependency_notes:null,delegated:!1,delegatedTo:"",delegatedOn:null,notes:[]},loading:!1,priorityOptions:[{label:"Very High",value:"1"},{label:"High",value:"2"},{label:"Medium",value:"3"},{label:"Low",value:"4"}]}},methods:{addTask:function(){var t=u()(o.a.mark(function t(){var a,e;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("called"),this.loading=!0,t.next=4,this.$db.ref("/user-tasks/"+this.$auth.currentUser.uid+"/").push();case 4:return e=t.sent,console.log(e),this.taskData.keyRef=e.key,t.next=9,e.set(this.taskData,function(t){a=t});case 9:null!=a?this.$q.notify({message:"Error occured",type:"negative"}):(this.$q.notify({message:"Task added",color:"blue-grey-14",textColor:"white"}),this.$router.push("list")),this.loading=!1;case 11:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}()}},p=m,k=e("2877"),f=Object(k["a"])(p,r,i,!1,null,null,null),h=f.exports,_={name:"PageIndex",components:{NewTask:h},methods:{},watch:{},data:function(){return{}},created:function(){this.$bus.$emit("setTitleAndSlogan",{title:"New Task",slogan:""})}},b=_,D=Object(k["a"])(b,s,n,!1,null,null,null);a["default"]=D.exports}}]);