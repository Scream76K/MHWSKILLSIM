const CACHE='mh-wilds-v20';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin===location.origin){e.respondWith(caches.open(CACHE).then(c=>c.match(e.request).then(x=>x||fetch(e.request).then(r=>{c.put(e.request,r.clone());return r}))));}});
