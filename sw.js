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
			"/css/bootstrap.min.css.map",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/00%20Rapid%20Induction.mp3",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/01%20Bubble%20Induction.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/02%20Bubble%20Acceptance.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/03%20Bambi%20Named%20and%20Drained.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/04%20Bambi%20IQ%20Lock.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/05%20Bambi%20Body%20Lock.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/06%20Bambi%20Attitude%20Lock.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/07%20Bambi%20Uniformed.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/08%20Bambi%20Takeover.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/09%20Bambi%20Cockslut.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/10%20Bambi%20Awakens.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/01%20Blank%20Mindless%20Doll.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/02%20Cock%20Dumb%20Hole.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/03%20Uniform%20Slut%20Puppet.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/04%20Vain%20Horny%20Happy.mp3",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/05%20Bimbo%20Drift.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/01%20Fake%20Plastic%20Fuckpuppet.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/02%20Designer%20Pleasure%20Puppet.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/03%20Bimbo%20Fuckpuppet%20Oblivion.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/01%20Blowup%20Pleasure%20Toy.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/02%20Perfect%20Bimbo%20Maid.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/03%20Restrained%20and%20Milked.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/01%20Bimbo%20Giggletime.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/02%20Mindlocked%20Cock%20Zombie.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/00%20Bimbo%20Drone.mp3",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/01%20Bimbo%20Relaxation.mp3",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/02%20Bimbo%20Mindwipe.mp3",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/03%20Bimbo%20Slumber.mp3",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/04%20Bimbo%20Tranquility.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/05%20Bimbo%20Pride.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/06%20Bimbo%20Pleasure.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/07%20Bimbo%20Servitude.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/08%20Bimbo%20Addiction.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/09%20Bimbo%20Amnesia.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/10%20Bimbo%20Protection.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/01%20Sleepygirl%20Salon.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/02%20Mentally%20Platinum%20Blonde.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/03%20Automatic%20Airhead.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/04%20Superficial%20Basic%20Bitch.mp3",
			// "https://bambiplaylistcorsserver.katiesarah1.repl.co/05%20Life%20Control%20Total%20Doll.mp3",
			"https://bambiplaylistcorsserver.katiesarah1.repl.co/07%20Makeover%20Awakener.mp3"
		])
	);
});

const putInCache = async (request, response) => {
	const cache = await caches.open("v1");
	await cache.put(request, response);
}

const cacheFirst = async (request) => {
	const responseFromCache = await caches.match(request);
	if (responseFromCache) {
		return responseFromCache;
	}
	const responseFromNetwork = await fetch(request);
	putInCache(request, responseFromNetwork.clone())
	return responseFromNetwork;
};

self.addEventListener('fetch', (event) => {
	event.respondWith(cacheFirst(event.request));
});