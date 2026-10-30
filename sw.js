// Terraclast offline cache. Pages + plan: network first, fall back to cache. Map tiles: cache as you browse.
const C='terraclast-v7';const SHELL=['./','index.html','manifest.json','icon-192.png','icon-512.png','icon-180.png','plan.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!=='terraclast-tiles').map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(u.origin===location.origin){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(u.pathname.endsWith('plan.json')?'plan.json':r,cp));return res}).catch(()=>caches.match(u.pathname.endsWith('plan.json')?'plan.json':r,{ignoreSearch:true}).then(m=>m||caches.match('index.html'))));return}
 if(/arcgisonline|tile|basemaps/.test(u.host+u.pathname)){e.respondWith(caches.open('terraclast-tiles').then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok||res.type==='opaque')c.put(r,res.clone());return res}))))}});
