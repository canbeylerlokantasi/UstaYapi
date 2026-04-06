const CACHE = 'ustayapi-v2';
const STATIC = ['.','index.html','manifest.json','icon.svg','data.json',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/recharts/umd/Recharts.js',
  'https://unpkg.com/@babel/standalone/babel.min.js'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC).catch(()=>{})));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('api.github.com')||e.request.url.includes('raw.githubusercontent.com')) return;
  e.respondWith(
    caches.match(e.request).then(r=>{
      if(r) return r;
      return fetch(e.request).then(res=>{
        if(res&&res.ok&&(res.type==='basic'||res.type==='cors')){
          const cl=res.clone();
          caches.open(CACHE).then(c=>c.put(e.request,cl));
        }
        return res;
      }).catch(()=>caches.match('index.html'));
    })
  );
});
