document.querySelectorAll(".dropdown").forEach((dropdown) => {
	dropdown.addEventListener("click", function () {
		const info = this.lastElementChild;
		const indicator = this.querySelector(".indicator");
		console.log(indicator);
		
		if (info.style.height === "0px" || !info.style.height) {
			const fullHeight = info.scrollHeight + "px";
			info.style.height = fullHeight;
			info.style.marginBottom = "2rem";
			indicator.textContent = "-";
		} else {
			info.style.height = "0px";
			info.style.marginBottom = "0";
			indicator.textContent = "+";
		}
	});
});
