var w=Object.defineProperty;var l=(r,t)=>w(r,"name",{value:t,configurable:!0});var x=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var h=(r,t,n)=>new Promise((a,o)=>{var i=e=>{try{s(n.next(e))}catch(c){o(c)}},m=e=>{try{s(n.throw(e))}catch(c){o(c)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,m);s((n=n.apply(r,t)).next())});var I=x((E,d)=>{d.exports=r=>{function t(a){let o=new Image;return o.src=a,new Promise((i,m)=>{o.onload=()=>{i(o)},o.onerror=()=>{m()}})}l(t,"loadImg");function n(a,o){let i=new Promise((m,s)=>{fetch(r.loadRoot()+o).then(e=>e.json()).then(e=>h(this,null,function*(){let c=yield Promise.all(e.frames.map(t)),g=document.createElement("canvas");g.width=e.width,g.height=e.height*e.frames.length;let f=g.getContext("2d");return c.forEach((p,u)=>{f.drawImage(p,0,u*e.height)}),r.loadSprite(a,g,{sliceY:e.frames.length,anims:e.anims})})).then(e=>{m(e)}).catch(()=>{s(`failed to load sprite '${a}' from '${o}'`)})});return r.addLoader(i),i}return l(n,"loadPedit"),{loadPedit:n}}});export default I();
//# sourceMappingURL=pedit.mjs.map
