(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f89d6ca2"],{"6eb7":function(e,t,a){"use strict";var n=a("1da1"),r=a("5530"),o=(a("96cf"),a("ac1f"),a("841c"),a("2f62")),s={pageSize:10,pageNum:1};t["a"]={data:function(){return{searchId:"Search",searchFormId:"",loading:!0,loadingText:"Loading... Please wait",params:{},desserts:[],ids:[],detail:{},pagination:{total:0},search:""}},created:function(){this.stickFormId(),this.getList()},methods:{onLocalSearch:function(){var e=this.forms[this.searchFormId];this.search=e.search},onSearch:function(){this.params=Object(r["a"])(Object(r["a"])(Object(r["a"])({},this.params),this.forms[this.searchFormId]),s),this.getList()},handlePagination:function(){},getList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.getHandler){t.next=7;break}return t.next=3,e.$store.dispatch(e.getHandler,e.params);case 3:return a=t.sent,e.loading=!1,a&&(console.log(a),e.desserts=a.data,e.pagination.total=a.total),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},getDetail:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},stickFormId:function(){this.searchFormId=this.formId+this.searchId}},computed:Object(r["a"])({},Object(o["b"])(["forms"]))}},"92a2":function(e,t,a){"use strict";a.r(t),a.d(t,"DemoTable",(function(){return d}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-table"},[a("main-layout",[a("div",{staticClass:"filters flex"},[a("v-spacer"),a("z-text-field",{attrs:{formId:e.searchFormId,formKey:"keyword",label:"搜索","append-icon":"mdi-magnify"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.desserts,"show-select":"","item-key":"name","hide-default-footer":"",loading:e.loading,"loading-text":e.loadingText},scopedSlots:e._u([{key:"item.options",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.modifyItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),a("z-pagination",{attrs:{total:e.pagination.total}})],1)],1)},r=[],o=a("1da1"),s=(a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("6eb7")),i={name:"ZDemoTable",mixins:[s["a"]],data:function(){return{formId:"Table",getHandler:"GET_USERS",selected:[],headers:[{text:"邮箱",value:"email",sortable:!1},{text:"手机",value:"phone",sortable:!1},{text:"姓名",value:"name",sortable:!1},{text:"年龄",value:"age"},{text:"居住城市",value:"area",sortable:!1},{text:"性别",value:"gender",sortable:!1},{text:"兴趣",value:"hobby",sortable:!1},{text:"激活",value:"active",sortable:!1},{text:"操作",value:"options",sortable:!1}]}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.util.storage.set("zht",123),e.util.storage.del("zht");case 2:case"end":return t.stop()}}),t)})))()},methods:{modifyItem:function(e){console.log(e)},deleteItem:function(e){console.log(e)}},watch:{selected:function(e){console.log(e)}},components:{"main-layout":function(){return a.e("chunk-2d2082b9").then(a.bind(null,"a43c"))}}},c=i,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null),d=u.exports;t["default"]=d}}]);
//# sourceMappingURL=chunk-f89d6ca2.14f4ca60.js.map