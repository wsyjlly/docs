(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{207:function(t,n,e){"use strict";e.r(n);var a=e(0),r=Object(a.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("[TOC]")]),t._v(" "),e("h1",{attrs:{id:"css3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3")]),t._v(" "),e("h2",{attrs:{id:"css-选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 选择器")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("CSS选择器总计有47种，可分为五类，分别为基本选择器、组合选择器、属性选择器、伪元素选择器、伪类选择器")]),t._v(" "),e("li",[t._v("CSS三大特性—— 继承、 优先级和层叠。\n"),e("ul",[e("li",[t._v("继承：即子类元素继承父类的样式;")]),t._v(" "),e("li",[t._v("优先级：是指不同类别样式的权重比较;")]),t._v(" "),e("li",[t._v("层叠：是说当数量相同时，通过层叠(后者覆盖前者)的样式。")])])])])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".选择器(47)\n├─ 基础的选择器(4)\n│  ├─ *（通用选择器，匹配任何元素）\n│  ├─ E（标签选择器，匹配所有使用该标签的元素）\n│  ├─ id（id选择器，匹配id属性等于该id的元素）\n│  └─ class（class选择器，匹配所有class属性中包含该类的元素）\n│  \n├─ 组合选择器(5)\n│  ├─ E,F（多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔）\n│  ├─ E F（后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔）\n│  ├─ E > F（子元素选择器，匹配所有E元素的子元素F）\n│  ├─ E + F（相邻兄弟选择器，匹配E元素之后的一个同级元素F，当两个兄弟元素相同时，作用同E ~ E）\n│  └─ 同级元素通用选择器（CSS 3）\n│     └─ E ~ F（匹配F元素，查找某一个指定元素E后面的所有同级元素F）\n│  \n├─ 属性选择器（7）\n│  ├─ CSS 2中的属性选择器\n│  │  ├─ E[att]（匹配所有具有att属性的E元素，不考虑它的值。（注意：E在此处可以省略，比如“[cheacked]”。以下同。）\n│  │  ├─ E[att=val]（匹配所有att属性等于“val”的E元素）\n│  │  ├─ E[att~=val]（匹配所有att属性具有多个空格分隔的值、其中一个值等于“val”的E元素）\n│  │  └─ E[att|=val]（匹配所有att属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以“val”开头的E元素，主要用于lang属性，比如“en”、“en-us”、“en-gb”等等）\n│  │  \n│  └─ CSS 3中的属性选择器\n│     ├─ E[att^=”val”]（属性att的值以”val”开头的元素）\n│     ├─ E[att$=”val”]（属性att的值以”val”结尾的元素）\n│     └─ E[att*=”val”]（属性att的值包含”val”字符串的元素）\n│  \n├─ 伪元素选择器（4）\n│  ├─ E:first-line（匹配E元素的第一行）\n│  ├─ E:first-letter（匹配E元素的第一个字母）\n│  ├─ E:before（在E元素之前插入生成的内容）\n│  └─ E:after（在E元素之后插入生成的内容）\n│  \n└─ 伪类选择器（27）\n   ├─ 动态伪类选择器\n   │  ├─ E:link（匹配所有未被点击的链接）\n   │  ├─ E:visited（匹配所有已被点击的链接）\n   │  ├─ E:active（匹配鼠标已经其上按下、还没有释放的E元素）\n   │  ├─ E:hover（匹配鼠标悬停其上的E元素）\n   │  └─ E:focus（匹配获得当前焦点的E元素）\n   │  \n   ├─ 与用户界面有关的伪类选择器（CSS 3）\n   │  ├─ E:enabled（匹配表单中激活的元素）\n   │  ├─ E:disabled（匹配表单中禁用的元素）\n   │  ├─ E:checked（匹配表单中被选中的radio（单选框）或checkbox（复选框）元素）\n   │  └─ E::selection（匹配用户当前选中的元素）\n   │  \n   ├─ 结构性伪类选择器（CSS 3）\n   │  ├─ E:root（匹配文档的根元素，对于HTML文档，就是HTML元素）\n   │  ├─ E:nth-child(n)（匹配其父元素的第n个子元素，第一个编号为1）\n   │  ├─ E:first-child（匹配父元素的第一个子元素,等同于:nth-child(1)）\n   │  ├─ E:nth-of-type(n)（与:nth-child()作用类似，但是仅匹配使用同种标签的元素）\n   │  ├─ E:first-of-type（匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)）\n   │  │\n   │  ├─ E:nth-last-child(n)（匹配其父元素的倒数第n个子元素，第一个编号为1）\n   │  ├─ E:last-child（匹配父元素的最后一个子元素，等同于:nth-last-child(1)）\n   │  ├─ E:nth-last-of-type(n)（与:nth-last-child() 作用类似，仅匹配使用同种标签的元素）\n   │  ├─ E:last-of-type（匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)）\n   │  ├─ E:nth-child(odd)（匹配父元素下奇数个子元素）\n   │  ├─ E:nth-child(even)（匹配父元素下偶数个子元素）\n   │  ├─ E:only-child（匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1)）\n   │  ├─ E:only-of-type（匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)）\n   │  ├─ E:empty（匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素）\n   │  └─  E:nth-child(An+B)（应用于倍数的循环）\n   │\n   ├─ 语言伪类选择器\n   │  └─ E:lang(c)（匹配lang属性等于c的E元素）\n   │\n   ├─ 目标伪类选择器\n   │  └─ :target（给页面中某个target元素指定样式 只有当用户点击链接并跳转到target元素后才会起作\n   │\n   └─ 反选伪类\n      └─ E:not(s)（匹配不符合当前选择器的任何元素）\n\n")])])]),e("p",[e("img",{attrs:{src:"assets/css.png",alt:"css"}})]),t._v(" "),e("h2",{attrs:{id:"css属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css属性","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS属性")]),t._v(" "),e("blockquote",[e("p",[t._v("align-content 属性\nalign-items 属性\nalign-self 属性\nall 属性\nanimation 属性\nanimation-delay 属性\nanimation-direction 属性\nanimation-duration 属性\nanimation-fill-mode 属性\nanimation-iteration-count 属性\nanimation-name 属性\nanimation-play-state 属性\nanimation-timing-function 属性\nappearance 属性\nbackface-visibility 属性\nbackground 属性\nbackground-attachment 属性\nbackground-blend-mode 属性\nbackground-clip 属性\nbackground-color 属性\nbackground-image 属性\nbackground-origin 属性\nbackground-position 属性\nbackground-repeat 属性\nbackground-size 属性\nborder 属性\nborder-bottom 属性\nborder-bottom-color 属性\nborder-bottom-left-radius 属性\nborder-bottom-right-radius 属性\nborder-bottom-style 属性\nborder-bottom-width 属性\nborder-collapse 属性\nborder-color 属性\nborder-image 属性\nborder-image-outset 属性\nborder-image-repeat 属性\nborder-image-source 属性\nborder-image-width 属性\nBorder-left 属性\nborder-left-color 属性\nborder-left-style 属性\nborder-left-width 属性\nborder-image-slice 属性\nborder-radius 属性\nborder-right 属性\nborder-right-color 属性\nborder-right-style 属性\nborder-right-width 属性\nborder-spacing 属性\nborder-style 属性\nborder-top 属性\nborder-top-color 属性\nborder-top-left-radius 属性\nborder-top-right-radius 属性\nborder-top-style 属性\nborder-top-width 属性\nborder-width 属性\nbottom 属性\nbox-align 属性\nbox-direction 属性\nbox-flex 属性\nbox-flex-group 属性\nbox-lines 属性\nbox-ordinal-group 属性\nbox-orient 属性\nbox-pack 属性\nbox-shadow 属性\nbox-sizing 属性\ncaption-side 属性\nclear 属性\nclip 属性\ncolor 属性\ncolumn-count 属性\ncolumn-fill 属性\ncolumn-gap 属性\ncolumn-rule 属性\ncolumn-rule-color 属性\ncolumn-rule-style 属性\ncolumn-rule-width 属性\ncolumn-span 属性\ncolumn-width 属性\ncolumns 属性\ncontent 属性\ncounter-increment 属性\ncounter-reset 属性\ncursor 属性\ndirection 属性\ndisplay 属性\nEmpty-cells 属性\nfilter(滤镜) 属性\nflex 属性\nflex-basis 属性\nflex-direction 属性\nflex-flow 属性\nflex-grow 属性\nflex-shrink 属性\nflex-wrap 属性\nfloat 属性\nfont 属性\n@font-face 规则\nfont-family 属性\nfont-size 属性\nfont-size-adjust 属性\nfont-stretch 属性\nfont-style 属性\nfont-variant 属性\nfont-weight 属性\ngrid-columns 属性\ngrid-rows 属性\nhanging-punctuation 属性\nheight 属性\nicon 属性\njustify-content 属性\n@keyframes 规则\nleft 属性\nletter-spacing 属性\nline-height 属性\nlist-style 属性\nlist-style-image 属性\nlist-style-position 属性\nlist-style-type 属性\nmargin 属性\nmargin-bottom 属性\nmargin-left 属性\nmargin-right 属性\nmargin-top 属性\nmax-height 属性\nmax-width 属性\n@media查询\nMin-height 属性\nmin-width 属性\nnav-down 属性\nnav-index 属性\nnav-left 属性\nnav-right 属性\nnav-up 属性\nopacity 属性\norder 属性\noutline 属性\noutline-color 属性\noutline-offset 属性\noutline-style 属性\nOutline-width 属性\noverflow 属性\noverflow-x 属性\noverflow-y 属性\npadding 属性\nPadding-bottom 属性\npadding-left 属性\npadding-right 属性\npadding-top 属性\nPage-break-after 属性\npage-break-before 属性\npage-break-inside 属性\nperspective 属性\nperspective-origin 属性\nposition 属性\npunctuation-trim 属性\nquotes 属性\nresize 属性\nright 属性\nrotation 属性\ntab-size 属性\ntable-layout 属性\ntarget 属性\ntarget-name 属性\ntarget-new 属性\ntarget-position 属性\ntext-align 属性\ntext-align-last 属性\ntext-decoration 属性\ntext-decoration-color 属性\ntext-decoration-line 属性\ntext-decoration-style 属性\ntext-indent 属性\ntext-justify 属性\ntext-outline 属性\ntext-overflow 属性\ntext-shadow 属性\ntext-transform 属性\ntext-wrap 属性\ntop 属性\ntransform 属性\ntransform-origin 属性\ntransform-style 属性\ntransition 属性\ntransition-delay 属性\ntransition-duration 属性\ntransition-property 属性\ntransition-timing-function 属性\nunicode-bidi 属性\nvertical-align 属性\nvisibility 属性\nwidth 属性\nwhite-space 属性\nborder-image-width 属性\nword-break 属性\nword-spacing 属性\nword-wrap 属性\nz-index 属性")])]),t._v(" "),e("h2",{attrs:{id:"css-布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-布局","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 布局")]),t._v(" "),e("blockquote",[e("p",[t._v("1.静态布局：传统布局，屏幕宽高变化时，盒子使用横向或者竖向的滚动条来查看被遮挡部分，也就是不管浏览器窗口的大小怎么变化就按html语义标签排列的布局来布置。")]),t._v(" "),e("p",[t._v("2.弹性布局：css3引入的，flex布局；优点在于其容易上手，根据flex规则很容易达到某个布局效果，然而缺点是：浏览器兼容性比较差，只能兼容到ie9及以上；")]),t._v(" "),e("p",[t._v("3.自适应布局：分别为不同的屏幕分辨率定义布局，在每个布局中，页面元素不随窗口大小的调整而发生变化，当窗口大小到达一定分辨率时变化一次。")]),t._v(" "),e("p",[t._v("4.流式布局：页面元素的宽度按照屏幕进行适配调整，元素的位置不变，大小变化，屏幕太大或者太小导致元素不能正常显示。")]),t._v(" "),e("p",[t._v("5.响应式布局：")]),e("meta",{attrs:{name:"viewport",content:"divice-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}}),t._v('使用meta标签设置，页面元素宽度随窗口调整自动适配。主要属性及其含义如下：name="viewport"：   名称=视图；width=device-width 页面宽度=设备宽度(可以理解为获取你手机的屏幕宽度)；initial-scale - 初始的缩放比例  ；minimum-scale - 允许用户缩放到的最小比例   ；maximum-scale - 允许用户缩放到的最大比例  ；user-scalable - 用户是否可以手动缩放  。'),e("p"),t._v(" "),e("p",[t._v("6.网格布局：grid二维布局系统，随意的定义每行每列的数目和大小。也非常简单方便，兼容性较差。")])]),t._v(" "),e("h3",{attrs:{id:"flex布局应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex布局应用","aria-hidden":"true"}},[t._v("#")]),t._v(" flex布局应用")]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("p",[t._v("布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。")])]),t._v(" "),e("li",[e("p",[t._v("我认为flex布局最大的优势就是在其的“弹性”，“弹性”主要表现在flex布局不同于盒子模型的百分比布局和CSS3支持的响应式布局，以下有几种情况是盒子模型中的这些布局所不便实现的：")]),t._v(" "),e("ul",[e("li",[t._v("1、浏览器的视口空间不足，要求视口中的特定块要按照比例进行缩放")]),t._v(" "),e("li",[t._v("2、应对一些布局是要以基准线(baseline)对齐的特殊布局方法")]),t._v(" "),e("li",[t._v("3、需要模块垂直居中")])])]),t._v(" "),e("li",[e("p",[t._v("从应对一些特殊布局上来说，使用flex确实比盒子模型的布局更是一种更优的解决方案")])]),t._v(" "),e("li",[e("p",[t._v("flex布局的兼容性不是太好，至少某些低版本的安卓机上面是不能够识别改布局的，但是总体上随着浏览器对H5属性的支持程度的提升，以及一些老式的安卓手机的淘汰，目前该布局在手机上面还是有比较好的应用的，但是在使用flex布局的同时，建议还是要搭配上gulp或者是grunt等自动化的工具来进行浏览器前缀的编译，这样一方面可以节约手动的去添加浏览器的兼容性前缀，另外的一方面是可以解觉手机上面不同浏览器的差异导致的问题，一般来说flex布局就是在手机上面使用的，在PC上面由于需要考虑到IE的支持程度的问题，所以在PC上面还是不宜去使用flex。")])])])]),t._v(" "),e("ul",[e("li",[t._v("flex布局基本语法")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[t._v("flex-direction决定主轴的方向（即项目的排列方向\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row | row-reverse | column | column-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflex-wrap       默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflex-flow       flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <flex-direction> || <flex-wrap>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\njustify-content定义了项目在主轴上的对齐方式。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflex-start（默认值）：左对齐\nflex-end：右对齐\ncenter： 居中\nspace-between：两端对齐，项目之间的间隔都相等。\nspace-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。\n\nalign-items     align-items属性定义项目在交叉轴上如何对齐。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflex-start：交叉轴的起点对齐。\nflex-end：交叉轴的终点对齐。\ncenter：交叉轴的中点对齐。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("baseline")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 项目的第一行文字的基线对齐。\nstretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。\n\nalign-content   align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflex-start：与交叉轴的起点对齐。\nflex-end：与交叉轴的终点对齐。\ncenter：与交叉轴的中点对齐。\nspace-between：与交叉轴两端对齐，轴线之间的间隔平均分布。\nspace-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。\nstretch（默认值）：轴线占满整个交叉轴。\n\n以下6个属性设置在项目上。\norder           定义项目的排列顺序。数值越小，排列越靠前，默认为0。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <integer>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nflex-grow       flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" （ default 0）\n\nflex-shrink     flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("（ default 1）\n\nflex-basis      flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。\n浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <length> | auto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" （ default auto ）\n\nflex            flex属性是flex-grow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ <"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-grow'")]),t._v("> <"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-shrink'")]),t._v(">? || <"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-basis'")]),t._v("> ]\n\nalign-self      允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，\n表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"css3-尺寸"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-尺寸","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 尺寸")]),t._v(" "),e("blockquote",[e("table",[e("thead",[e("tr",[e("th",[e("a",{attrs:{href:"https://www.w3cschool.cn/cssref/pr-dim-height.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("height"),e("OutboundLink")],1)]),t._v(" "),e("th",[t._v("设置元素的高度。")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://www.w3cschool.cn/cssref/pr-dim-line-height.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("line-height"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("设置行高。")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.w3cschool.cn/cssref/pr-dim-max-height.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("max-height"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("设置元素的最大高度。")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.w3cschool.cn/cssref/pr-dim-max-width.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("max-width"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("设置元素的最大宽度。")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.w3cschool.cn/cssref/pr-dim-min-height.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("min-height"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("设置元素的最小高度。")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.w3cschool.cn/cssref/pr-dim-min-width.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("min-width"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("设置元素的最小宽度。")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.w3cschool.cn/cssref/pr-dim-width.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("width"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("设置元素的宽度。")])])])])]),t._v(" "),e("h2",{attrs:{id:"css3-边框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-边框","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 边框")]),t._v(" "),e("h3",{attrs:{id:"border-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-image","aria-hidden":"true"}},[t._v("#")]),t._v(" border-image")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("url(border.png)")]),t._v(" 30 30 round"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" source slice width outset repeat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("border-image-source")])]),t._v(" "),e("td",[t._v("用于指定要用于绘制边框的图像的位置")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("border-image-slice")])]),t._v(" "),e("td",[t._v("图像边界向内偏移")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("border-image-width")])]),t._v(" "),e("td",[t._v("图像边界的宽度")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("border-image-outset")])]),t._v(" "),e("td",[t._v("用于指定在边框外部绘制 border-image-area 的量")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("border-image-repeat")])]),t._v(" "),e("td",[t._v("这个例子演示了如何创建一个border-image 属性的按钮。")])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("border-image-source")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border-image-source: none|image;\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("none")]),t._v(" "),e("td",[t._v("没有图像被使用")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("image")])]),t._v(" "),e("td",[t._v("边框使用图像的路径")])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("border-image-slice")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border-image-slice: number|%|fill;\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("number")])]),t._v(" "),e("td",[t._v("数字表示图像的像素（位图图像）或向量的坐标（如果图像是矢量图像）")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("%")])]),t._v(" "),e("td",[t._v("百分比图像的大小是相对的：水平偏移图像的宽度，垂直偏移图像的高度")])]),t._v(" "),e("tr",[e("td",[t._v("fill")]),t._v(" "),e("td",[t._v("保留图像的中间部分")])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("border-image-width")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border-image-width: number|%|auto;\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("number")])]),t._v(" "),e("td",[t._v("表示相应的border-width 的倍数")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("%")])]),t._v(" "),e("td",[t._v("边界图像区域的大小：横向偏移的宽度的面积，垂直偏移的高度的面积")])]),t._v(" "),e("tr",[e("td",[t._v("auto")]),t._v(" "),e("td",[t._v("如果指定了，宽度是相应的image slice的内在宽度或高度")])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("border-image-outset")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border-image-outset: length|number;\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("length")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("em",[t._v("number")])]),t._v(" "),e("td",[t._v("代表相应的border-width 的倍数")])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("border-image-repeat")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border-image-repeat: stretch|repeat|round|initial|inherit;\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("stretch")]),t._v(" "),e("td",[t._v("默认值。拉伸图像来填充区域")])]),t._v(" "),e("tr",[e("td",[t._v("repeat")]),t._v(" "),e("td",[t._v("平铺（repeated）图像来填充区域。")])]),t._v(" "),e("tr",[e("td",[t._v("round")]),t._v(" "),e("td",[t._v("类似 repeat 值。如果无法完整平铺所有图像，则对图像进行缩放以适应区域。")])]),t._v(" "),e("tr",[e("td",[t._v("space")]),t._v(" "),e("td",[t._v("类似 repeat 值。如果无法完整平铺所有图像，扩展空间会分布在图像周围")])]),t._v(" "),e("tr",[e("td",[t._v("initial")]),t._v(" "),e("td",[t._v("将此属性设置为默认值。")])]),t._v(" "),e("tr",[e("td",[t._v("inherit")]),t._v(" "),e("td",[t._v("从父元素中继承该属性。")])])])]),t._v(" "),e("h2",{attrs:{id:"css3-圆角"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-圆角","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 圆角")]),t._v(" "),e("h2",{attrs:{id:"css3-渐变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-渐变","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 渐变")]),t._v(" "),e("h2",{attrs:{id:"css3-文本效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-文本效果","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 文本效果")]),t._v(" "),e("h2",{attrs:{id:"css3字体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3字体","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3字体")]),t._v(" "),e("h2",{attrs:{id:"css3-2d转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-2d转换","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 2D转换")]),t._v(" "),e("h2",{attrs:{id:"css3-3d转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-3d转换","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 3D转换")]),t._v(" "),e("h2",{attrs:{id:"css3-过渡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-过渡","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 过渡")]),t._v(" "),e("h2",{attrs:{id:"css3-动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-动画","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 动画")]),t._v(" "),e("h2",{attrs:{id:"css3-多列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-多列","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 多列")]),t._v(" "),e("h2",{attrs:{id:"css3-用户界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-用户界面","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 用户界面")]),t._v(" "),e("h2",{attrs:{id:"css-图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-图片","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 图片")]),t._v(" "),e("h2",{attrs:{id:"css-按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-按钮","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 按钮")]),t._v(" "),e("h2",{attrs:{id:"css3-框大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-框大小","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 框大小")]),t._v(" "),e("h2",{attrs:{id:"css3-弹性盒子-flex-box"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-弹性盒子-flex-box","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 弹性盒子(Flex Box)")]),t._v(" "),e("h2",{attrs:{id:"css3-多媒体查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-多媒体查询","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 多媒体查询")]),t._v(" "),e("h2",{attrs:{id:"css3-多媒体查询实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3-多媒体查询实例","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 多媒体查询实例")])])},[],!1,null,null,null);n.default=r.exports}}]);