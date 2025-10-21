self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('flash-cache').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './icons/icon-192.png',
      './icons/icon-512.png'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
