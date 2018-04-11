var CACHE_NAME = "my-site-cache-v9";
var urlsToCache = [
  "/",
  "/styles.min.css",
  "/styles.800.css",
  "./styles.500.css",
  "./images/skill_test_front-end-min.jpeg",
  "./images/magnifying-glasswhite.svg",
  "./images/calendar-white.svg",
  "./images/ladderwhite.svg",
  './images/legal-paper.svg',
  "./images/marketing.svg",
  "./images/person1.jpg"
];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
