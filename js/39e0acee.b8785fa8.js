(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["39e0acee"],{"522a":function(t,n,e){},"8b24":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 ideal text"},[e("p",[e("span",{staticStyle:{color:"green"}},[t._v(t._s(t.confirmedInput))]),e("span",[t._v(t._s(t.remainingInput))])])]),e("div",{staticClass:"col-12 ideal"},[e("p",[t._v(t._s(t.saved))])]),e("div",{staticClass:"col-12"},[e("q-input",{ref:"a",staticClass:"text",on:{input:t.oni},model:{value:t.input,callback:function(n){t.input=n},expression:"input"}})],1),e("div",{staticClass:"col-12 text"},[e("p",[t._v(t._s(t.timeString))])])])])},s=[],r=e("4db1"),a=e.n(r),c={name:"PageIndex",computed:{remainingInput:function(){return this.currentText.slice(this.confirmedInput.length)},confirmedInput:function(){var t=a()(this.input),n=a()(this.currentText),e="";while(t.length&&n.length&&t[0]===n[0])e+=t[0],t=t.slice(1),n=n.slice(1);return e},corpus:function(){return["我姓张。","昨天晚上，王朋和李友去高文中家玩儿。","在高文中家，他们认识了高文中的姐姐。","她叫高小音，在学校的图书馆工作。","他今年二十四岁。","我和你。","我认识他。","李友给常老师打电话。。。","喂？","喂，请问，常老师在吗？","我就是。","您是哪位？","老师，您好。我是李友。","李友，有事儿吗？","老师，今天下午您有时间吗？","我想问您几个问题。","对不起，今天下午我要开会。","明天呢？","明天上午我有两节课，下午三点要给二年级考试。","您什么时候有空儿？","明天四点以后才有空儿。","要是您方便，四点半我到您的办公室去，行吗？","四点半，没问题。","我在办公室等你。","谢谢您。","别客气。","他给我打了一个电话。","他是谁？请你给我们介绍一下。","你有你姐姐的照片吗？","给我看一下，行吗？","我昨天很忙，没给妈妈打电话。"]}},methods:{randomText:function(){return this.corpus[Math.floor(Math.random()*this.corpus.length)]},next:function(){this.input="";var t=Date.now(),n=t-this.currentStart;this.timeString="Time of last lap: ".concat(n/1e3," seconds. 字/min: ").concat(parseFloat(this.currentText.length/(n/1e3)*60).toFixed(2)),this.currentText=this.randomText(),this.currentStart=Date.now()},oni:function(){this.confirmedInput===this.currentText&&this.next()}},mounted:function(){this.currentText=this.randomText(),this.currentStart=Date.now()},data:function(){return{currentText:"",input:"",saved:"",currentStart:null,timeString:""}}},o=c,u=(e("f53d"),e("2877")),l=e("fe09"),p=Object(u["a"])(o,i,s,!1,null,"bbe3b1a6",null);n["default"]=p.exports;p.options.components=Object.assign({QPage:l["h"],QInput:l["f"]},p.options.components||{})},f53d:function(t,n,e){"use strict";var i=e("522a"),s=e.n(i);s.a}}]);