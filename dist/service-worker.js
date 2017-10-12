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

var precacheConfig = [["/Sports-Social.ico","f154c900c83266bd42fc4305091bcdf9"],["/assets/images/2.jpg","e33270633c12c365a79238b1878ae5d2"],["/assets/images/copyright.png","83b9bcbba97256b229ba213036076c0c"],["/assets/images/default-image.png","9bf783f88223efb84c7e1563b2bead6a"],["/assets/images/initial-image.jpg","9e18d2cf06243f9259c21b958f147a43"],["/assets/images/sports-social-blogger-black.png","ad31f73d459ebdf2586b7afb8a422d56"],["/assets/images/sports-social-blogger-white.png","19800bbc9ae3ad00aaf5b2c3f1ada0f5"],["/assets/images/sports-social-cancel-black.png","963722cc524ada9f6256e8037b1f23c5"],["/assets/images/sports-social-cancel-white.png","7ad4122e2f5372dbdaf0c0aaf4d5c126"],["/assets/images/sports-social-correct-symbol-white.png","d53967774733bd76343e75647f0508fb"],["/assets/images/sports-social-facebook-logo-black.png","5d5e8ab91cfbb8f919ddeba75cd17244"],["/assets/images/sports-social-facebook-logo-blue.png","c9ea32035d34387a6166f33a013e3a92"],["/assets/images/sports-social-facebook-logo-white.png","20d774609f9b3c821e338db620b836c0"],["/assets/images/sports-social-instagram-logo-blue.png","4c6d50bf8a8727c9603a5b2ad9aa6fd6"],["/assets/images/sports-social-instagram-logo-white.png","912464e778d0c152db78a8c5637d855f"],["/assets/images/sports-social-link-blue-symbol.png","28637e514384a99ea680bc32a02907a8"],["/assets/images/sports-social-link-orange-symbol.png","ec1ba981c24e12efdd76534023ab9c86"],["/assets/images/sports-social-linkedin-logo-blue.png","35fc76977b37bf976a3a8efa95224ffc"],["/assets/images/sports-social-linkedin-logo-white.png","9233b92b6a6ce1960316a578dd13d00f"],["/assets/images/sports-social-loading.gif","45c8e0c4db03c47eb41ae9cf452e9571"],["/assets/images/sports-social-logo.png","73f3ab539a186da4ab0100451330a523"],["/assets/images/sports-social-menu.png","9999af912eddf76aff8f97723987389a"],["/assets/images/sports-social-pinterest-logo-blue.png","a8bc65bde8a020d65b1eff003bd36c38"],["/assets/images/sports-social-pinterest-logo-white.png","0c357149d80d8e88e50792251ce4d5d7"],["/assets/images/sports-social-quora-logo-blue.png","96c4f99721612bed3b33b8f0a101d40e"],["/assets/images/sports-social-quora-logo-white.png","fdbf0edcb0fd0e94e9ebecde519ca0a5"],["/assets/images/sports-social-search.png","3119d41dd1de868993842dba268f4d12"],["/assets/images/sports-social-share-black.png","f24c621a3c6905590be0f33d4f625e2c"],["/assets/images/sports-social-share-orange.png","13e2dd2b0e2c0ef69e1d14deca066d63"],["/assets/images/sports-social-share-white.png","b65a52b560bd8221c89ccad1a46ca97c"],["/assets/images/sports-social-tag.png","4eff99915a5f008f35a523d1c163576f"],["/assets/images/sports-social-twitter-logo-black.png","3a8824c8e43afe3aeab916815be7b1b2"],["/assets/images/sports-social-twitter-logo-blue.png","db8ce8b961f83d27938dc270cfdbb2e9"],["/assets/images/sports-social-twitter-logo-white.png","4af7e528eccfcbcd168b5e3624a455f8"],["/assets/images/sports-social-user.png","ec9e44b8223d6feca2f80d3ff1d0ef91"],["/assets/images/sports-social-view-black.png","85362be7eae72b424fb85a25d8a77c12"],["/assets/images/sports-social-view-orange.png","8558310b50df7484c84fc8783805ad71"],["/assets/images/sports-social-view-white.png","beb8980b91ca156505fa8179826a2b79"],["/assets/images/sports-social-youtube-logo-blue.png","bd4044ca9aed8172e15582dc5b2bb916"],["/assets/images/sports-social-youtube-logo-white.png","1909e97ca1006e1e2e06ff6a2c31d782"],["/assets/images/sports-social-zoom-out-orange.png","eae227390acdd3120a438471706ffcd2"],["/assets/images/user.png","97f372c4a2b0bf6d16f73b9e4561935a"],["/assets/images/whatsapp-logo.png","3f8e0297c2ca456692336165ce53b8fc"],["/glyphicons-halflings-regular.448c34a56d699c29117a.woff2","448c34a56d699c29117adc64c43affeb"],["/glyphicons-halflings-regular.89889688147bd7575d63.svg","89889688147bd7575d6327160d64e760"],["/glyphicons-halflings-regular.e18bbf611f2a2e43afc0.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/glyphicons-halflings-regular.f4769f9bdb7466be6508.eot","f4769f9bdb7466be65088239c12046d1"],["/glyphicons-halflings-regular.fa2772327f55d8198301.woff","fa2772327f55d8198301fdb8bcfc8158"],["/index.html","8d26263a328ff1685f448f41ff1bcd8b"],["/inline.bundle.js","e9b722c27124761d647b7aa537e45596"],["/inline.bundle.js.map","52a1d1aea8411cb953c9b1bdf5740322"],["/main.bundle.js","ad2baf6fececdabddd0b56f15119e83f"],["/main.bundle.js.map","ebf7d22f7db0cde63d74b5fc41c8a842"],["/manifest.json","54f85ca636471bf60aebc32f853e7252"],["/polyfills.bundle.js","3f932c3509fdbe98b0e11dd301d6f625"],["/polyfills.bundle.js.map","77584a72c11c4e048b656947e3c1bcba"],["/scripts.bundle.js","a8aa1d44e270e7e45667448ad303ba57"],["/styles.bundle.js","e5b68e0c79b1e701e549d16907b42c7d"],["/styles.bundle.js.map","a44b47729d349790fcbbbac5263d812a"]];
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







