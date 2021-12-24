(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-375f8298"],{"347e":function(e,r){
/**
* vkBeautify - javascript plugin to pretty-print or minify text in XML, JSON, CSS and SQL formats.
*
* Copyright (c) 2012 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/vkbeautify/
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*   Pretty print
*
*        vkbeautify.xml(text [,indent_pattern]);
*        vkbeautify.json(text [,indent_pattern]);
*        vkbeautify.css(text [,indent_pattern]);
*        vkbeautify.sql(text [,indent_pattern]);
*
*        @text - String; text to beatufy;
*        @indent_pattern - Integer | String;
*                Integer:  number of white spaces;
*                String:   character string to visualize indentation ( can also be a set of white spaces )
*   Minify
*
*        vkbeautify.xmlmin(text [,preserve_comments]);
*        vkbeautify.jsonmin(text);
*        vkbeautify.cssmin(text [,preserve_comments]);
*        vkbeautify.sqlmin(text);
*
*        @text - String; text to minify;
*        @preserve_comments - Bool; [optional];
*                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )
*
*   Examples:
*        vkbeautify.xml(text); // pretty print XML
*        vkbeautify.json(text, 4 ); // pretty print JSON
*        vkbeautify.css(text, '. . . .'); // pretty print CSS
*        vkbeautify.sql(text, '----'); // pretty print SQL
*
*        vkbeautify.xmlmin(text, true);// minify XML, preserve comments
*        vkbeautify.jsonmin(text);// minify JSON
*        vkbeautify.cssmin(text);// minify CSS, remove comments ( default )
*        vkbeautify.sqlmin(text);// minify SQL
*
*/
function c(e){var r="    ";if(isNaN(parseInt(e)))r=e;else switch(e){case 1:r=" ";break;case 2:r="  ";break;case 3:r="   ";break;case 4:r="    ";break;case 5:r="     ";break;case 6:r="      ";break;case 7:r="       ";break;case 8:r="        ";break;case 9:r="         ";break;case 10:r="          ";break;case 11:r="           ";break;case 12:r="            ";break}for(var c=["\n"],a=0;a<100;a++)c.push(c[a]+r);return c}function a(){this.step="    ",this.shift=c(this.step)}function t(e,r){return r-(e.replace(/\(/g,"").length-e.replace(/\)/g,"").length)}function n(e,r){return e.replace(/\s{1,}/g," ").replace(/ AND /gi,"~::~"+r+r+"AND ").replace(/ BETWEEN /gi,"~::~"+r+"BETWEEN ").replace(/ CASE /gi,"~::~"+r+"CASE ").replace(/ ELSE /gi,"~::~"+r+"ELSE ").replace(/ END /gi,"~::~"+r+"END ").replace(/ FROM /gi,"~::~FROM ").replace(/ GROUP\s{1,}BY/gi,"~::~GROUP BY ").replace(/ HAVING /gi,"~::~HAVING ").replace(/ IN /gi," IN ").replace(/ JOIN /gi,"~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi,"~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi,"~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi,"~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi,"~::~RIGHT JOIN ").replace(/ ON /gi,"~::~"+r+"ON ").replace(/ OR /gi,"~::~"+r+r+"OR ").replace(/ ORDER\s{1,}BY/gi,"~::~ORDER BY ").replace(/ OVER /gi,"~::~"+r+"OVER ").replace(/\(\s{0,}SELECT /gi,"~::~(SELECT ").replace(/\)\s{0,}SELECT /gi,")~::~SELECT ").replace(/ THEN /gi," THEN~::~"+r).replace(/ UNION /gi,"~::~UNION~::~").replace(/ USING /gi,"~::~USING ").replace(/ WHEN /gi,"~::~"+r+"WHEN ").replace(/ WHERE /gi,"~::~WHERE ").replace(/ WITH /gi,"~::~WITH ").replace(/ ALL /gi," ALL ").replace(/ AS /gi," AS ").replace(/ ASC /gi," ASC ").replace(/ DESC /gi," DESC ").replace(/ DISTINCT /gi," DISTINCT ").replace(/ EXISTS /gi," EXISTS ").replace(/ NOT /gi," NOT ").replace(/ NULL /gi," NULL ").replace(/ LIKE /gi," LIKE ").replace(/\s{0,}SELECT /gi,"SELECT ").replace(/\s{0,}UPDATE /gi,"UPDATE ").replace(/ SET /gi," SET ").replace(/~::~{1,}/g,"~::~").split("~::~")}a.prototype.xml=function(e,r){var a=e.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").replace(/\s*xmlns\=/g,"~::~xmlns=").split("~::~"),t=a.length,n=!1,s=0,l="",i=0,p=r?c(r):this.shift;for(i=0;i<t;i++)a[i].search(/<!/)>-1?(l+=p[s]+a[i],n=!0,(a[i].search(/-->/)>-1||a[i].search(/\]>/)>-1||a[i].search(/!DOCTYPE/)>-1)&&(n=!1)):a[i].search(/-->/)>-1||a[i].search(/\]>/)>-1?(l+=a[i],n=!1):/^<\w/.exec(a[i-1])&&/^<\/\w/.exec(a[i])&&/^<[\w:\-\.\,]+/.exec(a[i-1])==/^<\/[\w:\-\.\,]+/.exec(a[i])[0].replace("/","")?(l+=a[i],n||s--):a[i].search(/<\w/)>-1&&-1==a[i].search(/<\//)&&-1==a[i].search(/\/>/)?l=l+=n?a[i]:p[s++]+a[i]:a[i].search(/<\w/)>-1&&a[i].search(/<\//)>-1?l=l+=n?a[i]:p[s]+a[i]:a[i].search(/<\//)>-1?l=l+=n?a[i]:p[--s]+a[i]:a[i].search(/\/>/)>-1?l=l+=n?a[i]:p[s]+a[i]:a[i].search(/<\?/)>-1||a[i].search(/xmlns\:/)>-1||a[i].search(/xmlns\=/)>-1?l+=p[s]+a[i]:l+=a[i];return"\n"==l[0]?l.slice(1):l},a.prototype.json=function(e,r){r=r||this.step;return"undefined"===typeof JSON?e:"string"===typeof e?JSON.stringify(JSON.parse(e),null,r):"object"===typeof e?JSON.stringify(e,null,r):e},a.prototype.css=function(e,r){var a=e.replace(/\s{1,}/g," ").replace(/\{/g,"{~::~").replace(/\}/g,"~::~}~::~").replace(/\;/g,";~::~").replace(/\/\*/g,"~::~/*").replace(/\*\//g,"*/~::~").replace(/~::~\s{0,}~::~/g,"~::~").split("~::~"),t=a.length,n=0,s="",l=0,i=r?c(r):this.shift;for(l=0;l<t;l++)/\{/.exec(a[l])?s+=i[n++]+a[l]:/\}/.exec(a[l])?s+=i[--n]+a[l]:(/\*\\/.exec(a[l]),s+=i[n]+a[l]);return s.replace(/^\n{1,}/,"")},a.prototype.sql=function(e,r){var a=e.replace(/\s{1,}/g," ").replace(/\'/gi,"~::~'").split("~::~"),s=a.length,l=[],i=0,p=this.step,o=0,g="",u=0,h=r?c(r):this.shift;for(u=0;u<s;u++)l=u%2?l.concat(a[u]):l.concat(n(a[u],p));for(s=l.length,u=0;u<s;u++){o=t(l[u],o),/\s{0,}\s{0,}SELECT\s{0,}/.exec(l[u])&&(l[u]=l[u].replace(/\,/g,",\n"+p+p)),/\s{0,}\s{0,}SET\s{0,}/.exec(l[u])&&(l[u]=l[u].replace(/\,/g,",\n"+p+p)),/\s{0,}\(\s{0,}SELECT\s{0,}/.exec(l[u])?(i++,g+=h[i]+l[u]):/\'/.exec(l[u])?(o<1&&i&&i--,g+=l[u]):(g+=h[i]+l[u],o<1&&i&&i--)}return g=g.replace(/^\n{1,}/,"").replace(/\n{1,}/g,"\n"),g},a.prototype.xmlmin=function(e,r){var c=r?e:e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"").replace(/[ \r\n\t]{1,}xmlns/g," xmlns");return c.replace(/>\s{0,}</g,"><")},a.prototype.jsonmin=function(e){return"undefined"===typeof JSON?e:JSON.stringify(JSON.parse(e),null,0)},a.prototype.cssmin=function(e,r){var c=r?e:e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"");return c.replace(/\s{1,}/g," ").replace(/\{\s{1,}/g,"{").replace(/\}\s{1,}/g,"}").replace(/\;\s{1,}/g,";").replace(/\/\*\s{1,}/g,"/*").replace(/\*\/\s{1,}/g,"*/")},a.prototype.sqlmin=function(e){return e.replace(/\s{1,}/g," ").replace(/\s{1,}\(/,"(").replace(/\s{1,}\)/,")")},e.exports=new a},"38e4":function(e,r,c){},6621:function(e,r,c){"use strict";c.r(r),c.d(r,"DemoXml",(function(){return u}));var a=function(){var e=this,r=e.$createElement,c=e._self._c||r;return c("div",{staticClass:"xml"},[c("div",{staticClass:"xml-content"},[c("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.xml_show,expression:"xml_show"}]},[e._v("      "),c("code",{ref:"code",staticClass:"highlight_s",attrs:{contenteditable:"true"}}),e._v("\n    ")])]),c("z-btn",{on:{click:e.getXml}},[e._v("获取xml")]),c("input",{ref:"upload",staticClass:"outputlist_upload",attrs:{type:"file",accept:".xml"},on:{change:e.onSelect}})],1)},t=[],n=c("1da1"),s=(c("d3b7"),c("96cf"),c("347e")),l=c.n(s),i={name:"Xml",data:function(){return{xml_show:null}},created:function(){var e=this.loadXMLDoc("http://localhost:8899/test.xml");this.xml_show=l.a.xml(e)},methods:{getXml:function(){console.log(this.$refs.code.innerText)},onSelect:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.readXMLDoc();case 2:c=r.sent,e.xml_show=l.a.xml(c);case 4:case"end":return r.stop()}}),r)})))()},readXMLDoc:function(){var e=this;return new Promise((function(r,c){var a=e.$refs.upload.files,t=new FileReader;t.readAsText(a[0],"UTF-8"),t.onload=function(e){r(e.target.result)},t.onerror=function(e){c(e)}}))},loadXMLDoc:function(e){var r=null,c=null;r=window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r.open("GET",e,!1),r.send();try{var a=new XMLSerializer;c=a.serializeToString(r.responseXML)}catch(t){c=r.responseXML}return c}}},p=i,o=(c("b7ad"),c("2877")),g=Object(o["a"])(p,a,t,!1,null,"1a61f14c",null),u=g.exports;r["default"]=u},b7ad:function(e,r,c){"use strict";c("38e4")}}]);
//# sourceMappingURL=chunk-375f8298.74b3f130.js.map