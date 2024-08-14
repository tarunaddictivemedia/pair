
if ($('#panels-slider').length) {
	let panelsSection = document.querySelector(".panels"),
		panelsContainer = document.querySelector(".panels-container"),
		tween;

	/* Panels */
	const panels = gsap.utils.toArray(".panels-container .panel");
	tween = gsap.to(panels, {
		xPercent: -100 * (panels.length - 2.55),
		ease: "none",
		scrollTrigger: {
			trigger: ".panels-container",
			pin: true,
			start: "center center",
			scrub: 1,
			snap: {
				snapTo: 1 / (panels.length - 1),
				inertia: false,
				duration: { min: 0.1, max: 0.1 }
			},
			end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
		}
	});

	document.querySelectorAll(".anchor").forEach(anchor => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();
			let targetElem = document.querySelector(e.target.getAttribute("href"));
			if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
				let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
					totalMovement = (panels.length - 1) * targetElem.offsetWidth,
					y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
				
				gsap.to(window, {
					scrollTo: {
						y: y,
						autoKill: false
					},
					duration: '100%'
				});
			}
		});
	});
}

if ($('#digitals-slider').length) {
	let digitalsSection = document.querySelector(".digitals"),
		digitalsContainer = document.querySelector(".digitals-container"),
		tween;

	/* Digitals */
	const digitals = gsap.utils.toArray(".digitals-container .digital");
	tween = gsap.to(digitals, {
		xPercent: -100 * (digitals.length - 2.7),
		ease: "none",
		scrollTrigger: {
			trigger: ".digitals-container",
			pin: true,
			start: "center center",
			scrub: 1,
			snap: {
				snapTo: 1 / (digitals.length - 1),
				inertia: false,
				duration: { min: 0.1, max: 0.1 }
			},
			end: () => "+=" + (digitalsContainer.offsetWidth - innerWidth)
		}
	});

	document.querySelectorAll(".anchor").forEach(anchor => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();
			let targetElem = document.querySelector(e.target.getAttribute("href"));
			if (targetElem && digitalsContainer.isSameNode(targetElem.parentElement)) {
				let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
					totalMovement = (digitals.length - 1) * targetElem.offsetWidth,
					y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
				
				gsap.to(window, {
					scrollTo: {
						y: y,
						autoKill: false
					},
					duration: '100%'
				});
			}
		});
	});
}