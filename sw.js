const addResourcesToCache = async (resources) => {
	const cache = await caches.open("v1");
	await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
	event.waitUntil(
		addResourcesToCache([
			"/js/index.js",
			"/js/bootstrap.min.js",
			"/css/style.css",
			"/css/bootstrap.min.css",
			"/css/bootstrap.min.css.map"
		])
	);
});

const cacheFirst = async (request) => {
	const responseFromCache = await caches.match(request);
	if (responseFromCache) {
		return responseFromCache;
	}
	return fetch(request);
};

// self.addEventListener('fetch', (event) => {
// 	event.respondWith(cacheFirst(event.request));
// });
