let names = ["00 Rapid Induction", "01 Bubble Induction", "02 Bubble Acceptance", "03 Bambi Named and Drained", "04 Bambi IQ Lock", "05 Bambi Body Lock", "06 Bambi Attitude Lock", "07 Bambi Uniformed", "08 Bambi Takeover", "09 Bambi Cockslut", "10 Bambi Awakens", "01 Blank Mindless Doll", "02 Cock Dumb Hole", "03 Uniform Slut Puppet", "04 Vain Horny Happy", "05 Bimbo Drift", "01 Fake Plastic Fuckpuppet", "02 Designer Pleasure Puppet", "03 Bimbo Fuckpuppet Oblivion", "01 Blowup Pleasure Toy", "02 Perfect Bimbo Maid", "03 Restrained and Milked", "01 Bimbo Giggletime", "02 Mindlocked Cock Zombie", "00 Bimbo Drone", "01 Bimbo Relaxation", "02 Bimbo Mindwipe", "03 Bimbo Slumber", "04 Bimbo Tranquility", "05 Bimbo Pride", "06 Bimbo Pleasure", "07 Bimbo Servitude", "08 Bimbo Addiction", "09 Bimbo Amnesia", "10 Bimbo Protection", "01 Sleepygirl Salon", "02 Mentally Platinum Blonde", "03 Automatic Airhead", "04 Superficial Basic Bitch", "05 Life Control Total Doll", "07 Makeover Awakener", "01 Sleepyhead", "02 Bobblehead", "03 Bambidoll", "04 Giggledoll", "05 Ohmigod", "06 Ziplock"];
let list = document.getElementsByTagName("input");
let active = [""];
let confile;
let progInterval

if (window.location.href.includes("#")) {
	fetch("https://170-187-241-183.ip.linodeusercontent.com/feed").then(x=>x.json()).then(y=> {
		id = window.location.href.split("#")[1].split("?")[0]
		post = y[id]
		stats = document.querySelector("#playlist-stats")
		stats.textContent = post["name"]+" by "+post["user"]
	})
}

function postFeed() {
	name = document.querySelector("#feed-name").value;
	user = document.querySelector("#feed-username").value;
	fetch("https://170-187-241-183.ip.linodeusercontent.com/new", {method: 'POST', 
headers: {'Content-Type': "application/x-www-form-urlencoded"}, body: `name=${name}&user=${user}&link=${window.location.href}`}).then(() => {
	alertBox("Posted playlist!");
})
}

const registerServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
		try {
			const registration = await navigator.serviceWorker.register(
				'/sw.js', {
					scope: '/',
				}
			);
			if (registration.installing) {
				console.log('Service worker installing');
			} else if (registration.waiting) {
				console.log('Service worker installed');
			} else if (registration.active) {
				console.log('Service worker active');
			}
		} catch (error) {
			console.error(`Registration failed with ${error}`);
		}
	}
};

let legacy = false;

let orderer = document.getElementById("order");

function auDur() {
	audur = 0;
	for (k = 0; k < audios.length; k++) {
		audur += audios[k].duration;
	}
	document.getElementById("dur").innerText = jsAudDur(audur);
}

function detectBrowser() {
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
		return 'Opera';
	} else if (navigator.userAgent.indexOf("Chrome") != -1) {
		return 'Chrome';
	} else if (navigator.userAgent.indexOf("Safari") != -1) {
		return 'Safari';
	} else if (navigator.userAgent.indexOf("Firefox") != -1) {
		return 'Firefox';
	} else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
		return 'IE'; //crap
	} else {
		return 'Unknown';
	}
}

function alertBox(msg) {
	zz = document.createElement("div");
	zz.className = "alert";
	zz.innerHTML = `<span class="closebtn">&times;</span>` + msg + ``;
	document.querySelector("#alertBoxs").appendChild(zz);

	zz.onclick = function () {
		div = zz;
		div.style.opacity = "0";
		setTimeout(function () {
			div.style.display = "none";
		}, 600);
	}
	setTimeout(function (that) {
		var div = that;
		div.style.opacity = "0";
		setTimeout(function () {
			div.style.display = "none";
		}, 600);
	}, 3000, zz);
}

function jsAudDur(audc) {
	hours = "0" + Math.floor((audc / 60) / 60);
	minutes = "0" + (Math.floor(audc / 60) - (60 * Math.floor((audc / 60) / 60)));
	seconds = "0" + (Math.floor(audc) - minutes * 60);
	dur = hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
	return dur;
}
registerServiceWorker();

if (window.location.href.split("io/")[1].split("?")[0] == "perma.html") {
	alertBox("This project is supported by ads, feel free to support the site by turning off your ad blocker.");
	alertBox("If you do not wish to have ads, check out <a class='alertLink' href='https://ublockorigin.com/'>U-Block origin</a> (it's a good ad blocker)");
}

