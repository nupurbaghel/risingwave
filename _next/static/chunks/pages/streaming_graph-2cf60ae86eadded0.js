(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{6165:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streaming_graph",function(){return e(7756)}])},7756:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return C}});var n=e(7568),a=e(4051),i=e.n(a),l=e(5893),o=e(2102),c=e(639),s=e(7741),u=e(6486),f=e(9008),d=e.n(f),h=e(1664),x=e.n(h),p=e(1163),v=e(7294),g=e(1799),m=e(9534),y=e(3812),w=e(1611),j=e(4293);var k=100;function _(t){var r=t.nodes,e=t.selectedId,n=(0,v.useRef)(),a=(0,v.useCallback)((function(){var t=(0,j.rE)(r,50,200,10).map((function(t){var r=t.x,e=t.y,n=(0,m.Z)(t,["x","y"]);return(0,g.Z)({x:r+k,y:e+k},n)})),e=(0,j._P)(t),n=function(t,r){var e=0,n=0,a=!0,i=!1,l=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var s=o.value,u=s.x,f=s.y;s.data,e=Math.max(e,u+r),n=Math.max(n,f+r)}}catch(d){i=!0,l=d}finally{try{a||null==c.return||c.return()}finally{if(i)throw l}}return{width:e,height:n}}(t,10);return{layoutMap:t,links:e,width:n.width+200+200,height:n.height+50+200}}),[r]),i=a(),o=i.layoutMap,c=i.width,s=i.height,u=i.links;return(0,v.useEffect)((function(){var t=n.current,r=w.Ys(t),a=w.ak_,i=w.jvg().curve(a).x((function(t){return t.x})).y((function(t){return t.y})),l=r.select(".edges").selectAll(".edge").data(u),c=function(t){return t===e},s=function(t){return t.attr("d",(function(t){var r=t.points;return i(r)})).attr("fill","none").attr("stroke-width",1).attr("stroke-width",(function(t){return c(t.source)||c(t.target)?2:1})).attr("opacity",(function(t){return c(t.source)||c(t.target)?1:.5})).attr("stroke",(function(t){return c(t.source)||c(t.target)?y.rS.colors.teal[500]:y.rS.colors.gray[300]}))};l.exit().remove(),l.enter().call((function(t){return t.append("path").attr("class","edge").call(s)})),l.call(s);var f=function(t){t.attr("transform",(function(t){var r=t.x,e=t.y;return"translate(".concat(r,",").concat(e,")")}));var r=t.select("circle");r.empty()&&(r=t.append("circle")),r.attr("r",10).style("cursor","pointer").attr("fill",(function(t){var r=t.id;return c(r)?y.rS.colors.teal[500]:y.rS.colors.gray[500]}));var e=t.select("text");return e.empty()&&(e=t.append("text")),e.attr("fill","black").text((function(t){return t.data.name})).attr("font-family","inherit").attr("text-anchor","middle").attr("dy",20).attr("fill","black").attr("font-size",12).attr("transform","rotate(-8)"),t},d=r.select(".boxes").selectAll(".node").data(o);d.enter().call((function(t){return t.append("g").attr("class","node").call(f)})),d.call(f),d.exit().remove()}),[o,u,e]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("svg",{ref:n,width:"".concat(c,"px"),height:"".concat(s,"px"),children:[(0,l.jsx)("g",{className:"edges"}),(0,l.jsx)("g",{className:"boxes"})]})})}var b=e(5330),S=e(221);function C(){var t=(0,o.pm)(),r=(0,v.useState)(),e=r[0],a=r[1];(0,v.useEffect)((function(){function r(){return(r=(0,n.Z)(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.t0=a,r.next=4,(0,S.BA)();case 4:r.t1=r.sent.filter((function(t){return!t.name.startsWith("__")})),(0,r.t0)(r.t1),r.next=12;break;case 8:r.prev=8,r.t2=r.catch(0),t({title:"Error Occurred",description:r.t2.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(r.t2);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){}}),[t]);var f=(0,v.useCallback)((function(){return e?function(t){var r=[],e=!0,n=!1,a=void 0;try{for(var i,l=(0,u.reverse)((0,u.sortBy)(t,"id"))[Symbol.iterator]();!(e=(i=l.next()).done);e=!0){var o=i.value;o.name.startsWith("__")||r.push({id:o.id.toString(),name:o.name,parentIds:o.dependentRelations.map((function(t){return t.toString()})),order:o.id})}}catch(c){n=!0,a=c}finally{try{e||null==l.return||l.return()}finally{if(n)throw a}}return r}(e):void 0}),[e])(),h=(0,p.useRouter)(),g=(0,l.jsxs)(c.kC,{p:3,height:"calc(100vh - 20px)",flexDirection:"column",children:[(0,l.jsx)(b.Z,{children:"Streaming Graph"}),(0,l.jsxs)(c.kC,{flexDirection:"row",height:"full",children:[(0,l.jsxs)(c.kC,{width:"200px",height:"full",maxHeight:"full",mr:3,alignItems:"flex-start",flexDirection:"column",children:[(0,l.jsx)(c.xv,{fontWeight:"semibold",mb:3,children:"All Nodes"}),(0,l.jsx)(c.xu,{flex:1,overflowY:"scroll",children:(0,l.jsx)(c.gC,{width:"full",spacing:1,children:null===e||void 0===e?void 0:e.map((function(t){var r=h.query.id===t.id.toString();return(0,l.jsx)(x(),{href:"?id=".concat(t.id),children:(0,l.jsx)(s.zx,{colorScheme:r?"teal":"gray",color:r?"teal.600":"gray.500",variant:r?"outline":"ghost",width:"full",py:0,height:8,justifyContent:"flex-start",children:t.name})},t.id)}))})})]}),(0,l.jsxs)(c.xu,{flex:1,height:"full",ml:3,overflowX:"scroll",overflowY:"scroll",children:[(0,l.jsx)(c.xv,{fontWeight:"semibold",children:"Graph"}),f&&(0,l.jsx)(_,{nodes:f,selectedId:h.query.id})]})]})]});return(0,l.jsxs)(v.Fragment,{children:[(0,l.jsx)(d(),{children:(0,l.jsx)("title",{children:"Streaming Graph"})}),g]})}}},function(t){t.O(0,[662,474,118,282,293,774,888,179],(function(){return r=6165,t(t.s=r);var r}));var r=t.O();_N_E=r}]);