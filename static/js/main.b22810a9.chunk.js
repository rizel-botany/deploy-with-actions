(this["webpackJsonpdeploy-with-actions"]=this["webpackJsonpdeploy-with-actions"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(6),a=c.n(r),i=(c(14),c(5)),s=c.n(i),l=c(9),m=c(0),j=function(e){var t=e.setQuery,c=e.query;return Object(m.jsx)("div",{className:"p-8",children:Object(m.jsxs)("div",{className:"bg-white flex items-center rounded-full shadow-xl",children:[Object(m.jsx)("input",{name:"search",type:"search",placeholder:"Search for an emoji. Ex: heart",autoComplete:"off",className:"rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none",id:"search",value:c,onChange:function(e){var c=e.currentTarget,n=(void 0===c?{}:c).value;t(n)}}),Object(m.jsx)("div",{className:"p-4"})]})})},u=c(8),d=function(e){var t=e.emojiResult;function c(e){console.log(e.target),e.target.src="https://thumbs.dreamstime.com/b/vector-oops-symbol-over-white-29840798.jpg",e.target.alt="Image Does Not Exist",e.target.className="m-auto w-16 h-16"}return Object(m.jsx)("div",{children:Object(m.jsx)("ol",{className:"flex row justify-center",children:t.slice(0,6).map((function(e,t){return Object(m.jsxs)("li",{className:"p-4 rounded-md w-max my-8 mx-3 shadow-2xl text-center",children:[Object(m.jsx)("img",{className:"m-auto w-16 h-16",src:e.emoji_url,alt:e.emoji_name.replaceAll("_"," "),onError:c}),Object(m.jsx)("span",{children:e.emoji_name.replaceAll("_"," ")})]},t)}))})})},h=function(e){var t=e.apiData,c=Object(n.useState)(""),o=Object(l.a)(c,2),r=o[0],a=o[1],i=new u.a(t,{keys:["emoji_name"],includeScore:!0}).search(r),s=r?i.map((function(e){return e.item})):t;return Object(m.jsxs)("div",{className:"w-3/6",children:[Object(m.jsx)(j,{query:r,setQuery:a}),Object(m.jsx)(d,{emojiResult:s})]})},b=c(7),p=function(e){return fetch(e).then((function(e){return e.json()}))};function x(){var e=Object(b.a)("https://api.github.com/emojis",p),t=e.data;if(e.error)return"An error has occurred.";if(!t)return"Loading...";var c=Object.entries(t).map((function(e){return{emoji_name:e[0],emoji_url:e[1]}}));return Object(m.jsxs)("div",{className:"min-h-screen bg-gradient-to-r from-blue-100 via-pink-200 to-blue-100",children:[Object(m.jsxs)("head",{children:[Object(m.jsx)("title",{children:"Cutemoji"}),Object(m.jsx)("meta",{name:"description",content:"Generated by create next app"}),Object(m.jsx)("link",{rel:"icon",href:"/cooleroctocat.png"})]}),Object(m.jsxs)("main",{className:s.a.main,children:[Object(m.jsx)("h1",{className:s.a.title,children:"CuteMoji"}),Object(m.jsx)("img",{alt:"octocat",className:"h-16 w-16",src:"https://octodex.github.com/images/twenty-percent-cooler-octocat.png"}),Object(m.jsx)(h,{className:"border-yellow-500",apiData:c})]})]})}var f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),f()},5:function(e,t,c){e.exports={container:"Home_container__3JNw6",main:"Home_main__2L4cf",footer:"Home_footer__3eZco",title:"Home_title__2jL4m",description:"Home_description__1txge",code:"Home_code__2jeOn",grid:"Home_grid__2WglI",card:"Home_card__2ucD6",logo:"Home_logo__3etHn"}}},[[16,1,2]]]);
//# sourceMappingURL=main.b22810a9.chunk.js.map