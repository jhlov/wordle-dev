(this["webpackJsonp\uc6cc\ub4e4"]=this["webpackJsonp\uc6cc\ub4e4"]||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},109:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},119:function(e,t,c){},121:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(22),r=c.n(n),i=c(4),o=c.n(i),l=c(75),j=c(10),d=(c(82),c(3)),u=c(13),b=c(52),m=c(6),O=c(28),h=c.n(O),f=c(53),x=c.n(f),v=c(54),k=c.n(v),p=c(20),N=c.n(p),y=c(129),g=c(27),S=(c(106),c(7)),w=(c(107),c(1)),C=function(e){var t=Object(a.useState)(0),c=Object(m.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){if("sssss"===e.checkList[e.curRow])for(var t=function(e){setTimeout((function(){return n(e+1)}),200*e)},c=0;c<5;++c)t(c);else n(0)}),[e.checkList]),Object(w.jsx)("div",{className:"game-body",children:Array(6).fill(0).map((function(t,c){return Object(w.jsx)("div",{className:o()("game-body-row",{shake:c===e.curRow&&e.shake}),children:Array(5).fill(0).map((function(t,a){return Object(w.jsx)("div",{className:o()("item","item-".concat(a+1),[e.lettersList[c][a]?"letter":"empty"],Object(S.a)({},e.checkList[c][a],e.checkList[c][a]),{jump:c===e.curRow&&0<s&&a<s}),children:e.lettersList[c][a]},"".concat(c,"_").concat(a))}))},c)}))})},K={letters:["","","","","",""],checks:["","","","","",""],keyMap:{},curRow:0,id:0,state:"PLAYING"},M=function(){var e=localStorage.getItem("gameData");return e?JSON.parse(e):(localStorage.setItem("gameData",JSON.stringify(K)),N.a.cloneDeep(K))},I=function(e){localStorage.setItem("gameData",JSON.stringify(e))},L=c(67),D=c.n(L),E=c(68),T=c.n(E),R=(c(109),function(e){return Object(w.jsxs)("div",{className:"game-header align-items-center justify-content-between py-2 border-bottom",children:[Object(w.jsx)("button",{onClick:e.onClickHowTo,children:Object(w.jsx)(D.a,{})}),Object(w.jsx)("h1",{className:"m-0 p-0",children:"\uc6cc\ub4e4"}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:e.onClickStatistics,children:Object(w.jsx)(T.a,{})})})]})}),H=c(69),B=c.n(H),F=(c(113),function(e){return Object(w.jsxs)("div",{className:"game-keyboard",children:[Object(w.jsx)("div",{className:"game-keyboard-row",children:["\u3142","\u3148","\u3137","\u3131","\u3145","\u315b","\u3155","\u3151","\u3150","\u3154"].map((function(t){return Object(w.jsx)("div",{className:o()("item",Object(S.a)({},e.keyMap[t],e.keyMap[t])),onClick:function(){return e.onClickKeyboard(t)},children:t},t)}))}),Object(w.jsx)("div",{className:"game-keyboard-row",children:["\u3141","\u3134","\u3147","\u3139","\u314e","\u3157","\u3153","\u314f","\u3163"].map((function(t){return Object(w.jsx)("div",{className:o()("item",Object(S.a)({},e.keyMap[t],e.keyMap[t])),onClick:function(){return e.onClickKeyboard(t)},children:t},t)}))}),Object(w.jsxs)("div",{className:"game-keyboard-row",children:[Object(w.jsx)("button",{className:"item",disabled:e.curLetters.length<5,onClick:e.onClickEner,children:"ENTER"}),["\u314b","\u314c","\u314a","\u314d","\u3160","\u315c","\u3161"].map((function(t){return Object(w.jsx)("div",{className:o()("item",Object(S.a)({},e.keyMap[t],e.keyMap[t])),onClick:function(){return e.onClickKeyboard(t)},children:t},t)})),Object(w.jsx)("button",{className:"item",disabled:0===e.curLetters.length,onClick:e.onClickBack,children:Object(w.jsx)(B.a,{})})]})]})}),J=function(e){var t=Object(a.useRef)(null);Object(a.useEffect)((function(){setInterval((function(){t.current&&t.current.focus()}),100)}),[]);return Object(w.jsx)("div",{className:"position-absolute",ref:t,tabIndex:-1,onKeyDown:function(t){if("Enter"===t.code)5===e.curLetters.length&&e.onClickEner();else if("Backspace"===t.code)0<e.curLetters.length&&e.onClickBack();else{var c={KeyQ:"\u3142",KeyW:"\u3148",KeyE:"\u3137",KeyR:"\u3131",KeyT:"\u3145",KeyY:"\u315b",KeyU:"\u3155",KeyI:"\u3151",KeyO:"\u3150",KeyP:"\u3154",KeyA:"\u3141",KeyS:"\u3134",KeyD:"\u3147",KeyF:"\u3139",KeyG:"\u314e",KeyH:"\u3157",KeyJ:"\u3153",KeyK:"\u314f",KeyL:"\u3163",KeyZ:"\u314b",KeyX:"\u314c",KeyC:"\u314a",KeyV:"\u314d",KeyB:"\u3160",KeyN:"\u315c",KeyM:"\u3161"};c[t.code]&&e.onClickKeyboard(c[t.code])}}})},A=c(130),z=(c(114),function(e){return Object(w.jsxs)(A.a,{className:"help-modal",show:e.show,onHide:e.onClose,children:[Object(w.jsx)(A.a.Header,{className:"border-0",closeButton:!0}),Object(w.jsxs)(A.a.Body,{children:[Object(w.jsxs)("section",{className:"border-bottom",children:[Object(w.jsxs)("p",{children:["6\ubc88\uc758 \uc2dc\ub3c4 \uc548\uc5d0 ",Object(w.jsx)("b",{children:"\ub2e8\uc5b4"}),"\ub97c \ub9de\ucdb0\ubcf4\uc138\uc694."]}),Object(w.jsx)("p",{children:"\ub2e8\uc5b4\ub294 5\uae00\uc790\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc720\ud6a8\ud55c \ub2e8\uc5b4\uc785\ub2c8\ub2e4. 'ENTER' \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc81c\ucd9c\ud558\uc138\uc694."}),Object(w.jsx)("p",{children:"\uc81c\ucd9c \ud6c4\uc5d0 \uae00\uc790 \ud0c0\uc77c\uc758 \uc0c9\uc0c1\uc774 \ubcc0\uacbd\ub418\uc5b4, \ucd94\uce21\uc774 \ub2e8\uc5b4\uc5d0 \uc5bc\ub9c8\ub098 \uac00\uae4c\uc6e0\ub294\uc9c0 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."})]}),Object(w.jsxs)("section",{className:"examples border-bottom",children:[Object(w.jsx)("p",{children:Object(w.jsx)("b",{children:"\uc608\uc2dc"})}),Object(w.jsxs)("div",{className:"items",children:[Object(w.jsx)("div",{className:"item letter s rotate",children:"\u3145"}),Object(w.jsx)("div",{className:"item letter",children:"\u314f"}),Object(w.jsx)("div",{className:"item letter",children:"\u3139"}),Object(w.jsx)("div",{className:"item letter",children:"\u314f"}),Object(w.jsx)("div",{className:"item letter",children:"\u3147"})]}),Object(w.jsx)("p",{children:"'\u3145' \uae00\uc790\ub294 \ub2e8\uc5b4\uc5d0 \uc788\uace0, \uc815\ud655\ud55c \uc704\uce58\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(w.jsxs)("div",{className:"items",children:[Object(w.jsx)("div",{className:"item letter",children:"\u3131"}),Object(w.jsx)("div",{className:"item letter",children:"\u314f"}),Object(w.jsx)("div",{className:"item letter b rotate",children:"\u3141"}),Object(w.jsx)("div",{className:"item letter",children:"\u3145"}),Object(w.jsx)("div",{className:"item letter",children:"\u314f"})]}),Object(w.jsx)("p",{children:"'\u3141' \uae00\uc790\ub294 \ub2e8\uc5b4\uc5d0\ub294 \uc788\uc9c0\ub9cc \uc798\ubabb\ub41c \uc704\uce58\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(w.jsxs)("div",{className:"items",children:[Object(w.jsx)("div",{className:"item letter",children:"\u3147"}),Object(w.jsx)("div",{className:"item letter",children:"\u3155"}),Object(w.jsx)("div",{className:"item letter",children:"\u3139"}),Object(w.jsx)("div",{className:"item letter o rotate",children:"\u3161"}),Object(w.jsx)("div",{className:"item letter",children:"\u3141"})]}),Object(w.jsx)("p",{children:"'\u3161' \uae00\uc790\ub294 \ub2e8\uc5b4\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),Object(w.jsxs)("section",{children:[Object(w.jsx)("p",{children:Object(w.jsx)("strong",{children:"\ub9e4\uc77c 2\ubc88(0\uc2dc, 12\uc2dc) \uc0c8\ub85c\uc6b4 \uac8c\uc784\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),Object(w.jsx)("p",{children:Object(w.jsxs)("small",{children:["(\uc774 \ud504\ub85c\uc81d\ud2b8\ub294\xa0",Object(w.jsx)("a",{href:"https://www.powerlanguage.co.uk/wordle/",target:"_blank",children:"WORDLE"}),"\uc744 \ud55c\uae00\ubc84\uc804\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf8 \ud1a0\uc774\ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.)"]})})]})]})]})}),P={currentStreak:0,maxStreak:0,success:{},fail:0},Y=function(){var e=localStorage.getItem("statisticsData");return e?JSON.parse(e):(localStorage.setItem("statisticsData",JSON.stringify(P)),N.a.cloneDeep(P))},G=function(e){localStorage.setItem("statisticsData",JSON.stringify(e))},W=c(74),X=c.n(W),_=c(26),Q=c.n(_),U=c(131),V=c(132),Z=(c(115),function(e){var t=Object(a.useState)(P),c=Object(m.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(!1),i=Object(m.a)(r,2),l=i[0],j=i[1],d=Object(a.useState)(""),b=Object(m.a)(d,2),O=b[0],h=b[1],f=Object(a.useState)(null),x=Object(m.a)(f,2),v=x[0],k=x[1],p=Object(a.useState)(-1),N=Object(m.a)(p,2),y=N[0],g=N[1];Object(a.useEffect)((function(){if(e.show){var t=Y();n(t);var c=M();if(g(c.checks.indexOf("sssss")),j("FINISH"===c.state),"FINISH"===c.state){var a=setInterval((function(){var e=Q()(),t=Q()();t=e.get("h")<12?Q()().hour(12).startOf("h"):Q()().add("d",1).startOf("d");var c=Math.floor(Q.a.duration(t.diff(e)).asHours()),a=Math.floor(Q.a.duration(t.diff(e)).asMinutes()%60),s=Math.floor(Q.a.duration(t.diff(e)).asSeconds()%60);h("".concat(c.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")))}),1e3);k(a)}}else clearInterval(v)}),[e.show]);var S=Object(a.useMemo)((function(){return Object.values(s.success).reduce((function(e,t){return e+t}),0)}),[s]),C=Object(a.useMemo)((function(){return s.fail+S}),[s]),K=Object(a.useMemo)((function(){return 0===C?0:Math.round(S/C*100)}),[s]),I=Object(a.useMemo)((function(){return Math.max.apply(Math,Object(u.a)(Object.values(s.success)))}),[s]);return Object(w.jsxs)(A.a,{className:"statistics-modal",show:e.show,onHide:e.onClose,children:[Object(w.jsx)(A.a.Header,{className:"border-0",closeButton:!0}),Object(w.jsxs)(A.a.Body,{children:[Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"\ud1b5\uacc4"}),Object(w.jsxs)("div",{className:"summary",children:[Object(w.jsxs)("div",{className:"summary-item",children:[Object(w.jsx)("div",{className:"value",children:C}),Object(w.jsx)("div",{className:"title",children:"\uac8c\uc784"})]}),Object(w.jsxs)("div",{className:"summary-item",children:[Object(w.jsx)("div",{className:"value",children:K}),Object(w.jsx)("div",{className:"title",children:"\uc2b9\ub960(%)"})]}),Object(w.jsxs)("div",{className:"summary-item",children:[Object(w.jsx)("div",{className:"value",children:s.currentStreak}),Object(w.jsx)("div",{className:"title",children:"\ud604\uc7ac \uc5f0\uc2b9"})]}),Object(w.jsxs)("div",{className:"summary-item",children:[Object(w.jsx)("div",{className:"value",children:s.maxStreak}),Object(w.jsx)("div",{className:"title",children:"\ucd5c\uace0 \uc5f0\uc2b9"})]})]})]}),Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"\uc815\ub2f5 \ubd84\ud3ec"}),Object(w.jsx)("div",{className:"guess-distribution",children:Array(6).fill(0).map((function(e,t){var c;return Object(w.jsxs)("div",{className:"guess-distribution-item",children:[Object(w.jsx)("span",{children:t+1}),Object(w.jsx)(U.a,{className:o()({last:t===y}),now:s.success[t]/I*100,label:null!==(c=s.success[t])&&void 0!==c?c:0})]},t)}))})]}),l&&Object(w.jsx)("section",{children:Object(w.jsxs)("div",{className:"bottom",children:[Object(w.jsxs)("div",{className:"border-right",children:[Object(w.jsx)("h2",{children:"\ub2e4\uc74c \uc6cc\ub4e4\uae4c\uc9c0"}),Object(w.jsxs)("div",{className:"next-time",children:["\xa0",O,"\xa0"]})]}),Object(w.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(w.jsxs)(V.a,{className:"share-btn",size:"lg",onClick:e.onClickShare,children:["\uacf5\uc720 ",Object(w.jsx)(X.a,{})]})})]})})]})]})}),q=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(["","","","","",""]),r=Object(m.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(["","","","","",""]),j=Object(m.a)(l,2),O=j[0],f=j[1],v=Object(a.useState)({}),p=Object(m.a)(v,2),S=p[0],L=p[1],D=Object(a.useState)(!1),E=Object(m.a)(D,2),T=E[0],H=E[1],B=Object(a.useState)(!1),A=Object(m.a)(B,2),P=A[0],W=A[1],X=Object(a.useState)(!0),_=Object(m.a)(X,2),Q=_[0],U=_[1],V=Object(a.useState)(!1),q=Object(m.a)(V,2),$=q[0],ee=q[1],te=Object(a.useState)(!1),ce=Object(m.a)(te,2),ae=ce[0],se=ce[1];Object(a.useEffect)((function(){ne()}),[]);var ne=function(){var e=Object(b.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,x.a.get("https://ukntcifwza.execute-api.ap-northeast-2.amazonaws.com/default/wordle");case 3:t=e.sent,0===(c=M()).id&&se(!0),c.id===t.data.id?(ie(c),"FINISH"===c.state&&(U(!1),setTimeout((function(){ee(!0)}),1e3))):re(t.data.id),W(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(e){var t=N.a.cloneDeep(K);t.id=e,I(t),ie(t),U(!0)},ie=function(e){s(Math.min(5,e.curRow)),o(Object(u.a)(e.letters)),f(Object(u.a)(e.checks)),L(Object(d.a)({},e.keyMap))},oe=function(e){if(Q&&i[c].length<5){var t=N.a.cloneDeep(i);t[c]+=e,o(t)}},le=function(e,t){var c=N.a.cloneDeep(S);return e.split("").forEach((function(e,a){"s"===t[a]?c[e]="s":"b"===t[a]?"s"!==c[e]&&(c[e]="b"):void 0===c[e]&&(c[e]="o")})),c},je=function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q){e.next=2;break}return e.abrupt("return");case 2:if(5!==i[c].length){e.next=15;break}if(t=k.a.assemble(i[c].split("")),!t.split("").every((function(e){return k.a.isComplete(e)}))){e.next=12;break}return e.delegateYield(h.a.mark((function e(){var a,n,r,o,l,j,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),U(!1),e.next=4,x.a.get("https://ukntcifwza.execute-api.ap-northeast-2.amazonaws.com/default/wordle?word=".concat(t,"&letters=").concat(i[c],"&isLast=").concat(5===c));case 4:if(a=e.sent,W(!1),!a.data.error){e.next=12;break}return Object(g.b)({text:a.data.error,variant:"dark"}),H(!0),setTimeout((function(){H(!1)}),200),U(!0),e.abrupt("return",{v:void 0});case 12:if(n=M(),a.data.id===n.id){e.next=17;break}return Object(g.b)({text:"\uac8c\uc784\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac8c\uc784\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4.",variant:"dark"}),re(a.data.id),e.abrupt("return",{v:void 0});case 17:for(n.curRow=c+1,n.letters[c]=a.data.letters,n.checks[c]=a.data.check,n.keyMap=N.a.cloneDeep(le(a.data.letters,a.data.check)),I(n),"sssss"===a.data.check?((o=Y()).currentStreak+=1,o.maxStreak=Math.max(o.maxStreak,o.currentStreak),o.success[c]=(null!==(r=o.success[c])&&void 0!==r?r:0)+1,G(o),n.curRow=c,n.state="FINISH",I(n)):5===c&&((l=Y()).currentStreak=0,l.fail+=1,G(l),n.curRow=c,n.state="FINISH",I(n)),j=function(e){setTimeout((function(){var t,s=N.a.cloneDeep(O);s[c]=(null!==(t=a.data.check)&&void 0!==t?t:"").slice(0,e+1),f(s)}),300*e)},d=0;d<5;++d)j(d);setTimeout((function(){var e,t=N.a.cloneDeep(S);if(null===(e=a.data.letters)||void 0===e||e.split("").forEach((function(e,c){var s,n;"s"===(null!==(s=a.data.check)&&void 0!==s?s:[])[c]?t[e]="s":"b"===(null!==(n=a.data.check)&&void 0!==n?n:[])[c]?"s"!==t[e]&&(t[e]="b"):void 0===t[e]&&(t[e]="o")})),L(t),"sssss"===a.data.check){Object(g.b)({text:["\ucc9c\uc7ac!!!","\uad49\uc7a5\ud574\uc694!!!","\uc815\ub9d0 \uc798\ud588\uc5b4\uc694!!","\uba4b\uc838\uc694!","\uc798\ud588\uc5b4\uc694!!","\uaca8\uc6b0 \ub9de\ucdc4\ub124\uc694!"][c],variant:"dark"}),setTimeout((function(){ee(!0)}),2e3)}else 5===c?(Object(g.b)({text:"\ub2e4\uc74c \uae30\ud68c\uc5d0 \ub2e4\uc2dc \ub3c4\uc804\ud574\ubcf4\uc138\uc694. \uc815\ub2f5\uc740 '".concat(a.data.solution,"' \uc785\ub2c8\ub2e4"),variant:"dark"}),setTimeout((function(){ee(!0)}),2e3)):(s((function(e){return e+1})),U(!0))}),1500);case 26:case"end":return e.stop()}}),e)}))(),"t0",7);case 7:if("object"!==typeof(a=e.t0)){e.next=10;break}return e.abrupt("return",a.v);case 10:e.next=15;break;case 12:Object(g.b)({text:"\ub2e8\uc5b4 \ubaa9\ub85d\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4.",variant:"dark"}),H(!0),setTimeout((function(){H(!1)}),200);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){if(Q&&0<i[c].length){var e=N.a.cloneDeep(i);e[c]=e[c].slice(0,-1),o(e)}};return Object(w.jsxs)("div",{className:"game",children:[Object(w.jsx)(R,{onClickStatistics:function(){return ee(!0)},onClickHowTo:function(){return se(!0)}}),Object(w.jsx)(C,{curRow:c,lettersList:i,checkList:O,shake:T}),Object(w.jsx)(F,{curLetters:i[c],onClickKeyboard:oe,onClickEner:je,onClickBack:de,keyMap:S}),Object(w.jsx)(J,{curLetters:i[c],onClickKeyboard:oe,onClickEner:je,onClickBack:de}),Object(w.jsx)(g.a,{options:{position:"top",delay:2e3}}),P&&Object(w.jsx)("div",{className:"loading",children:Object(w.jsx)(y.a,{animation:"border"})}),Object(w.jsx)(Z,{show:$,onClose:function(){return ee(!1)},onClickShare:function(){var e=M(),t="\uc6cc\ub4e4 ".concat(e.id," ").concat(e.checks.some((function(e){return"sssss"===e}))?e.checks.filter((function(e){return e})).length:"X","/").concat(e.checks.length,"\n\n");t+=e.checks.filter((function(e){return""!==e})).map((function(e){return e.split("").reduce((function(e,t){return e+("s"===t?"\ud83d\udfe9":"b"===t?"\ud83d\udfe8":"\u2b1c")}),"")})).join("\n"),navigator.share?navigator.share({text:t}):(navigator.clipboard.writeText(t),Object(g.b)({text:"\uac8c\uc784 \uacb0\uacfc\ub97c \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4.",variant:"dark"}))}}),Object(w.jsx)(z,{show:ae,onClose:function(){return se(!1)}})]})};var $=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)("div",{className:o()("mobile-container"),children:Object(w.jsx)(l.a,{children:Object(w.jsx)(j.a,{path:"/",component:q})})})})},ee=(c(119),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))});r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)($,{})}),document.getElementById("root")),ee()},82:function(e,t,c){}},[[121,1,2]]]);