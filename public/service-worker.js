const doCache = false; // Set this to true for production
const CACHE_NAME = 'github-pwa-cache';

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key);
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
});

self.addEventListener('install', event => {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        fetch('asset-manifest.json')
          .then(response => {
            response.json();
          })
          .then(assets => {
            const urlsToCache = ['/', assets['main.js']];
            cache.addAll(urlsToCache);
            console.log('cached');
          });
      }),
    );
  }
});

self.addEventListener('fetch', event => {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      }),
    );
  }
});
