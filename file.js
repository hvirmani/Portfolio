		$(document).ready(function () {
			$("#about").waypoint(
				function (direction) {
					if (direction == "down") {
						$("header").addClass("sticky");
						$(".sticky").fadeIn();
						document.querySelector("#about").style.paddingTop = "12vh";
					} else {
						$("header").removeClass("sticky");
						document.querySelector("#about").style.paddingTop = "5vh";
					}
				}, {
					offset: "20vh",
				});
		})

		function toggle() {
			$(document).ready(function () {
				let a = document.querySelector(".navbar-nav");
				let b = document.querySelector("#tog");
				a.classList.toggle("nav_toggle");
				b.classList.toggle("toggled");
				let c = document.querySelector("header");
				c.classList.toggle("background");
			});
		}
		var TxtRotate = function (el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10) || 2000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtRotate.prototype.tick = function () {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

			var that = this;
			var delta = 300 - Math.random() * 100;

			if (this.isDeleting) {
				delta /= 2;
			}

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(function () {
				that.tick();
			}, delta);
		};

		window.onload = function () {
			var elements = document.getElementsByClassName('txt-rotate');
			for (var i = 0; i < elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-rotate');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtRotate(elements[i], JSON.parse(toRotate), period);
				}
			}
			// INJECT CSS
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
			document.body.appendChild(css);
		};
		let education = document.querySelector("#education");
		let skills = document.querySelector("#skills");
		let volunteer = document.querySelector("#volunteer");
		let certificates = document.querySelector("#certificates");

		function a() {
			var windo = window.pageYOffset;
			let h = -window.innerHeight / 2;
			if ((education.offsetTop - h) <= windo && (skills.offsetTop - h) > windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");

				document.querySelector(".e").classList.add("current");
			} else if (skills.offsetTop - h <= windo && volunteer.offsetTop - h > windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
				document.querySelector(".s").classList.add("current");
			} else if (volunteer.offsetTop - h <= windo && certificates.offsetTop - h > windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
				document.querySelector(".v").classList.add("current");
			} else if (certificates.offsetTop - h <= windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
				document.querySelector(".c").classList.add("current");
			} else {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
			}
		}
		window.addEventListener("scroll", () => {
			var windo = window.pageYOffset;
			var a = document.querySelector("#resume").offsetTop;
			let h = window.innerHeight / 2 - a;
			if ((education.offsetTop - h) <= windo && (skills.offsetTop - h) > windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");

				document.querySelector(".e").classList.add("current");
			} else if (skills.offsetTop - h <= windo && volunteer.offsetTop - h > windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
				document.querySelector(".s").classList.add("current");
			} else if (volunteer.offsetTop - h <= windo && certificates.offsetTop - h > windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
				document.querySelector(".v").classList.add("current");
			} else if (certificates.offsetTop - h <= windo) {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
				document.querySelector(".c").classList.add("current");
			} else {
				if (document.querySelector(".current")) document.querySelector(".current").classList.remove("current");
			}
		})
		window.onscroll = function () {
			let a = document.querySelector("#resume");
			let c = document.querySelector("#project");
			let b = window.pageYOffset;
			if (b >= a.offsetTop && b <= c.offsetTop - window.innerHeight) {
				document.querySelector(".abs").classList.add("fix");

			} else {
				if (document.querySelector(".fix"))
					document.querySelector(".fix").classList.remove("fix");
				if (b >= c.offsetTop - window.innerHeight) {
					let e = document.querySelector(".aside_affix").offsetHeight - window.innerHeight;
					document.querySelector(".side_affix").style.marginTop = `${e}px`;

				} else {
					document.querySelector(".side_affix").style.marginTop = "0px";
				}
			}
		}

		function snd() {
			let msg = document.querySelector("#msg").value;
			let add = `mailto:officialhvirmani@gmail.com?body=${msg}`;

			document.querySelector("#form").action = add;
		}

		function clr() {
			let name = document.querySelector("#name").value = "";
			let mail = document.querySelector("#mail").value = "";
			let msg = document.querySelector("#msg").value = "";
		}