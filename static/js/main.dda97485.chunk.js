(this["webpackJsonpredux-tvshows"]=this["webpackJsonpredux-tvshows"]||[]).push([[0],{26:function(e,t,a){e.exports=a(59)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(8),r=a.n(l),c=a(2),i=a(3),o=a(23),u=Object(i.c)({inputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_VALUE":return t.payload;default:return e}},selectedShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_SHOW":return t.payload;default:return e}}}),m=a(4),h=a(5),d=a(7),p=a(6),w=a(12),E=a.n(w),v=a(24),f=a(25),g=a.n(f).a.create({baseURL:"https://api.tvmaze.com/search/shows/"}),b=(a(55),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"fetchTVShows",value:function(e){this.props.setInputValue(e.target.value)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"ui icon input shows_list__input-container"},s.a.createElement("input",{onChange:function(t){return e.fetchTVShows(t)},id:"shows_list__input",type:"text",placeholder:"Search TV Shows..."}),s.a.createElement("i",{className:"search icon"}))}}]),a}(s.a.Component)),N=Object(c.b)((function(e){return{inputValue:e.inputValue}}),{setInputValue:function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("?q=".concat(e));case 2:n=t.sent,a({type:"INPUT_VALUE",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(b),y=(a(56),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={opened:!1},e}return Object(h.a)(a,[{key:"moreButtonClicked",value:function(e){this.props.selectShow(e),window.innerWidth<1e3&&this.setState({opened:!this.state.opened})}},{key:"showsListClicked",value:function(){this.state.opened&&(this.setState({opened:!1}),this.props.selectShow(null))}},{key:"renderedShows",value:function(){var e=this;return this.props.inputValue.map((function(t){return s.a.createElement("div",{className:"ui items",key:t.show.id},s.a.createElement("div",{className:"item"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{alt:t.show.name,src:t.show.image&&t.show.image.medium?t.show.image.medium:"https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg"})),s.a.createElement("div",{className:"content"},s.a.createElement("a",{className:"header",href:t.show.officialSite},t.show.name),s.a.createElement("div",{className:"meta"},s.a.createElement("span",null,t.show.genres.join(", "))),s.a.createElement("div",{className:"description"},s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.show.summary}})),s.a.createElement("div",{className:"extra"},s.a.createElement("div",{onClick:function(){return e.moreButtonClicked(t)},className:"ui animated button",tabIndex:"0"},s.a.createElement("div",{className:"visible content"},"More"),s.a.createElement("div",{className:"hidden content"},s.a.createElement("i",{className:"right arrow icon"})))))))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{onClick:function(){return e.showsListClicked()},style:window.innerWidth<1e3&&this.state.opened?{filter:"blur(4px)"}:{},className:"shows_list"},s.a.createElement("h1",{className:"shows_list__header"},"Search every TV Show that exist"),s.a.createElement(N,null),this.renderedShows())}}]),a}(s.a.Component)),S=Object(c.b)((function(e){return{inputValue:e.inputValue}}),{selectShow:function(e){return{type:"SELECTED_SHOW",payload:e}}})(y),j=(a(57),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.show;return e?s.a.createElement("div",{className:"selected_show"},s.a.createElement("div",{className:"ui items",key:e.show.id},s.a.createElement("div",{className:"item"},s.a.createElement("div",{className:"image"},window.innerWidth>500?s.a.createElement("img",{alt:e.show.name,src:e.show.image&&e.show.image.original?e.show.image.original:"https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg"}):null),s.a.createElement("div",{className:"content"},s.a.createElement("a",{className:"header",href:e.show.officialSite},e.show.name),s.a.createElement("div",{className:"description"},s.a.createElement("p",null,s.a.createElement("b",null,"Genres:")," ",e.show.genres.join(", "))),s.a.createElement("div",{className:"description"},e.show.rating.average?s.a.createElement("p",null,s.a.createElement("b",null,"Rating:")," ",e.show.rating.average,"/10"):null),s.a.createElement("div",{className:"description"},e.show.status?s.a.createElement("p",null,s.a.createElement("b",null,"Status:")," ",e.show.status):null),s.a.createElement("div",{className:"description"},e.show.language?s.a.createElement("p",null,s.a.createElement("b",null,"Language:")," ",e.show.language):null),s.a.createElement("div",{className:"description"},e.show.network?s.a.createElement("p",null,s.a.createElement("b",null,"Network:")," ",e.show.network.name):null),s.a.createElement("div",{className:"description"},e.show.runtime?s.a.createElement("p",null,s.a.createElement("b",null,"Runtime:")," ",e.show.runtime," min"):null),s.a.createElement("div",{className:"description"},e.show.premiered?s.a.createElement("p",null,s.a.createElement("b",null,"Premiered:")," ",e.show.premiered):null),s.a.createElement("div",{className:"description"},e.show.schedule?s.a.createElement("p",null,s.a.createElement("b",null,"Scheduled:")," ",e.show.schedule.days," ",e.show.schedule.time):null),s.a.createElement("div",{className:"description"},s.a.createElement("b",null,"Description: "),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.show.summary}})))))):s.a.createElement("div",{className:"selected_show"})}}]),a}(s.a.Component)),k=Object(c.b)((function(e){return{show:e.selectedShow}}))(j),O=(a(58),function(){return s.a.createElement("div",{className:"app"},s.a.createElement(S,null),s.a.createElement(k,null))}),_=Object(i.d)(u,Object(i.a)(o.a));r.a.render(s.a.createElement(c.a,{store:_},s.a.createElement(O,null)),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.dda97485.chunk.js.map