(this["webpackJsonpredux-tvshows"]=this["webpackJsonpredux-tvshows"]||[]).push([[0],{26:function(e,t,a){e.exports=a(59)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),s=a.n(r),c=a(2),i=a(3),o=a(23),u=Object(i.c)({inputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_VALUE":return t.payload;default:return e}},selectedShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_SHOW":return t.payload;default:return e}}}),m=a(4),h=a(5),d=a(7),p=a(6),w=a(12),E=a.n(w),v=a(24),f=a(25),g=a.n(f).a.create({baseURL:"https://api.tvmaze.com/search/shows/"}),N=(a(55),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"fetchTVShows",value:function(e){this.props.setInputValue(e.target.value)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"ui icon input shows_list__input-container"},l.a.createElement("input",{onChange:function(t){return e.fetchTVShows(t)},id:"shows_list__input",type:"text",placeholder:"Search TV Shows..."}),l.a.createElement("i",{className:"search icon"}))}}]),a}(l.a.Component)),b=Object(c.b)((function(e){return{inputValue:e.inputValue}}),{setInputValue:function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("?q=".concat(e));case 2:n=t.sent,a({type:"INPUT_VALUE",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(N),y=(a(56),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"renderedShows",value:function(){var e=this;return this.props.inputValue.map((function(t){return l.a.createElement("div",{className:"ui items",key:t.show.id},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{alt:t.show.name,src:t.show.image&&t.show.image.medium?t.show.image.medium:"https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg"})),l.a.createElement("div",{className:"content"},l.a.createElement("a",{className:"header",href:t.show.officialSite},t.show.name),l.a.createElement("div",{className:"meta"},l.a.createElement("span",null,t.show.genres.join(", "))),l.a.createElement("div",{className:"description"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.show.summary}})),l.a.createElement("div",{className:"extra"},l.a.createElement("div",{onClick:function(){return e.props.selectShow(t)},className:"ui animated button",tabIndex:"0"},l.a.createElement("div",{className:"visible content"},"More"),l.a.createElement("div",{className:"hidden content"},l.a.createElement("i",{className:"right arrow icon"})))))))}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"shows_list"},l.a.createElement("h1",{className:"shows_list__header"},"Search every TV Show that exist"),l.a.createElement(b,null),this.renderedShows())}}]),a}(l.a.Component)),j=Object(c.b)((function(e){return{inputValue:e.inputValue}}),{selectShow:function(e){return{type:"SELECTED_SHOW",payload:e}}})(y),S=(a(57),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.show;return console.log(e),e?l.a.createElement("div",{className:"selected_show"},l.a.createElement("div",{className:"ui items",key:e.show.id},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{alt:e.show.name,src:e.show.image&&e.show.image.original?e.show.image.original:"https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg"})),l.a.createElement("div",{className:"content"},l.a.createElement("a",{className:"header",href:e.show.officialSite},e.show.name),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,l.a.createElement("b",null,"Genres: ",e.show.genres.join(", ")))),l.a.createElement("div",{className:"description"},e.show.rating.average?l.a.createElement("p",null,l.a.createElement("b",null,"Rating: ",e.show.rating.average,"/10")):null),l.a.createElement("div",{className:"description"},e.show.status?l.a.createElement("p",null,l.a.createElement("b",null,"Status: ",e.show.status)):null),l.a.createElement("div",{className:"description"},e.show.language?l.a.createElement("p",null,l.a.createElement("b",null,"Language: ",e.show.language)):null),l.a.createElement("div",{className:"description"},e.show.network?l.a.createElement("p",null,l.a.createElement("b",null,"Network: ",e.show.network.name)):null),l.a.createElement("div",{className:"description"},e.show.runtime?l.a.createElement("p",null,l.a.createElement("b",null,"Runtime: ",e.show.runtime," min")):null),l.a.createElement("div",{className:"description"},e.show.premiered?l.a.createElement("p",null,l.a.createElement("b",null,"Premiered: ",e.show.premiered)):null),l.a.createElement("div",{className:"description"},e.show.schedule?l.a.createElement("p",null,l.a.createElement("b",null,"Scheduled: ",e.show.schedule.days," ",e.show.schedule.time)):null),l.a.createElement("div",{className:"description"},l.a.createElement("b",null,"Description: "),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.show.summary}})))))):l.a.createElement("div",{className:"selected_show"})}}]),a}(l.a.Component)),O=Object(c.b)((function(e){return{show:e.selectedShow}}))(S),_=(a(58),function(){return l.a.createElement("div",{className:"app"},l.a.createElement(j,null),l.a.createElement(O,null))}),k=Object(i.d)(u,Object(i.a)(o.a));s.a.render(l.a.createElement(c.a,{store:k},l.a.createElement(_,null)),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.562164bb.chunk.js.map