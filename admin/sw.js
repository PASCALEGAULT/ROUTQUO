const CACHE_NAME = 'routine-admin-v1';
const ASSETS = [
  '/routquo/admin/',
  '/routquo/admin/index.html',
  '/routquo/admin/manifest.json',
  '/routquo/icon-admin-192.png',
  '/routquo/icon-admin-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
