var e,t,i,n,r,o,s,l,d,a,u,h,c,p,_={},f=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function g(e,t){for(var i in t)e[i]=t[i];return e}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,i){var n,r,o,s={};for(o in t)"key"==o?n=t[o]:"ref"==o?r=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?d.call(arguments,2):i),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===s[o]&&(s[o]=e.defaultProps[o]);return v(e,s,n,r,null)}function v(e,t,i,n,r){var o={type:e,props:t,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=a.vnode&&a.vnode(o),o}function k(){return{current:null}}function w(e){return e.children}function M(e,t){this.props=e,this.context=t}function R(e,t){if(null==t)return e.__?R(e.__,e.__.__k.indexOf(e)+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?R(e):null}function W(e){(!e.__d&&(e.__d=!0)&&h.push(e)&&!x.__r++||p!==a.debounceRendering)&&((p=a.debounceRendering)||c)(x)}function x(){for(var e;x.__r=h.length;)e=h.sort(function(e,t){return e.__v.__b-t.__v.__b}),h=[],e.some(function(e){var t,i,n,r,o;e.__d&&(r=(n=e.__v).__e,(o=e.__P)&&(t=[],(i=g({},n)).__v=n.__v+1,A(o,n,i,e.__n,void 0!==o.ownerSVGElement,null!=n.__h?[r]:null,t,null==r?R(n):r,n.__h),T(t,n),n.__e!=r&&function e(t){var i,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,i=0;i<t.__k.length;i++)if(null!=(n=t.__k[i])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return e(t)}}(n)))})}function D(e,t,i,n,r,o,s,l,d,u){var h,c,p,m,g,y,k,M=n&&n.__k||f,W=M.length;for(i.__k=[],h=0;h<t.length;h++)if(null!=(m=i.__k[h]=null==(m=t[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?v(null,m,null,null,m):Array.isArray(m)?v(w,{children:m},null,null,null):m.__b>0?v(m.type,m.props,m.key,null,m.__v):m)){if(m.__=i,m.__b=i.__b+1,null===(p=M[h])||p&&m.key==p.key&&m.type===p.type)M[h]=void 0;else for(c=0;c<W;c++){if((p=M[c])&&m.key==p.key&&m.type===p.type){M[c]=void 0;break}p=null}A(e,m,p=p||_,r,o,s,l,d,u),g=m.__e,(c=m.ref)&&p.ref!=c&&(k||(k=[]),p.ref&&k.push(p.ref,null,m),k.push(c,m.__c||g,m)),null!=g?(null==y&&(y=g),"function"==typeof m.type&&m.__k===p.__k?m.__d=d=function e(t,i,n){for(var r,o=t.__k,s=0;o&&s<o.length;s++)(r=o[s])&&(r.__=t,i="function"==typeof r.type?e(r,i,n):C(n,r,r,o,r.__e,i));return i}(m,d,e):d=C(e,m,p,M,g,d),"function"==typeof i.type&&(i.__d=d)):d&&p.__e==d&&d.parentNode!=e&&(d=R(p))}for(i.__e=y,h=W;h--;)null!=M[h]&&("function"==typeof i.type&&null!=M[h].__e&&M[h].__e==i.__d&&(i.__d=R(n,h+1)),function e(t,i,n){var r,o;if(a.unmount&&a.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||H(r,null,i)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){a.__e(e,i)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&e(r[o],i,"function"!=typeof t.type);n||null==t.__e||b(t.__e),t.__e=t.__d=void 0}(M[h],M[h]));if(k)for(h=0;h<k.length;h++)H(k[h],k[++h],k[++h])}function C(e,t,i,n,r,o){var s,l,d;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(null==i||r!=o||null==r.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(r),s=null;else{for(l=o,d=0;(l=l.nextSibling)&&d<n.length;d+=2)if(l==r)break e;e.insertBefore(r,o),s=o}return void 0!==s?s:r.nextSibling}function I(e,t,i){"-"===t[0]?e.setProperty(t,i):e[t]=null==i?"":"number"!=typeof i||m.test(t)?i:i+"px"}function S(e,t,i,n,r){var o;e:if("style"===t){if("string"==typeof i)e.style.cssText=i;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)i&&t in i||I(e.style,t,"");if(i)for(t in i)n&&i[t]===n[t]||I(e.style,t,i[t])}}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase() in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=i,i?n||e.addEventListener(t,o?P:L,o):e.removeEventListener(t,o?P:L,o);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==i?"":i;break e}catch(e){}"function"==typeof i||(null!=i&&(!1!==i||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,i):e.removeAttribute(t))}}function L(e){this.l[e.type+!1](a.event?a.event(e):e)}function P(e){this.l[e.type+!0](a.event?a.event(e):e)}function A(e,t,i,n,r,o,s,l,u){var h,c,p,f,m,y,v,k,W,x,C,I=t.type;if(void 0!==t.constructor)return null;null!=i.__h&&(u=i.__h,l=t.__e=i.__e,t.__h=null,o=[l]),(h=a.__b)&&h(t);try{e:if("function"==typeof I){if(k=t.props,W=(h=I.contextType)&&n[h.__c],x=h?W?W.props.value:h.__:n,i.__c?v=(c=t.__c=i.__c).__=c.__E:("prototype"in I&&I.prototype.render?t.__c=c=new I(k,x):(t.__c=c=new M(k,x),c.constructor=I,c.render=B),W&&W.sub(c),c.props=k,c.state||(c.state={}),c.context=x,c.__n=n,p=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=I.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=g({},c.__s)),g(c.__s,I.getDerivedStateFromProps(k,c.__s))),f=c.props,m=c.state,p)null==I.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==I.getDerivedStateFromProps&&k!==f&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(k,x),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(k,c.__s,x)||t.__v===i.__v){c.props=k,c.state=c.__s,t.__v!==i.__v&&(c.__d=!1),c.__v=t,t.__e=i.__e,t.__k=i.__k,t.__k.forEach(function(e){e&&(e.__=t)}),c.__h.length&&s.push(c);break e}null!=c.componentWillUpdate&&c.componentWillUpdate(k,c.__s,x),null!=c.componentDidUpdate&&c.__h.push(function(){c.componentDidUpdate(f,m,y)})}c.context=x,c.props=k,c.state=c.__s,(h=a.__r)&&h(t),c.__d=!1,c.__v=t,c.__P=e,h=c.render(c.props,c.state,c.context),c.state=c.__s,null!=c.getChildContext&&(n=g(g({},n),c.getChildContext())),p||null==c.getSnapshotBeforeUpdate||(y=c.getSnapshotBeforeUpdate(f,m)),C=null!=h&&h.type===w&&null==h.key?h.props.children:h,D(e,Array.isArray(C)?C:[C],t,i,n,r,o,s,l,u),c.base=t.__e,t.__h=null,c.__h.length&&s.push(c),v&&(c.__E=c.__=null),c.__e=!1}else null==o&&t.__v===i.__v?(t.__k=i.__k,t.__e=i.__e):t.__e=function(e,t,i,n,r,o,s,l){var a,u,h,c=i.props,p=t.props,f=t.type,m=0;if("svg"===f&&(r=!0),null!=o){for(;m<o.length;m++)if((a=o[m])&&"setAttribute"in a==!!f&&(f?a.localName===f:3===a.nodeType)){e=a,o[m]=null;break}}if(null==e){if(null===f)return document.createTextNode(p);e=r?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,p.is&&p),o=null,l=!1}if(null===f)c===p||l&&e.data===p||(e.data=p);else{if(o=o&&d.call(e.childNodes),u=(c=i.props||_).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!l){if(null!=o)for(c={},m=0;m<e.attributes.length;m++)c[e.attributes[m].name]=e.attributes[m].value;(h||u)&&(h&&(u&&h.__html==u.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(function(e,t,i,n,r){var o;for(o in i)"children"===o||"key"===o||o in t||S(e,o,null,i[o],n);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||i[o]===t[o]||S(e,o,t[o],i[o],n)}(e,p,c,r,l),h)t.__k=[];else if(D(e,Array.isArray(m=t.props.children)?m:[m],t,i,n,r&&"foreignObject"!==f,o,s,o?o[0]:i.__k&&R(i,0),l),null!=o)for(m=o.length;m--;)null!=o[m]&&b(o[m]);l||("value"in p&&void 0!==(m=p.value)&&(m!==e.value||"progress"===f&&!m||"option"===f&&m!==c.value)&&S(e,"value",m,c.value,!1),"checked"in p&&void 0!==(m=p.checked)&&m!==e.checked&&S(e,"checked",m,c.checked,!1))}return e}(i.__e,t,i,n,r,o,s,u);(h=a.diffed)&&h(t)}catch(e){t.__v=null,(u||null!=o)&&(t.__e=l,t.__h=!!u,o[o.indexOf(l)]=null),a.__e(e,t,i)}}function T(e,t){a.__c&&a.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){a.__e(e,t.__v)}})}function H(e,t,i){try{"function"==typeof e?e(t):e.current=t}catch(e){a.__e(e,i)}}function B(e,t,i){return this.constructor(e,i)}d=f.slice,a={__e:function(e,t){for(var i,n,r;t=t.__;)if((i=t.__c)&&!i.__)try{if((n=i.constructor)&&null!=n.getDerivedStateFromError&&(i.setState(n.getDerivedStateFromError(e)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e),r=i.__d),r)return i.__E=i}catch(t){e=t}throw e}},u=0,M.prototype.setState=function(e,t){var i;i=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof e&&(e=e(g({},i),this.props)),e&&g(i,e),null!=e&&this.__v&&(t&&this.__h.push(t),W(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),W(this))},M.prototype.render=w,h=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,x.__r=0,(e=l||(l={}))[e.Image=0]="Image",e[e.Video=1]="Video";const F=[{type:0,title:"Office Concept Art",description:"<b>3d Digital Media</b>\nDecember 2023\n<i>Independent Work</i>\n\nA potential design for an office complex abandoned in the 60's. Made in Blender",url:"res/art/officetest.png"},{type:0,title:"Saprophytic Poster",description:"<b>2d Digital Media</b>\nOctober 2024\n<i>Independent Work</i>\n\nAn experiment on what promotional art for a horror game I've been designing would look like. Painted in Clip Studio Paint",url:"res/art/saprophyticposterformatted.png"},{type:1,title:"Soothshatter",description:"<b>3d Digital Media</b>\nAugust 2023\n<i>Independent Work</i>\n\nA husk of a person- their identity shattered to the winds. Made in Blender",url:"res/art/shatter.webm"},{type:1,title:"Maya",description:"<b>3d Digital Media</b>\nOctober 2024\n<i>Independent Work</i>\n\nA 3d model of Maya, from the webcomic Kill Six Billion Demons- Rigged to support a full range of motion and facial expressions. Made in Blender",url:"res/art/Maya.mp4"},{type:0,title:"Tarot Cards",description:"<b>2d Digital Media</b>\nAugust 2024\n<i>Independent Work</i>\n\nA series of lighting studies made through the form of Tarot Cards. From top left to bottom right: The High Priestess, The Magician, The Empress, and The Fool.",url:"res/art/tarotmerged.png"},{type:0,title:"Cover Art",description:"<b>2d Digital Media</b>\nJuly 2024\n<i>Independent Work</i>\n\nCover art for a story I've been writing in my spare time. Painted from scratch in Clip Studio Paint.",url:"res/art/parasiticinfluences.png"},{type:1,title:"Camcorder",description:"<b>3d Digital Media</b>\nJune 2024\n<i>Independent Work</i>\n\nA 3d model of a fictional tape camcorder, made Game Ready. 4,449 Tris, with a 2048x2048 PBR texture set.",url:"res/art/camcorder.webm"},{type:1,title:"Camcorder Viewmodel",description:"<b>3d Digital Media</b>\nJune 2024\n<i>Independent Work</i>\n\nA series of viewmodel animations for said camcorder. The hand and rigging are also made by me.",url:"res/art/viewmodelcam.webm"},{type:0,title:"Lillian Keyton",description:"<b>3d Digital Media</b>\nApril 2023\n<i>Independent Work</i>\n\nFanart of Lillian Keyton, from the webcomic 'Soulwinder'. Made in Blender",url:"res/art/soulwinder.webp"},{type:0,title:"Hollow Knight Cosplay",description:"<b>Physical Costume</b>\nOctober 2023\n<i>Independent Work</i>\n\nA costume of the Hollow Knight from 'Hollow Knight'- the mask is 3d printed with LEDS run through the eyes, the nail is foam sliced and stacked around a dowel rod, and the cloak is a curtain resewn into strands.",url:"res/art/theKnight.jpg"},{type:0,title:"Replacement",description:"<b>3d Digital Media</b>\nSeptember 2023\n<i>Independent Work</i>\n\nA fake advertisement for prosthetic upgrades. Made in Blender",url:"res/art/molddroid.webp"},{type:0,title:"Tourim Posters",description:"<b>3d Digital Media</b>\nDecember 2023\n<i>Independent Work</i>\n\nA series of fake tourism posters for locations in Canada. Made in Blender",url:"res/art/merge.png"},{type:1,title:"Mallory",description:"<b>3d Digital Media</b>\nAugust 2023\n<i>Independent Work</i>\n\nFan art of Mallory, from the webcomic 'The Beast of Hadingley Hill'. Made in Blender",url:"res/art/hadingleyturn2.mp4"},{type:0,title:"BC Tourism Poster",description:"<b>3d Digital Media</b>\nDecember 2022\n<i>Independent Work</i>\n\nA fake advertisement for the woods of BC. Made in Blender",url:"res/art/tourismposterbc.webp"},{type:1,title:"Forgotten Church",description:"<b>3d Digital Media</b>\nJanuary 2023\n<i>Independent Work</i>\n\nA shattered point in space- a eulogy to the forgotton. Made in Blender",url:"res/art/thestars.webm"},{type:0,title:"City Skyline",description:"<b>3d Digital Media</b>\nJune 2023\n<i>Independent Work</i>\n\nA city that never sleeps. Made in Blender",url:"res/art/skiview.webp"},{type:1,title:"Silver Fanart",description:"<b>3d Digital Media</b>\nJuly 2023\n<i>Independent Work</i>\n\nFanart of Silver, from the 2d RPG Oneshot. Made in Blender",url:"res/art/silver3d.webm"},{type:1,title:"Starfarer",description:"<b>3d Digital Media</b>\nJuly 2022\n<i>Independent Work</i>\n\nCharacter modelling and rigging practice, with an added cel shaded twist!",url:"res/art/starfarer.webm"},{type:1,title:"Lupe",description:"<b>3d Digital Media</b>\nOctober 2022\n<i>Independent Work</i>\n\nA 3d model of Lupe from the webcomic Four Leaf!",url:"res/art/lupefourleaf.webm"},{type:1,title:"The Sky.",description:"<b>3d Digital Media</b>\nFebuary 2023\n<i>Independent Work</i>\n\nNobody has seen the stars in a hundred years. Made in Blender",url:"res/art/thesky.webm"},{type:1,title:"Freefalling",description:"<b>3d Digital Media</b>\nSeptember 2022\n<i>Independent Work</i>\n\nFalling from the skyline. Made in Blender",url:"res/art/falling.webm"},{type:0,title:"Mage",description:"<b>3d Digital Media</b>\nAugust 2022\n<i>Independent Work</i>\n\nA mysterious alchemist hones her craft. Made in Blender",url:"res/art/render4.webp"},{type:1,title:"Fight Scene",description:"<b>3d Digital Media</b>\nJune 2023\n<i>Independent Work</i>\n\nPracticing animation and 2d effects with a fight scene! Made in Blender",url:"res/art/fightscene.webm"},{type:0,title:"Matsterna",description:"<b>3d Digital Media</b>\nJuly 2023\n<i>Independent Work</i>\n\nThe Creator of the cosmos. Made in Blender",url:"res/art/matsterna.webp"},{type:0,title:"Basic Lands",description:"<b>2d Digital Media</b>\nJune 2022\n<i>Independent Work</i>\n\nA set of custom cards designed to function in the card game 'Magic the Gathering'",url:"res/art/mtglands.webp"},{type:0,title:"Flumph",description:"<b>2d Digital Media</b>\nJune 2022\n<i>Independent Work</i>\n\nAnother custom art card, this time of 'Flumph', from Magic the Gathering",url:"res/art/flumph.webp"},{type:1,title:"Short Fuse",description:"<b>3d Digital Media</b>\nSeptember 2021\n<i>Independent Work</i>\n\nAn explosive-tempered character. Original sketch by Miles R.",url:"res/art/bombdude.webm"},{type:0,title:"So long, Geffen.",description:"<b>2d Digital Media</b>\nJune 2022\n<i>Independent Work</i>\n\n My graduation cap for school.",url:"res/art/schoolcap.webp"}];class G extends M{constructor(e){super(e),// callback is sketchy and doesnt work much of the time
this.checkLoaded=()=>{this.imageRef.current?this.imageRef.current.naturalWidth?this.onLoad():setTimeout(this.checkLoaded,125):this.videoRef.current&&(this.videoRef.current.width?this.onLoad():setTimeout(this.checkLoaded,125))},this.onLoad=()=>{this.imageRef.current?(this.contentWidth=this.imageRef.current.naturalWidth,this.contentHeight=this.imageRef.current.naturalHeight):this.videoRef.current&&(this.contentWidth=this.videoRef.current.videoWidth,this.contentHeight=this.videoRef.current.videoHeight),this.resizeCallback()},this.setRenderedSize=(e,t)=>{this.imageRef.current?(this.imageRef.current.width=e,this.imageRef.current.height=t):this.videoRef.current&&(this.videoRef.current.width=e,this.videoRef.current.height=t)},this.name=e.item.title,this.resizeCallback=e.resizeCallback,this.contentWidth=0,this.contentHeight=0,this.imageRef=k(),this.videoRef=k()}componentDidMount(){this.imageRef.current?(this.imageRef.current.addEventListener("onload",()=>{this.onLoad()}),this.imageRef.current.naturalWidth&&(this.contentWidth=this.imageRef.current.naturalWidth,this.contentHeight=this.imageRef.current.naturalHeight)):this.videoRef.current&&(this.videoRef.current.addEventListener("loadedmetadata",()=>{this.onLoad()}),this.videoRef.current.width&&(this.contentWidth=this.videoRef.current.videoWidth,this.contentHeight=this.videoRef.current.videoHeight)),// callback is sketchy and doesnt work much of the time
setTimeout(this.checkLoaded,125)}render(e,t,i){return y("div",{class:"art-item",style:e.marginLeft?`left: ${e.marginLeft}px`:""},y("div",{class:"art-item-cover",onClick:()=>{e.artGridRef.showPopup(e.item.index)}},y("p",null,e.item.title)),e.item.type==l.Image?y("img",{ref:this.imageRef,src:e.item.url,alt:e.item.title,width:e.width,height:e.height}):y("video",{ref:this.videoRef,muted:!0,autoPlay:!0,loop:!0,width:e.width,height:e.height},y("source",{src:e.item.url})))}}class E extends M{constructor(){super(),this.resize=()=>{if(this.item1ref.current&&this.item2ref.current){var e=this.item1ref.current,t=this.item2ref.current,i=1;if(this.thisRootRef.current&&(i=this.thisRootRef.current.clientWidth),window.innerWidth>1184){// desktop version
var n=e.contentWidth/e.contentHeight+t.contentWidth/t.contentHeight,r=1;n>0&&(r=(i-8)/n);var o=e.contentWidth*(r/e.contentHeight);e.setRenderedSize(o,r),t.setRenderedSize(i-o-8,r)}else{// mobile version
var s=e.contentHeight*(i/e.contentWidth);e.setRenderedSize(i,s);var l=t.contentHeight*(i/t.contentWidth);t.setRenderedSize(i,l)}}this.state.windowInnerWidth>1184&&window.innerWidth<=1184?this.setState({windowInnerWidth:window.innerWidth}):this.state.windowInnerWidth<=1184&&window.innerWidth>1184&&this.setState({windowInnerWidth:window.innerWidth})},this.thisRootRef=k(),this.item1ref=k(),this.item2ref=k(),this.state={windowInnerWidth:window.innerWidth},window.addEventListener("resize",this.resize)}render(e,t,i){return y("div",{ref:this.thisRootRef,class:"art-grid-row"},y(G,{artGridRef:e.artGridRef,ref:this.item1ref,item:e.item1,width:0,height:0,resizeCallback:this.resize}),y(G,{artGridRef:e.artGridRef,ref:this.item2ref,item:e.item2,width:0,height:0,resizeCallback:this.resize,marginLeft:window.innerWidth>1184?8:0}))}}class z extends M{constructor(e){super(e),this.onMouseMotion=()=>{this.lastMouseMotion=Date.now()},this.checkMouseMotion=()=>{this.visible?Date.now()>this.lastMouseMotion+4e3?this.itemRefs[0].current&&!this.itemRefs[0].current.classList.contains("popup-item-hidden")&&this.itemRefs.map(e=>{e.current&&e.current.classList.add("popup-item-hidden")}):this.itemRefs[0].current&&this.itemRefs[0].current.classList.contains("popup-item-hidden")&&this.itemRefs.map(e=>{e.current&&e.current.classList.remove("popup-item-hidden")}):this.lastMouseMotion=Date.now(),setTimeout(this.checkMouseMotion,50)},this.onLeftClicked=()=>{this.index>0&&this.artGridRef.showPopup(this.index-1)},this.onRightClicked=()=>{this.index<F.length-1&&this.artGridRef.showPopup(this.index+1)},this.onXClicked=()=>{this.artGridRef.hidePopup()},this.artGridRef=e.artGridRef,this.visible=e.visible,this.index=e.index,this.itemRefs=[];for(var t=0;t<4;t++)this.itemRefs.push(k());this.lastMouseMotion=Date.now(),window.addEventListener("mousemove",this.onMouseMotion),setTimeout(this.checkMouseMotion,50)}render(e,t,i){this.artGridRef=e.artGridRef,this.visible=e.visible,this.index=e.index;var n=F[e.index],r={__html:n.description};return y("div",{class:"popup",style:e.visible?"display: block":"display: none"},n.type==l.Image?y("img",{class:"popup-content",src:n.url,alt:n.title}):y("video",{key:n.url,class:"popup-content",muted:!0,autoPlay:!0,loop:!0},y("source",{src:n.url})),y("div",{class:"popup-row"},y("div",{class:"popup-column"},y("div",{ref:this.itemRefs[0],class:"top-left popup-item"},y("h2",null,n.title),y("p",{dangerouslySetInnerHTML:r})),y("div",{ref:this.itemRefs[1],class:"bottom-left popup-item"},y("a",{onClick:this.onLeftClicked},y("img",{src:"res/special/left-button.png",alt:"left",width:64,height:64,class:this.index<=0?"disabled":"",style:"object-fit: contain;"})))),y("div",{class:"popup-column"},y("div",{ref:this.itemRefs[2],class:"top-right popup-item"},y("a",{onClick:this.onXClicked},y("img",{src:"res/special/x-button.png",alt:"close",width:64,height:64,style:"object-fit: contain;"}))),y("div",{ref:this.itemRefs[3],class:"bottom-right popup-item"},y("a",{onClick:this.onRightClicked},y("img",{src:"res/special/right-button.png",alt:"right",width:64,height:64,class:this.index>=F.length-1?"disabled":"",style:"object-fit: contain;"}))))))}}t=y(class extends M{constructor(){super(),this.showPopup=e=>{this.setState({popupVisible:!0,popupIndex:e})},this.hidePopup=()=>{this.setState({popupVisible:!1})},this.state={popupVisible:!1,popupIndex:0}}render(e,t,i){for(var n=[],r=0;r<F.length;r+=2){let e=F[r];e.index=r;let t=F[r+1];t.index=r+1,n.push([e,t])}return this.state.popupVisible?document.body.style.overflow="hidden":document.body.style.overflow="scroll",y("span",null,y(z,{artGridRef:this,visible:this.state.popupVisible,index:this.state.popupIndex}),y("div",{class:"art-grid"},n.map(e=>y(E,{artGridRef:this,item1:e[0],item2:e[1]}))))}},null),i=document.getElementById("art-grid-root"),a.__&&a.__(t,i),o=(r="function"==typeof n)?null:n&&n.__k||i.__k,s=[],A(i,t=(!r&&n||i).__k=y(w,null,[t]),o||_,_,void 0!==i.ownerSVGElement,!r&&n?[n]:o?null:i.firstChild?d.call(i.childNodes):null,s,!r&&n?n:o?o.__e:i.firstChild,r),T(s,t);//# sourceMappingURL=art.392e177c.js.map

//# sourceMappingURL=art.392e177c.js.map