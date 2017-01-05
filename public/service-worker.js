importScripts('bower_components/sw-toolbox/sw-toolbox.js');

//console.log('Hello from service worker');

toolbox.options.debug = true;

toolbox.precache([
    '/fonts/CSChatThaiUI.ttf',
    '/bower_components/polymer/polymer.html',
    '/bower_components/polymer/polymer-mini.html',
    '/bower_components/app-route/app-location.html',
    '/bower_components/app-route/app-route.html',
    '/bower_components/iron-pages/iron-pages.html'
]);

toolbox.router.get('/fonts/CSChatThaiUI.ttf',toolbox.cacheOnly);
toolbox.router.get('/bower_components/polymer/polymer.html',toolbox.cacheOnly);
toolbox.router.get('/bower_components/polymer/polymer-mini.html',toolbox.cacheOnly);
toolbox.router.get('/bower_components/app-route/app-location.html',toolbox.cacheOnly);
toolbox.router.get('/bower_components/app-route/app-route.html',toolbox.cacheOnly);
toolbox.router.get('/bower_components/iron-pages/iron-pages.html',toolbox.cacheOnly);

toolbox.router.get('/',toolbox.fastest);
toolbox.router.get('/src/nylon-app.html',toolbox.fastest);
toolbox.router.get('/src/nylon-init.html',toolbox.fastest);
toolbox.router.get('/src/pages/index/page-index.html',toolbox.fastest);
toolbox.router.get('/src/pages/note/page-note.html',toolbox.fastest);

