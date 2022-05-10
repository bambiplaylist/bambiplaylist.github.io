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

self.addEventListener('fetch', (event) => {
	const responseFromCache = caches.match(request);
	if (responseFromCache) {
		return responseFromCache;
	} else {
		return fetch(request)
	}
});