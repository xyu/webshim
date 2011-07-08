Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,i,s,p){i.inputTypes=i.inputTypes||{};var r=i.cfg.forms,n,k=function(b){return typeof b=="number"||b&&b==b*1},o=i.inputTypes,m={radio:1,checkbox:1};i.addInputType=function(b,e){o[b]=e};var l={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},h={valueMissing:function(b,e,j){if(!b.attr("required"))return false;var q=
false;if(!("type"in j))j.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();if(j.nodeName=="select"){if(e=!e){if(!(e=b[0].selectedIndex<0)){b=b[0];if(b.type=="select-one"&&b.size<2){b=a("> option:first-child",b);e=!b.attr("disabled")&&b.attr("selected")}else e=false}e=e}b=e}else b=m[j.type]?j.type=="checkbox"?!b.is(":checked"):!a(b[0].form&&b[0].name?b[0].form[b[0].name]:[]).filter(":checked")[0]:!e;return q=b},tooLong:function(b,e,j){if(e===""||j.nodeName=="select")return false;b=b.attr("maxlength");
j=false;var q=e.length;if(q&&b>=0&&e.replace&&k(b))j=q>b;return j},typeMismatch:function(b,e,j){if(e===""||j.nodeName=="select")return false;var q=false;if(!("type"in j))j.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();if(o[j.type]&&o[j.type].mismatch)q=o[j.type].mismatch(e,b);return q},patternMismatch:function(b,e,j){if(e===""||j.nodeName=="select")return false;b=b.attr("pattern");if(!b)return false;return!RegExp("^(?:"+b+")$").test(e)}};i.addValidityRule=function(b,e){h[b]=e};a.event.special.invalid=
{add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=this.form||this;if(!a.data(b,"invalidEventShim")){a(b).data("invalidEventShim",true).bind("submit",a.event.special.invalid.handler);(b=a(b).data("events").submit)&&b.length>1&&b.unshift(b.pop())}},teardown:a.noop,handler:function(b){if(!(b.type!="submit"||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.attr(b.target,"novalidate")!=null||a.data(b.target,"novalidate"))){n=true;b.testedValidity=
true;if(!a(b.target).checkValidity()){this===p&&i.warn("always embed HTML5 content using .prependWebshim, .appendWebshim, .htmlWebshim etc.");b.stopImmediatePropagation();return n=false}n=false}}};a(p).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return false}};var c=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return c.apply(this,
arguments)}});i.addInputType("email",{mismatch:function(){var b=r.emailReg||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(e){return!b.test(e)}}()});i.addInputType("url",{mismatch:function(){var b=r.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(e){return!b.test(e)}}()});i.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return true}},willValidate:{value:false},setCustomValidity:{value:a.noop},validity:{writeable:false,get:function(){return a.extend({},l)}}},"prop");var f=function(b){var e,j=a.prop(b,"validity");if(j)a.data(b,"cachedValidity",j);else return true;if(!j.valid){e=a.Event("invalid");var q=a(b).trigger(e);if(n&&!f.unhandledInvalids&&!e.isDefaultPrevented()){i.validityAlert.showFor(q);
f.unhandledInvalids=true}}a.removeData(b,"cachedValidity",false);return j.valid};i.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=true,e=a(this.elements).filter(function(){return!i.data(this,"nativeElement")});f.unhandledInvalids=false;for(var j=0,q=e.length;j<q;j++)f(e[j])||(b=false);return b}}});i.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){f.unhandledInvalids=false;return f(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){i.data(this,
"customvalidationMessage",""+b)}},willValidate:{set:a.noop,get:function(){var b={button:1,reset:1,hidden:1};return function(){var e=a(this).getNativeElement()[0];return!!(!e.disabled&&!e.readOnly&&!b[e.type]&&(!e.form||a.attr(e.form,"novalidate")==null))}}()},validity:{set:a.noop,get:function(){var b=a(this).getNativeElement(),e=b[0],j=a.data(e,"cachedValidity");if(j)return j;j=a.extend({},l);if(!a.prop(e,"willValidate")||e.type=="submit")return j;var q=b.val(),u={nodeName:e.nodeName.toLowerCase()};
j.customError=!!i.data(e,"customvalidationMessage");if(j.customError)j.valid=false;a.each(h,function(v,t){if(t(b,q,u)){j[v]=true;j.valid=false}});e.setAttribute("aria-invalid",j.valid?"false":"true");e=b=null;return j}}},"prop");i.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){this.setAttribute("aria-required",!!b+"")},initAttr:true});i.reflectProperties(["input"],["pattern"]);i.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(b){this.setAttribute("maxlength",
""+b)},get:function(){var b=this.getAttribute("maxlength");return b==null?undefined:b}},prop:{set:function(b){if(k(b)){if(b<0)throw"INDEX_SIZE_ERR";this.setAttribute("maxlength",parseInt(b,10))}else this.setAttribute("maxlength","0")},get:function(){var b=this.getAttribute("maxlength");return k(b)&&b>=0?parseInt(b,10):-1}}});i.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}});!a.support.getSetAttribute&&
a("<form novalidate></form>").attr("novalidate")==null&&i.defineNodeNameProperty("form","novalidate",{attr:{set:function(b){this.setAttribute("novalidate",""+b)},get:function(){var b=this.getAttribute("novalidate");return b==null?undefined:b}}});var d=function(){var b=this;if(b.form){a.data(b.form,"novalidate",true);setTimeout(function(){a.removeData(b.form,"novalidate")},1)}},g={submit:1,button:1};a(p).bind("click",function(b){b.target&&b.target.form&&g[b.target.type]&&a.attr(b.target,"formnovalidate")!=
null&&d.call(b.target)});i.addReady(function(b,e){var j=a("form",b).add(e.filter("form")).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",d).end();setTimeout(function(){try{if(p.activeElement&&"form"in p.activeElement)return}catch(q){return}var u=true;a("input, select, textarea",j).each(function(){if(!u)return false;if(this.getAttribute("autofocus")!=null){u=false;var v=i.getVisualInput(this),t=a("input, select, textarea, .ui-slider-handle",v).filter(":visible:first");t[0]||(t=
v);try{t[0].focus()}catch(w){}}})},0)})});
jQuery.webshims.ready("dom-support form-core",function(a,i,s){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!(Modernizr.input.placeholder&&Modernizr.textareaPlaceholder)){var p=i.cfg.forms.placeholderType=="over",r=["textarea"];Modernizr.input.placeholder||r.push("input");var n=function(l,h,c){if(!p&&l.type!="password"){if(c===false)c=a.prop(l,"value");l.value=c}h.box.removeClass("placeholder-visible")},k=function(l,h,c,f,d){if(!f){f=a.data(l,"placeHolder");if(!f)return}if(d==
"focus"||!d&&l===document.activeElement){if(l.type=="password"||p||a(l).hasClass("placeholder-visible"))n(l,f,"")}else{if(h===false)h=a.prop(l,"value");if(h)n(l,f,h);else{if(c===false)c=a.attr(l,"placeholder")||"";if(c&&!h){h=f;c=c;if(c===false)c=a.attr(l,"placeholder")||"";if(!p&&l.type!="password")l.value=c;h.box.addClass("placeholder-visible")}else n(l,f,h)}}},o=function(l){l=a(l);var h=l.prop("id"),c=!!(l.attr("title")||l.attr("aria-labeledby"));if(!c&&h)c=!!a('label[for="'+h+'"]',l[0].form)[0];
return a(c?'<span class="placeholder-text"></span>':'<label for="'+(h||a.webshims.getID(l))+'" class="placeholder-text"></label>')},m=function(){var l={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(h){var c=a.data(h,"placeHolder");if(c)return c;c=a.data(h,"placeHolder",{text:o(h)});a(h).bind("focus.placeholder blur.placeholder",function(g){k(this,false,false,c,g.type)});h.form&&a(h.form).bind("reset.placeholder",function(g){setTimeout(function(){k(h,false,false,c,g.type)},
0)});if(h.type=="password"||p){c.box=a(h).wrap('<span class="placeholder-box placeholder-box-'+(h.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(h).bind("mousedown.placeholder",function(){k(this,false,false,c,"focus");try{setTimeout(function(){h.focus()},0)}catch(g){}return false});a.each(["Left","Top"],function(g,b){var e=(parseInt(a.curCSS(h,"padding"+b),10)||0)+Math.max(parseInt(a.curCSS(h,"margin"+b),10)||0,0)+(parseInt(a.curCSS(h,"border"+b+"Width"),10)||0);c.text.css("padding"+
b,e)});a.curCSS(h,"lineHeight");var f={width:a(h).width(),height:a(h).height()},d=a.curCSS(h,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(g,b){var e=a.curCSS(h,b);c.text.css(b)!=e&&c.text.css(b,e)});f.width&&f.height&&c.text.css(f);d!=="none"&&c.box.addClass("placeholder-box-"+d)}else{f=function(g){if(a(h).hasClass("placeholder-visible")){n(h,c,"");g&&g.type=="submit"&&setTimeout(function(){g.isDefaultPrevented()&&k(h,false,false,c)},9)}};if(a.nodeName(c.text[0],"label"))c.text.hide()[a.browser.msie?
"insertBefore":"insertAfter"](h);a(s).bind("beforeunload",f);c.box=a(h);h.form&&a(h.form).submit(f)}return c},update:function(h,c){if(l[a.prop(h,"type")]||a.nodeName(h,"textarea")){var f=m.create(h);f.text.text(c);k(h,false,c,f)}}}}();a.webshims.publicMethods={pHolder:m};r.forEach(function(l){i.defineNodeNameProperty(l,"placeholder",{attr:{set:function(h){i.contentAttr(this,"placeholder",h);m.update(this,h)},get:function(){return i.contentAttr(this,"placeholder")}},reflect:true,initAttr:true})});
r.forEach(function(l){var h={},c;["attr","prop"].forEach(function(f){h[f]={set:function(d){var g=i.contentAttr(this,"placeholder"),b=c[f]._supset.call(this,d);g&&"value"in this&&k(this,d,g);return b},get:function(){return a(this).hasClass("placeholder-visible")?"":c[f]._supget.call(this)}}});c=i.defineNodeNameProperty(l,"value",h)})}});
jQuery.webshims.ready("dom-support",function(a,i,s,p,r){i.propTypes.element=function(n){i.createPropDefault(n,"attr");if(!n.prop)n.prop={get:function(){var k=n.attr.get.call(this);if(k)if((k=a("#"+k)[0])&&n.propNodeName&&!a.nodeName(k,n.propNodeName))k=null;return k||null},writeable:false}};(function(){if(!("value"in p.createElement("output"))){i.defineNodeNameProperty("output","value",{prop:{set:function(k){var o=a.data(this,"outputShim");o||(o=n(this));o(k)},get:function(){return i.contentAttr(this,
"value")||a(this).text()||""}}});i.onNodeNamesPropertyModify("input","value",function(k,o,m){if(m!="removeAttr")(o=a.data(this,"outputShim"))&&o(k)});var n=function(k){if(!k.getAttribute("aria-live")){k=a(k);var o=(k.text()||"").trim(),m=k.attr("id"),l=k.attr("for"),h=a('<input class="output-shim" type="hidden" name="'+(k.attr("name")||"")+'" value="'+o+'" style="display: none" />').insertAfter(k),c=h[0].form||p,f=function(d){h[0].value=d;d=h[0].value;k.text(d);i.contentAttr(k[0],"value",d)};k[0].defaultValue=
o;i.contentAttr(k[0],"value",o);k.attr({"aria-live":"polite"});if(m){h.attr("id",m);k.attr("aria-labeldby",i.getID(a('label[for="'+m+'"]',c)))}if(l){m=i.getID(k);l.split(" ").forEach(function(d){(d=c.getElementById(d))&&d.setAttribute("aria-controls",m)})}k.data("outputShim",f);h.data("outputShim",f);return f}};i.addReady(function(k,o){a("output",k).add(o.filter("output")).each(function(){n(this)})})}})();(function(){if(!Modernizr.datalist){var n=0,k={submit:1,button:1,reset:1,hidden:1,range:1,date:1},
o=a.browser.msie&&parseInt(a.browser.version,10)<7,m={},l=function(c){if(!c)return[];if(m[c])return m[c];var f;i.ready("json-storage",function(){try{f=JSON.parse(localStorage.getItem("storedDatalistOptions"+c))}catch(d){}m[c]=f||[]});return f||[]},h={_create:function(c){if(!k[(c.input.getAttribute("type")||"").toLowerCase()||c.input.type]){var f=c.datalist,d=a.data(c.input,"datalistWidget");if(f&&d&&d.datalist!==f){d.datalist=f;d.id=c.id;d._resetListCached()}else if(f){if(!(d&&d.datalist===f)){n++;
var g=this;this.timedHide=function(){clearTimeout(g.hideTimer);g.hideTimer=setTimeout(a.proxy(g,"hideList"),9)};this.datalist=f;this.id=c.id;this.lazyIDindex=n;this.hasViewableData=true;this._autocomplete=a.attr(c.input,"autocomplete");a.data(c.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=c.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseover.datalistWidget mousedown.datalistWidget click.datalistWidget",
function(b){var e=a("li:not(.hidden-item)",g.shadowList),j=b.type=="mousedown"||b.type=="click";g.markItem(e.index(b.target),j,e);b.type=="click"&&g.hideList();return b.type!="mousedown"}).bind("focusout",this.timedHide);c.input.setAttribute("autocomplete","off");a(c.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",a.proxy(this,"showHideOptions")).bind("keydown.datalistWidget",function(b){var e=b.keyCode;if(e==40&&!g.showList()){g.markItem(g.index+1,true);return false}if(g.isListVisible){if(e==
38){g.markItem(g.index-1,true);return false}if(!b.shiftKey&&(e==33||e==36)){g.markItem(0,true);return false}if(!b.shiftKey&&(e==34||e==35)){b=a("li:not(.hidden-item)",g.shadowList);g.markItem(b.length-1,true,b);return false}if(e==13||e==27){if(e==13){b=a("li.active-item:not(.hidden-item)",g.shadowList);if(b[0]){a.prop(g.input,"value",b.attr("data-value"));a(g.input).triggerHandler("updateInput")}}g.hideList();return false}}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&
g.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();c.input.form&&c.input.id&&a(c.input.form).bind("submit.datalistWidget"+c.input.id,function(){var b=a.prop(c.input,"value");g.storedOptions=l(c.input.name||c.input.id);if(b&&a.inArray(b,g.storedOptions)==-1){g.storedOptions.push(b);b=c.input.name||c.input.id;var e=g.storedOptions;if(b){e=e||
[];try{localStorage.setItem("storedDatalistOptions"+b,JSON.stringify(e))}catch(j){}}}});a(s).bind("unload",function(){g.destroy()})}}else d&&d.destroy()}},destroy:function(){var c=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(p).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");c===r?this.input.removeAttribute("autocomplete"):
a(this.input).attr("autocomplete",c)},_resetListCached:function(){var c=this;this.needsUpdate=true;this.lastUpdatedValue=false;this.lastUnfoundValue="";if(!this.updateTimer)this.updateTimer=setTimeout(function(){c.updateListOptions()},this.isListVisible||s.QUnit?0:40*this.lazyIDindex)},updateListOptions:function(){this.needsUpdate=false;clearTimeout(this.updateTimer);this.updateTimer=false;this.shadowList.css({fontSize:a.curCSS(this.input,"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});
var c='<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">',f=[],d=[];a("option",this.datalist).each(function(g){if(!this.disabled){var b={value:a(this).val()||"",text:a.trim(a.attr(this,"label")||this.textContent||this.innerText||a.text([this])||""),className:this.className||"",style:a.attr(this,"style")||""};if(!b.text)b.text=b.value;f[g]=b.value;d[g]=b}});this.storedOptions=l(this.input.name||this.input.id);this.storedOptions.forEach(function(g){a.inArray(g,
f)==-1&&d.push({value:g,text:g,className:"",style:""})});d.forEach(function(g){var b=g.value.indexOf('"')!=-1?"'"+g.value+"'":'"'+g.value+'"';c+="<li data-value="+b+' class="'+g.className+'" style="'+g.style+'" tabindex="-1" role="listitem">'+g.text+"</li>"});c+="</ul>";this.arrayOptions=d;this.shadowList.html(c);a.fn.bgIframe&&o&&this.shadowList.bgIframe();this.isListVisible&&this.showHideOptions()},showHideOptions:function(){var c=a.prop(this.input,"value").toLowerCase();if(!(c===this.lastUpdatedValue||
this.lastUnfoundValue&&c.indexOf(this.lastUnfoundValue)===0)){this.lastUpdatedValue=c;var f=false,d=a("li",this.shadowList);if(c)this.arrayOptions.forEach(function(g,b){if(!("lowerText"in g)){g.lowerText=g.text.toLowerCase();g.lowerValue=g.value.toLowerCase()}if(g.lowerText.indexOf(c)!==-1||g.lowerValue.indexOf(c)!==-1){a(d[b]).removeClass("hidden-item");f=true}else a(d[b]).addClass("hidden-item")});else{d.removeClass("hidden-item");f=true}if(this.hasViewableData=f)this.showList();else{this.lastUnfoundValue=
c;this.hideList()}}},showList:function(){if(this.isListVisible)return false;this.needsUpdate&&this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return false;var c=this,f=a(this.input).offset();f.top+=a(this.input).outerHeight();f.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);if(o){this.shadowList.css("height","auto");this.shadowList.height()>250&&this.shadowList.css("height",
220)}this.shadowList.css(f).addClass("datalist-visible");this.isListVisible=true;a(p).bind("mousedown.datalist"+this.id+" focusin.datalist"+this.id,function(d){if(d.target===c.input||c.shadowList[0]===d.target||a.contains(c.shadowList[0],d.target)){clearTimeout(c.hideTimer);setTimeout(function(){clearTimeout(c.hideTimer)},0)}else c.timedHide()});return true},hideList:function(){if(!this.isListVisible)return false;this.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");
this.index=-1;this.isListVisible=false;a(this.input).removeAttr("aria-activedescendant");a(p).unbind(".datalist"+this.id);return true},scrollIntoView:function(c){var f=a("> ul",this.shadowList),d=c.position();d.top-=(parseInt(f.css("paddingTop"),10)||0)+(parseInt(f.css("marginTop"),10)||0)+(parseInt(f.css("borderTopWidth"),10)||0);if(d.top<0)this.shadowList.scrollTop(this.shadowList.scrollTop()+d.top-2);else{d.top+=c.outerHeight();c=this.shadowList.height();d.top>c&&this.shadowList.scrollTop(this.shadowList.scrollTop()+
(d.top-c)+2)}},markItem:function(c,f,d){d=d||a("li:not(.hidden-item)",this.shadowList);if(d.length){if(c<0)c=d.length-1;else if(c>=d.length)c=0;d.removeClass("active-item");this.shadowList.addClass("list-item-active");d=d.filter(":eq("+c+")").addClass("active-item");if(f){a.prop(this.input,"value",d.attr("data-value"));a.attr(this.input,"aria-activedescendant",a.webshims.getID(d));a(this.input).triggerHandler("updateInput");this.scrollIntoView(d)}this.index=c}}};(function(){i.defineNodeNameProperties("input",
{list:{attr:{get:function(){var c=i.contentAttr(this,"list");return c==null?r:c},set:function(c){i.contentAttr(this,"list",c);i.objectCreate(h,r,{input:this,id:c,datalist:a.prop(this,"list")})}},initAttr:true,reflect:true,propType:"element",propNodeName:"datalist"},selectedOption:{prop:{writeable:false,get:function(){var c=a.prop(this,"list"),f=null,d;if(!c)return f;d=a.attr(this,"value");if(!d)return f;c=a.prop(c,"options");if(!c.length)return f;a.each(c,function(g,b){if(d==a.prop(b,"value")){f=
b;return false}});return f}}},autocomplete:{attr:{get:function(){var c=a.data(this,"datalistWidget");if(c)return c._autocomplete;return"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(c){var f=a.data(this,"datalistWidget");if(f){f._autocomplete=c;c=="off"&&f.hideList()}else if("autocomplete"in this)this.autocomplete=c;else this.setAttribute("autocomplete",c)}}}});i.defineNodeNameProperty("datalist","options",{prop:{writeable:false,get:function(){var c=a("select",
this);return c[0]?c[0].options:[]}}});i.addReady(function(c,f){f.filter("select, option").each(function(){var d=this.parentNode,g=a.nodeName(d,"datalist");if(d&&!g){d=d.parentNode;g=a.nodeName(d,"datalist")}d&&g&&a(d).triggerHandler("updateDatalist")})})})()}})();(function(){var n={updateInput:1,input:1},k={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},o=function(m){var l,h=m.prop("value"),c=function(b){if(m){var e=m.prop("value");if(e!==h){h=e;if(!b||!n[b.type])i.triggerInlineForm&&
i.triggerInlineForm(m[0],"input")}}},f,d=function(){clearTimeout(f);f=setTimeout(c,9)},g=function(){m.unbind("focusout",g).unbind("keyup keypress keydown paste cut",d).unbind("input change updateInput",c);clearInterval(l);setTimeout(function(){c();m=null},1)};clearInterval(l);l=setInterval(c,99);d();m.bind("keyup keypress keydown paste cut",d).bind("focusout",g).bind("input updateInput change",c)};a(p).bind("focusin",function(m){if(m.target&&m.target.type&&!m.target.readOnly&&!m.target.disabled&&
(m.target.nodeName||"").toLowerCase()=="input"&&!k[m.target.type])o(a(m.target))})})();i.modules["form-output-datalist"]&&i.isReady("form-output-datalist",true)});
