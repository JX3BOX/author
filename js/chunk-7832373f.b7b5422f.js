(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7832373f"],{"09d3":function(t,n,i){},"1fe2":function(t,n,i){"use strict";i("4665")},"20c3":function(t,n,i){"use strict";i("09d3")},2463:function(t,n,i){"use strict";i.r(n);var c=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("AppLayout",[i("div",{staticClass:"m-main m-index-popup"},[i(t.event_component,{tag:"component",attrs:{data:t.component_data},on:{checked:t.checked,close:t.goBack}})],1)])},a=[],s=(i("7db0"),i("d3b7"),i("d81d"),i("ac1f"),i("1276"),i("99af"),i("65c2")),e=i("674a"),o=i("2777");function r(t){return Object(o["c"])().get("/api/event/trigger/history")}var u=i("dead"),l=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{class:t.count?"defaultTemplateCount":"defaultTemplate"},[t.count?[i("div",{staticClass:"m-count"},t._l(t.countImgList,(function(t,n){return i("img",{key:n,staticClass:"u-count",attrs:{src:t}})})),0),i("img",{staticClass:"u-img",attrs:{src:t.imgList[1]},on:{click:t.close}}),i("img",{staticClass:"u-img u-img-cover",class:["animation",{fadeOutUp:t.flipper},{none:t.active}],attrs:{src:t.imgList[0]},on:{click:function(n){return n.stopPropagation(),t.hide.apply(null,arguments)}}})]:[i("div",{staticClass:"m-count",class:{flipper:t.flipper}},[t.countImg?i("img",{staticClass:"u-count",attrs:{src:t.countImg}}):t._e()]),t.countBg?i("img",{staticClass:"u-img u-bg",class:{flipper:t.flipper},attrs:{src:t.countBg},on:{click:t.close}}):t._e(),i("div",{staticClass:"u-img u-img-cover",class:{active:t.active,flipper:t.flipper},on:{click:function(n){return n.stopPropagation(),t.hide.apply(null,arguments)}}},t._l(t.imgList,(function(t,n){return i("img",{key:n,class:"u-pic u-pic-"+(2-n),attrs:{src:t}})})),0)]],2)},m=[],d={name:"DefaultTemplate",props:["data"],computed:{imgList:function(){return this.data.imgList},countBg:function(){return this.data.countBg},countImg:function(){return this.data.countImg},countImgList:function(){return this.data.countImgList},count:function(){return this.data.count}},data:function(){return{active:!1,flipper:!1}},methods:{close:function(){this.active=!1,this.$emit("checked"),this.$emit("close")},hide:function(){var t=this;this.flipper=!0,setTimeout((function(){t.active=!0,t.$emit("checked")}),600)}}},g=d,p=(i("d287"),i("2877")),h=Object(p["a"])(g,l,m,!1,null,null,null),f=h.exports,v=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"card2024Children",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"children-card",on:{click:t.change}},[t.show?i("div",{on:{click:function(n){return n.stopPropagation(),t.close.apply(null,arguments)}}},[i("img",{staticClass:"children-card__img animation",class:t.show?"flipInY":"",attrs:{src:t.bg2Img}}),i("img",{staticClass:"animation children-card__content",class:t.show?"flipInY":"",attrs:{src:t.countImg}})]):[i("img",{class:"children-card__img animation "+(t.show?"":"fadeInUp"),attrs:{src:t.bgImg}}),i("div",{class:"u-img animation "+(t.show?"":"fadeInDown")},[i("img",{staticClass:"children-card__open",attrs:{src:t.buttonImg}})])]],2)])},_=[],C={name:"Card2024Children",props:["data"],computed:{bgImg:function(){return this.data.bgImg},bg2Img:function(){return this.data.bg2Img},buttonImg:function(){return this.data.buttonImg},countImg:function(){return this.data.countImg}},data:function(){return{show:!1}},methods:{change:function(){this.show=!0},close:function(){this.$emit("close")}}},y=C,k=(i("20c3"),Object(p["a"])(y,v,_,!1,null,null,null)),L=k.exports,b=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"card2024Spring",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"u-springFestival-card fadeInUpBig p-animation"},[i("div",{ref:"letter",staticClass:"u-letter u-img m-animation",on:{click:t.close}},[i("img",{staticClass:"u-img",attrs:{src:t.letter,alt:"新年快乐"}}),i("img",{staticClass:"u-img",attrs:{src:t.countImg,alt:"新年快乐"}})]),i("img",{ref:"cover",staticClass:"u-cover u-img",attrs:{src:t.cover,alt:"新年快乐"},on:{click:t.open}})])])},w=[],I={name:"card2024Spring",props:["data"],computed:{cover:function(){return this.data.cover},letter:function(){return this.data.letter},countImg:function(){return this.data.countImg}},data:function(){return{}},methods:{open:function(){var t=this.$refs.letter,n=this.$refs.cover;n.classList.add("click"),t.classList.add("fadeOutDownBig"),t.addEventListener("animationend",(function(){t.classList.remove("fadeOutDownBig"),t.classList.add("fadeInDownBig")}),{once:!0})},close:function(){this.$emit("close")}}},x=I,D=(i("b426"),Object(p["a"])(x,b,w,!1,null,null,null)),$=D.exports,B=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"newYearsDay",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"newYearsDay-card",class:t.show?"newYearsDay-card__on":"newYearsDay-card__off",on:{click:t.change}},[i("img",{staticClass:"newYearsDay-card__img newYearsDay-card__cover",attrs:{src:t.imgList[0],alt:"元旦节快乐"}}),i("img",{staticClass:"newYearsDay-card__img newYearsDay-card__content",attrs:{src:t.imgList[1],alt:"元旦节快乐"}}),t.show?t._e():i("img",{staticClass:"newYearsDay-card__click",attrs:{src:t.imgList[2]}}),i("img",{staticClass:"newYearsDay-card__close",attrs:{src:t.imgList[3]},on:{click:function(n){return n.stopPropagation(),t.close.apply(null,arguments)}}}),i("span",{staticClass:"newYearsDay-card__fontCount"},[t._v(t._s(t.fontCount))])])])},Y=[],j={name:"newYearsDay",props:["data"],computed:{fontCount:function(){return this.data.fontCount},imgList:function(){return this.data.imgList}},data:function(){return{show:!1}},methods:{change:function(){this.show=!0},close:function(){this.$emit("close")}}},T=j,O=(i("1fe2"),Object(p["a"])(T,B,Y,!1,null,null,null)),P=O.exports,E=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"card2023Christmas",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"christmas-card",on:{click:t.change}},[t.show?i("div",{style:"background:url("+t.imgList[2]+") top center no-repeat;background-size: cover;"},[i("img",{staticClass:"animation christmas-card__content christmas-card__img",class:t.show?"flipInY":"",attrs:{src:t.countImg,alt:"圣诞节快乐"},on:{click:function(n){return n.stopPropagation(),t.close.apply(null,arguments)}}})]):[i("img",{staticClass:"christmas-card__img",attrs:{src:t.imgList[0],alt:"圣诞节快乐"}}),i("img",{staticClass:"christmas-card__open",attrs:{src:t.imgList[1],alt:"圣诞节快乐"}})]],2)])},S=[],A={name:"card2023Christmas",props:["data"],computed:{countImg:function(){return this.data.countImg},imgList:function(){return this.data.imgList}},data:function(){return{show:!1}},methods:{change:function(){this.show=!0},close:function(){this.$emit("close")}}},q=A,Q=(i("2630"),Object(p["a"])(q,E,S,!1,null,null,null)),N=Q.exports,F=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"card2023Qixi",on:{click:function(t){t.stopPropagation()}}},[t.fontCount?i("div",{class:["u-count",{active:t.active}],style:{backgroundImage:"url('"+t.countImg+"')"}}):i("div",{class:["u-count",{active:t.active}]},[t._v("零")]),i("img",{staticClass:"u-img u-text",class:{active:t.active},attrs:{src:t.imgList[0]},on:{click:t.close}}),i("img",{staticClass:"u-img u-bg",class:{active:t.active},attrs:{src:t.imgList[1]}}),i("img",{staticClass:"u-img u-line",attrs:{src:t.imgList[2]},on:{click:t.open}})])},J=[],U={name:"card2023Qixi",props:["data"],computed:{fontCount:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.fontCount},imgList:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.imgList},countImg:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.countImg}},data:function(){return{active:!1}},methods:{close:function(){this.active=!1,this.$emit("close")},open:function(){this.active=!0,this.$emit("checked")}}},z=U,G=(i("a1b6"),Object(p["a"])(z,F,J,!1,null,null,null)),H=G.exports,M=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"card2023DragonBoat",on:{click:function(t){t.stopPropagation()}}},[i("div",{class:["u-count",{show:t.show}],style:{backgroundImage:"url('"+t.countImg+"')"}}),i("div",{staticClass:"u-img mark",class:{show:t.show}}),t._l(t.imgList,(function(n,c){return i("el-image",{key:c,staticClass:"u-img",class:{text:1==c,show:t.show},attrs:{src:n,fit:"cover"},on:{click:t.showText}})}))],2)},K=[],R={name:"card2023DragonBoat",props:["data"],computed:{countImg:function(){return this.data.countImg},imgList:function(){return this.data.imgList}},data:function(){return{list:["bg","text","cover"],show:!1}},methods:{close:function(){this.$emit("close")},showText:function(){this.show?this.close():this.show=!0}}},V=R,W=(i("4a21"),Object(p["a"])(V,M,K,!1,null,null,null)),X=W.exports,Z={name:"holidayCard",components:{AppLayout:u["a"],DefaultTemplate:f,Card2024Children:L,Card2024Spring:$,Card2024NewYear:P,Card2023Christmas:N,Card2023Qixi:H,Card2023DragonBoat:X},data:function(){return{cardType:e,check:!1,list:[]}},computed:{user_id:function(){return this.$route.params.uid},my_card_id:function(){return this.$route.params.id},active_event:function(){var t=this;return this.list.find((function(n){return n.id==t.my_card_id}))},event_id:function(){var t;return null===(t=this.active_event)||void 0===t?void 0:t.event_id},event_key:function(){var t;return null===(t=this.cardType[this.event_id])||void 0===t?void 0:t.key},imgLink:function(){return s["__imgPath"]+"topic/festival/".concat(this.event_key,"/")},imgList:function(){var t;return(null===(t=this.cardType[this.event_id])||void 0===t?void 0:t.imgList)||[]},fontCount:function(){var t;return null===(t=this.active_event)||void 0===t?void 0:t.event_reward_count},event_component:function(){var t;return null===(t=this.cardType[this.event_id])||void 0===t?void 0:t.component},component_data:function(){var t,n={default:this.default_data,children:this.children_data,spring:this.spring_data,newyear:this.newyear_data,christmas:this.christmas_data,qixi:this.qixi_data,dragon:this.dragon_data};return n[null===(t=this.cardType[this.event_id])||void 0===t?void 0:t.type]},default_data:function(){var t,n,i=this,c=null===(t=this.cardType[this.event_id])||void 0===t?void 0:t.bg,a=null===(n=this.cardType[this.event_id])||void 0===n?void 0:n.count,s=String(this.fontCount).split("").map((function(t){return"".concat(i.imgLink).concat(t,".png")})),e={imgList:this.imgList.map((function(t){return"".concat(i.imgLink).concat(t)})),fontCount:this.fontCount,countImg:"".concat(this.imgLink).concat(this.fontCount,".png"),countImgList:s,count:a};return c&&(e.countBg="".concat(this.imgLink).concat(c)),e},children_data:function(){return{bgImg:"".concat(this.imgLink,"bg.png"),buttonImg:"".concat(this.imgLink,"button.png"),bg2Img:"".concat(this.imgLink,"bg2.png"),countImg:"".concat(this.imgLink).concat(this.fontCount,".png")}},spring_data:function(){return{letter:"".concat(this.imgLink,"letter.png"),cover:"".concat(this.imgLink,"cover.png"),countImg:"".concat(this.imgLink).concat(this.fontCount,".png")}},newyear_data:function(){var t=this;return{fontCount:this.fontCount,imgList:this.imgList.map((function(n){return"".concat(t.imgLink).concat(n)}))}},christmas_data:function(){var t=this;return{countImg:"".concat(this.imgLink).concat(this.fontCount,".png"),imgList:this.imgList.map((function(n){return"".concat(t.imgLink).concat(n)}))}},qixi_data:function(){var t=this;return{fontCount:this.fontCount,countImg:"".concat(this.imgLink).concat(this.fontCount,".png"),imgList:this.imgList.map((function(n){return"".concat(t.imgLink).concat(n)}))}},dragon_data:function(){var t=this;return{countImg:"".concat(this.imgLink).concat(this.fontCount,".svg"),imgList:this.imgList.map((function(n){return"".concat(t.imgLink).concat(n)}))}}},watch:{my_card_id:{handler:function(t){t?this.load():this.goBack()},immediate:!0}},methods:{goBack:function(){this.$router.push({name:"index",params:{id:this.user_id}})},load:function(){var t=this;r().then((function(n){t.list=(null===n||void 0===n?void 0:n.data)||[]}))},checked:function(){this.check=!0}}},tt=Z,nt=(i("8b98"),Object(p["a"])(tt,c,a,!1,null,null,null));n["default"]=nt.exports},2630:function(t,n,i){"use strict";i("8cf0")},2777:function(t,n,i){"use strict";var c=i("41cb");i.d(n,"a",(function(){return c["b"]})),i.d(n,"b",(function(){return c["d"]})),i.d(n,"d",(function(){return c["f"]})),i.d(n,"c",(function(){return c["e"]}));Object(c["c"])("server",{proxy:!1})},"31b9":function(t,n,i){},4665:function(t,n,i){},"4a21":function(t,n,i){"use strict";i("8209")},"674a":function(t){t.exports=JSON.parse('{"1":{"name":"2022春节","currency":"boxcoin","component":"Card2022Spring"},"2":{"name":"2022端午节","currency":"boxcoin","component":"Card2022DragonBoat"},"3":{"name":"2022七夕","currency":"boxcoin","component":"Card2022Qixi"},"4":{"name":"2022中秋节","currency":"boxcoin","component":"Card2022MidAutumn"},"5":{"name":"2022圣诞节","currency":"boxcoin","component":"Card2022Christmas"},"6":{"name":"2023元旦","currency":"boxcoin","component":"Card2023NewYear"},"7":{"name":"2023春节","currency":"boxcoin","component":"Card2023Spring"},"8":{"name":"2023元宵节","currency":"boxcoin","component":"Card2023Lantern"},"9":{"name":"2023端午节","currency":"boxcoin","key":"dragonBoatFestival","type":"dragon","component":"Card2023DragonBoat","imgList":["bg.svg","text.svg","cover.svg"]},"10":{"name":"2023七夕","currency":"boxcoin","component":"Card2023Qixi","key":"qixi","type":"qixi","imgList":["text.png","bg.png","line.png"]},"11":{"name":"2023中秋节","currency":"points","key":"midAutumn","type":"default","count":true,"component":"DefaultTemplate","imgList":["202301.png","202302.jpg"]},"12":{"name":"2023圣诞节","currency":"points","type":"christmas","key":"christmas2023","component":"Card2023Christmas","imgList":["cover.jpg","button.png","bg.jpg"]},"28":{"name":"2024元旦","currency":"points","type":"newyear","key":"newYearsDay2023","component":"Card2024NewYear","imgList":["P1-BG.jpg","p2-01.jpg","ClickButton-1.png","CloseButton-1.png"]},"29":{"name":"2024春节","key":"springFestival2024","currency":"points","type":"spring","component":"Card2024Spring"},"30":{"name":"2024儿童节","currency":"points","key":"children2024","type":"children","component":"Card2024Children"},"31":{"name":"2024中秋","key":"midAutumn2024","currency":"points","bg":"202403.png","type":"default","component":"DefaultTemplate","imgList":["202402.png","202401.png"]}}')},7371:function(t,n,i){},8209:function(t,n,i){},"8b98":function(t,n,i){"use strict";i("7371")},"8cf0":function(t,n,i){},a1b6:function(t,n,i){"use strict";i("a441")},a441:function(t,n,i){},b426:function(t,n,i){"use strict";i("31b9")},d287:function(t,n,i){"use strict";i("df5d")},dead:function(t,n,i){"use strict";var c=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("Header"),t._t("default")],2)},a=[],s={name:"AppLayout",components:{},props:[],data:function(){return{}},computed:{},created:function(){},methods:{}},e=s,o=i("2877"),r=Object(o["a"])(e,c,a,!1,null,null,null);n["a"]=r.exports},df5d:function(t,n,i){}}]);
//# sourceMappingURL=chunk-7832373f.b7b5422f.js.map