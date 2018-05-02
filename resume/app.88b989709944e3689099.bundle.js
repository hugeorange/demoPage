webpackJsonp([1],{"2O6T":function(n,e,t){"use strict";t("dNEa");var r,o=t("Ih9k"),a=(r=o)&&r.__esModule?r:{default:r},i=t("oLNF");(0,a.default)(0,function(){(0,i.showResume)(function(){(0,a.default)(1,function(){(0,i.markDown)(function(){(0,a.default)(2)})})})})},Ih9k:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(t("L7Pj")),o=s(t("GINC")),a=t("cU8G"),i=t("KTao");function s(n){return n&&n.__esModule?n:{default:n}}var u=void 0,l="",d=function(n){c((0,r.default)(".styles-wrap"),(0,r.default)(".styles-wrap pre")),(0,r.default)(".styles-wrap pre").html(o.default.highlight(n,o.default.languages.css)),(0,r.default)(".styles-wrap style").html(n)},c=function(n,e){var t=e.height()-n.height();t>0&&n.scrollTop(t+10)};e.default=function(n,e){var t=a.styles[n].length,r=0;u=setInterval(function(){if(l+=a.styles[n].substring(r,r+1),!(t>=++r))return clearInterval(u),void(e&&e());d(l)},i.DELAY)}},KTao:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DELAY=60},cU8G:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.resumeMarkdown="姚磊 大桔子\n----\n\n一只迷途的前端小码农，徜徉在计算机的世界，渴望成为一名有点点厉害的全栈开发工程师\n\n技能\n----\n\n* 前端开发\n* nodejs\n\n工作经历\n----\n\n1. 码客街\n2. 陆金所\n3. 美味不用等\n4. ...\n\n链接\n----\n\n* [GitHub](https://github.com/hugeorange)\n* [我的文章](https://segmentfault.com/u/djz)\n\n",e.styles=["\n/*\n* 灵感来源于 http://strml.net/\n* 代码借鉴自 https://github.com/qianlongo/resume-native\n* 感谢大神...\n*\n* 大家好，我是姚磊-大桔子\n* 看到首页链接的效果，自己也想实现一个\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n  -webkit-transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); \n  background: rgb(0,43,54); \n}\n/* 文字离边框太近了 */\n.styles-wrap {\n  width: 45vw; \n  height: 90vh;\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n}\n/* 代码高亮 */\n.token.selector{ \n  color: rgb(133,153,0); \n}\n.token.property{ \n  color: rgb(187,137,0); \n}\n.token.punctuation{ \n  color: yellow; \n}\n.token.function{ \n  color: rgb(42,161,152); \n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n  -webkit-perspective: 1000px;\n}\n.styles-wrap {\n  position: fixed; \n  left: 1rem; \n  top: 0; \n  transition: .5;\n  -webkit-transition: .5; \n  transform: rotateY(10deg) translateZ(-100px);\n  -webkit-transform: rotateY(10deg) translateZ(-100px);\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resume-wrap{\n  width: 48vw; \n  height: 90vh; \n  position: fixed; \n  right: .5rem; \n  top: 0;\n  padding: .5em;  \n  margin: .5em;\n  border: 1px solid;\n  background: white; \n  color: #222;\n  overflow: auto;\n  transition: .5;\n  -webkit-transition: .5; \n  transform: rotateY(-10deg) translateZ(-100px);\n  -webkit-transform: rotateY(-10deg) translateZ(-100px);\n}\n/* 好了，我开始写简历了 */\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resume-wrap{\n  /* padding: 1.5em; */\n}\n.resume-wrap h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resume-wrap ul,.resume-wrap ol{\n  list-style: none;\n}\n.resume-wrap ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resume-wrap ol {\n  counter-reset: section;\n}\n.resume-wrap ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resume-wrap blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n']},dNEa:function(n,e){},oLNF:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markDown=e.showResume=void 0;var r=s(t("L7Pj")),o=s(t("xjgd")),a=t("KTao"),i=t("cU8G");function s(n){return n&&n.__esModule?n:{default:n}}var u=void 0,l="",d=function(n){(0,r.default)(".resume-wrap pre").html(n)};e.showResume=function(n){var e=i.resumeMarkdown.length,t=0;u=setInterval(function(){if(l+=i.resumeMarkdown.substring(t,t+1),!(e>=++t))return clearInterval(u),void(n&&n());d(l)},a.DELAY)},e.markDown=function(n){(0,r.default)(".resume-tag").html((0,o.default)(l)),(0,r.default)(".resume-wrap pre").hide(),n&&n()}}},["2O6T"]);