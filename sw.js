// 🌊 SOREX Service Worker
const CACHE_NAME = 'sorex-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/auth.html',
  '/profile.html',
  '/upload.html',
  '/chat.html',
  '/explore.html',
  '/notifications.html',
  '/settings.html',
  '/firebase-config.js',
  '/manifest.json'
];

// تثبيت الـ Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🌊 SOREX: Caching assets...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((err) => console.log('Cache error:', err))
  );
});

// تفعيل الـ Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// جلب الملفات (Offline First)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                if (event.request.url.startsWith('http')) {
                  cache.put(event.request, responseToCache);
                }
              });
            return response;
          })
          .catch(() => {
            return caches.match('/index.html');
          });
      })
  );
});

// إشعارات Push
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'إشعار جديد من SOREX',
    icon: '/resources/icon-192.png',
    badge: '/resources/icon-192.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' }
  };
  event.waitUntil(
    self.registration.showNotification(data.title || 'SOREX 🌊', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
