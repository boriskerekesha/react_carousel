(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(6),i=n.n(a),c=n(7),r=n(8),s=n(10),o=n(9),u=n(1),l=n.n(u),m=(n(15),n(2)),b=n(5),j=n(4),p=n.n(j),h=(n(16),n(0)),g=function(t){var e=t.images,n=t.itemWidth,a=t.animationDuration,i=t.step,c=t.frameSize,r=t.infinite,s=void 0!==r&&r,o=Object(u.useState)(0),l=Object(m.a)(o,2),j=l[0],g=l[1],d=Object(u.useState)(n),O=Object(m.a)(d,2),f=O[0],x=O[1],_=Object(u.useState)(a),v=Object(m.a)(_,2),y=v[0],S=v[1],w=Object(u.useState)(i),k=Object(m.a)(w,2),N=k[0],z=k[1],D=Object(u.useState)(c),W=Object(m.a)(D,2),C=W[0],T=W[1],I=function(t){if(!s){var n=j;switch(t){case"next":n+=N,e.length-C<n&&(n=e.length-C);break;case"prev":(n-=N)<0&&(n=0)}g(n)}};return Object(h.jsxs)("div",{className:"carousel",style:{width:"".concat(f*e.length,"px")},children:[Object(h.jsx)("ul",{className:"carousel__list",style:{width:"".concat(C*f,"px")},children:e.map((function(t,e){return Object(h.jsx)("li",{className:"carousel__item",style:{width:"".concat(f,"px"),height:"".concat(f,"px"),transition:"transform ".concat(y,"ms"),transform:"translateX(-".concat(j*f,"px)")},children:Object(h.jsx)("img",{src:t,alt:"".concat(e),id:t,style:{width:"".concat(f,"px"),height:"".concat(f,"px")}})},t)}))}),Object(h.jsx)("button",{className:p()("carousel__button carousel__button--prev",{"carousel__button--disabled":j<=0}),type:"button",onClick:function(){return I("prev")},children:Object(h.jsx)(b.a,{})}),Object(h.jsx)("button",{className:p()("carousel__button carousel__button--next",{"carousel__button--disabled":j>=10-N}),type:"button","data-cy":"next",onClick:function(){return I("next")},children:Object(h.jsx)(b.b,{})}),Object(h.jsx)("div",{className:"carousel__container-inputs",children:["itemWidth","animationDuration","frameSize","step"].map((function(t){return Object(h.jsxs)("label",{htmlFor:"".concat(t.slice(0,4),"Id"),children:[t,Object(h.jsx)("input",{type:"number",id:t,onChange:function(e){return function(t,e){switch(e){case"itemWidth":x(+t.currentTarget.value);break;case"animationDuration":S(+t.currentTarget.value);break;case"frameSize":T(+t.currentTarget.value);break;case"step":z(+t.currentTarget.value)}}(e,t)}})]},t)}))})]})},d=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,a=t.frameSize,i=t.itemWidth,c=t.animationDuration,r=t.infinite;return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("h1",{"data-cy":"title",children:["Carousel with",e.length,"images"]}),Object(h.jsx)(g,{images:e,step:n,frameSize:a,itemWidth:i,animationDuration:c,infinite:r})]})}}]),n}(l.a.Component),O=d;i.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.60ef5c27.chunk.js.map