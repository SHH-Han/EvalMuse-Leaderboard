"use strict";(self.webpackChunkbyteval_benchmark=self.webpackChunkbyteval_benchmark||[]).push([["909"],{45210:function(e,n,r){r.d(n,{Z:()=>E});var t=r("11527"),a=r("50959"),o=r("60710"),s=r("22700"),i=r("40049"),l=r("56751"),c=r("39281");class d extends a.Component{componentDidCatch(e,n){this.setState({errorInfo:n}),c.kg.error("ErrorBoundary Catch Error","\u7EC4\u4EF6\u6E32\u67D3\u9519\u8BEF",e,n)}render(){return this.state.errorInfo?(0,t.jsx)(i.HY,{image:(0,t.jsx)(l.l3,{}),description:"\u5F00\u4E86\u4E2A\u5C0F\u5DEE"}):this.props.children}constructor(...e){super(...e),this.state={errorInfo:void 0}}}var u=[{name:"root",key:"root",prefixPath:"/",pages:[{name:"\u6392\u884C\u699C",menuKey:"Rank",path:"/rank",component:(0,a.lazy)(()=>Promise.all([r.e("308"),r.e("133"),r.e("408")]).then(r.bind(r,45157)))},{name:"\u6570\u636E\u8BE6\u60C5",menuKey:"rankDetail",path:"/rank/detail",component:(0,a.lazy)(()=>Promise.all([r.e("308"),r.e("126"),r.e("242"),r.e("133"),r.e("517")]).then(r.bind(r,6911)))}]}],h=()=>(0,t.jsx)("div",{style:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(i.yC,{size:"large"})}),p=r("13421");function x(){var e=(0,p._)(["\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  --semi-color-primary: #4c5eff;\n}\n\nli {\n  list-style: none;\n}\n\n"]);return x=function(){return e},e}var f=(0,r("72522").createGlobalStyle)(x()),v=r.p+"static/image/EvalMuseT.0b29b69b.png",m="header-DubxIb",j=()=>{console.log("Header");var e=(0,s.s0)();return(0,t.jsx)("div",{className:m,children:(0,t.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,t.jsx)("img",{style:{cursor:"pointer",height:28},onClick:()=>{e("/")},src:v})})})},b="main-menu-Np3Cdq",y=()=>null,{Sider:g,Content:k}=i.Ar,w=a.memo(e=>{var{showSider:n=!0,showHeader:r=!0,isPurePage:a=!1}=e;return a?(0,t.jsx)(s.j3,{}):(0,t.jsxs)(i.Ar,{style:{border:"0px"},children:[r?(0,t.jsx)(j,{}):null,(0,t.jsxs)(i.Ar,{children:[n?(0,t.jsx)(g,{className:b,children:(0,t.jsx)(y,{})}):null,(0,t.jsx)(k,{style:{backgroundColor:"rgb(242, 243, 250)"},children:(0,t.jsx)("div",{id:"globalContent",style:{boxSizing:"border-box",height:"calc(100vh - 60px)",overflow:"auto",backgroundColor:"#FFFFFF",position:"relative",display:"flex",flexDirection:"column",borderTopLeftRadius:n?16:0},children:(0,t.jsx)(s.j3,{})})})]})]})}),C=(0,a.lazy)(()=>Promise.all([r.e("308"),r.e("133"),r.e("408")]).then(r.bind(r,45157))),E=()=>(0,t.jsxs)(d,{children:[(0,t.jsx)(f,{}),(0,t.jsx)(o.UT,{children:(0,t.jsxs)(s.Z5,{children:[(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(h,{}),children:(0,t.jsx)(C,{})})}),u.map(e=>(0,t.jsx)(s.AW,{path:e.prefixPath,children:e.pages.map(e=>(0,t.jsx)(s.AW,{element:(0,t.jsx)(w,{showSider:!1,showHeader:e.showHeader}),children:(0,t.jsx)(s.AW,{path:e.path,element:(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(h,{}),children:(0,t.jsx)(e.component,{})})},e.path)},"".concat(e,"_layout")))},e.key))]})})]})},10700:function(e,n,r){var t=r(14772),a=r(11527),o=r(62765),s=r(4952),i=r(39281),l=(0,o.s)();function c(){return(c=(0,t._)(function*(){requestIdleCallback(()=>{(0,i.ZP)(),i.oe.config({}),i.oe.start()})})).apply(this,arguments)}(function(){return c.apply(this,arguments)})().then(()=>{(0,s.s)((0,a.jsx)(l,{}))})},39281:function(e,n,r){r.d(n,{kg:function(){return s},oe:function(){return o}});var t=r(68321),a=r(33846),{slardar:o}=(0,t.f)("default"),s=(0,a.p9)("default"),i=()=>{var e,n;return(null===(e=window.gfdatav1)||void 0===e?void 0:e.envName)==="prod"?"production":(null===(n=window.gfdatav1)||void 0===n?void 0:n.envName)||"production"};n.ZP=()=>{if(!!o)try{console.log("# slardar init","current env: ".concat(i()));var{hostname:e}=window.location,n=new RegExp("^https?://(".concat(e,")"));o.init({env:i(),release:void 0,bid:"byteval-web",plugins:{ajax:{collectBodyOnError:!0,extraExtractor:(e,r)=>{var t=r.request.url,a=n.test(t),o=r.response.status;return 0===o?{level:"warn",reqErrType:"unknown",msg:"\u8BF7\u6C42cancel\u6216\u672A\u77E5\u95EE\u9898"}:!a&&!!(o>=400)&&401!==o&&{level:"error",reqErrType:"other",msg:"\u5176\u4ED6\u57DF\u540D\u8BF7\u6C42\u5931\u8D25"}}}}})}catch(e){console.warn("# slardar init failed","current env: ".concat(i()))}}},28651:function(e,n,r){r(38460),r(39659),r(97937),r(37555),r(32177),r(63898),r(36420),r(68727),r(86246),r(756),r(21544),r(70470),r(37333),r(67925),r(63645),r(34852),r(5312),r(77663),r(77508),r(1614),r(16356),r(53471),r(46080),r(48488),r(34672),r(53555),r(59781),r(74433),r(38612),r(26662),r(25884),r(35928),r(92272),r(74798),r(18326),r(52875),r(46069),r(49408),r(24622),r(82956),r(14574),r(5552),r(12758),r(26345),r(79091),r(70665),r(32427),r(2252),r(46822),r(44484),r(95489),r(90971),r(28325),r(67238),r(94052),r(79049),r(56390),r(80843),r(3929),r(74943),r(61142),r(24599),r(6278),r(73861),r(16249),r(58649),r(17473),r(84963),r(56380),r(24992),r(65660),r(71022),r(73733),r(99567),r(8057),r(53128),r(45777),r(14098),r(86914),r(37964),r(68242),r(48345),r(94341),r(29866),r(9773),r(71974),r(67629),r(1280),r(15575),r(34417),r(38371),r(72258),r(97482),r(96360),r(57546),r(33101),r(48113),r(50209),r(4755),r(70529),r(2233),r(45732),r(84513),r(50533),r(37422),r(14385),r(31918),r(66528),r(84698),r(14265),r(43648),r(74666),r(86070),r(2141),r(5044),r(64411),r(46119),r(69310),r(1491),r(14972),r(66024),r(44460),r(3163),r(88547),r(8056),r(15032),r(44707),r(21314),r(10845),r(19303),r(66130),r(6124),r(48838),r(56472),r(39216),r(88386),r(61811),r(56240),r(38499),r(76913),r(4958),r(59283),r(26133),r(89168),r(48360),r(85082),r(3266),r(24932),r(5420),r(81871),r(74294),r(42108),r(65909),r(40131),r(22813),r(695),r(87261),r(23747),r(62514),r(47893),r(66001),r(56654),r(36298),r(67e3),r(95554),r(54838),r(938),r(69688),r(85662),r(67981),r(48725),r(22701),r(76360),r(57775),r(10632),r(98114),r(72611),r(46392),r(48984),r(69009),r(69239),r(79610),r(34512),r(42140),r(31528),r(95320),r(37904),r(88299),r(97403),r(39162),r(34753),r(64071),r(27620),r(89088),r(50091),r(83731),r(15472),r(77683),r(23068),r(26213),r(45738),r(19505),r(60057),r(78239),r(57216),r(35833),r(50499),r(44217),r(80263),r(68990),r(74148),r(94076),r(25653),r(63964),r(40185),r(10502),r(91643),r(33435),r(40786),r(78809),r(50156),r(78536),r(75593),r(54070),r(34384),r(48094),r(8357),r(95517),r(1902),r(60874),r(2256),r(20443),r(80701),r(75242),r(70646),r(56083),r(41309),r(34887),r(67537),r(99964),r(73231),r(94646),r(61040),r(12479),r(87295),r(41985),r(53243),r(52331),r(26532),r(36167),r(15530),r(84194),r(68998),r(35135),r(59679),r(41868),r(43244),r(46191),r(48745),r(98680),r(98110),r(37028),r(23200),r(68652),r(25132),r(13999),r(23517),r(60696),r(67526),r(61977),r(27820),r(15069),r(69805),r(44999),r(62822),r(67677),r(10771),r(62885),r(3635),r(91443),r(43364),r(263),r(9974),r(86479),r(1298),r(4862),r(35483),r(27957),r(75356),r(30022),r(31212),r(63177),r(22752),r(44457),r(56169),r(82850),r(22481),r(41858),r(80607),r(4681),r(75997),r(53262),r(55446),r(5549)},41786:function(){window.__assetPrefix__="/EvalMuse-Leaderboard"}},function(e){var n=function(n){return e(e.s=n)};e.O(0,["118","126","308","361","369","72"],function(){return n("72479"),n("41786"),n("28651"),n("26965")}),e.O()}]);