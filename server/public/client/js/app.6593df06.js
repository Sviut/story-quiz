(function(t){function e(e){for(var r,a,o=e[0],u=e[1],c=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2426:function(t,e,n){"use strict";n("70f8")},3056:function(t,e,n){t.exports=n.p+"img/lazer.5de7ff70.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("router-view")],1)},s=[],a={name:"App"},o=a,u=(n("034f"),n("2877")),c=Object(u["a"])(o,i,s,!1,null,null,null),l=c.exports,d=n("8c4f");function p(){(function(t,e,n,r,i,s,a){t[i]=t[i]||function(){(t[i].a=t[i].a||[]).push(arguments)},t[i].l=1*new Date,s=e.createElement(n),a=e.getElementsByTagName(n)[0],s.async=1,s.src=r,a.parentNode.insertBefore(s,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym"),window.ym(72568744,"init",{webvisor:!0})}var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"long-press",rawName:"v-long-press",value:600,expression:"600"}],staticClass:"flex h-screen relative justify-center items-center p-5",on:{contextmenu:function(t){t.preventDefault()},"long-press-start":t.onLongPressStart,"long-press-stop":t.onLongPressStop}},[!t.quizList||"question"!==t.currentQuizCard.type&&"first"!==t.currentQuizCard.type?t._e():n("ProgressBar",{staticClass:"absolute top-10",attrs:{animationStopped:t.animationStopped,"bar-count":t.progressBarsCount,"current-bar":t.currentQuiz}}),t.quizList?n("div",{directives:[{name:"show",rawName:"v-show",value:t.quizList&&t.isLoaded,expression:"quizList && isLoaded"}]},["first"===t.currentQuizCard.type?n("FirstPage",{attrs:{image:t.currentQuizCard.image},on:{imageLoaded:t.onLoaded,clickOnButton:t.nextQuiz}}):t._e(),"question"===t.currentQuizCard.type?n("QuestionCard",{attrs:{quiz:t.currentQuizCard,color:t.quizColors},on:{addNewAnswer:t.addNewAnswer}}):t._e(),"form"===t.currentQuizCard.type?n("ContactCard",{on:{submit:t.submitResults}}):t._e(),"final"===t.currentQuizCard.type?n("Thanks"):t._e()],1):n("Loader")],1)},m=[],h=(n("4de4"),n("5530")),g=(n("96cf"),n("1da1")),v=n("5383"),b=n.n(v),x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white rounded-3xl max-w-2xl"},[r("div",[r("img",{staticClass:"rounded-t-3xl",attrs:{src:n("3056")}})]),r("div",{staticClass:"p-5 flex flex-col items-center"},[r("h3",[t._v("Спасибо!")]),r("h4",[t._v("Мы свяжемся с Вами "),r("br"),t._v(" в ближайшее время!")])])])}],y=(n("99af"),n("5fb0")),C=y.COLORS,_={name:"FirstPage",data:function(){return{disabled:!1}},computed:{getGradient:function(){return"linear-gradient(to right, rgb(".concat(C[0].from,"), rgb(").concat(C[0].to,"))")}},methods:{clickHandler:function(){this.disabled=!0,this.$emit("clickOnButton")}}},z=_,S=Object(u["a"])(z,x,w,!1,null,null,null),O=S.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5"},[n("div",{staticClass:"rounded-t-3xl max-w-2xl"},[t.image?n("img",{staticClass:"rounded-t-3xl",attrs:{src:t.image},on:{load:function(e){return t.$emit("imageLoaded")}}}):t._e()]),n("div",{staticClass:"flex flex-col items-center space-y-2 bg-white rounded-b-3xl p-2"},[n("div",{staticClass:"text-center leading-4"},[t._v(" Ответьте на несколько простых вопросов и мы запишем вас на процедуру за 190 руб. ")]),n("div",{staticClass:"text-sm text-gray-600"},[t._v(" Опрос займет всего 30 секунд! ")]),n("button",{staticClass:"bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full uppercase",staticStyle:{outline:"none"},attrs:{disabled:t.disabled},on:{click:t.clickHandler}},[n("i",{staticClass:"far fa-check-circle"}),t._v(" Пройти опрос! ")])])])},j=[],L={name:"FirstPage",props:{image:{type:String}},data:function(){return{disabled:!1}},methods:{clickHandler:function(){this.disabled=!0,this.$emit("clickOnButton")}}},k=L,P=Object(u["a"])(k,q,j,!1,null,null,null),Q=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white rounded-3xl p-5 flex flex-col justify-center items-center space-y-5"},[t._m(0),n("h4",{staticClass:"text-center leading-4"},[t._v(" Укажите ваши контактные данные, что бы мы могли забронировать предложение за 190 руб. именно для Вас! ")]),n("form",{staticClass:"space-y-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],staticClass:"border py-2 px-3 text-grey-darkest w-full focus:outline-none rounded-full",staticStyle:{outline:"none"},attrs:{id:"name",required:"",placeholder:"Ваше имя",autocomplete:"off"},domProps:{value:t.contact.name},on:{input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.phone,expression:"contact.phone"}],staticClass:"border py-2 px-3 text-grey-darkest w-full focus:outline-none rounded-full",staticStyle:{outline:"none"},attrs:{required:"",type:"tel",placeholder:"Ваш номер телефона",autocomplete:"on"},domProps:{value:t.contact.phone},on:{input:function(e){e.target.composing||t.$set(t.contact,"phone",e.target.value)}}})]),n("button",{staticClass:"bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full uppercase leading-4",attrs:{disabled:!t.contact.name||!t.contact.phone},on:{click:t.submit}},[t._v(" Записаться на лазерную эпиляцию за 190 руб. ")])])},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-16 w-16"},[r("img",{attrs:{src:n("cf05")}})])}],A={name:"ContactCard",data:function(){return{contact:{name:"",phone:""}}},methods:{submit:function(){this.$emit("submit",this.contact)}}},E=A,N=Object(u["a"])(E,$,B,!1,null,null,null),R=N.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-wrapper"},t._l(t.barCount,(function(e){return n("div",{key:e,staticClass:"progress-bar"},[n("div",{staticClass:"progress-bar__white",class:{"progress-bar__animation":t.isCurrent(e-1),fulled:t.isFull(e-1)},style:{animationPlayState:t.animationState}})])})),0)},F=[],M=(n("a9e3"),{name:"ProgressBar",props:{animationStopped:{type:Boolean},currentBar:{type:Number,required:!0},barCount:{type:Number,required:!0}},data:function(){return{animationState:""}},methods:{isCurrent:function(t){return t===this.currentBar},isFull:function(t){return t<this.currentBar}},watch:{animationStopped:function(){this.animationState=this.animationStopped?"paused":"running"}}}),H=M,D=(n("bde8"),Object(u["a"])(H,T,F,!1,null,"097260ba",null)),G=D.exports,I=n("5fb0"),J=n("bc3a"),U=n.n(J),Z="api/";function K(t){return V.apply(this,arguments)}function V(){return V=Object(g["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.post(Z+"new",e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),V.apply(this,arguments)}function W(){return X.apply(this,arguments)}function X(){return X=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.get(Z+"quiz");case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),X.apply(this,arguments)}var Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-roller"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],et={name:"Loader"},nt=et,rt=(n("2426"),Object(u["a"])(nt,Y,tt,!1,null,"3f625c18",null)),it=rt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white rounded-3xl"},[n("div",{staticClass:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white p-5 uppercase leading-4 rounded-t-3xl text-center text-sm md:text-2xl"},[t._v(" "+t._s(t.quiz.title)+" ")]),n("div",{staticClass:"flex flex-col space-y-2 p-2"},t._l(t.quiz.answers,(function(e,r){return n("AnswerButton",{key:r,attrs:{text:e.text,index:r,"is-selected":t.selectedAnswer===e},nativeOn:{click:function(n){return t.selectAnswer(e)}}})})),1)])},at=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full rounded-full px-2.5 flex items-center h-12 transition-colors duration-200 ease-in-out text-sm md:text-2xl md:h-16",class:[t.isSelected?"bg-insta-green text-white border border-green-400":"border-blue-400 border"]},[n("span",{staticClass:"flex-shrink-0 h-8 w-8 text-blue-400 rounded-full font-mono font-bold flex items-center justify-center mr-2.5 md:h-12 md:w-12",class:[t.isSelected?"bg-white border-green-400":"border-blue-400 border-2"]},[n("span",{class:{"text-green-400 border-green-400":t.isSelected}},[t._v(" "+t._s(t.char))])]),n("span",{staticClass:"leading-4 text-left"},[t._v(t._s(t.text))])])},ut=[],ct={name:"AnswerButton",props:{index:{type:Number,required:!0},text:{type:String,required:!0},isSelected:{type:Boolean,required:!0}},computed:{char:function(){return String.fromCharCode(65+this.index)}}},lt=ct,dt=Object(u["a"])(lt,ot,ut,!1,null,null,null),pt=dt.exports,ft={name:"QuestionCard",components:{AnswerButton:pt},props:{quiz:{type:Object,required:!0},color:{type:Object,required:!0}},data:function(){return{selectedAnswer:"",disabled:!1}},methods:{selectAnswer:function(t){var e=this;this.disabled||(this.disabled=!0,this.selectedAnswer=t,this.$emit("addNewAnswer",{title:this.quiz.title,answer:this.selectedAnswer.text}),setTimeout((function(){return e.disabled=!1}),1300))}},computed:{getGradient:function(){return"linear-gradient(to right, rgb(".concat(this.color.from,"), rgb(").concat(this.color.to,"))")}}},mt=ft,ht=Object(u["a"])(mt,st,at,!1,null,null,null),gt=ht.exports,vt={name:"QuizPage",directives:{"long-press":b.a},components:{Loader:it,Thanks:O,FirstPage:Q,ContactCard:R,ProgressBar:G,QuestionCard:gt},data:function(){return{quizList:null,currentQuiz:0,answers:[],disableQuiz:!1,animationStopped:!1,isLoaded:!1}},created:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:n=e.sent,t.quizList=n.quiz;case 4:case"end":return e.stop()}}),e)})))()},methods:{onLoaded:function(){console.log("isLoaded"),this.isLoaded=!0},onLongPressStart:function(){console.log("onLongPressStart"),this.animationStopped=!0},onLongPressStop:function(){console.log("onLongPressStop"),this.animationStopped=!1},addNewAnswer:function(t){this.answers.push(t),this.nextQuiz()},nextQuiz:function(){var t=this;setTimeout((function(){t.currentQuiz=t.currentQuiz+1}),1300)},submitResults:function(t){this.nextQuiz();var e=Object(h["a"])(Object(h["a"])({},t),{},{quiz:this.answers});console.log(e),K(e)}},computed:{progressBarsCount:function(){var t=this.quizList.filter((function(t){return"question"===t.type})).length;return t+1},currentQuizCard:function(){return this.quizList[this.currentQuiz]},quizColors:function(){return I["COLORS"][3]}}},bt=vt,xt=Object(u["a"])(bt,f,m,!1,null,null,null),wt=xt.exports,yt=(n("a766"),[{path:"/:id",component:wt}]);r["a"].use(d["a"]),r["a"].config.productionTip=!1;var Ct=new d["a"]({routes:yt,mode:"history"});p(),new r["a"]({router:Ct,render:function(t){return t(l)}}).$mount("#app")},"5fb0":function(t,e,n){"use strict";n.r(e),n.d(e,"COLORS",(function(){return r})),n.d(e,"QUIZ_LIST",(function(){return i}));var r=[{from:"85, 195, 61",to:"45, 195, 232"},{from:"252, 142, 51",to:"253, 141, 48"},{from:"238, 73, 88",to:"239, 72, 89"},{from:"188, 61, 230",to:"87, 163, 252"},{from:"210, 53, 217",to:"251, 89, 176"},{from:"240, 92, 86",to:"250, 193, 92"}],i=[{type:"first"},{type:"question",title:"Как Вы относитесь к лазерной эпиляции?",answers:[{text:"Давно хочу попробовать"},{text:"Делаю в салоне, мне нравится"},{text:"Боюсь, что это больно"}]},{type:"question",title:"Что для Вас важно при выборе студии эпиляции?",answers:[{text:"Безопасный аппарат"},{text:"Наличие медицинского образования у мастера"},{text:"Невысокая стоимость процедуры"}]},{type:"question",title:"Какую зону Вы бы хотели сделать первой?",answers:[{text:"Голени"},{text:"Подмышки"},{text:"Бикини"},{text:"Бикини глубокое + подмышки (комплекс S)"},{text:"Другую зону"}]},{type:"form"},{type:"final"}]},"635b":function(t,e,n){},"70f8":function(t,e,n){},"85ec":function(t,e,n){},a766:function(t,e,n){},bde8:function(t,e,n){"use strict";n("635b")},cf05:function(t,e,n){t.exports=n.p+"img/logo.d4821e06.png"}});
//# sourceMappingURL=app.6593df06.js.map