(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0315":function(t,e,n){t.exports=n.p+"img/bg-gold-frame.19be2487.svg"},"0b27":function(t,e,n){t.exports=n.p+"img/arrowhead-thin-outline-to-the-left.94eabfbd.svg"},"177f":function(t,e,n){"use strict";n("59a3")},"26d7":function(t,e,n){"use strict";n("a394")},3358:function(t,e,n){"use strict";n("4ae2")},"35d5":function(t,e,n){"use strict";n("a708")},"38c0":function(t,e,n){},"3d0d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-container"},[n("scenes",{attrs:{bookmark:null!==t.currentEpisode?t.getNextEpisode(t.episodeOrderOfPlay,t.currentEpisode):t.episodeOrderOfPlay[0],sceneEndingName:t.currentEpisode},on:{"update:sceneEndingName":function(e){t.currentEpisode=e},"update:scene-ending-name":function(e){t.currentEpisode=e}}})],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.bookmark,t._g({tag:"component"},t.$listeners))},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"lol",staticClass:"tooltip-text"},[t._v(" Жми, чтобы перевернуть ")]),t.lol?s("label",{class:["wrapper",{"animation-roll":t.showRoll},{nosafari:!t.isMobileSafari()},{safari:t.isMobileSafari()}],on:{click:function(e){return e.preventDefault(),t.goNextTransition(e)}}},[t.showRoll?s("input",{attrs:{type:"checkbox"},domProps:{checked:t.inputIsChecked}}):t._e(),s("transition",{attrs:{name:"animation-rotate",mode:"out-in"}},[t.showRotate?s("div",{staticClass:"card",on:{animationend:t.unlocked,click:t.goBack}},[s("div",{staticClass:"front"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showRoll,expression:"showRoll"}],staticClass:"bg-frame wrapper"},[s("div",{staticClass:"box-gold-frame"},[s("img",{staticClass:"bg-gold-frame",attrs:{src:n("0315"),alt:"Icon Applicabilities"}})])]),t.showRoll?s("div",{staticClass:"logo"},[s("span",{staticClass:"name1"},[t._v("Андрей")]),s("span",{staticClass:"ampersand"},[t._v("и")]),s("span",{staticClass:"name2"},[t._v("София")])]):t._e()]),s("div",{staticClass:"back"},[t.showBackFrame?s("div",{staticClass:"bg-frame-back "},[s("div",{staticClass:"box"},[s("div",{staticClass:"content"},[s(t.orderTransitionName[t.orderCurrentElement],{tag:"component"})],1)])]):t._e()])]):t._e()])],1):t._e(),s("div",{staticClass:"arrow-wrapper"},[t.orderCurrentElement>=0?s("div",{staticClass:"arrow-navigate"},[s("div",{staticClass:"arrow-navigate__left",on:{click:function(e){t.orderCurrentElement>0&&(t.orderCurrentElement=t.orderCurrentElement-1)}}},[s("img",{attrs:{src:n("0b27"),alt:"left arrow"}})]),s("div",{staticClass:"arrow-navigate__right",on:{click:function(e){t.orderCurrentElement<t.orderTransitionName.length-1&&(t.orderCurrentElement=t.orderCurrentElement+1)}}},[s("img",{attrs:{src:n("b994"),alt:"right arrow"}})])]):t._e()])])},l=[],c=n("1da1"),d=(n("96cf"),n("466d"),n("ac1f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legend-box"},[n("div",{staticClass:"legend-title"},[t._v("ВНИМАНИЕ! ATTENTION! ACHTUNG!")]),n("div",{staticClass:"legend-box-blocks"},[n("div",{staticClass:"legend-gueusts-person"},[t._v(" "+t._s(this.$route.query.guest)+" ")]),t._m(0),t._m(1)])])}),u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legend-event-info"},[n("div",{staticClass:"legend-event-info__date-box"},[n("div",{staticClass:"legend-event-info__day"},[t._v("05")]),n("div",{staticClass:"legend-event-info__month-year"},[n("div",[t._v("ИЮНЯ")]),n("div",[t._v("2021 ГОДА")])])]),n("div",{staticClass:"legend-event-info__separator"},[t._v("|")]),n("div",{staticClass:"legend-event-info__location-box"},[n("div",[n("span",{staticClass:"event-time"},[t._v("13.30 Регистрация")]),n("span",{staticClass:"event-descrition"},[t._v(" (гор. ЗАГС)")])]),n("div",[n("span",{staticClass:"event-time"},[t._v("16.00 Банкет ")]),n("span",{staticClass:"event-descrition"},[t._v('(Санаторий "Синяя птица")')])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legend-detail"},[n("div",{staticClass:"legend-detail__film"},[t._v(' Киностудия Martynovy Pictures приглашает принять участие в съемках романтического экшена "... и объявили их мужем и женой" ')]),n("div",{staticClass:"legend-detail__actors"},[n("span",[t._v("В главных ролях:")]),n("span",[t._v("Андрей - жених")]),n("span",[t._v("София - невеста")])])])}],f={name:"story",data:function(){return{showAnimations:!1}},mounted:function(){console.log(this.$route.query)}},p=f,v=(n("35d5"),n("2877")),m=Object(v["a"])(p,d,u,!1,null,"4b2d1ee1",null),h=m.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timming-box"},[n("div",{staticClass:"chapter-one"},[n("div",{staticClass:"title-chapter"},[t._v(" Эпизод 1 ")]),n("div",{staticClass:"chapter-one__description"},[n("div",[t._v('Торжественная регистрация "Прощай, свобода"')]),n("div",{staticClass:"text_plan"},[n("div",[n("span",{staticClass:"plan-font"},[t._v("13.00 ")]),n("span",{staticClass:"plan-font"},[t._v("- Сбор актёров")])]),n("div",[n("span",{staticClass:"plan-font"},[t._v("13.30 ")]),n("span",{staticClass:"plan-font"},[t._v("- Камера - мотор")])]),n("div",[n("span",{staticClass:"plan-font"},[t._v("Съемочная площадка - Городской ЗАГС")])])])])]),n("div",{staticClass:"chapter-two"},[n("div",{staticClass:"title-chapter"},[t._v(" Эпизод 2 ")]),n("div",{staticClass:"chapter-two__description"},[n("div",{},[t._v('"Да здравстует тусовка"')]),n("div",{staticClass:"text_plan"},[n("div",[n("span",{staticClass:"plan-font"},[t._v("14.30 ")]),n("span",{staticClass:"plan-font"},[t._v("- Фуршет")])]),n("div",[n("span",{staticClass:"plan-font"},[t._v("15.00 ")]),n("span",{staticClass:"plan-font"},[t._v("- Фотосессия")])]),n("div",[n("span",{staticClass:"plan-font"},[t._v("16.00 ")]),n("span",{staticClass:"plan-font"},[t._v("- Начало громких тостов и горячих танцев")])]),n("div",[n("span",{staticClass:"plan-font"},[t._v("22.00 ")]),n("span",{staticClass:"plan-font"},[t._v("- Завершение мероприятия")])]),n("div",[n("span",{staticClass:"plan-font"},[t._v("22.30 ")]),n("span",{staticClass:"plan-font"},[t._v("- Трансфер")])]),n("div",[n("span",{staticClass:"description"},[n("span",{staticClass:"plan-font"},[t._v('Съемочная площадка - Санаторий "Синяя птица"')])])])])])])])}],b={name:"timming"},C=b,w=(n("ea86"),Object(v["a"])(C,_,g,!1,null,"13fb9382",null)),y=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result-box"},[n("div",[n("div",{staticClass:"hashtag"},[t._v("#martinovypictures")]),n("div",{staticClass:"thanks-box"},[t._v(" Ваше участие для нас необходимо! ")]),n("div",{staticClass:"timer-box"},[n("span",{staticClass:"timer-text"},[t._v("До мероприятия осталось: ")]),n("div",{staticClass:"timer-value"},[n("Timer")],1)])])])},E=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flip-countdown",{attrs:{id:"timer",deadline:"2021-06-05 14:00:00"}})},O=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flip-clock"},[t._l(t.timeData,(function(e){return[n("span",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"data.show"}],key:e.label,staticClass:"flip-clock__piece",attrs:{id:e.elementId}},[n("span",{staticClass:"flip-clock__card flip-card"},[n("b",{staticClass:"flip-card__top"},[t._v(t._s(t._f("twoDigits")(e.current)))]),n("b",{staticClass:"flip-card__bottom",attrs:{"data-value":t._f("twoDigits")(e.current)}}),n("b",{staticClass:"flip-card__back",attrs:{"data-value":t._f("twoDigits")(e.previous)}}),n("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":t._f("twoDigits")(e.previous)}})]),n("span",{staticClass:"flip-clock__slot"},[t._v(t._s(e.label))])])]}))],2)},S=[],j=n("b85c"),M=(n("b65f"),n("5319"),n("d3b7"),n("25f0"),n("caad"),n("2532"),null),$=n("c64e"),N={name:"flipCountdown",props:{deadline:{type:String},stop:{type:Boolean},showDays:{type:Boolean,required:!1,default:!0},showHours:{type:Boolean,required:!1,default:!0},showMinutes:{type:Boolean,required:!1,default:!0},showSeconds:{type:Boolean,required:!1,default:!0},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}}},data:function(){var t=$();return{now:Math.trunc((new Date).getTime()/1e3),date:null,interval:null,diff:0,show:!1,timeData:[{current:0,previous:0,label:this.labels.days,elementId:"flip-card-days-"+t,show:this.showDays},{current:0,previous:0,label:this.labels.hours,elementId:"flip-card-hours-"+t,show:this.showHours},{current:0,previous:0,label:this.labels.minutes,elementId:"flip-card-minutes-"+t,show:this.showMinutes},{current:0,previous:0,label:this.labels.seconds,elementId:"flip-card-seconds-"+t,show:this.showSeconds}]}},created:function(){var t=this;if(!this.deadline)throw new Error("Missing props 'deadline'");var e=this.deadline;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'");this.interval=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},mounted:function(){0!==this.diff&&(this.show=!0)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{deadline:function(t,e){var n=this.deadline;if(this.date=Math.trunc(Date.parse(n.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'")},now:function(t){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0)):this.updateAllCards()},diff:function(t){0===t&&(this.$emit("timeElapsed"),this.updateAllCards())}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{updateAllCards:function(){this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds)},updateTime:function(t,e){if(!(t>=this.timeData.length||void 0===e)){window["requestAnimationFrame"]&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var n=this.timeData[t],s=e<0?0:e,a=document.querySelector("#".concat(n.elementId));if(s!==n.current&&(n.previous=n.current,n.current=s,a&&(a.classList.remove("flip"),a.offsetWidth,a.classList.add("flip")),0===t)){var i=a.querySelectorAll("span b");if(i){var r,o=Object(j["a"])(i);try{for(o.s();!(r=o.n()).done;){var l=r.value,c=l.classList[0];if(e/1e3>=1){if(!c.includes("-4digits")){var d=c+"-4digits";l.classList.add(d),l.classList.remove(c)}}else if(c.includes("-4digits")){var u=c.replace("-4digits","");l.classList.add(u),l.classList.remove(c)}}}catch(f){o.e(f)}finally{o.f()}}}}}},beforeDestroy:function(){window["cancelAnimationFrame"]&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(M)}},D=N,I=(n("4d17"),Object(v["a"])(D,T,S,!1,null,"68dcce18",null)),P=I.exports,A={name:"timer",components:{FlipCountdown:P}},R=A,q=(n("26d7"),Object(v["a"])(R,k,O,!1,null,null,null)),B=q.exports,F={name:"result",components:{Timer:B}},L=F,H=(n("177f"),Object(v["a"])(L,x,E,!1,null,"4417e1a5",null)),J=H.exports,W={name:"front",components:{Result:J,Timming:y,Story:h},data:function(){return{showRotate:!1,showRoll:!1,showBackFrame:!1,inputIsChecked:!1,lol:!0,orderCurrentElement:-1,orderTransitionName:["Story","Timming","Result"]}},methods:{isMobileSafari:function(){var t=window.navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i),s=e&&n&&!t.match(/CriOS/i);return s},unlocked:function(){console.log("end")},goNextTransition:function(){console.log("next tranc"),this.inputIsChecked=!0,this.orderCurrentElement<this.orderTransitionName.length-1&&(this.orderCurrentElement=this.orderCurrentElement+1),console.log(this.orderCurrentElement)},goBack:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,setTimeout((function(){t.showBackFrame=!0}),2e3);case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.showRotate=!0,setTimeout((function(){t.showRoll=!0}),3e3)}},G=W,K=(n("3358"),Object(v["a"])(G,o,l,!1,null,"7764f952",null)),U=K.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("img",{staticClass:"loading-img",attrs:{src:n("990b")}}),s("div",{staticClass:"tooltip-text"},[t._v("Загрузка.. ")])])},Q=[],V={name:"loading",methods:{},mounted:function(){var t=this;setTimeout((function(){return t.$emit("update:sceneEndingName","loading")}),4e3)}},X=V,Y=(n("6d8e"),Object(v["a"])(X,z,Q,!1,null,"adb6dd64",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tooltip-text"},[t._v(" Вам письмо, нажмите на конверт :) ")]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"mail"},[n("div",{staticClass:"cover"}),n("div",{staticClass:"letter"},[n("h1",{staticClass:"open-text",on:{click:t.goNextScene}},[t._v("открыть")])])])])])},et=[],nt={name:"mail",methods:{goNextScene:function(){console.log("op"),this.$emit("update:sceneEndingName","mail")}}},st=nt,at=(n("6e1b"),Object(v["a"])(st,tt,et,!1,null,"4b6d08e2",null)),it=at.exports,rt={name:"scenes",components:{Mail:it,Loading:Z,Card:U},props:{bookmark:{type:String}}},ot=rt,lt=Object(v["a"])(ot,i,r,!1,null,"3d023fef",null),ct=lt.exports,dt={name:"movie",components:{Scenes:ct},data:function(){return{episodeOrderOfPlay:["loading","mail","card"],currentEpisode:null}},methods:{getNextEpisode:function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return t[n+1]}}},ut=dt,ft=(n("c193"),Object(v["a"])(ut,s,a,!1,null,"78d97542",null));e["default"]=ft.exports},"46aa":function(t,e,n){},"4ae2":function(t,e,n){},"4d17":function(t,e,n){"use strict";n("b338")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("movie")],1)},i=[],r=n("3d0d"),o={name:"App",components:{Movie:r["default"]}},l=o,c=(n("5c0b"),n("2877")),d=Object(c["a"])(l,a,i,!1,null,null,null),u=d.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));s["a"].use(f["a"]);var p=[{path:"",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"3d0d"))}}],v=new f["a"]({mode:"history",base:"",routes:p}),m=v;s["a"].config.productionTip=!1,new s["a"]({router:m,render:function(t){return t(u)}}).$mount("#app")},"59a3":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6d8e":function(t,e,n){"use strict";n("38c0")},"6e1b":function(t,e,n){"use strict";n("982b")},"926c":function(t,e,n){},"982b":function(t,e,n){},"990b":function(t,e,n){t.exports=n.p+"img/loadimg.a5746287.gif"},"9c0c":function(t,e,n){},a394:function(t,e,n){},a708:function(t,e,n){},b338:function(t,e,n){},b994:function(t,e,n){t.exports=n.p+"img/arrow-point-to-right.f38a850e.svg"},c193:function(t,e,n){"use strict";n("46aa")},ea86:function(t,e,n){"use strict";n("926c")}});
//# sourceMappingURL=app.3e0262ee.js.map