const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/index.html",
            "/about.html",
            "/perma.html",
            "/js/index.js",
            "/js/bootstrap.min.js",
            "/css/style.css",
            "/css/bootstrap.min.css",
            "/css/bootstrap.min.css.map",
        ])
    );
});

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//     );
// });