importScripts('bower_components/sw-toolbox/sw-toolbox.js');

console.log('Hello from service worker');

toolbox.options.debug = true;

toolbox.precache(['/']);
toolbox.router.get('/',toolbox.fastest);