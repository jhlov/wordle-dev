(this["webpackJsonp\uc6cc\ub4e4"]=this["webpackJsonp\uc6cc\ub4e4"]||[]).push([[0],{42:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},50:function(e,n,t){},54:function(e,n,t){},58:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),a=t(13),r=t.n(a),s=t(6),o=t.n(s),l=t(35),j=t(5),d=(t(42),t(11)),b=t(26),u=t.n(b),m=t(27),h=t.n(m),O=t(29),x=(t(47),t(48),t(2)),f=function(e){return Object(x.jsx)("div",{className:"game-body",children:Array(6).fill(0).map((function(n,t){return Object(x.jsx)("div",{className:o()("game-body-row",{shake:t===e.curRow&&e.shake}),children:Array(5).fill(0).map((function(n,c){return Object(x.jsx)("div",{className:o()("item",[e.words[t][c]?"letter":"empty"]),children:e.words[t][c]},"".concat(t,"_").concat(c))}))},t)}))})},p=t(31),k=t.n(p),v=t(32),g=t.n(v),y=t(33),N=t.n(y),C=(t(50),function(){return Object(x.jsxs)("div",{className:"game-header align-items-center justify-content-between py-1 border-bottom",children:[Object(x.jsx)("button",{children:Object(x.jsx)(k.a,{})}),Object(x.jsx)("h1",{className:"m-0 p-0",children:"\uc6cc\ub4e4"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{children:Object(x.jsx)(g.a,{})}),Object(x.jsx)("button",{children:Object(x.jsx)(N.a,{})})]})]})}),w=t(34),E=t.n(w),S=(t(54),function(e){return Object(x.jsxs)("div",{className:"game-keyboard",children:[Object(x.jsx)("div",{className:"game-keyboard-row",children:["\u3131","\u3134","\u3137","\u3139","\u3141","\u314f","\u3151","\u3153","\u3155","\u3157","\u315b"].map((function(n){return Object(x.jsx)("div",{className:"item",onClick:function(){return e.onClickKeyboard(n)},children:n},n)}))}),Object(x.jsx)("div",{className:"game-keyboard-row",children:["\u3142","\u3145","\u3147","\u3148","\u314a","\u315c","\u3160","\u3161","\u3163","\u3150","\u3154"].map((function(n){return Object(x.jsx)("div",{className:"item",onClick:function(){return e.onClickKeyboard(n)},children:n},n)}))}),Object(x.jsxs)("div",{className:"game-keyboard-row",children:[Object(x.jsx)("button",{className:"item",disabled:e.curWord.length<5,onClick:e.onClickEner,children:"ENTER"}),["\u314b","\u314c","\u314d","\u314e","\u3158","\u315a","\u315d","\u315f","\u3162"].map((function(n){return Object(x.jsx)("div",{className:"item",onClick:function(){return e.onClickKeyboard(n)},children:n},n)})),Object(x.jsx)("button",{className:"item",disabled:0===e.curWord.length,onClick:e.onClickBack,children:Object(x.jsx)(E.a,{})})]})]})}),B=function(){var e=Object(c.useState)(0),n=Object(d.a)(e,2),t=n[0],i=(n[1],Object(c.useState)([[],[],[],[],[],[]])),a=Object(d.a)(i,2),r=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(d.a)(o,2),j=l[0],b=l[1];return Object(x.jsxs)("div",{className:"game",children:[Object(x.jsx)(C,{}),Object(x.jsx)(f,{curRow:t,words:r,shake:j}),Object(x.jsx)(S,{curWord:r[t],onClickKeyboard:function(e){if(r[t].length<5){var n=h.a.cloneDeep(r);n[t].push(e),s(n)}},onClickEner:function(){5===r[t].length&&(u.a.assemble(r[t]).split("").every((function(e){return u.a.isComplete(e)}))||(Object(O.b)({text:"\ub2e8\uc5b4 \ubaa9\ub85d\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4.",variant:"dark"}),b(!0),setTimeout((function(){b(!1)}),200)))},onClickBack:function(){if(0<r[t].length){var e=h.a.cloneDeep(r);e[t].pop(),s(e)}}}),Object(x.jsx)(O.a,{options:{position:"top",delay:1e3}})]})};var F=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:o()("mobile-container"),children:Object(x.jsx)(l.a,{children:Object(x.jsx)(j.a,{path:"/",component:B})})})})},K=(t(58),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))});r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),K()}},[[60,1,2]]]);