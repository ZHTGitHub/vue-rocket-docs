(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a9dd7ab"],{"6eb7":function(e,t,a){"use strict";var r=a("1da1"),s=a("5530"),n=(a("96cf"),a("ac1f"),a("841c"),a("2f62")),i={pageSize:10,pageNum:1};t["a"]={data:function(){return{searchId:"Search",searchFormId:"",loading:!0,loadingText:"Loading... Please wait",params:{},desserts:[],ids:[],detail:{},pagination:{total:0},search:""}},created:function(){this.stickFormId(),this.getList()},methods:{onLocalSearch:function(){var e=this.forms[this.searchFormId];this.search=e.search},onSearch:function(){this.params=Object(s["a"])(Object(s["a"])(Object(s["a"])({},this.params),this.forms[this.searchFormId]),i),this.getList()},handlePagination:function(){},getList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.getHandler){t.next=7;break}return t.next=3,e.$store.dispatch(e.getHandler,e.params);case 3:return a=t.sent,e.loading=!1,a&&(console.log(a),e.desserts=a.data,e.pagination.total=a.total),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},getDetail:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},stickFormId:function(){this.searchFormId=this.formId+this.searchId}},computed:Object(s["a"])({},Object(n["b"])(["forms"]))}},b92e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"button-toggle-attributes"},[a("v-card",[a("v-card-title",[a("span",[e._v("Button Toggle Attributes")]),a("v-spacer"),a("z-text-field",{attrs:{formId:e.searchFormId,formKey:"search","append-icon":"mdi-magnify"},on:{keydown:e.onLocalSearch}})],1),a("v-data-table",{attrs:{headers:e.attributesHeaders,"hide-default-footer":e.hideDefaultFooter,"items-per-page":e.itemsPerPage,items:e.desserts,loading:e.loading,loadingText:e.loadingText,search:e.search}})],1)],1)},s=[],n=a("6eb7"),i=a("dd5d"),o={name:"ButtonToggleAttributes",mixins:[n["a"],i["a"]],data:function(){return{formId:"ButtonToggleAttributes",getHandler:"GET_BUTTON_TOGGLE_ATTRIBUTES"}}},c=o,d=a("2877"),u=Object(d["a"])(c,r,s,!1,null,null,null);t["default"]=u.exports},dd5d:function(e,t,a){"use strict";t["a"]={data:function(){return{itemsPerPage:100,hideDefaultFooter:!0,attributesHeaders:[{text:"参数",value:"name"},{text:"必须",value:"required",sortable:!1,width:60},{text:"类型",value:"type",sortable:!1},{text:"可选值",value:"acceptedValues",sortable:!1},{text:"默认值",value:"default",sortable:!1,width:70},{text:"说明",value:"description",sortable:!1}],methodsHeaders:[{text:"名称",value:"name"},{text:"参数",value:"parameters",sortable:!1},{text:"说明",value:"description",sortable:!1}],slotsHeaders:[{text:"名称",value:"name"},{text:"说明",value:"description",sortable:!1}]}}}}}]);
//# sourceMappingURL=chunk-3a9dd7ab.dcc1d614.js.map