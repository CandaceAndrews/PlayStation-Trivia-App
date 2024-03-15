(function(){"use strict";var e={5522:function(e,t,n){var o=n(5130),i=n(6768);const a={id:"app"},r=(0,i.Lk)("footer",null," @ 2024 Candace Andrews ",-1);function s(e,t,n,o,s,c){const u=(0,i.g2)("NavbarMenu"),l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",a,[(0,i.bF)(u),(0,i.bF)(l)]),r],64)}const c={class:"navbar"},u={class:"nav-link"};function l(e,t,n,o,a,r){const s=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",c,[(0,i.Lk)("div",u,[(0,i.bF)(s,{to:"/",class:"home-link",exact:""},{default:(0,i.k6)((()=>[(0,i.eW)("Home")])),_:1})])])}var h={name:"NavbarMenu"},p=n(1241);const d=(0,p.A)(h,[["render",l]]);var m=d,g={name:"App",components:{NavbarMenu:m}};const f=(0,p.A)(g,[["render",s]]);var v=f,b=n(1387),C=n.p+"img/ps1-logo.b2ae0fef.gif",k=n.p+"img/ps1-console.9092fa78.png";const y=e=>((0,i.Qi)("data-v-06dac75f"),e=e(),(0,i.jt)(),e),w={class:"home-page"},A=y((()=>(0,i.Lk)("img",{class:"ps1-logo-gif",src:C,alt:"ps1 logo fading in"},null,-1))),q=y((()=>(0,i.Lk)("div",{class:"greeting-section"},[(0,i.Lk)("h1",null,"PlayStation Trivia Quiz"),(0,i.Lk)("p",null,"Test your knowledge on classic PS1 games!"),(0,i.Lk)("img",{class:"console-pic",src:k,alt:"ps1 console"})],-1))),S={class:"games"},W=y((()=>(0,i.Lk)("h1",null,"Game Selection",-1))),L={class:"game-grid"};function x(e,t,n,o,a,r){const s=(0,i.g2)("GameThumbnail");return(0,i.uX)(),(0,i.CE)("div",w,[A,q,(0,i.Lk)("div",S,[W,(0,i.Lk)("div",L,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.ps1Games,(e=>((0,i.uX)(),(0,i.Wv)(s,{key:e.id,game:e},null,8,["game"])))),128))])])])}n(4114);var E=n(4232);const Q=["src","alt"];function T(e,t,n,o,a,r){return(0,i.uX)(),(0,i.CE)("div",{class:"game-thumbnail",onClick:t[0]||(t[0]=(...e)=>r.handleNavigateToGameQuiz&&r.handleNavigateToGameQuiz(...e))},[(0,i.Lk)("img",{class:"thumbnail-image",src:n.game.cover,alt:n.game.title},null,8,Q),(0,i.Lk)("h3",null,(0,E.v_)(n.game.title),1)])}var M={props:{game:Object},methods:{handleNavigateToGameQuiz(){this.$router.push(`/quiz/${this.game.id}`)}}};const O=(0,p.A)(M,[["render",T],["__scopeId","data-v-5e15d49e"]]);var F=O;const j=[{id:1,title:"Final Fantasy VII",cover:n(812),questions:[{question:"What is the name of the ancient city that serves as the birthplace of the Cetra and plays a significant role in Cloud's past?",options:["Nibelheim","Wutai","Cosmo Canyon","Forgotten City"],correctAnswer:"Forgotten City"},{question:"What is the name of the final dungeon where players confront Sephiroth in his true form?",options:["Northern Crater","Forgotten City","Crystal Cave","Whirlwind Maze"],correctAnswer:"Northern Crater"},{question:"Which summon materia is obtained after defeating the Midgar Zolom?",options:["Leviathan","Ifrit","Bahamut","Choco/Mog"],correctAnswer:"Leviathan"},{question:"What is the name of the bar owned by Tifa Lockhart in Sector 7 of Midgar?",options:["Seventh Sin","Heaven's Gate"," Seventh Circle","7th Heaven"],correctAnswer:"7th Heaven"},{question:"What is the ultimate Limit Break for Cloud Strife?",options:["Omnislash","Finishing Touch","Blade Beam","Catastrophe"],correctAnswer:"Omnislash"},{question:"Which two characters engage in a memorable fight atop the Sister Ray cannon?",options:["Cloud and Tifa","Barret and Dyne","Cloud and Sephiroth","Tifa and Sephiroth"],correctAnswer:"Cloud and Sephiroth"},{question:"What is the name of the underground prison where Cloud and his party are held captive during the story?",options:["Corel Prison","Nibelheim Prison","Sector 6 Prison","Shinra Building Detention Center"],correctAnswer:"Corel Prison"},{question:"Which character can manipulate time and space using their Limit Break abilities?",options:["Cloud Strife","Aerith Gainsborough","Vincent Valentine","Cait Sith"],correctAnswer:"Vincent Valentine"},{question:"What is the name of the giant cannon that Shinra uses to drain Mako energy from the planet?",options:["Mako Cannon","Omega Weapon","Sister Ray","Jenova Cannon"],correctAnswer:"Sister Ray"},{question:"What is the name of the giant cannon that Shinra uses to drain Mako energy from the planet?",options:["SOLDIER First Class","AVALANCHE","Turks","The Wutai Clan"],correctAnswer:"SOLDIER First Class"},{question:"What is another name for an Ancient, the last of which plays a crucial role in the story of Final Fantasy VII?",options:["Cetra","Eternals","Elders","Celestials"],correctAnswer:"Cetra"},{question:"What is the name of the optional super-boss that appears in the Ancient Forest area?",options:["Emerald Weapon","Ruby Weapon","Diamond Weapon","Ultima Weapon"],correctAnswer:"Ruby Weapon"},{question:"What is the name of the robotic creature that accompanies Cait Sith?",options:["Aps","Mog","Tonberry","Boundfat"],correctAnswer:"Mog"},{question:"Which summon materia can be obtained by defeating the optional boss, Ruby Weapon?",options:["Knights of the Round","Phoenix","Alexander","Bahamut ZERO"],correctAnswer:"Bahamut ZERO"},{question:"How many Huge Materia are there in the game?",options:["3 Huge Materia","4 Huge Materia","5 Huge Materia","6 Huge Materia"],correctAnswer:"3 Huge Materia"}]},{id:2,title:"Metal Gear Solid",cover:n(8138),questions:[{question:"Who is the main character in Metal Gear Solid?",options:["Solid Snake","Big Boss","Liquid Snake","Raiden"],correctAnswer:"Solid Snake"}]},{id:3,title:"Resident Evil 2",cover:n(73)},{id:4,title:"Crash Bandicoot",cover:n(9458)},{id:5,title:"Spyro The Dragon",cover:n(3204)},{id:6,title:"Tomb Raider",cover:n(3816)},{id:7,title:"Silent Hill",cover:n(3748)},{id:8,title:"Tekken 3",cover:n(8047)}];var I=j,_={components:{GameThumbnail:F},data(){return{ps1Games:I}},methods:{navigateToGameQuiz(e){this.$router.push({name:"quizPage",params:{id:e.id}})}}};const N=(0,p.A)(_,[["render",x],["__scopeId","data-v-06dac75f"]]);var B=N;const R=e=>((0,i.Qi)("data-v-7c013de0"),e=e(),(0,i.jt)(),e),z={class:"game-quiz-page"},G={class:"game-title"},H={key:0},P={class:"question"},X={class:"options"},V=["onClick"],D={key:1},K=R((()=>(0,i.Lk)("p",null," All questions answered! ",-1))),Z=[K];function $(e,t,n,o,a,r){return(0,i.uX)(),(0,i.CE)("div",z,[(0,i.Lk)("h1",G,(0,E.v_)(n.game.title),1),r.currentQuestion?((0,i.uX)(),(0,i.CE)("div",H,[(0,i.Lk)("div",P,(0,E.v_)(r.currentQuestion.question),1),(0,i.Lk)("div",X,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.currentQuestion.options,((e,t)=>((0,i.uX)(),(0,i.CE)("button",{key:t,onClick:t=>r.checkAnswer(e)},(0,E.v_)(e),9,V)))),128))]),a.userAnswers.length>0?((0,i.uX)(),(0,i.CE)("button",{key:0,class:"next-button",onClick:t[0]||(t[0]=(...e)=>r.moveToNextQuestion&&r.moveToNextQuestion(...e))},"Next Question")):(0,i.Q3)("",!0)])):((0,i.uX)(),(0,i.CE)("div",D,Z))])}var J={props:{game:Object},data(){return{currentQuestionIndex:0,userAnswers:[]}},computed:{currentQuestion(){return this.game.questions&&this.game.questions.length>this.currentQuestionIndex?this.game.questions[this.currentQuestionIndex]:null}},methods:{checkAnswer(e){const t=this.currentQuestion.correctAnswer,n={question:this.currentQuestion.question,selectedAnswer:e,correct:e===t};this.userAnswers.push(n)},moveToNextQuestion(){this.currentQuestionIndex++,this.userAnswers=[]}}};const U=(0,p.A)(J,[["render",$],["__scopeId","data-v-7c013de0"]]);var Y=U;const ee=(0,b.aE)({history:(0,b.Bt)(),routes:[{path:"/",component:B},{path:"/quiz/:id",name:"quizPage",component:Y,QuizPage:Y,props:!0}]});ee.beforeEach(((e,t,n)=>{if("quizPage"===e.name&&e.params.id){const t=I.find((t=>t.id===parseInt(e.params.id)));t&&(e.params.game=t)}n()}));var te=ee;(0,o.Ef)(v).use(te).mount("#app")},9458:function(e,t,n){e.exports=n.p+"img/cover.2c025cac.jpeg"},812:function(e,t,n){e.exports=n.p+"img/cover.b9d60ddd.jpeg"},8138:function(e,t,n){e.exports=n.p+"img/cover.66395bab.jpeg"},73:function(e,t,n){e.exports=n.p+"img/cover.3da3d2ac.jpeg"},3748:function(e,t,n){e.exports=n.p+"img/cover.fae39824.jpeg"},3204:function(e,t,n){e.exports=n.p+"img/cover.5400501a.jpeg"},8047:function(e,t,n){e.exports=n.p+"img/cover.4eef2c29.jpeg"},3816:function(e,t,n){e.exports=n.p+"img/cover.a0d37ec5.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(l=0;l<e.length;l++){o=e[l][0],i=e[l][1],a=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(l--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],s=o[1],c=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var l=c(n)}for(t&&t(o);u<r.length;u++)a=r[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkgame_trivia_app"]=self["webpackChunkgame_trivia_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5522)}));o=n.O(o)})();
//# sourceMappingURL=app.9c4f3f5e.js.map