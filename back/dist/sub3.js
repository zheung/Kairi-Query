webpackJsonp([3],{413:function(t,e,a){"use strict";function o(t){a(560)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(494),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(580),l=a(29),c=o,d=Object(l.a)(r.a,s.a,s.b,!1,c,"data-v-04e5d110",null);e.default=d.exports},470:function(t,e,a){"use strict";function o(t){a(562)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(495),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(564),l=a(29),c=o,d=Object(l.a)(r.a,s.a,s.b,!1,c,"data-v-2dbeb9de",null);e.default=d.exports},471:function(t,e,a){"use strict";function o(t){a(565)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(496),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(567),l=a(29),c=o,d=Object(l.a)(r.a,s.a,s.b,!1,c,"data-v-cb18b8fc",null);e.default=d.exports},494:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(470),r=o(n),i=a(471),s=o(i),l=a(568),c=o(l),d=a(572),p=o(d),u=a(576),x=o(u);e.default={components:{ColText:r.default,ColSele:s.default,Enemy:c.default,Arthur:p.default,Card:x.default},data:function(){var t=function(t,e,a,o,n,r,i,s,l,c,d,p,u){var x=e+a*o,v=n*r,f=i+s,b=(x+v)*c*(1+3*d/100)*p*u,_=t*(b-f);return _<=1?1:_},e=[[],[],[],[],[]],a=function(a,o){e[0].push([a,o,0,~~(t(7,26467,a,7.3,a,0,2e6,3e6,0,2,20,1.5,1.6)/1e4)]),e[1].push([a,o,~~(t(4,26467,a,8,a,0,2e6,6e6,0,1,50,1.5,1.6)/1e4)]),e[2].push([a,o,~~(t(7,264670,a,1.3,a,5,1e6,3e6,0,2,20,1.5,1.6)/1e4)])};a(0,0);for(var o=99999;o<=999999;o+=1e5)for(var n=99999;n<=999999;n+=1e5)a(o,n);return window.X.init(this.$options.name,{tribal:{0:"无",1:"剑术",2:"技巧",3:"魔法",4:"圣化",5:"堕落"},attr:{1:"火",2:"冰",3:"风",4:"光",5:"暗"},param:{1:"血量",2:"物攻",3:"魔攻",4:"物防",5:"魔防"}},{data:{"米可":e[0],"猴子":e[1],"三千":e[2]}},{})},computed:{},methods:{calcAttack:function(t,e,a,o,n,r,i,s,l,c,d,p,u){var x=e+a*o,v=n*r,f=i+s,b=(x+v)*c*(1+3*d/100)*p*u,_=t*(b-f);return _<=1?1:_}}}},495:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{},percent:{}},data:function(){return{}}}},496:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{},options:{}},data:function(){return{}}}},497:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(470),r=o(n),i=a(471),s=o(i);e.default={components:{ColText:r.default,ColSele:s.default},data:function(){return{X:window.X}}}},498:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(470),r=o(n),i=a(471),s=o(i);e.default={components:{ColText:r.default,ColSele:s.default},data:function(){return{X:window.X}}}},499:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(470),r=o(n),i=a(471),s=o(i);e.default={components:{ColText:r.default,ColSele:s.default},data:function(){return{X:window.X}}}},560:function(t,e,a){var o=a(561);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a(28).default;n("07cf7845",o,!0,{})},561:function(t,e,a){e=t.exports=a(21)(!1),e.push([t.i,".compDamgCalc[data-v-04e5d110]{position:relative;width:100%;font-size:14px}.colBox[data-v-04e5d110]{display:inline-block;width:calc(100% - 30px);margin:5px 5px 5px 10px;position:relative}.wrap[data-v-04e5d110]{border:1px solid #2da1c9;padding:4px;border-radius:4px}.add[data-v-04e5d110]{cursor:pointer}",""])},562:function(t,e,a){var o=a(563);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a(28).default;n("1b652708",o,!0,{})},563:function(t,e,a){e=t.exports=a(21)(!1),e.push([t.i,'.compCol[data-v-2dbeb9de]{display:inline-block;vertical-align:top;white-space:nowrap;margin-bottom:2px;position:relative}.label[data-v-2dbeb9de]{padding:2px 0;border:1px solid #2da1c9;border-radius:2px 0 0 2px;background:#2da1c9;height:20px;line-height:20px;width:65px;text-align:center}.content[data-v-2dbeb9de]{padding:2px 14px;border:1px solid #2da1c9;border-radius:0 2px 2px 0;color:snow;background:#3d464c;height:20px;line-height:26px;width:110px}.text[data-v-2dbeb9de]{padding:2px 6px;outline:none}.percent[data-v-2dbeb9de]:after{content:"%";display:inline-block;position:absolute;right:4px;line-height:26px}.percent>.input[data-v-2dbeb9de]{padding:2px 18px 2px 6px;width:98px}',""])},564:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compCol",class:{percent:void 0!=t.percent}},[a("div",{staticClass:"inline label"},[t._v(t._s(t.text))]),a("input",{staticClass:"inline content text",attrs:{type:"text"}})])},n=[]},565:function(t,e,a){var o=a(566);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a(28).default;n("29ae2ea8",o,!0,{})},566:function(t,e,a){e=t.exports=a(21)(!1),e.push([t.i,".compCol[data-v-cb18b8fc]{display:inline-block;vertical-align:top;white-space:nowrap;margin-bottom:2px;position:relative}.label[data-v-cb18b8fc]{padding:2px 0;border:1px solid #2da1c9;border-radius:2px 0 0 2px;background:#2da1c9;height:20px;line-height:20px;width:65px;text-align:center}.content[data-v-cb18b8fc]{padding:2px 14px;border:1px solid #2da1c9;border-radius:0 2px 2px 0;color:snow;background:#3d464c;height:20px;line-height:26px;width:110px}.sele[data-v-cb18b8fc]{padding:2px 6px;outline:none;box-sizing:content-box;line-height:20px;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;-webkit-appearance:none}.option[data-v-cb18b8fc]{background-color:#3d464c}",""])},567:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compCol"},[a("div",{staticClass:"inline label"},[t._v(t._s(t.text))]),a("select",{staticClass:"inline content sele"},t._l(t.options,function(e,o){return a("option",{key:"colSele"+t.text+o,staticClass:"option",domProps:{value:o}},[t._v(t._s(e))])}))])},n=[]},568:function(t,e,a){"use strict";function o(t){a(569)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(497),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(571),l=a(29),c=o,d=Object(l.a)(r.a,s.a,s.b,!1,c,"data-v-9a1fdab4",null);e.default=d.exports},569:function(t,e,a){var o=a(570);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a(28).default;n("5c97fa1a",o,!0,{})},570:function(t,e,a){e=t.exports=a(21)(!1),e.push([t.i,".compEnemy[data-v-9a1fdab4]{border:1px solid #2da1c9;padding:4px;border-radius:4px}.colBox[data-v-9a1fdab4]{display:inline-block;width:calc(100% - 30px);margin:5px 5px 5px 10px;position:relative}.wrap[data-v-9a1fdab4]{border:1px solid #2da1c9;padding:4px;border-radius:4px}",""])},571:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compEnemy colBox"},[a("div",{staticClass:"colBox"},[a("ColText",{attrs:{text:"名称"}}),t._v(" "),a("ColSele",{attrs:{text:"心像",options:t.X.comp("damgCalc").tribal}}),t._v(" "),a("ColSele",{attrs:{text:"本体",options:{1:"是",2:"否"}}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("ColSele",{attrs:{text:"元素",options:t.X.comp("damgCalc").attr}}),t._v(" "),a("ColText",{attrs:{text:"血量"}}),t._v(" "),a("ColText",{attrs:{text:"物防"}}),t._v(" "),a("ColText",{attrs:{text:"魔防"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("ColText",{attrs:{text:"火耐性"}}),t._v(" "),a("ColText",{attrs:{text:"冰耐性"}}),t._v(" "),a("ColText",{attrs:{text:"风耐性"}}),t._v(" "),a("ColText",{attrs:{text:"光耐性"}}),t._v(" "),a("ColText",{attrs:{text:"暗耐性"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("ColText",{attrs:{percent:"",text:"火伤率"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"冰伤率"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"风伤率"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"光伤率"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"暗伤率"}})],1)])},n=[]},572:function(t,e,a){"use strict";function o(t){a(573)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(498),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(575),l=a(29),c=o,d=Object(l.a)(r.a,s.a,s.b,!1,c,"data-v-ebdbcfd8",null);e.default=d.exports},573:function(t,e,a){var o=a(574);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a(28).default;n("6ba79037",o,!0,{})},574:function(t,e,a){e=t.exports=a(21)(!1),e.push([t.i,".compArthur[data-v-ebdbcfd8]{border:1px solid #2da1c9;padding:4px;border-radius:4px}.colBox[data-v-ebdbcfd8]{display:inline-block;width:calc(100% - 30px);margin:5px 5px 5px 10px;position:relative}.wrap[data-v-ebdbcfd8]{border:1px solid #2da1c9;padding:4px;border-radius:4px}",""])},575:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compArthur colBox"},[a("div",{staticClass:"colBox"},[a("ColText",{attrs:{text:"血量"}}),t._v(" "),a("ColText",{attrs:{text:"物攻"}}),t._v(" "),a("ColText",{attrs:{text:"魔攻"}}),t._v(" "),a("ColText",{attrs:{text:"物防"}}),t._v(" "),a("ColText",{attrs:{text:"魔防"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("ColSele",{attrs:{text:"追伤元素",options:t.X.comp("damgCalc").attr}}),t._v(" "),a("ColText",{attrs:{text:"追伤数值"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"暴击伤害"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"额外"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("ColText",{attrs:{percent:"",text:"额外一"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"额外二"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"额外三"}}),t._v(" "),a("ColText",{attrs:{percent:"",text:"额外四"}})],1)])},n=[]},576:function(t,e,a){"use strict";function o(t){a(577)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(499),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(579),l=a(29),c=o,d=Object(l.a)(r.a,s.a,s.b,!1,c,"data-v-464879a5",null);e.default=d.exports},577:function(t,e,a){var o=a(578);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a(28).default;n("3ec00726",o,!0,{})},578:function(t,e,a){e=t.exports=a(21)(!1),e.push([t.i,".compCard[data-v-464879a5]{border:1px solid #2da1c9;padding:4px;border-radius:4px}.colBox[data-v-464879a5]{display:inline-block;width:calc(100% - 30px);margin:5px 5px 5px 10px;position:relative}.wrap[data-v-464879a5]{border:1px solid #2da1c9;padding:4px;border-radius:4px}.wrap2[data-v-464879a5]{border-left:1px dashed #2da1c9;padding:4px;border-radius:0}",""])},579:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compCard colBox"},[a("div",{staticClass:"colBox"},[t._v("\n\t\t● 卡牌 "),a("Fas",{attrs:{icon:"plus-square"}})],1),t._v(" "),a("div",{staticClass:"colBox wrap"},[a("div",{staticClass:"colBox"},[a("ColText",{attrs:{text:"名称"}}),t._v(" "),a("ColText",{attrs:{text:"Cost"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[t._v("\n\t\t\t物理\n\t\t")]),t._v(" "),a("div",{staticClass:"colBox wrap2"},[a("div",{staticClass:"colBox"},[a("ColSele",{attrs:{text:"元素",options:t.X.comp("damgCalc").attr}}),t._v(" "),a("ColText",{attrs:{text:"段数"}}),t._v(" "),a("ColSele",{attrs:{text:"属性",options:t.X.comp("damgCalc").param}}),t._v(" "),a("ColText",{attrs:{text:"倍率"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("div",{staticClass:"colBox"},[t._v("\n\t\t\t\t\t叠加 "),a("Fas",{attrs:{icon:"plus-square"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("ColText",{attrs:{text:"属性"}}),t._v(" "),a("ColText",{attrs:{text:"倍率"}})],1)])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"colBox"},[t._v("\n\t\t\t魔法\n\t\t")]),t._v(" "),a("div",{staticClass:"colBox wrap2"},[a("div",{staticClass:"colBox"},[a("ColSele",{attrs:{text:"元素",options:t.X.comp("damgCalc").attr}}),t._v(" "),a("ColText",{attrs:{text:"段数"}}),t._v(" "),a("ColSele",{attrs:{text:"属性",options:t.X.comp("damgCalc").param}}),t._v(" "),a("ColText",{attrs:{text:"倍率"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("div",{staticClass:"colBox"},[t._v("\n\t\t\t\t\t叠加 "),a("Fas",{attrs:{icon:"plus-square"}})],1),t._v(" "),a("div",{staticClass:"colBox"},[a("ColText",{attrs:{text:"属性"}}),t._v(" "),a("ColText",{attrs:{text:"倍率"}})],1)])])])])},n=[]},580:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compDamgCalc"},[a("div",{staticClass:"colBox"},[t._v("\n\t\t● 敌人 "),a("Fas",{attrs:{icon:"plus-square"}})],1),t._v(" "),a("Enemy"),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"colBox"},[t._v("\n\t\t● 亚瑟\n\t")]),t._v(" "),a("Arthur"),t._v(" "),a("hr"),t._v(" "),a("Card")],1)},n=[]}});