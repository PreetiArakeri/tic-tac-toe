(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(1),a=r.n(n),i=r(3),c=r.n(i),u=(r(14),r(6)),l=r(4),h=r(5),o=r(8),d=r(7);r(15);function j(e){return Object(s.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(u.a)(t[r],3),n=s[0],a=s[1],i=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[i])return e[n]}return null}var v=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(e){var s;return Object(l.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0,count:0},s}return Object(h.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();b(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({count:this.state.count+1,squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(j,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=b(this.state.squares);return e=t?"Winner: "+t:9==this.state.count?"Match Tied":"Next player: "+(this.state.xIsNext?"X":"O"),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"title",children:"TIC TAC TOE"}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]}),Object(s.jsx)("div",{className:"status",children:e})]})}}]),r}(a.a.Component),x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),s(e),n(e),a(e),i(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.b6dc996b.chunk.js.map