(this.webpackJsonpreact_pokedex=this.webpackJsonpreact_pokedex||[]).push([[0],{19:function(e,a,t){e.exports={cardContainer:"PokemonCard_cardContainer__hGO87",pokemonCard:"PokemonCard_pokemonCard__1p3YU",cardBody:"PokemonCard_cardBody__2fUPF",transferBtn:"PokemonCard_transferBtn__3f3wW"}},21:function(e,a,t){e.exports={pagenumbers:"Pagination_pagenumbers__2_2SX",pageNumberBtn:"Pagination_pageNumberBtn__2wsZZ"}},46:function(e,a,t){e.exports=t(76)},52:function(e,a,t){},6:function(e,a,t){e.exports={mainDescription:"PokemonDetails_mainDescription__1kOgn",columnOne:"PokemonDetails_columnOne__96n_b",columnTwo:"PokemonDetails_columnTwo__aj8pN",listItem:"PokemonDetails_listItem__1CnS-",description:"PokemonDetails_description__3NiPa",extraDescription:"PokemonDetails_extraDescription__2_SLc",wideTag:"PokemonDetails_wideTag__apwAb",tag:"PokemonDetails_tag__1X4DD",smallTag:"PokemonDetails_smallTag__T5mWV",pokemonMoves:"PokemonDetails_pokemonMoves__2x9Q7",baseForm:"PokemonDetails_baseForm__wqGM4"}},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(38),o=t.n(c),s=t(16),l=t(4),m=(t(51),t(52),t(78)),u=t(44),i=t(13),p=t.n(i),f=t(17),_=t(15),v=t(14),k=t.n(v),d=t(21),E=t.n(d),b=function(e){var a=e.handleNextPage,t=e.handlePrevPage;return r.a.createElement("div",{className:E.a.pagenumbers},t&&r.a.createElement("button",{className:E.a.pageNumberBtn,onClick:t},"Previous"),a&&r.a.createElement("button",{className:E.a.pageNumberBtn,onClick:a},"Next"))},g=t(19),x=t.n(g),h=t(77),N=t(83),O=t(84),P=function(e){var a=e.p;return r.a.createElement(h.a,{className:x.a.cardContainer},r.a.createElement(N.a,{className:x.a.pokemonCard},r.a.createElement(N.a.Body,{className:x.a.cardBody},r.a.createElement(N.a.Title,null,a[0].charAt(0).toUpperCase()+a[0].substr(1).toLowerCase()),r.a.createElement(N.a.Text,null,"".concat(a[1].split(".")[0],".")),r.a.createElement(s.b,{to:"/".concat(a[0])},r.a.createElement(O.a,{variant:"dark",className:x.a.transferBtn,styles:{backgroundColor:"#833921"}},"See Details")))))},j=t(79),w=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"),s=Object(_.a)(o,2),l=s[0],i=s[1],v=Object(n.useState)(),d=Object(_.a)(v,2),E=d[0],g=d[1],x=Object(n.useState)(),h=Object(_.a)(x,2),N=h[0],O=h[1],w=Object(n.useState)(!0),T=Object(_.a)(w,2),C=T[0],D=T[1],y=Object(n.useState)([]),S=Object(_.a)(y,2),B=S[0],I=S[1];Object(n.useEffect)((function(){D(!0),function(){var e=Object(f.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(l,{cancelToken:new k.a.CancelToken((function(e){return a=e}))});case 2:return t=e.sent,D(!1),g(t.data.next),O(t.data.previous),I([]),c(t.data.results.map((function(e){return{name:e.name,url:e.url}}))),e.abrupt("return",(function(){return a()}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l]);Object(n.useEffect)((function(){t.forEach((function(e){(function(){var a=Object(f.a)(p.a.mark((function a(){var t,n,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.get("".concat("https://pokeapi.co/api/v2/pokemon-species","/").concat(e.name),{cancelToken:new k.a.CancelToken((function(e){return t=e}))});case 2:return n=a.sent,r=n.data.flavor_text_entries[6].flavor_text,I((function(a){var t=e.name;return[].concat(Object(u.a)(a),[[t,r]])})),a.abrupt("return",(function(){return t()}));case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}))}),[t]);var M=function(){return i(E)},A=function(){return i(N)};return C?r.a.createElement(m.a,null,r.a.createElement("h1",null,"Loading...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{handleNextPage:E?M:null,handlePrevPage:N?A:null}),r.a.createElement(j.a,{xs:!0,lg:5,style:{display:"flex",flexWrap:"wrap"}},B&&B.map((function(e,a){return r.a.createElement(P,{key:a,p:e})}))),r.a.createElement(b,{handleNextPage:E?M:null,handlePrevPage:N?A:null}))},T=t(6),C=t.n(T),D=t(80),y=t(81),S=t(82),B=function(e){var a=e.match,t=Object(n.useState)({}),c=Object(_.a)(t,2),o=c[0],s=c[1],l=Object(n.useState)({}),u=Object(_.a)(l,2),i=u[0],v=u[1],d="https:pokeapi.co/api/v2/pokemon-species/".concat(a.params.name),E="https:pokeapi.co/api/v2/pokemon/".concat(a.params.name);return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(d,{cancelToken:new k.a.CancelToken((function(e){return a=e}))});case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,console.log(n),s(n),e.abrupt("return",(function(){return a()}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(E,{cancelToken:new k.a.CancelToken((function(e){return a=e}))});case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,v(n),e.abrupt("return",(function(){return a()}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]),Object.keys(o).length>0&&Object.keys(i).length>0?r.a.createElement(m.a,{fluid:!0,className:C.a.mainDescription},r.a.createElement(j.a,null,r.a.createElement(D.a,{lg:!0,className:C.a.columnOne},r.a.createElement(y.a,{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(o.id,".png"),alt:"Pokemon",fluid:!0}),r.a.createElement(m.a,{fluid:!0,className:C.a.description},o.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 . ]/g," "),o.flavor_text_entries[2].flavor_text.replace(/[^a-zA-Z0-9 . ]/g," "),o.flavor_text_entries[3].flavor_text.replace(/[^a-zA-Z0-9 . ]/g," "),o.flavor_text_entries[4].flavor_text.replace(/[^a-zA-Z0-9 . ]/g," ")),r.a.createElement(m.a,{fluid:!0,className:C.a.extraDescription},r.a.createElement(S.a,null,r.a.createElement(S.a.Item,{variant:"dark",className:C.a.listItem},"This pokemon prefers living in"," ",r.a.createElement("strong",null,o.habitat.name)," environments."),o.evolves_from_species&&r.a.createElement(S.a.Item,{variant:"dark",className:C.a.listItem},"Evolves from"," ",r.a.createElement("strong",{className:C.a.baseForm},o.evolves_from_species.name))))),r.a.createElement(D.a,{lg:!0,className:C.a.columnTwo},r.a.createElement("h1",{className:C.a.wideTag},o.name),r.a.createElement(m.a,{fluid:!0,className:C.a.baseStats},r.a.createElement("h2",{className:C.a.tag},"Base Statistics"),i.stats.map((function(e,a){return r.a.createElement("div",{key:a,className:C.a.smallTag},e.stat.name,": ",e.base_stat)}))),r.a.createElement(m.a,{fluid:!0,className:C.a.baseMoves},r.a.createElement("h2",{className:C.a.tag},"Basic Moves"),r.a.createElement(S.a,null,r.a.createElement(S.a.Item,{variant:"dark",className:C.a.pokemonMoves},i.moves[0].move.name),r.a.createElement(S.a.Item,{variant:"dark",className:C.a.pokemonMoves},i.moves[1].move.name),r.a.createElement(S.a.Item,{variant:"dark",className:C.a.pokemonMoves},i.moves[2].move.name),r.a.createElement(S.a.Item,{variant:"dark",className:C.a.pokemonMoves},i.moves[3].move.name)))))):r.a.createElement(m.a,null,r.a.createElement("h1",null,"Loading..."))},I=function(){return r.a.createElement(m.a,{fluid:!0,className:"pokemon-container"},r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:w}),r.a.createElement(l.a,{path:"/:name",component:B}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(I,null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.467ca6ef.chunk.js.map