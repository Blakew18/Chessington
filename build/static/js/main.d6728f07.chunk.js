(this["webpackJsonpold-mate-chess"]=this["webpackJsonpold-mate-chess"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/YEETGALE.14bc3c60.jpg"},,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/PONC_Queen.fe620724.svg"},function(e,t,a){e.exports=a.p+"static/media/POC_Queen.2b84eb91.svg"},,,function(e,t,a){e.exports=a.p+"static/media/PONC_Rook.af8ebcf9.svg"},function(e,t,a){e.exports=a.p+"static/media/POC_Rook.618961c2.svg"},function(e,t,a){e.exports=a.p+"static/media/PONC_Bishop.31190906.svg"},function(e,t,a){e.exports=a.p+"static/media/POC_Bishop.562afbca.svg"},function(e,t,a){e.exports=a.p+"static/media/PONC_Knight.78f6501d.svg"},function(e,t,a){e.exports=a.p+"static/media/POC_Knight.57cd06ca.svg"},,,,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),u=(a(42),a(5)),l=(a(43),a(18)),s=a.n(l),i=a(23),v=a(6),f=function(e,t,a,n){console.time("YEET");var r=[];if(e.toLowerCase()===e&&n)return r;if(e.toUpperCase()===e&&!n)return r;for(var o=t.x-1,c=t.y-1,u=!1,l=!0;o>=0&&c>=0&&!u&&l;){var s=g(e,a,t,{x:o,y:c});u=s.blockedPath,(l=s.availableMove)&&r.push({x:o,y:c}),o--,c--}for(o=t.x+1,c=t.y-1,u=!1,l=!0;o<=7&&c>=0&&!u&&l;){var i=g(e,a,t,{x:o,y:c});u=i.blockedPath,(l=i.availableMove)&&r.push({x:o,y:c}),o++,c--}for(o=t.x-1,c=t.y+1,u=!1,l=!0;o>=0&&c<=7&&!u&&l;){var v=g(e,a,t,{x:o,y:c});u=v.blockedPath,(l=v.availableMove)&&r.push({x:o,y:c}),o--,c++}for(o=t.x+1,c=t.y+1,u=!1,l=!0;o<=7&&c<=7&&!u&&l;){var f=g(e,a,t,{x:o,y:c});u=f.blockedPath,(l=f.availableMove)&&r.push({x:o,y:c}),o++,c++}return console.timeEnd("YEET"),r},g=function(e,t,a,n){var r=!1;return"."!==t[n.y][n.x]&&(r=!0),a.x===n.x&&a.y===n.y&&!1,{availableMove:e.toLowerCase()===e?t[n.y][n.x].toLowerCase()!==t[n.y][n.x]||"."===t[n.y][n.x]:t[n.y][n.x].toUpperCase()!==t[n.y][n.x]||"."===t[n.y][n.x],blockedPath:r}},m=function(e,t,a,n){console.time("YEET");var r=[];if(e.toLowerCase()===e&&n)return r;if(e.toUpperCase()===e&&!n)return r;for(var o=t.x-1,c=t.y,u=!1,l=!0;o>=0&&!u&&l;){var s=p(e,a,t,{x:o,y:c});u=s.blockedPath,(l=s.availableMove)&&r.push({x:o,y:c}),o--}for(o=t.x+1,c=t.y,u=!1,l=!0;o<=7&&!u&&l;){var i=p(e,a,t,{x:o,y:c});u=i.blockedPath,(l=i.availableMove)&&r.push({x:o,y:c}),o++}for(o=t.x,c=t.y-1,u=!1,l=!0;c>=0&&!u&&l;){var v=p(e,a,t,{x:o,y:c});u=v.blockedPath,(l=v.availableMove)&&r.push({x:o,y:c}),c--}for(o=t.x,c=t.y+1,u=!1,l=!0;c<=7&&!u&&l;){var f=p(e,a,t,{x:o,y:c});u=f.blockedPath,(l=f.availableMove)&&r.push({x:o,y:c}),c++}return console.timeEnd("YEET"),r},p=function(e,t,a,n){var r=!1;return"."!==t[n.y][n.x]&&(r=!0),a.x===n.x&&a.y===n.y&&!1,{availableMove:e.toLowerCase()===e?t[n.y][n.x].toLowerCase()!==t[n.y][n.x]||"."===t[n.y][n.x]:t[n.y][n.x].toUpperCase()!==t[n.y][n.x]||"."===t[n.y][n.x],blockedPath:r}},d=function(e,t,a,n){switch(!0){case"b"===e.toLowerCase():return f(e,t,a,n);case"q"===e.toLowerCase():var r=f(e,t,a,n),o=m(e,t,a,n);return r.concat(o);case"n"===e.toLowerCase():return function(e,t,a,n){console.time("YEET");var r=[];return e.toLowerCase()===e&&n?r:e.toUpperCase()!==e||n?[{x:0,y:0}]:r}(e,0,0,n);case"r"===e.toLowerCase():return m(e,t,a,n);default:return[{x:0,y:0},{x:1,y:0}]}},y=v.a.model("RootStore",{boardLayout:v.a.string,whiteMove:v.a.boolean,castlingRight:v.a.string,enPassantAvailible:v.a.string,halfMoves:v.a.integer,fullMoves:v.a.integer,legalMoves:v.a.array(v.a.model({x:v.a.integer,y:v.a.integer}))}).views((function(e){return{getBoardState:function(){return function(e,t,a){for(var n=[],r=0,o=0;o<t;o++){for(var c=[],u=0;u<a;u++)c.push(e[r]),r++;n.push(c)}return n}(e.boardLayout,8,8)},availableLegalMoves:function(){return e.legalMoves.map((function(e){return{x:e.x,y:e.y}}))}}})).actions((function(e){return{movePiece:function(t,a,n){var r=e.getBoardState();r[t.y][t.x]=a,r[n.y][n.x]=".",e.boardLayout=r.toString().replace(/,/g,""),e.changePlayer(),e.halfMoves+=1,e.halfMoves%2===0&&(e.fullMoves+=1)},changePlayer:function(){e.whiteMove=!e.whiteMove},getLegalMoves:function(t,a){e.legalMoves=d(t,a,e.getBoardState(),e.whiteMove)},clearLegalMoves:function(){e.legalMoves=[]}}})),b=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.create({boardLayout:"rnbqkbnr.....................R........................BBRNBQKBNR",whiteMove:!0,castlingRight:"KQkq",enPassantAvailible:"-",halfMoves:0,fullMoves:0}),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(n.createContext)({}),E=x.Provider,h=function(){return Object(n.useContext)(x)},M=a(57),P=a(34),w=(a(47),a(48),a(3)),C=a(58),O=a(56),L=(a(49),a(24)),S=a.n(L),q=a(25),j=a.n(q),k=a(7),D=a.n(k),N=Object(w.a)((function(e){var t=e.squareState,a=void 0===t?{squareState:a}:t,n=e.currentPos,o=void 0===n?{currentPos:o}:n,c={name:a},l=h(),s=Object(C.a)({end:function(e,t){return l.clearLegalMoves()},item:{type:c.name,currentPos:o},collect:function(e){return{isDragging:!!e.isDragging(),piece:a}}}),i=Object(u.a)(s,3),v=(i[0].isDragging,i[1]),f=i[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{connect:f,src:D.a}),r.a.createElement("img",{src:function(e){switch(!0){case"Q"===e:return S.a;case"q"===e:return j.a;default:return null}}(a),alt:a,className:"queen",ref:v,onMouseDown:function(){l.getLegalMoves(a,o)}}))})),B=(a(51),a(28)),R=a.n(B),F=a(29),A=a.n(F),_=Object(w.a)((function(e){var t=e.squareState,a=void 0===t?{squareState:a}:t,n=e.currentPos,o=void 0===n?{currentPos:o}:n,c={name:a},l=h(),s=Object(C.a)({end:function(e,t){return l.clearLegalMoves()},item:{type:c.name,currentPos:o},collect:function(e){return{isDragging:!!e.isDragging(),piece:a}}}),i=Object(u.a)(s,3),v=(i[0].isDragging,i[1]),f=i[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{connect:f,src:D.a}),r.a.createElement("img",{src:function(e){switch(!0){case"R"===e:return R.a;case"r"===e:return A.a;default:return null}}(a),alt:a,className:"rook",ref:v,onMouseDown:function(){l.getLegalMoves(a,o)}}))})),T=(a(52),a(30)),Q=a.n(T),Y=a(31),K=a.n(Y),U=Object(w.a)((function(e){var t=e.squareState,a=void 0===t?{squareState:a}:t,n=e.currentPos,o=void 0===n?{currentPos:o}:n,c={name:a},l=h(),s=Object(C.a)({end:function(e,t){return l.clearLegalMoves()},item:{type:c.name,currentPos:o},collect:function(e){return{isDragging:!!e.isDragging(),piece:a}}}),i=Object(u.a)(s,3),v=(i[0].isDragging,i[1]),f=i[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{connect:f,src:D.a}),r.a.createElement("img",{src:function(e){switch(!0){case"B"===e:return Q.a;case"b"===e:return K.a;default:return null}}(a),alt:a,className:"bishop",ref:v,onMouseDown:function(){l.getLegalMoves(a,o)}}))})),G=(a(53),a(32)),H=a.n(G),I=a(33),z=a.n(I),J=Object(w.a)((function(e){var t=e.squareState,a=void 0===t?{squareState:a}:t,n=e.currentPos,o=void 0===n?{currentPos:o}:n,c={name:a},l=h(),s=Object(C.a)({end:function(e,t){return l.clearLegalMoves()},item:{type:c.name,currentPos:o},collect:function(e){return{isDragging:!!e.isDragging(),piece:a}}}),i=Object(u.a)(s,3),v=(i[0].isDragging,i[1]),f=i[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{connect:f,src:D.a}),r.a.createElement("img",{src:function(e){switch(!0){case"N"===e:return H.a;case"n"===e:return z.a;default:return null}}(a),alt:a,className:"knight",ref:v,onMouseDown:function(){l.getLegalMoves(a,o)}}))})),V=a(59),W=Object(w.a)((function(e){var t=e.pos,a=void 0===t?a:t,n=e.squareState,o=void 0===n?{squareState:o}:n,c=h(),l=c.availableLegalMoves(),s=Object(V.a)({accept:["Q","q","R","r","B","b"],canDrop:function(e){return g()},drop:function(e){c.movePiece(a,e.type,e.currentPos),c.clearLegalMoves()},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}),i=Object(u.a)(s,2),v=i[0],f=(v.isOver,v.canDrop,i[1]),g=function(){var e=!1;return l.forEach((function(t){t.x===a.x&&t.y===a.y&&(console.log("REACHED"),e=!0)})),e};return r.a.createElement("div",{style:{backgroundColor:function(){var e=!1;return c.legalMoves.length>0&&l.forEach((function(t){t.x===a.x&&t.y===a.y&&(e=!0)})),a.x%2===0&a.y%2===0||a.x%2!==0&a.y%2!==0?e?"#FFA9A4":"White":e?"#B75C58":"Gray"}()},className:"square",ref:f},function(e){switch(!0){case"k"===e.toLowerCase():return r.a.createElement("div",null,"King");case"q"===e.toLowerCase():return r.a.createElement(N,{squareState:e,currentPos:a});case"b"===e.toLowerCase():return r.a.createElement(U,{squareState:e,currentPos:a});case"n"===e.toLowerCase():return r.a.createElement(J,{squareState:e,currentPos:a});case"r"===e.toLowerCase():return r.a.createElement(_,{squareState:e,currentPos:a});case"p"===e.toLowerCase():return r.a.createElement("div",null,"Pawn");case"."===e:return;default:return console.log("Error loading Square State Square State Value = ".concat(e)),r.a.createElement("div",null,"Return Error")}}(o))})),X=Object(w.a)((function(){var e=h();return r.a.createElement("div",{className:"boardSize"},e.getBoardState().map((function(e,t){return e.map((function(e,a){return r.a.createElement(W,{key:a,pos:{x:a,y:t},squareState:e})}))})))})),Z=Object(w.a)((function(){var e=h();return r.a.createElement("div",null,r.a.createElement("h3",null,"GAME INFO"),r.a.createElement("div",null,r.a.createElement("h5",null,"Player Move: "),e.whiteMove?r.a.createElement("div",null,"People Of Not Colour"):r.a.createElement("div",null,"People of Colour")),r.a.createElement("div",null,r.a.createElement("h5",null,"Half Moves: "),e.halfMoves),r.a.createElement("div",null,r.a.createElement("h5",null,"Full Moves: "),e.fullMoves))}));var $=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){a||b().then((function(e){o(e)})).catch((function(e){console.log("failed to initialize root store"),console.log(e)}))}),[a]),a?r.a.createElement("div",{className:"App"},r.a.createElement(M.a,{backend:P.a},r.a.createElement(E,{value:a},r.a.createElement("h1",null,"CHESSINGTON"),r.a.createElement(X,null),r.a.createElement(Z,null)))):r.a.createElement(r.a.Fragment,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.d6728f07.chunk.js.map