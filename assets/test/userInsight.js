function eventFunction() {
	var userInsightsId = "74b9d3093c004a18ab7622de26a64e0t";
	var paymentUrl = "/odeme";
	var paymentSuccessUrl = "/siparis-ozeti";
	var paymentAmountSelector = "#sidebar > div:nth-child(3) > div.card-footer > ul > li > strong";
	var userIdKey = "integradsUserId";
	var campaign, source, medium, term;
	setParams();

	var eventType = "VIEW";
	var paymentPage = false;
	var country = "", city = "";
	var userId = window.localStorage.getItem(userIdKey);
	var paymentValues, transactionId;

	var currentPath = window.location.pathname;
	if (currentPath === paymentUrl) {
		paymentPage = true;
		window.sessionStorage.setItem("i_transaction_id", getGuid());
		setPaymentAmount();
		window.addEventListener("click", setPaymentAmount);
	} else {
		window.removeEventListener("click", setPaymentAmount);
	}

	if (window.location.pathname === paymentSuccessUrl) {
		eventType = "PAYMENT";
		transactionId = window.sessionStorage.getItem("i_transaction_id");
		paymentValues = {
			amount: parseFloat(window.localStorage.getItem("i_p_amount") || 0),
			currency: "TRY"
		};
		window.localStorage.removeItem("i_p_amount");
	}

	var xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	getUserId();

	var xhr2 = new XMLHttpRequest();
	xhr2.responseType = "json";

	xhr2.open("POST", "https://r7h7cnqdx8.execute-api.eu-west-1.amazonaws.com/test/testurl");
	xhr2.setRequestHeader("Content-type", "application/json");
	xhr2.onload = function () {
		if (xhr2.status === 200) {
			console.log("test pushed");
		}
	};
	xhr2.send(JSON.stringify({
		parameters: window.location.search,
		campaign,
		source,
		medium,
		term,
		type: eventType
	}));

	function setPaymentAmount() {
		var amountElem = document.querySelector(paymentAmountSelector);
		if (amountElem) {
			window.localStorage.setItem("i_p_amount", parseFloat(amountElem.innerHTML.replace(/[^\d.-]/g, '')));
		}
	}

	function setParams() {
		var params = getAllUrlParams();
		campaign = params["utm_campaign"];
		source = params["utm_source"];
		medium = params["utm_medium"];
		term = params["utm_term"];

		var lastSeen = window.localStorage.getItem("lastSeenIntegradsUser");
		var halfHour = 30 * 60 * 1000;
		var isLastHalfHour = (Date.now() - halfHour) < +lastSeen;
		var isNoneUrl = !campaign && !source && !medium && !term;

		if (lastSeen && isLastHalfHour && isNoneUrl) {
			window.localStorage.setItem("lastSeenIntegradsUser", Date.now());
			campaign = window.localStorage.getItem("utm_campaign");
			source = window.localStorage.getItem("utm_source");
			medium = window.localStorage.getItem("utm_medium");
			term = window.localStorage.getItem("utm_term");
		} else {
			campaign = campaign || "none";
			medium = medium || "none";
			term = term || "none";
			if (!source) {
				var referrer = getReferrerHost(document.referrer);
				if (referrer !== clearUrl(window.location.hostname)) {
					source = referrer;
					if (referrer.indexOf("google") !== -1) {
						medium = "organic";
						if (params["aclk"] || params["googleadservice"] || params["gclid"]) {
							medium = "cpc";
						}
					} else {
						medium = "referral";
					}
				} else {
					source = "direct";
					medium = "none";
				}
			}
			window.localStorage.setItem("lastSeenIntegradsUser", Date.now());
			window.localStorage.setItem("utm_campaign", campaign);
			window.localStorage.setItem("utm_source", source);
			window.localStorage.setItem("utm_medium", medium);
			window.localStorage.setItem("utm_term", term);
		}
	}

	function getUserId() {
		if (!userId) {
			xhr.open("POST", "https://r7h7cnqdx8.execute-api.eu-west-1.amazonaws.com/test/userid");
			xhr.setRequestHeader("Content-type", "application/json");
			xhr.onload = function () {
				if (xhr.status === 200) {
					userId = xhr.response;
					window.localStorage.setItem(userIdKey, userId);
				}
				getCountryCity();
			};
			xhr.send(JSON.stringify({ userInsightsId }));
		} else {
			getCountryCity();
		}
	}

	function getCountryCity() {
		xhr.open("GET", "https://ipapi.co/json");
		xhr.onload = function () {
			if (xhr.status === 200) {
				var data = xhr.response;
				country = data.country_name;
				city = data.city;
			}
			pushEvent();
		}
		xhr.send();
	}

	function getGuid() {
		function generateUid() {
			return Math.random().toString(36).substr(2, 8);
		}
		return generateUid() + "-" + generateUid() + "-" + generateUid() + "-" + generateUid();
	}

	function pushEvent() {
		if (eventType === "VIEW" || (eventType === "PAYMENT" && paymentValues.amount)) {
			xhr.open("POST", "https://r7h7cnqdx8.execute-api.eu-west-1.amazonaws.com/test/event");
			xhr.setRequestHeader("Content-type", "application/json");
			xhr.onload = function () {
				if (xhr.status === 200) {
					console.log(eventType + " pushed");
				}
			}
			var amount, currency;
			try {
				amount = paymentValues.amount;
				currency = paymentValues.currency;
			} catch (error) {
			}

			xhr.send(
				JSON.stringify({
					eventType,
					userId,
					userInsightsId,
					country,
					city,
					campaign,
					source,
					medium,
					term,
					amount,
					currency,
					paymentPage,
					deviceCategory: deviceType(),
					pageName: document.title,
					transactionId
				}));
		}
		var xhr3 = new XMLHttpRequest();
		xhr3.responseType = "json";

		var loginSignup;
		try {
			loginSignup = postLoginOrSignup;
		} catch (error) {
		}

		if (loginSignup === "LOGIN") {
			xhr3.open("POST", "https://r7h7cnqdx8.execute-api.eu-west-1.amazonaws.com/test/login");
			xhr3.setRequestHeader("Content-type", "application/json");
			xhr3.onload = function () {
				if (xhr3.status === 200) {
					console.log(loginSignup + " pushed");
					userId = xhr3.response;
					window.localStorage.setItem(userIdKey, userId);
				}
			}
			xhr3.send(
				JSON.stringify({
					userId,
					externalId,
					userInsightsId,
					email
				}));
		} else if (loginSignup === "SIGNUP") {
			xhr3.open("POST", "https://r7h7cnqdx8.execute-api.eu-west-1.amazonaws.com/test/signup");
			xhr3.setRequestHeader("Content-type", "application/json");
			xhr3.onload = function () {
				if (xhr3.status === 200) {
					console.log(loginSignup + " pushed");
					userId = xhr3.response;
					window.localStorage.setItem(userIdKey, userId);
				}
			}
			xhr3.send(
				JSON.stringify({
					userId,
					externalId,
					userInsightsId,
					email,
					campaign
				}));
		}
	}

	function deviceType() {
		var ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			return "tablet";
		}
		if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
			return "mobile";
		}
		return "desktop";
	}

	function getAllUrlParams() {
		var queryString = window.location.search.slice(1);
		var obj = {};
		if (queryString) {
			queryString = queryString.split('#')[0];
			var arr = queryString.split('&');
			for (var i = 0; i < arr.length; i++) {
				var a = arr[i].split('=');
				var paramName = a[0];
				var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
				if (!obj[paramName]) {
					obj[paramName] = decodeURIComponent(paramValue);
				} else if (obj[paramName] && typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
					obj[paramName].push(decodeURIComponent(paramValue));
				} else {
					obj[paramName].push(decodeURIComponent(paramValue));
				}
			}
		}
		return obj;
	}


	function getReferrerHost(url) {
		var a = document.createElement('a');
		a.href = url;
		var hostname = clearUrl(a.hostname);
		a.remove();
		return hostname;
	}

	function clearUrl(url) {
		return url.replace("www.", "").split(".com")[0];
	}
}

document.addEventListener("DOMContentLoaded", function () {
	(function (history) {
		var pushState = history.pushState;
		history.pushState = function (state) {
			if (typeof history.onpushstate == "function") {
				history.onpushstate({
					state: state
				});
			}
			return pushState.apply(history, arguments);
		}
		eventFunction();
	})(window.history);
	window.onpopstate = history.onpushstate = function (e) {
		eventFunction();
	};
});