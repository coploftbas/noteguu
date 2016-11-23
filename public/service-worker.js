// Set a name for the current cache
var CACHE_NAME = 'NOTE-GUU-V5';
// Default files to always cache
var urlsToCache = [
    '/bower_components/polymer/polymer.html',
    '/bower_components/app-route/app-location.html',
    '/bower_components/app-route/app-route.html',
    '/bower_components/iron-pages/iron-pages.html',

    '/bower_components/polymerfire/firebase-app.html',
    '/bower_components/polymerfire/firebase-document.html',
    '/bower_components/polymerfire/firebase-query.html',
    '/bower_components/polymerfire/firebase-messaging.html',

    '/bower_components/paper-input/paper-input',
    '/bower_components/paper-input/paper-textarea.html',
    '/bower_components/paper-button/paper-button.html',

    '/index.html',
    '/src/pages/index/page-index.html',
    '/src/pages/note/page-note.html'
];


self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('[ServiceWorker] Caching cacheFiles');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        
        caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                //console.log('%c[ServiceWorker] Found in Cache : '+response.url,'color:green')
                return response;
            }


            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();
            //console.log('[ServiceWorker] Cache Not Found :',fetchRequest.url);
            return fetch(fetchRequest)
        })

    );
});

self.addEventListener('activate', function(event) {
    console.log('[ServiceWorker] Activated');
    var cacheWhitelist = ['NOTE-GUU-V5'];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
                if (cacheWhitelist.indexOf(cacheName) === -1) {
                    return caches.delete(cacheName);
                }
            })
        );
        })
    );
});