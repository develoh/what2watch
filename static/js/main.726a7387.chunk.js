(this.webpackJsonpwhat2watch=this.webpackJsonpwhat2watch||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),o=a(7),i=a(1),m=a(15),l=a.n(m),u=a(29),v=a(10),p=a(11),d=a(13),h=a(12),E=a(30),y=a.n(E);a(55);var f=function(e){e.id;var t=e.year,a=e.title,n=e.summary,c=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:c,genres:s}}},r.a.createElement("img",{src:c,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),n.length>180?"...":""))))},g=(a(61),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sorty_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},'"Loading..."')):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var _=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Just keep swimming"'),r.a.createElement("span",null,"- Finding Nemo, 2003"))},b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return e?r.a.createElement("span",null,e.title):null}}]),a}(r.a.Component);a(63);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var w=function(){return r.a.createElement(o.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",exact:!0,component:_}),r.a.createElement(i.a,{path:"/movie-detail",component:b}))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.726a7387.chunk.js.map