"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","99946c4c5136faa9936a6fcb7cffd603"],["/static/css/main.a5637945.css","186af06169394f04b24d08aaf885ba18"],["/static/js/main.34b75c4a.js","ed15b5ee49328cf270a5250e01f18c17"],["/static/media/BlogPost.83df02a3.png","83df02a38743e25339d02299e7ac763f"],["/static/media/CageMatch.9a4b1825.png","9a4b1825ad0e79f25dd2ce9e4e3f94ff"],["/static/media/arthurs-pass.50b8eddc.jpg","50b8eddc7acb5c14375ca6adbf9ad6b9"],["/static/media/christmasinprague.1a31e70b.jpg","1a31e70b8f002568f52ceb514d78c79c"],["/static/media/elephants.1d6a76cd.jpg","1d6a76cd67430fea710d32ad0ba7fa70"],["/static/media/england.d842c864.jpg","d842c8649209685a293fd93dc97234af"],["/static/media/global-kitchen.aebe7f5f.png","aebe7f5f3636bca0fe047e53b807647e"],["/static/media/hongkong.a648f916.jpg","a648f916f1084a3377aefc838e1fb2c1"],["/static/media/lakepukaki.e87747de.jpg","e87747debfc48fd9706c6c6e1f02f463"],["/static/media/lamb.3a624a6a.jpg","3a624a6aa07ecdc1b9004cfa129e49d8"],["/static/media/mountcook.435aeea3.jpg","435aeea302ab5eb9f212afc47a58a12b"],["/static/media/mtdoom.edd3c902.jpg","edd3c9021e80370953859cad2ca25569"],["/static/media/paris.b68ac1a7.jpg","b68ac1a7dcad41fbf360da8935dc6d90"],["/static/media/prague.2d8c7345.jpg","2d8c73457919e4068686d2a81402245a"],["/static/media/profile-pic.7a78a68e.jpg","7a78a68e0538fcb22fb8472d1fb7b0ac"],["/static/media/sandsurfing.e189f74d.jpg","e189f74d2a83d56201d5d134d5877777"],["/static/media/snowboarding.a90668a9.jpg","a90668a9675aee8c874b371e1543b077"],["/static/media/sunrise.23f37987.jpg","23f37987b86e93e783092216bb99af6f"],["/static/media/whitetemple.40103cfa.jpg","40103cfa52fd64d5bcb713f6e05a8e5a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});