(this.webpackJsonpgame_of_chess=this.webpackJsonpgame_of_chess||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n,s=c(0),a=c(1),r=c.n(a),o=c(4),i=c.n(o),j=(c(10),c(2)),l=(c(11),c(12));!function(e){e.INVALID_DATA="\u0411\u044b\u043b \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u043d\u043d\u044b\u0445! \u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c 4 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (e2e4).",e.REQUIRED_FIELD="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!",e.MOVE_IMPOSSIBLE="\u0422\u0430\u043a\u043e\u0439 \u0445\u043e\u0434 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d",e.GAME_OVER="\u0418\u0433\u0440\u0430 \u0431\u044b\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430."}(n||(n={}));var b=[],u=function(){var e=Object(a.useState)("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),t=Object(j.a)(e,2),c=t[0],r=t[1],o=Object(a.useState)(""),i=Object(j.a)(o,2),u=i[0],O=i[1],h=Object(a.useState)(""),p=Object(j.a)(h,2),m=p[0],d=p[1],f=Object(a.useState)("w"),g=Object(j.a)(f,2),x=g[0],v=g[1],E=Object(a.useState)(!1),S=Object(j.a)(E,2),I=S[0],w=S[1],N=Object(a.useState)(!1),P=Object(j.a)(N,2),_=P[0],B=P[1],D=new l(c),k=function(e){if(e.preventDefault(),u.length<1)return d(n.REQUIRED_FIELD),!1;if(u.length<4||u.length>4)return d(n.INVALID_DATA),!1;var t=D.move(u,{sloppy:!0});if(t){v("w"===t.color?"b":"w"),b.push(t);var c=D.fen();r(c),O(""),d(""),D.game_over()&&B(!0)}else d(n.MOVE_IMPOSSIBLE)};return Object(s.jsxs)("div",{className:"allWrapperPage",children:[Object(s.jsxs)("div",{className:"wrapperChessBoard",children:[Object(s.jsx)("h1",{children:"The game started"}),Object(s.jsx)("img",{className:"imageChessBoard",src:"http://www.fen-to-image.com/image/double/coords/".concat(c),alt:""}),Object(s.jsxs)("span",{className:"playerTurn",children:["\u0425\u043e\u0434 ","w"===x?"\u0431\u0435\u043b\u044b\u0445":"\u0447\u0435\u0440\u043d\u044b\u0445"]})]}),_?Object(s.jsx)("span",{className:"gameOverBlock",children:n.GAME_OVER}):Object(s.jsxs)("form",{className:"formStrokeShape",onSubmit:k,children:[Object(s.jsx)("input",{type:"text",value:u,onChange:function(e){return O(e.target.value)}}),Object(s.jsx)("button",{onClick:k,children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0445\u043e\u0434"})]}),m&&Object(s.jsx)("span",{className:"errorMessage",children:m}),Object(s.jsxs)("div",{className:"moveHistoryBlock",children:[Object(s.jsx)("button",{onClick:function(){w(!I)},children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0445\u043e\u0434\u043e\u0432"}),I&&!!b.length&&Object(s.jsx)("ul",{children:b.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsxs)("strong",{children:["\u0425\u043e\u0434 ","w"===e.color?"\u0431\u0435\u043b\u044b\u0445":"\u0447\u0435\u0440\u043d\u044b\u0445"]})," From: ",e.from," - To: ",e.to]},e.from+e.to)}))})]})]})};var O=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u,{})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.c857ab26.chunk.js.map