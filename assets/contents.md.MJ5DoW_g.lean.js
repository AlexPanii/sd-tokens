import{d as k,h as _,l as w,k as b,o as s,c as r,m as a,a4 as I,a5 as S,F as u,G as m,t as h,p as N,e as C,g as B,q as V,s as q,_ as z,J as D}from"./chunks/framework.Nh_IS0PD.js";const J=JSON.parse(`[{"text":"Камера","anchor":"камера","items":[{"text":"Углы камеры","link":"/camera/angle","headers":[{"text":"low angle - Низкий угол","anchor":"low-angle-низкий-угол"},{"text":"high angle - Высокий угол","anchor":"high-angle-высокий-угол"},{"text":"tilt angle - Угол тильта","anchor":"tilt-angle-угол-тильта"},{"text":"side angle - Боковой угол","anchor":"side-angle-боковой-угол"},{"text":"point of view angle - Угол обзора","anchor":"point-of-view-angle-угол-обзора"},{"text":"сontrapposto аngle - Противоположный угол","anchor":"сontrapposto-аngle-противоположный-угол"},{"text":"diagonal angle - Диагональный угол","anchor":"diagonal-angle-диагональный-угол"},{"text":"dutch angle - Наклонный угол","anchor":"dutch-angle-наклонный-угол"}]},{"text":"Положение камеры","link":"/camera/position","headers":[{"text":"bird's eye view - высота птичьего полета","anchor":"bird-s-eye-view-высота-птичьего-полета"},{"text":"worm's eye view - Вид снизу вверх","anchor":"worm-s-eye-view-вид-снизу-вверх"},{"text":"extreme close-up - Экстремальный крупный план","anchor":"extreme-close-up-экстремальный-крупный-план"},{"text":"close-up - Крупный план","anchor":"close-up-крупный-план"},{"text":"upper body - Верхняя половина тела","anchor":"upper-body-верхняя-половина-тела"},{"text":"medium shot - Средний кадр","anchor":"medium-shot-средний-кадр"},{"text":"full body - Полное тело","anchor":"full-body-полное-тело"},{"text":"wide shot - Широкий кадр","anchor":"wide-shot-широкий-кадр"},{"text":"over the shoulder shot - Через плечо","anchor":"over-the-shoulder-shot-через-плечо"},{"text":"point of view shot - Вид изнутри","anchor":"point-of-view-shot-вид-изнутри"},{"text":"tracking shot - Следящий кадр","anchor":"tracking-shot-следящий-кадр"},{"text":"pan shot - Панорама","anchor":"pan-shot-панорама"},{"text":"zoom shot - Зумирование","anchor":"zoom-shot-зумирование"},{"text":"static shot - Статичный кадр","anchor":"static-shot-статичный-кадр"}]},{"text":"Расстояние до объекта","link":"/camera/distance","headers":[]},{"text":"Фокус","link":"/camera/focus","headers":[]},{"text":"Симметрия","link":"/camera/symmetry","headers":[{"text":"bilateral symmetry - двухсторонняя симметрия","anchor":"bilateral-symmetry-двухсторонняя-симметрия"},{"text":"asymmetric - асимметрия/не симметричный","anchor":"asymmetric-асимметрия-не-симметричный"},{"text":"radial symmetry - радиальная симметрия","anchor":"radial-symmetry-радиальная-симметрия"},{"text":"spherical symmetry - Сферическая симметрия","anchor":"spherical-symmetry-сферическая-симметрия"},{"text":"segmental symmetry - Сегментальная симметрия","anchor":"segmental-symmetry-сегментальная-симметрия"},{"text":"spiral symmetry - Спиральная симметрия","anchor":"spiral-symmetry-спиральная-симметрия"},{"text":"multiaxial symmetry - Многоосевая симметрия","anchor":"multiaxial-symmetry-многоосевая-симметрия"}]},{"text":"Жанр фотографии","link":"/camera/genres","headers":[]}]},{"text":"Одежда","anchor":"одежда","items":[{"text":"Платья","link":"/cloth/dresses","headers":[]}]}]`),f=c=>(V("data-v-96a6f868"),c=c(),q(),c),L={id:"api-index"},O={class:"header"},P=f(()=>a("h1",null,"Содержание",-1)),F={class:"api-filter"},G=f(()=>a("label",{for:"api-filter"},"Фильтр",-1)),M=["id"],U={class:"api-groups"},j=["href"],A={key:0,class:"no-match"},E=k({__name:"ContentsIndex",setup(c){const d=_(),i=_(""),p=o=>o.toLowerCase().replace(/-/g," ");w(()=>{var o;(o=d.value)==null||o.focus()});const x=b(()=>{const o=p(i.value),n=e=>p(e).includes(o);return J.map(e=>{if(n(e.text))return e;const l=e.items.map(t=>{if(n(t.text)||o.includes("ssr")&&t.text.startsWith("Server"))return t;if(!t.headers)return null;const y=t.headers.filter(({text:g,anchor:v})=>n(g)||n(v));return y.length?{text:t.text,link:t.link,headers:y}:null}).filter(t=>t);return l.length?{text:e.text,items:l}:null}).filter(e=>e)});return(o,n)=>(s(),r("div",L,[a("div",O,[P,a("div",F,[G,I(a("input",{ref_key:"search",ref:d,type:"search",placeholder:"Поиск по содержанию",id:"api-filter","onUpdate:modelValue":n[0]||(n[0]=e=>i.value=e)},null,512),[[S,i.value]])])]),(s(!0),r(u,null,m(x.value,e=>(s(),r("div",{key:e.text,class:"api-section"},[a("h2",{id:e.anchor},h(e.text),9,M),a("div",U,[(s(!0),r(u,null,m(e.items,l=>(s(),r("div",{key:l.text,class:"api-group"},[a("h3",null,h(l.text),1),a("ul",null,[(s(!0),r(u,null,m(l.headers,t=>(s(),r("li",{key:t.anchor},[a("a",{class:"link",href:N(B)(l.link)+".html#"+t.anchor},h(t.text),9,j)]))),128))])]))),128))])]))),128)),x.value.length?C("",!0):(s(),r("div",A,' No API matching "'+h(i.value)+'" found. ',1))]))}}),H=z(E,[["__scopeId","data-v-96a6f868"]]),$=JSON.parse('{"title":"Содержание","description":"","frontmatter":{"title":"Содержание","sidebar":false,"page":true,"footer":false,"aside":false,"layout":"page","editLink":true},"headers":[],"relativePath":"contents.md","filePath":"contents.md","lastUpdated":1706971727000}'),T={name:"contents.md"},K=Object.assign(T,{setup(c){return(d,i)=>(s(),r("div",null,[D(H)]))}});export{$ as __pageData,K as default};
