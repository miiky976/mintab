const filler = (link) => {
	if (link == null) {
		const template = document.getElementById("adder");
		const clone = template.content.cloneNode(true);
		return clone;
	}
	const template = document.getElementById("short");
	const clone = template.content.cloneNode(true);
	clone.querySelector("a").href = link;
	clone.querySelector("img").src = link + "/favicon.ico";
	const domain = link.split("/")[2].split(".");
	clone.querySelector("div").innerText = domain[domain.length - 2];
	return clone;
}

const adder = () => {
	const father = document.getElementsByClassName("shorts")[0];
	father.innerHTML = null;
	const shorts = loadShorts("shorts_");
	shorts.forEach(e => { father.appendChild(filler(e)); });
}
