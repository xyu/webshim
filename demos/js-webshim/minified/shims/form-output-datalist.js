jQuery.webshims.ready("dom-support",function(b,i,q,o,p){i.propTypes.element=function(l){i.createPropDefault(l,"attr");if(!l.prop)l.prop={get:function(){var g=l.attr.get.call(this);if(g)if((g=b("#"+g)[0])&&l.propNodeName&&!b.nodeName(g,l.propNodeName))g=null;return g||null},writeable:false}};(function(){if(!("value"in o.createElement("output"))){i.defineNodeNameProperty("output","value",{prop:{set:function(g){var k=b.data(this,"outputShim");k||(k=l(this));k(g)},get:function(){return i.contentAttr(this,
"value")||b(this).text()||""}}});i.onNodeNamesPropertyModify("input","value",function(g,k,h){if(h!="removeAttr")(k=b.data(this,"outputShim"))&&k(g)});var l=function(g){if(!g.getAttribute("aria-live")){g=b(g);var k=(g.text()||"").trim(),h=g.attr("id"),n=g.attr("for"),m=b('<input class="output-shim" type="hidden" name="'+(g.attr("name")||"")+'" value="'+k+'" style="display: none" />').insertAfter(g),a=m[0].form||o,e=function(c){m[0].value=c;c=m[0].value;g.text(c);i.contentAttr(g[0],"value",c)};g[0].defaultValue=
k;i.contentAttr(g[0],"value",k);g.attr({"aria-live":"polite"});if(h){m.attr("id",h);g.attr("aria-labeldby",i.getID(b('label[for="'+h+'"]',a)))}if(n){h=i.getID(g);n.split(" ").forEach(function(c){(c=a.getElementById(c))&&c.setAttribute("aria-controls",h)})}g.data("outputShim",e);m.data("outputShim",e);return e}};i.addReady(function(g,k){b("output",g).add(k.filter("output")).each(function(){l(this)})})}})();(function(){if(!Modernizr.datalist){var l=0,g={submit:1,button:1,reset:1,hidden:1,range:1,date:1},
k=b.browser.msie&&parseInt(b.browser.version,10)<7,h={},n=function(a){if(!a)return[];if(h[a])return h[a];var e;i.ready("json-storage",function(){try{e=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(c){}h[a]=e||[]});return e||[]},m={_create:function(a){if(!g[(a.input.getAttribute("type")||"").toLowerCase()||a.input.type]){var e=a.datalist,c=b.data(a.input,"datalistWidget");if(e&&c&&c.datalist!==e){c.datalist=e;c.id=a.id;c._resetListCached()}else if(e){if(!(c&&c.datalist===e)){l++;
var d=this;this.timedHide=function(){clearTimeout(d.hideTimer);d.hideTimer=setTimeout(b.proxy(d,"hideList"),9)};this.datalist=e;this.id=a.id;this.lazyIDindex=l;this.hasViewableData=true;this._autocomplete=b.attr(a.input,"autocomplete");b.data(a.input,"datalistWidget",this);this.shadowList=b('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=a.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseover.datalistWidget mousedown.datalistWidget click.datalistWidget",
function(f){var j=b("li:not(.hidden-item)",d.shadowList),r=f.type=="mousedown"||f.type=="click";d.markItem(j.index(f.target),r,j);f.type=="click"&&d.hideList();return f.type!="mousedown"}).bind("focusout",this.timedHide);a.input.setAttribute("autocomplete","off");b(a.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",b.proxy(this,"showHideOptions")).bind("keydown.datalistWidget",function(f){var j=f.keyCode;if(j==40&&!d.showList()){d.markItem(d.index+1,true);return false}if(d.isListVisible){if(j==
38){d.markItem(d.index-1,true);return false}if(!f.shiftKey&&(j==33||j==36)){d.markItem(0,true);return false}if(!f.shiftKey&&(j==34||j==35)){f=b("li:not(.hidden-item)",d.shadowList);d.markItem(f.length-1,true,f);return false}if(j==13||j==27){if(j==13){f=b("li.active-item:not(.hidden-item)",d.shadowList);if(f[0]){b.prop(d.input,"value",f.attr("data-value"));b(d.input).triggerHandler("updateInput")}}d.hideList();return false}}}).bind("focus.datalistWidget",function(){b(this).hasClass("list-focus")&&
d.showList()}).bind("blur.datalistWidget",this.timedHide);b(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",b.proxy(this,"_resetListCached"));this._resetListCached();a.input.form&&a.input.id&&b(a.input.form).bind("submit.datalistWidget"+a.input.id,function(){var f=b.prop(a.input,"value");d.storedOptions=n(a.input.name||a.input.id);if(f&&b.inArray(f,d.storedOptions)==-1){d.storedOptions.push(f);f=a.input.name||a.input.id;var j=d.storedOptions;if(f){j=j||
[];try{localStorage.setItem("storedDatalistOptions"+f,JSON.stringify(j))}catch(r){}}}});b(q).bind("unload",function(){d.destroy()})}}else c&&c.destroy()}},destroy:function(){var a=b.attr(this.input,"autocomplete");b(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();b(o).unbind(".datalist"+this.id);this.input.form&&this.input.id&&b(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");a===p?this.input.removeAttribute("autocomplete"):
b(this.input).attr("autocomplete",a)},_resetListCached:function(){var a=this;this.needsUpdate=true;this.lastUpdatedValue=false;this.lastUnfoundValue="";if(!this.updateTimer)this.updateTimer=setTimeout(function(){a.updateListOptions()},this.isListVisible||q.QUnit?0:40*this.lazyIDindex)},updateListOptions:function(){this.needsUpdate=false;clearTimeout(this.updateTimer);this.updateTimer=false;this.shadowList.css({fontSize:b.curCSS(this.input,"fontSize"),fontFamily:b.curCSS(this.input,"fontFamily")});
var a='<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">',e=[],c=[];b("option",this.datalist).each(function(d){if(!this.disabled){var f={value:b(this).val()||"",text:b.trim(b.attr(this,"label")||this.textContent||this.innerText||b.text([this])||""),className:this.className||"",style:b.attr(this,"style")||""};if(!f.text)f.text=f.value;e[d]=f.value;c[d]=f}});this.storedOptions=n(this.input.name||this.input.id);this.storedOptions.forEach(function(d){b.inArray(d,
e)==-1&&c.push({value:d,text:d,className:"",style:""})});c.forEach(function(d){var f=d.value.indexOf('"')!=-1?"'"+d.value+"'":'"'+d.value+'"';a+="<li data-value="+f+' class="'+d.className+'" style="'+d.style+'" tabindex="-1" role="listitem">'+d.text+"</li>"});a+="</ul>";this.arrayOptions=c;this.shadowList.html(a);b.fn.bgIframe&&k&&this.shadowList.bgIframe();this.isListVisible&&this.showHideOptions()},showHideOptions:function(){var a=b.prop(this.input,"value").toLowerCase();if(!(a===this.lastUpdatedValue||
this.lastUnfoundValue&&a.indexOf(this.lastUnfoundValue)===0)){this.lastUpdatedValue=a;var e=false,c=b("li",this.shadowList);if(a)this.arrayOptions.forEach(function(d,f){if(!("lowerText"in d)){d.lowerText=d.text.toLowerCase();d.lowerValue=d.value.toLowerCase()}if(d.lowerText.indexOf(a)!==-1||d.lowerValue.indexOf(a)!==-1){b(c[f]).removeClass("hidden-item");e=true}else b(c[f]).addClass("hidden-item")});else{c.removeClass("hidden-item");e=true}if(this.hasViewableData=e)this.showList();else{this.lastUnfoundValue=
a;this.hideList()}}},showList:function(){if(this.isListVisible)return false;this.needsUpdate&&this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return false;var a=this,e=b(this.input).offset();e.top+=b(this.input).outerHeight();e.width=b(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);if(k){this.shadowList.css("height","auto");this.shadowList.height()>250&&this.shadowList.css("height",
220)}this.shadowList.css(e).addClass("datalist-visible");this.isListVisible=true;b(o).bind("mousedown.datalist"+this.id+" focusin.datalist"+this.id,function(c){if(c.target===a.input||a.shadowList[0]===c.target||b.contains(a.shadowList[0],c.target)){clearTimeout(a.hideTimer);setTimeout(function(){clearTimeout(a.hideTimer)},0)}else a.timedHide()});return true},hideList:function(){if(!this.isListVisible)return false;this.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");
this.index=-1;this.isListVisible=false;b(this.input).removeAttr("aria-activedescendant");b(o).unbind(".datalist"+this.id);return true},scrollIntoView:function(a){var e=b("> ul",this.shadowList),c=a.position();c.top-=(parseInt(e.css("paddingTop"),10)||0)+(parseInt(e.css("marginTop"),10)||0)+(parseInt(e.css("borderTopWidth"),10)||0);if(c.top<0)this.shadowList.scrollTop(this.shadowList.scrollTop()+c.top-2);else{c.top+=a.outerHeight();a=this.shadowList.height();c.top>a&&this.shadowList.scrollTop(this.shadowList.scrollTop()+
(c.top-a)+2)}},markItem:function(a,e,c){c=c||b("li:not(.hidden-item)",this.shadowList);if(c.length){if(a<0)a=c.length-1;else if(a>=c.length)a=0;c.removeClass("active-item");this.shadowList.addClass("list-item-active");c=c.filter(":eq("+a+")").addClass("active-item");if(e){b.prop(this.input,"value",c.attr("data-value"));b.attr(this.input,"aria-activedescendant",b.webshims.getID(c));b(this.input).triggerHandler("updateInput");this.scrollIntoView(c)}this.index=a}}};(function(){i.defineNodeNameProperties("input",
{list:{attr:{get:function(){var a=i.contentAttr(this,"list");return a==null?p:a},set:function(a){i.contentAttr(this,"list",a);i.objectCreate(m,p,{input:this,id:a,datalist:b.prop(this,"list")})}},initAttr:true,reflect:true,propType:"element",propNodeName:"datalist"},selectedOption:{prop:{writeable:false,get:function(){var a=b.prop(this,"list"),e=null,c;if(!a)return e;c=b.attr(this,"value");if(!c)return e;a=b.prop(a,"options");if(!a.length)return e;b.each(a,function(d,f){if(c==b.prop(f,"value")){e=
f;return false}});return e}}},autocomplete:{attr:{get:function(){var a=b.data(this,"datalistWidget");if(a)return a._autocomplete;return"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(a){var e=b.data(this,"datalistWidget");if(e){e._autocomplete=a;a=="off"&&e.hideList()}else if("autocomplete"in this)this.autocomplete=a;else this.setAttribute("autocomplete",a)}}}});i.defineNodeNameProperty("datalist","options",{prop:{writeable:false,get:function(){var a=b("select",
this);return a[0]?a[0].options:[]}}});i.addReady(function(a,e){e.filter("select, option").each(function(){var c=this.parentNode,d=b.nodeName(c,"datalist");if(c&&!d){c=c.parentNode;d=b.nodeName(c,"datalist")}c&&d&&b(c).triggerHandler("updateDatalist")})})})()}})();(function(){var l={updateInput:1,input:1},g={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},k=function(h){var n,m=h.prop("value"),a=function(f){if(h){var j=h.prop("value");if(j!==m){m=j;if(!f||!l[f.type])i.triggerInlineForm&&
i.triggerInlineForm(h[0],"input")}}},e,c=function(){clearTimeout(e);e=setTimeout(a,9)},d=function(){h.unbind("focusout",d).unbind("keyup keypress keydown paste cut",c).unbind("input change updateInput",a);clearInterval(n);setTimeout(function(){a();h=null},1)};clearInterval(n);n=setInterval(a,99);c();h.bind("keyup keypress keydown paste cut",c).bind("focusout",d).bind("input updateInput change",a)};b(o).bind("focusin",function(h){if(h.target&&h.target.type&&!h.target.readOnly&&!h.target.disabled&&
(h.target.nodeName||"").toLowerCase()=="input"&&!g[h.target.type])k(b(h.target))})})();i.modules["form-output-datalist"]&&i.isReady("form-output-datalist",true)});
