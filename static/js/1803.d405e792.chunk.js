(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[1803],{595:function(e,t,r){"use strict";var a,l=r(54),i=r.n(l),n=r(1),o=r.n(n),s=r(26),d=r(6),u="aw-tile-tileMain",p="aw-tile-draggable",c="aw-tile-tileGroup",f="aw-tile-placeHolderGroupSep",g="aw-tile-dragTile";let m,v;var w=function(e,t){var r={inPlace:!1};let a=e.currentTarget;if(t){var l=i()(".aw-tile-mainContainer").find(".aw-tile-placeHolderGroupSep");for(r.element=l.prev(".aw-tile-tileGroup");r.element.hasClass("aw-tile-emptyTileGroup");)r.element=r.element.prev(".aw-tile-tileGroup");return 0===r.element.length&&(r.element=r.element.prevObject),r.element=r.element[0],r}if(r.element=i()(".aw-tile-mainContainer .aw-tile-placeHolderTile"),0===r.element.length)if(i()(a).hasClass(p))r.element=a;else{var n=i()(a).closest(".aw-tile-draggable");0===n.length&&(n=i()(a).find(".aw-tile-draggable")),n&&n.length>0&&(r.element=n[0])}else"0"===r.element[0].style.order&&0!==r.element.next().length?(r.element=r.element.next(),r.inPlace=!0):r.element=r.element.prev();return r},h=function(){i()(".aw-tile-placeHolderTile.aw-tile-tileMain").remove(),i()(".aw-tile-tileGroup.aw-tile-placeHolderGroupSep").remove()},T=function(e){return(a=i()('<div class="aw-tile-placeHolderTile"></div>')).addClass(u),i()(e).hasClass("aw-tile-doubleSize")?a.addClass("aw-tile-doubleSize"):i()(e).hasClass("aw-tile-tripleSize")?a.addClass("aw-tile-tripleSize"):i()(e).hasClass("aw-tile-quadroSize")&&a.addClass("aw-tile-quadroSize"),i()(e).hasClass("aw-tile-doubleVerticalSize")?a.addClass("aw-tile-doubleVerticalSize"):i()(e).hasClass("aw-tile-tripleVerticalSize")?a.addClass("aw-tile-tripleVerticalSize"):i()(e).hasClass("aw-tile-quadroVerticalSize")&&a.addClass("aw-tile-quadroVerticalSize"),a},G=function(e,t){if(h(),e)e.removeAttribute("id");else{let e=document.querySelector("#draggedTile");e.classList.remove(g),e.removeAttribute("id")}a=null},b=function(e,t,r){if(e.preventDefault(),a&&t&&r){if(i()(t).hasClass(u)&&i()(t).hasClass(p)){h();var l,n=t.style.order,s=parseInt(n,10),d=i()(t)[0];l=e.clientX>d.offsetWidth/2+d.offsetLeft?"right":"left",0===s&&"left"===l?(a.insertBefore(t),i()(a).css("order",0)):(a.insertAfter(t),i()(a).css("order",s++)),o.a.forEach(i()(a).nextAll(),(function(e){e&&(e.style.order=s++)}))}else if(i()(t).hasClass(c)){h();var g=i()(t);(function(){var e=i()('<div class="aw-tile-tileGroup"></div>');return e.addClass(f),e})().insertBefore(g[0])}v={targetTile:r[0].tile,targetTileGroup:r[0].tileGroup,viewModel:r.viewModel}}};function C(e){return e?e-e%100:0}function D(e,t){e.dataTransfer&&t&&e.dataTransfer.setData("text",JSON.stringify({sourceTile:t.sourceTile,sourceGroupName:t.sourceTileGroup.groupName})),m=t}function S(e,t){!s.default.isIE&&e.dataTransfer&&e.dataTransfer.setDragImage(t,0,0)}function y(e,t,r){let l=e.target,i=r[0].tile,n=r[0].tileGroup,o=l.parentElement.parentElement;if(i){0,t.data("dragging",!0);var s=t.data("containerId");s||(s=Date.now(),t.data("containerId",s));let r=0;for(let e=0;e<3&&e<n.tiles.length;e++)r+=n.tiles[e].tileSize+1;let d=155*r+"px";o.parentElement.style.minWidth=d,o.setAttribute("id","draggedTile"),o.classList.add(g),e.dataTransfer&&(e.dataTransfer.effectAllowed="move"),S(e,o),D(e,{sourceTile:i,sourceTileGroup:n}),a=T(l)}else t.data("dragging",!1),e.preventDefault()}function E(e){e.dataTransfer&&(e.dataTransfer.effectAllowed="move")}function N(e,t,r){{let a=r[0].tile,l=r[0].tileGroup;if(a){if(!a.tiles&&(!l||!l.groupName))return;e.dataTransfer&&(e.dataTransfer.effectAllowed="move"),o.a.debounce(b,100)(e,t,r)}}}function O(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.effectAllowed="move")}function x(e,t,r){e.preventDefault();let a=e.target.parentElement.parentElement;i()(a).removeClass(g),i()(a).removeAttr("id");e.target}function M(e,t,r,a,l){const n=l;e.stopPropagation(),e.preventDefault();let s=document.querySelector("#draggedTile");var d=!1;s.classList.remove(g),s.parentElement.style.minWidth="";s.firstElementChild.firstElementChild;if(i()(".aw-tile-placeHolderTile.aw-tile-tileMain").length>0){var u=i()(".aw-tile-placeHolderTile.aw-tile-tileMain").prevAll(),p=i()(".aw-tile-placeHolderTile.aw-tile-tileMain").nextAll(),c=0;o.a.forEachRight(u,(function(e){"draggedTile"!==e.id&&(e.style.order=c,c++)})),s&&(s.style.order=c,c++),o.a.forEach(p,(function(e){"draggedTile"!==e.id&&(e.style.order=c,c++)}))}else i()(".aw-tile-tileGroup.aw-tile-placeHolderGroupSep").length>0&&(d=!0);let f=w(e,d);if(!f.element)return void G(s);let m=e.dataTransfer.getData("text");if(m){var h=JSON.parse(m),T=v.targetTile;let e=v.targetTileGroup,t=v.viewModel;if(!d&&z&&T!==h.sourceTile)z(t,h.sourceTile,h.sourceGroupName,T,e,f.inPlace,n);else if(d&&P){var b,C=a[0].tile;C&&(b=C.tileGroup),P(h.sourceTile,h.sourceGroupName,b,n)}0}G(s)}const P=function(e,t,r,a){var l=self.getTileGroup(r),i=j(e.tileGroups,l),n=j(e.tileGroups,a),s=V(t,i),d=e.tileGroups[i].tiles.indexOf(s),u=0;a&&a.tiles.length>0&&(u=C(a.tiles[0].orderNumber));var p=e.tileGroups[i];p.tiles.splice(d,1);var c=!1;0===p.tiles.length&&(c=!0);var f={};f.groupName="group"+(new Date).getTime(),f.tiles=[],f.tiles.push(s),f.tiles.forEach((function(e,t){e.orderNumber=u+100+t,e.isDirty=!0})),i===n&&c?e.tileGroups.splice(n,0,f):e.tileGroups.splice(n+1,0,f);var g=j(e.tileGroups,f);o.a.forEach(e.tileGroups,(function(e,t){if(t>g&&e.tiles.length>0){var r=C(e.tiles[0].orderNumber);e.tiles.map((function(e,t){return e.orderNumber=r+100+t,e.isDirty=!0,e}))}}))},z=function(e,t,r,a,l,i,n){if(a){var o=a.orderNumber,s=A(e,l.groupName),d=A(e,r),u=j(e.tileGroups,d),p=j(e.tileGroups,s),c=V(e,t,u),f=e.tileGroups[u].tiles.indexOf(c),g=l.tiles.indexOf(a),m=C(o);u===p?q(c,f,a,l,m,i):H(e,c,f,u,g,p,m,i,n)}},A=function(e,t){var r;return o.a.forEach(e.tileGroups,(function(e){return e.groupName!==t||(r=e,!1)})),r},V=function(e,t,r){var a;return e.tileGroups[r]&&!o.a.isEmpty(e.tileGroups[r].tiles)&&o.a.forEach(e.tileGroups[r].tiles,(function(e){return!o.a.isEqual(e.displayName,t.displayName)||(a=e,!1)})),a},q=function(e,t,r,a,l,i){if(a){a.tiles.splice(t,1);var n=a.tiles.indexOf(r);i?a.tiles.splice(n,0,e):a.tiles.splice(n+1,0,e),o.a.forEach(a.tiles,(function(e,t){e&&(e.orderNumber=l+t,e.isDirty=!0)}))}},H=function(e,t,r,a,l,i,n,o,s){const{dispatch:d}=e,u=s;let p={...e.getData()}.tileGroups;var c=C(t.orderNumber),f=p[a],g=p[i];f.tiles.splice(r,1),o?g.tiles.splice(l,0,t):g.tiles.splice(l+1,0,t),f.tiles.map((function(e,t){return e.orderNumber=c+t,e.isDirty=!0,e})),p[a]=f,g.tiles.map((function(e,t){return e.orderNumber=n+t,e.isDirty=!0,e})),p[i]=g,d({path:u?"data."+u:"data.tileGroups",value:[...p]})},I=e=>{d.a.info(e)},j=(e,t)=>e?e.indexOf(t):-1,L=(e,t)=>{let r={...e};return r.viewModel=t,r};t.a={getBaseOrder:C,addDragDataToDragEvent:D,updateDragImage:S,processDragStart:y,processDragOver:E,processDragEnter:N,processDragLeave:O,processDragEnd:x,processDrop:M,dragStartFn:e=>{let t,{event:r,targetObjects:a,declViewModel:l}=e;r.stopPropagation();let n=document.children[0].querySelector(".aw-tile-tileCanvasPanel.aw-layout-flexColumn ");var o=i()(n);"#text"===r.target.nodeName?(o.data("dragging",!1),r.preventDefault()):(t=L(a,l),y(r,o,t,{}))},dragEndFn:e=>{let t,{event:r,targetObjects:a,declViewModel:l}=e,n=document.children[0].querySelector(".aw-tile-tileCanvasPanel.aw-layout-flexColumn ");var o=i()(n);if(r.stopPropagation(),r){if(o.data("dragging",!1),!w(r))return;t=L(a,l),x(r)}},dragOverFn:e=>{let{event:t,targetObjects:r,declViewModel:a}=e;(t.stopPropagation(),t.preventDefault(),t)&&(t.dataTransfer&&!s.default.isQt&&(t.dataTransfer.dropEffect="move"),t.stopPropagation(),t.preventDefault(),o.a.debounce(E,100)(t))},dragEnterFn:e=>{let t,{event:r,targetObjects:a,declViewModel:l}=e;if(r.stopPropagation(),r){0;var n=function(e){var t;let r=e.target,a=i()(r).closest(".aw-tile-draggable");return a&&a.length>0?t=a[0]:i()(r).hasClass(c)&&(t=i()(r)),t}(r);if(!n)return;t=L(a,l),a.viewModel=l,N(r,n,t)}},dragLeaveFn:e=>{let{event:t,targetObjects:r,declViewModel:a}=e;(t.stopPropagation(),t)&&o.a.debounce(O,100)(t)},dropFn:(e,t)=>{let r,{event:a,targetObjects:l,declViewModel:n}=t,o=document.children[0].querySelector(".aw-tile-tileCanvasPanel.aw-layout-flexColumn ");var s=i()(o);a.stopPropagation(),a&&(s.data("dragging",!1),r=L(l,n),M(a,0,0,r,e))},updateOrder:z,createNewGroup:P,reOrderInSameGroup:q,reOrderInDifferentGroup:H,retrieveTileInTileGroup:V,getTileGroup:A,postLog:I}}}]);