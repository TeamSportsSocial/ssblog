/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/Sports-Social.ico","f154c900c83266bd42fc4305091bcdf9"],["/assets/images/12.PNG","7f8513203645bc15e07e6359486ae586"],["/assets/images/2.jpg","e33270633c12c365a79238b1878ae5d2"],["/assets/images/alec-moore-5093.jpg","bac3191957f72d8bf6c7b714c36312f5"],["/assets/images/ariel-lustre-242326.jpg","5a96bdd7cdb2a9b2a197e82b6e997496"],["/assets/images/clem-onojeghuo-71989.jpg","ecb9593d7ff8d615dbffe784d332f1df"],["/assets/images/copyright.png","99183f33ea7f1c3efc657fafda46864e"],["/assets/images/default-image.png","9bf783f88223efb84c7e1563b2bead6a"],["/assets/images/goh-rhy-yan-273921 (1).jpg","1e309ac3c684ae3087b29b05a1f0cdcd"],["/assets/images/hermes-rivera-265368.jpg","2286b065eb68bbdef393fff5786a64d6"],["/assets/images/initial-image.jpg","9e18d2cf06243f9259c21b958f147a43"],["/assets/images/noimage.png","6646207a6e0776bfccd07851df17fb30"],["/assets/images/robert-collins-333411.jpg","72c7444a77a562683e2ccd6f62e6fbd6"],["/assets/images/robert-collins-341231.jpg","78fc1df5e979564f64ee9757f0b0acee"],["/assets/images/sayan-nath-180616.jpg","dc63c393384758fa0b575e70e93e86e4"],["/assets/images/sports-social-blogger-black.png","90abf8701f8fcfaaf65a0dc3a4b28f19"],["/assets/images/sports-social-blogger-white.png","56a117c02479d96875417a01eab8987d"],["/assets/images/sports-social-cancel-black.png","963722cc524ada9f6256e8037b1f23c5"],["/assets/images/sports-social-cancel-white.png","7ad4122e2f5372dbdaf0c0aaf4d5c126"],["/assets/images/sports-social-correct-symbol-white.png","d53967774733bd76343e75647f0508fb"],["/assets/images/sports-social-facebook-logo-black.png","944f8385ef79467cfa2c86a17ed24c90"],["/assets/images/sports-social-facebook-logo-blue.png","450d41a58d790a5e65476a32cd727cc2"],["/assets/images/sports-social-facebook-logo-white.png","10e0cf68977b9a0f99356977b5fe46c9"],["/assets/images/sports-social-instagram-logo-blue.png","63a5f284b5a28208f148d31c4d1e08bb"],["/assets/images/sports-social-instagram-logo-white.png","fbd55bd984ba1ab5d48ff537917837ce"],["/assets/images/sports-social-link-blue-symbol.png","24c8b43f04899ced3ae05acc503ba71d"],["/assets/images/sports-social-link-orange-symbol.png","ec1ba981c24e12efdd76534023ab9c86"],["/assets/images/sports-social-linkedin-logo-blue.png","2819b4a282dcb25ade88d6a64c6ba280"],["/assets/images/sports-social-linkedin-logo-white.png","ca3691cc1c861ceddb2c5929607a38f2"],["/assets/images/sports-social-loading.gif","45c8e0c4db03c47eb41ae9cf452e9571"],["/assets/images/sports-social-logo.png","96e34e429884fd372ed87ada57eea834"],["/assets/images/sports-social-magnifying-glass.png","8ad5338484bec221bdcf44c1800633f4"],["/assets/images/sports-social-menu.png","9999af912eddf76aff8f97723987389a"],["/assets/images/sports-social-pinterest-logo-blue.png","3c7a65419892d781362007a121c8e6df"],["/assets/images/sports-social-pinterest-logo-white.png","d17c07d0e59bfb65f49c511b748bbd1e"],["/assets/images/sports-social-quora-logo-blue.png","ad2b03dc2ff8626f899abcbd4128bdda"],["/assets/images/sports-social-quora-logo-white.png","ca51aa0f771454514ce6bc69dab92154"],["/assets/images/sports-social-share-black.png","61a3ebe9c3e179a01d2e8daac8d3fd43"],["/assets/images/sports-social-share-orange.png","d84199ca647f68cf2a9fa8f37759ccd2"],["/assets/images/sports-social-share-white.png","9713befd05aebd8bd9355bb34b1caa29"],["/assets/images/sports-social-tag.png","9f8065fd3063e473626d50b8895cf20a"],["/assets/images/sports-social-twitter-logo-black.png","8b735e4f55b314157b265dd95dd60255"],["/assets/images/sports-social-twitter-logo-blue.png","f4bce1521515c446bcfe2d66f9f6ad4e"],["/assets/images/sports-social-twitter-logo-white.png","0801fce3f2727901a4a252d8a10d79c2"],["/assets/images/sports-social-user.png","a916264cc998ab322744159c5387bd32"],["/assets/images/sports-social-view-black.png","3bf6a9a8f7f87efb2fa9415409e1adaf"],["/assets/images/sports-social-view-orange.png","3d83c64895dbcbe10a747b2f8d93d7f0"],["/assets/images/sports-social-view-white.png","86d8924474feb04e455b05fedcff9f2e"],["/assets/images/sports-social-youtube-logo-blue.png","df2eecf91b28ac827bc16db79191bb4f"],["/assets/images/sports-social-youtube-logo-white.png","5161bcdb967a593cad6a31d41873a4d0"],["/assets/images/sports-social-zoom-out-orange.png","a53cc3ae54167ad148b8f31b808d4655"],["/assets/images/tom-sodoge-54031.jpg","082799d4446e791249ac5970a55e7a26"],["/assets/images/user.png","97f372c4a2b0bf6d16f73b9e4561935a"],["/assets/images/whatsapp-logo.png","dec641ec81181d5efd08938b0f935832"],["/glyphicons-halflings-regular.448c34a56d699c29117a.woff2","448c34a56d699c29117adc64c43affeb"],["/glyphicons-halflings-regular.89889688147bd7575d63.svg","89889688147bd7575d6327160d64e760"],["/glyphicons-halflings-regular.e18bbf611f2a2e43afc0.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/glyphicons-halflings-regular.f4769f9bdb7466be6508.eot","f4769f9bdb7466be65088239c12046d1"],["/glyphicons-halflings-regular.fa2772327f55d8198301.woff","fa2772327f55d8198301fdb8bcfc8158"],["/index.html","7bb3a2fc7e5fb50462e003f8dcd8f267"],["/inline.bundle.js","e9b722c27124761d647b7aa537e45596"],["/inline.bundle.js.map","5b11cb829e170914c837f2774f067bec"],["/main.bundle.js","15b458f97ae23addca1678f259160f68"],["/main.bundle.js.map","7db6541eec774811ae89650505e5ec2f"],["/manifest.json","54f85ca636471bf60aebc32f853e7252"],["/polyfills.bundle.js","3f932c3509fdbe98b0e11dd301d6f625"],["/polyfills.bundle.js.map","77584a72c11c4e048b656947e3c1bcba"],["/scripts.bundle.js","a8aa1d44e270e7e45667448ad303ba57"],["/styles.bundle.js","e5b68e0c79b1e701e549d16907b42c7d"],["/styles.bundle.js.map","a44b47729d349790fcbbbac5263d812a"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







