(this.webpackJsonpfittery=this.webpackJsonpfittery||[]).push([[0],{121:function(e,t,s){},122:function(e,t,s){},140:function(e,t,s){},143:function(e,t,s){},144:function(e,t,s){},145:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(28),r=s.n(a),i=s(16),o=s(9),l=(s(95),s(96),s(97),s.p+"static/media/logo.b71ba4e3.png"),j=s(2);function u(){return Object(j.jsx)("div",{className:"topbar",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("img",{className:"logo",src:l,alt:"logo"})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)(i.b,{to:"/",className:"home",children:"Home"}),Object(j.jsx)(i.b,{to:"/restaurants",className:"Restaurants",children:"Our Restaurants"}),Object(j.jsx)(i.b,{to:"/map",className:"map",children:"Restaurants Location"})]})]})})}function d(){return Object(j.jsxs)("div",{className:"hero",children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"txt",children:Object(j.jsxs)("h1",{children:["Support local restaurants.",Object(j.jsx)("br",{}),"Eat ",Object(j.jsx)("em",{children:"great food"})]})})]})}var b=s(5),h=s(55),O=s.n(h),m=s(76),p=s(77),x=s.n(p),v=Object(n.createContext)(),f=function(e){var t=e.children,s=Object(n.useState)(),c=Object(b.a)(s,2),a=c[0],r=c[1],i=function(){var e=Object(m.a)(O.a.mark((function e(t){var s,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://redi-final-restaurants.herokuapp.com/restaurants");case 2:s=e.sent,n=s.data,t(n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i(r)}),[]),Object(j.jsx)(v.Provider,{value:a,children:t})},g=Object(n.createContext)(),C=Object(n.createContext)(),N=function(e){var t=e.children,s=Object(n.useState)(0),c=Object(b.a)(s,2),a=c[0],r=c[1],i=Object(n.useState)(""),o=Object(b.a)(i,2),l=o[0],u=o[1];return Object(j.jsx)(g.Provider,{value:[a,r],children:Object(j.jsx)(C.Provider,{value:[l,u],children:t})})},y=function(e){for(var t=[],s=1;s<=Math.ceil(e.totalRes/e.resPerPage);s++)t.push(s);return console.log(e.resPerPage),console.log(e.totalRes),console.log(t),Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{className:"pagination-ul",children:t.map((function(t){return Object(j.jsx)("li",{className:"page-item",children:Object(j.jsx)(i.b,{to:"/restaurants/",className:"page-link",onClick:function(){return e.paginate(t)},children:t})},t)}))})})},w=s(163),k=s(170),_=s(169),L=s(166),S=s(165),H=s(167),R=Object(w.a)({root:{maxWidth:400,height:350,borderRadius:15},media:{height:150}});var P=function(e){var t=R();return Object(j.jsx)(_.a,{children:Object(j.jsxs)(k.a,{className:t.root,children:[Object(j.jsx)(S.a,{className:t.media,image:e.img,title:"Contemplative Reptile"}),Object(j.jsxs)(L.a,{children:[Object(j.jsx)(H.a,{gutterBottom:!0,variant:"h4",component:"h4",children:Object(j.jsx)("div",{className:"Card-res--name",children:e.name})}),Object(j.jsx)(H.a,{gutterBottom:!0,variant:"body1",color:"textSecondary",component:"h3",children:Object(j.jsxs)("div",{className:"Card-res--type",children:[e.cuisine," ",e.type]})}),Object(j.jsx)(H.a,{variant:"body2",color:"textSecondary",component:"p",children:Object(j.jsx)("div",{className:"Card-res--address",children:e.address})}),Object(j.jsx)("div",{className:"Card-res--ul",children:e.open?Object(j.jsxs)("li",{className:"Card-res--list open",children:["Open until ",e.closeHour]}):Object(j.jsxs)("li",{className:"Card-res--list close",children:["Closed ",Object(j.jsxs)("span",{className:"open",children:["opens at ",e.openHour]})]})}),Object(j.jsxs)("div",{className:"Card-res--ul",children:[e.delivery&&Object(j.jsx)("li",{className:"Card-res--list",children:"Delivery"}),e.pickup&&Object(j.jsx)("li",{className:"Card-res--list",children:"Pickup"})]})]})]})})};function B(e){var t=e.restaurants;console.log("props comming:"+t);var s=Object(n.useState)(1),c=Object(b.a)(s,2),a=c[0],r=c[1],o=Object(n.useState)(3),l=Object(b.a)(o,1)[0],u=a*l,d=u-l,h=t.slice(d,u);return Object(j.jsxs)("div",{className:"restaurantsList-container",children:[Object(j.jsx)("div",{className:"restaurantsList",children:h.map((function(e){return Object(j.jsx)("div",{className:"res",children:Object(j.jsx)(i.b,{className:"react-router__link",to:"/restaurants/".concat(e.id),style:{textDecoration:"none"},children:Object(j.jsx)(P,{img:e.photos[0].links[0],name:e.name,address:e.formatted_address,cuisine:e.cuisine,type:e.types[0],delivery:e.delivery,pickup:e.pickup,open:e.opening_hours.open_now,openHour:e.opening_hours.hours.open,closeHour:e.opening_hours.hours.close})})},e.id)}))}),Object(j.jsx)("div",{className:"pagination",children:Object(j.jsx)(y,{resPerPage:l,totalRes:t.length,paginate:function(e){return r(e)}})})]})}s(121);var D=function(e){return Object(j.jsx)("li",{className:e.active?"active":"",onClick:function(){e.onChecked(e.id)},children:e.item})},I=function(){var e=Object(n.useContext)(g),t=Object(b.a)(e,2),s=t[0],c=t[1],a=function(e){return c(e)};return Object(j.jsx)("div",{className:"buttons-filter",children:Object(j.jsx)("ul",{children:["All","Open","Delivery","Pickup"].map((function(e,t){return Object(j.jsx)(D,{item:e,id:t,onChecked:a,active:s===t},t)}))})})},T=s(78),A=s.n(T),E=function(){var e=Object(n.useContext)(C),t=Object(b.a)(e,2),s=t[0],c=t[1];return Object(j.jsxs)("div",{className:"search-filter",children:[Object(j.jsx)(A.a,{style:{position:"absolute",right:85,top:10,width:30,height:30}}),Object(j.jsx)("input",{id:"input",className:"search-input",name:"searchBar",placeholder:"Search by Name / Cuisine ",onChange:function(e){var t=e.target.value;c(t)},value:s})]})},J=(s(122),function(){return Object(j.jsxs)("div",{className:"filter-wrapper",children:[Object(j.jsx)(E,{}),Object(j.jsx)(I,{})]})});function V(){var e=Object(n.useContext)(v),t=Object(n.useContext)(g),s=Object(b.a)(t,1)[0],c=Object(n.useContext)(C),a=Object(b.a)(c,2),r=a[0];a[1];if(void 0!==e){var i=e,o=e.filter((function(e){return!0===e.opening_hours.open_now})),l=e.filter((function(e){return!0===e.pickup})),d=e.filter((function(e){return!0===e.delivery})),h=e.filter((function(e){return""===r||e.name.toLowerCase().includes(r.toLowerCase())||e.cuisine.toLowerCase().includes(r.toLowerCase())?e:void 0})),O=o.filter((function(e){return""===r||e.name.toLowerCase().includes(r.toLowerCase())||e.cuisine.toLowerCase().includes(r.toLowerCase())?e:void 0})),m=d.filter((function(e){return""===r||e.name.toLowerCase().includes(r.toLowerCase())||e.cuisine.toLowerCase().includes(r.toLowerCase())?e:void 0})),p=l.filter((function(e){return""===r||e.name.toLowerCase().includes(r.toLowerCase())||e.cuisine.toLowerCase().includes(r.toLowerCase())?e:void 0}));return Object(j.jsxs)("div",{className:"restaurants",children:[Object(j.jsx)(u,{}),Object(j.jsx)(J,{}),Object(j.jsx)(B,{restaurants:0===s?i&&h:1===s?o&&O:2===s?d&&m:l&&p,searchValue:r})]})}return Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)("h1",{children:"Loading..."})})}var W=s(56),z=s(34),F=(s(140),s(80)),M=s.n(F),X=Object(w.a)({root:{width:280,maxHeight:300},media:{height:100}});var Z=function(e){var t=X();return Object(j.jsx)(k.a,{className:t.root,children:Object(j.jsxs)(_.a,{children:[Object(j.jsx)(S.a,{className:t.media,image:e.img,title:"Contemplative Reptile"}),Object(j.jsxs)(L.a,{children:[Object(j.jsx)(H.a,{gutterBottom:!0,variant:"h6",component:"h6",children:Object(j.jsx)("div",{className:"Card-map--name",children:e.name})}),Object(j.jsx)(H.a,{variant:"body2",color:"textSecondary",component:"p",children:Object(j.jsxs)("div",{className:"rating-container",children:[Object(j.jsx)("span",{className:"Card-map--rating",children:e.rating+" "}),Object(j.jsx)("span",{className:"Card-map--stars",children:Object(j.jsx)(M.a,{className:"Card-map--stars",value:e.rating,edit:!1,isHalf:!0})}),Object(j.jsxs)("span",{className:"Card-map--raters",children:[" (",e.usrs,")"]})]})}),Object(j.jsx)(H.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",children:Object(j.jsxs)("div",{className:"Card-map--type",children:[e.cuisine," ",e.type]})}),Object(j.jsx)("div",{className:"Card-map--hours",children:e.open?Object(j.jsxs)("li",{className:"Card-map--hours open",children:["Open until ",Object(j.jsx)("span",{className:"close",children:e.closeHour})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("li",{className:"Card-map--hours card-res--name close",children:"Closed"}),Object(j.jsxs)("li",{className:"Card-map--hours open",children:["Openes at ",e.openHour]})]})})]})]})})},q=s.p+"static/media/marker.bc5c2afd.png",G=function(e){console.log(q);var t=e.restaurants,s=e.searchValue,c=Object(n.useState)(null),a=Object(b.a)(c,2),r=(a[0],a[1]),o=Object(n.useState)(null),l=Object(b.a)(o,2),u=l[0],d=l[1];return Object(j.jsxs)("div",{children:[t.filter((function(e){return""===s||e.name.toLowerCase().includes(s.toLowerCase())||e.cuisine.includes(s.toLowerCase())?e:void 0})).map((function(e){return Object(j.jsx)(z.a,{latitude:e.geometry.location.lat,longitude:e.geometry.location.lng,children:Object(j.jsxs)("div",{className:"marker-btn",children:[Object(j.jsx)("img",{src:q,onClick:function(t){r(setTimeout((function(){t.preventDefault(),d(e)}),200))}}),Object(j.jsx)("p",{className:"map-res--name",children:e.name})]})},e.id)})),u&&Object(j.jsx)(z.b,{latitude:u.geometry.location.lat,longitude:u.geometry.location.lng,closeButton:!0,closeOnClick:!1,closeOnMove:!0,maxWidth:"auto",onClose:function(){d(null)},children:Object(j.jsx)(i.b,{className:" ",to:"/restaurants/".concat(u.id),style:{textDecoration:"none"},children:Object(j.jsx)(Z,{img:u.photos[0].links[0],name:u.name,rating:u.rating,usrs:u.user_ratings_total,cuisine:u.cuisine,type:u.types[0],delivery:u.delivery,pickup:u.pickup,open:u.opening_hours.open_now,openHour:u.opening_hours.hours.open,closeHour:u.opening_hours.hours.close})})})]})};var K=function(){var e=Object(n.useContext)(v),t=Object(n.useContext)(g),s=Object(b.a)(t,1)[0],c=Object(n.useContext)(C),a=Object(b.a)(c,2),r=a[0],i=(a[1],Object(n.useState)({latitude:52.5158,longitude:13.454,width:"100vw",height:"100vh",zoom:11})),o=Object(b.a)(i,2),l=o[0],d=o[1];if(void 0!==e){var h=e,O=e.filter((function(e){return!0===e.opening_hours.open_now})),m=e.filter((function(e){return!0===e.pickup})),p=e.filter((function(e){return!0===e.delivery}));return Object(j.jsx)("div",{children:Object(j.jsxs)(z.c,Object(W.a)(Object(W.a)({},l),{},{mapboxApiAccessToken:"pk.eyJ1IjoieWFubzBvIiwiYSI6ImNreThxc3ZyaTFpaDEyd29qczdsenJyanAifQ.KZjNHiRtIIlXOLk9TXecpw",onViewportChange:function(e){d(e)},mapStyle:"mapbox://styles/mapbox/navigation-day-v1",children:[Object(j.jsx)(u,{}),Object(j.jsx)(J,{}),Object(j.jsx)(G,{restaurants:0===s?h:1===s?O:2===s?p:m,searchValue:r})]}))})}return Object(j.jsx)("h1",{children:"loading"})},Q=s(168),Y=(s(143),s(81)),U=s.n(Y),$=s(82),ee=s.n($),te=function(e){var t=e.images,s=Object(n.useState)(0),c=Object(b.a)(s,2),a=c[0],r=c[1],i=Object(n.useRef)();Object(n.useEffect)((function(){return i.current=setTimeout((function(){r(a===t.length-1?0:a+1)}),3500),function(){clearTimeout(i.current)}}));return Object(j.jsxs)("div",{className:"carousel",children:[Object(j.jsx)(U.a,{className:"carousel__arrow",onClick:function(){r(0===a?t.length-1:a-1)}}),Object(j.jsx)("img",{className:"carousel__img",src:t[a],alt:""}),Object(j.jsx)(ee.a,{className:"carousel__arrow",onClick:function(){r(a===t.length-1?0:a+1)}})]})},se=function(e){var t=e.match,s=Object(n.useContext)(v);if(!s)return null;var a=s.filter((function(e){return e.id===t.params.id}));return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(i.b,{className:"goback__link",to:"/restaurants",children:"Go Back"}),Object(j.jsx)(Q.a,{fluid:!0,maxWidth:"sm",children:a.map((function(e){return Object(j.jsxs)("div",{className:"restaurantScreen",children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsx)(te,{images:e.photos[0].links}),Object(j.jsx)("h2",{children:"Description"}),Object(j.jsx)("p",{children:e.cuisine}),Object(j.jsx)("p",{children:e.dietaryRestrictions}),Object(j.jsxs)("div",{className:"restaurantScreen__address",children:[Object(j.jsx)("h2",{children:"Address"}),Object(j.jsx)("p",{children:e.formatted_address})]})]},e.id)}))})]})};var ne=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o.a,{path:"/",component:d,exact:!0}),Object(j.jsxs)(f,{children:[Object(j.jsxs)(N,{children:[Object(j.jsx)(o.a,{path:"/restaurants",component:V,exact:!0}),Object(j.jsx)(o.a,{path:"/map",component:K,exact:!0})]}),Object(j.jsx)(o.a,{path:"/restaurants/:id",component:se})]})]})})};s(144);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(ne,{})}),document.getElementById("root"))},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){}},[[145,1,2]]]);
//# sourceMappingURL=main.04eb8695.chunk.js.map