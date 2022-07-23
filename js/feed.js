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

registerServiceWorker();

window.onload = () => {}
