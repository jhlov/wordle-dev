(this["webpackJsonp\uc6cc\ub4e4"]=this["webpackJsonp\uc6cc\ub4e4"]||[]).push([[0],{58:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(14),i=n.n(r),o=n(7),s=n.n(o),u=n(51),l=n(6),b=(n(58),n(43)),j=n(8),d=n(16),m=n.n(d),f=n(44),O=n.n(f),h=n(31),p=n.n(h),k=n(17),x=n.n(k),v=n(105),y=n(24),g=(n(83),n(5)),w=(n(84),n(2)),N=function(e){return Object(w.jsx)("div",{className:"game-body",children:Array(6).fill(0).map((function(t,n){return Object(w.jsx)("div",{className:s()("game-body-row",{shake:n===e.curRow&&e.shake}),children:Array(5).fill(0).map((function(t,c){return Object(w.jsx)("div",{className:s()("item","item-".concat(c+1),[e.words[n][c]?"letter":"empty"],Object(g.a)({},e.checks[n][c],e.checks[n][c])),children:e.words[n][c]},"".concat(n,"_").concat(c))}))},n)}))})},C=n(47),M=n.n(C),S=n(48),T=n.n(S),E=n(49),D=n.n(E),B=(n(86),function(){return Object(w.jsxs)("div",{className:"game-header align-items-center justify-content-between py-1 border-bottom",children:[Object(w.jsx)("button",{children:Object(w.jsx)(M.a,{})}),Object(w.jsx)("h1",{className:"m-0 p-0",children:"\uc6cc\ub4e4"}),Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{children:Object(w.jsx)(T.a,{})}),Object(w.jsx)("button",{children:Object(w.jsx)(D.a,{})})]})]})}),F=n(50),K=n.n(F),A=(n(90),function(e){return Object(w.jsxs)("div",{className:"game-keyboard",children:[Object(w.jsx)("div",{className:"game-keyboard-row",children:["\u3131","\u3134","\u3137","\u3139","\u3141","\u3142","\u314f","\u3151","\u3153","\u3155"].map((function(t){return Object(w.jsx)("div",{className:s()("item",Object(g.a)({},e.keyMap[t],e.keyMap[t])),onClick:function(){return e.onClickKeyboard(t)},children:t},t)}))}),Object(w.jsx)("div",{className:"game-keyboard-row",children:["\u3145","\u3147","\u3148","\u314a","\u314b","\u3157","\u315b","\u315c","\u3160"].map((function(t){return Object(w.jsx)("div",{className:s()("item",Object(g.a)({},e.keyMap[t],e.keyMap[t])),onClick:function(){return e.onClickKeyboard(t)},children:t},t)}))}),Object(w.jsxs)("div",{className:"game-keyboard-row",children:[Object(w.jsx)("button",{className:"item",disabled:e.curWord.length<5,onClick:e.onClickEner,children:"ENTER"}),["\u314c","\u314d","\u314e","\u3161","\u3163","\u3150","\u3154"].map((function(t){return Object(w.jsx)("div",{className:s()("item",Object(g.a)({},e.keyMap[t],e.keyMap[t])),onClick:function(){return e.onClickKeyboard(t)},children:t},t)})),Object(w.jsx)("button",{className:"item",disabled:0===e.curWord.length,onClick:e.onClickBack,children:Object(w.jsx)(K.a,{})})]})]})}),R=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([[],[],[],[],[],[]]),i=Object(j.a)(r,2),o=i[0],s=i[1],u=Object(c.useState)([[],[],[],[],[],[]]),l=Object(j.a)(u,2),d=l[0],f=l[1],h=Object(c.useState)({}),k=Object(j.a)(h,2),g=k[0],C=k[1],M=Object(c.useState)(!1),S=Object(j.a)(M,2),T=S[0],E=S[1],D=Object(c.useState)(!1),F=Object(j.a)(D,2),K=F[0],R=F[1],W=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(5!==o[n].length){e.next=14;break}if(t=p.a.assemble(o[n]),console.log(t),!t.split("").every((function(e){return p.a.isComplete(e)}))){e.next=11;break}return e.delegateYield(m.a.mark((function e(){var c,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,O.a.get("https://ukntcifwza.execute-api.ap-northeast-2.amazonaws.com/default/wordle?word=".concat(t,"&letters=").concat(o[n].join("")));case 3:if(c=e.sent,R(!1),!c.data.error){e.next=10;break}return Object(y.b)({text:c.data.error,variant:"dark"}),E(!0),setTimeout((function(){E(!1)}),200),e.abrupt("return",{v:void 0});case 10:for(r=function(e){setTimeout((function(){var t,a=x.a.cloneDeep(d);a[n]=(null!==(t=c.data.check)&&void 0!==t?t:[]).slice(0,e+1),f(a)}),300*e)},i=0;i<5;++i)r(i);setTimeout((function(){var e,t=x.a.cloneDeep(g);null===(e=c.data.letters)||void 0===e||e.split("").forEach((function(e,n){var a,r;"s"===(null!==(a=c.data.check)&&void 0!==a?a:[])[n]?t[e]="s":"b"===(null!==(r=c.data.check)&&void 0!==r?r:[])[n]?"s"!==t[e]&&(t[e]="b"):void 0===t[e]&&(t[e]="o")})),C(t),n<5&&a((function(e){return e+1}))}),1500);case 13:case"end":return e.stop()}}),e)}))(),"t0",6);case 6:if("object"!==typeof(c=e.t0)){e.next=9;break}return e.abrupt("return",c.v);case 9:e.next=14;break;case 11:Object(y.b)({text:"\ub2e8\uc5b4 \ubaa9\ub85d\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4.",variant:"dark"}),E(!0),setTimeout((function(){E(!1)}),200);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"game",children:[Object(w.jsx)(B,{}),Object(w.jsx)(N,{curRow:n,words:o,checks:d,shake:T}),Object(w.jsx)(A,{curWord:o[n],onClickKeyboard:function(e){if(o[n].length<5){var t=x.a.cloneDeep(o);t[n].push(e),s(t)}},onClickEner:W,onClickBack:function(){if(0<o[n].length){var e=x.a.cloneDeep(o);e[n].pop(),s(e)}},keyMap:g}),Object(w.jsx)(y.a,{options:{position:"top",delay:1e3}}),K&&Object(w.jsx)("div",{className:"loading",children:Object(w.jsx)(v.a,{animation:"border"})})]})};var W=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)("div",{className:s()("mobile-container"),children:Object(w.jsx)(u.a,{children:Object(w.jsx)(l.a,{path:"/",component:R})})})})},z=(n(94),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))});i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(W,{})}),document.getElementById("root")),z()}},[[96,1,2]]]);