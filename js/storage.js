const loadShorts = (pack) => {
	const shorts = [];
	for (let i = 1; i <= 10; i++) {
		const shorty = localStorage.getItem(pack + i)
		shorts.push(shorty);
	}
	return shorts;
}