let loded = false;
window.onload = () => {
	if (window.location.href.includes("?")) {
		audioos = window.location.href.split("?list=")[1]
		audioos = audioos.split(",");
		
		list_element = document.querySelector("#list")
		
		let uris = [];
		for (i = 0; i < audioos.length; i++) {
			
			
			audios.push(new Audio("https://170-187-241-183.ip.linodeusercontent.com/" + names[parseInt(audioos[i])] + ".mp3"));
			uris.push("https://170-187-241-183.ip.linodeusercontent.com/" + names[parseInt(audioos[i])] + ".mp3");
		}
		audios.forEach(function (sound) {
			if (detectBrowser() == "Firefox") {
				sound.load();
			}
			sound.onended = onended;
		});
		indexes = [];
		for (j = 0; j < audios.length; j++) {
			indexes.push(names.indexOf(decodeURI(audios[j].src.split("com/")[1].split(".mp3")[0])));
		}
		document.getElementById("permLink").innerText = window.location.href.split('io/')[0] + "io/perma.html?list=" + indexes.join(",");
		document.getElementById("permLink").href = window.location.href.split('io/')[0] + "io/perma.html?list=" + indexes.join(",");
		document.getElementById("nfils").innerText = indexes.length;
		let loaded = 1;
		proms = uris.map(uri => fetch(uri).then((r) => {
			alertBox("Started loading file #" + loaded);
			loaded++;
			return r.blob()
		}));
		loaded = 1;
		proms.forEach(e => e.then((x) => {alertBox(`Loaded file ${loaded}`); loaded++; console.log(x)}))
		Promise.all(proms).then(blobs => {
			console.log("Started");
			
			for (i = 0; i < audioos.length; i++) {
				list_item = document.createElement("p");
				audur = audios[i].duration;
				duration = jsAudDur(audur)
				list_item.innerText = names[parseInt(audioos[i])]+" - "+duration+" - "+audioos[i];

				list_element.appendChild(list_item)
			}
			
			// Create blob
			let blob = new Blob(blobs, { type: 'audio/mpeg' });
			let blobUrl = URL.createObjectURL(blob);

			console.log(blobUrl);

			// Download button
			let audownload = document.createElement('button');
			audownload.textContent = "Download"
			audownload.classList.toggle("btn");
			audownload.classList.toggle("btn-primary");
			audownload.onclick = () => {
				window.open(blobUrl);
			}
			document.getElementById("downloadbutton").appendChild(audownload);

			confile = new Audio(blobUrl);
			alertBox("Loaded entire playlist!");
			loded = true;
			auDur();
		});
	}
};

let inputHandle = (e) => {
	active = [];
	for (i = 0; i < list.length; i++) {
		if (list[i].checked) {
			active.push("https://170-187-241-183.ip.linodeusercontent.com/" + names[i] + ".mp3");
		}
	}
	renderItems(active)
}

var list2 = document.getElementById('order')
var nums = ["a"];
var dragging, draggedOver;

const genRandom = () => {
	active = active.sort(() => Math.random() - 0.5)
	renderItems(active)
}

const renderItems = (data) => {
	list2.innerText = ''
	data.forEach(num => {
		var node = document.createElement("li");
		node.draggable = true
		node.addEventListener('drag', setDragging)
		node.addEventListener('drop', compare)
		node.addEventListener('dragover', allowDrop)
		var textnode = document.createElement(`a`);
		textnode.className = "ss";
		textnode.href = `${num}`;
		textnode.innerText = `${names[names.indexOf(decodeURI(num.split("com/")[1].split(".mp3")[0]))]}`;
		node.appendChild(textnode);
		list2.appendChild(node)
	})
	dragging = null
	draggedOver = null
	create();
}

const compare = (e) => {
	var index1 = active.indexOf(dragging);
	var index2 = active.indexOf(draggedOver);
	active.splice(index1, 1)
	active.splice(index2, 0, dragging)

	renderItems(active)

};

var decodeEntities = (function () {
	// this prevents any overhead from creating the object each time
	var element = document.createElement('div');

	function decodeHTMLEntities(str) {
		if (str && typeof str === 'string') {
			// strip script/html tags
			str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
			str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
			element.innerHTML = str;
			str = element.textContent;
			element.textContent = '';
		}

		return str;
	}

	return decodeHTMLEntities;
})();

function allowDrop(ev) {
	ev.preventDefault();
	draggedOver = decodeEntities(ev.target.innerHTML.split("href=\"")[1].split("\">")[0]);
	audios = [];
}

const setDragging = (e) => {
	dragging = decodeEntities(e.target.innerHTML.split("href=\"")[1].split("\">")[0]);
	audios = [];
}

var audios = [];
var currentIndex = 0;

let create = () => {
	audios = [];
	for (i = 0; i < active.length; i++) {
		audios.push(new Audio(active[i]));
	}
	audios.forEach(function (sound) {
		if (detectBrowser() == "Firefox") {
			sound.load();
		}
		sound.onended = onended;
	});
	indexes = [];
	for (j = 0; j < audios.length; j++) {
		indexes.push(names.indexOf(decodeURI(audios[j].src.split("com/")[1].split(".mp3")[0])));
	}
	document.getElementById("permLink").innerText = window.location.href + "perma.html?list=" + indexes.join(",");
	document.getElementById("permLink").href = window.location.href + "perma.html?list=" + indexes.join(",");
	return false;
}

function onended(evt) {
	currentIndex = (currentIndex + 1) % audios.length; // increment our index
	audios[currentIndex].play(); // play the next sound
}

document.getElementById("play").onclick = () => {
	
	if (loded) {
		try {
			let counter = parseInt(document.querySelector("#loops").value);

			const customPlay = function() {      
			  confile.play();
			  counter--;

			  if (counter <= 0) {
				confile.removeEventListener('ended', customPlay);
			  }
			};

			confile.addEventListener('ended', customPlay);

			confile.currentTime = 0;
			confile.loop = false;    
			customPlay();
			
			progInterval = setInterval(() => {
				document.querySelector(".prog-inner").style.width = ((confile.currentTime / confile.duration) * 100).toFixed(1).toString() + "%"
			}, 100)
		} catch (e) {}
	} else {
		alertBox("Not all files loaded! Please wait!");
	}
};

document.getElementById("stop").onclick = () => {
	try {
		confile.pause();
		clearInterval(progInterval)
	} catch (e) {}
};

/*

*/
