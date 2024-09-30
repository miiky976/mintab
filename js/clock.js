const clock = () => {
	const format = (num) => {
		return num.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false
		});
	}
	const date = new Date();
	const time = document.getElementById('time');
	const dateCal = document.getElementById('date');
	time.innerText = format(date.getHours()) + ":" + format(date.getMinutes()) + ":" + format(date.getSeconds());
	const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const month = months[date.getUTCMonth()];
	const weekDay = weekDays[date.getDay()];
	dateCal.innerText = `${weekDay} ${date.getDate()}/${month} ${date.getUTCMonth() + 1}/${date.getFullYear()}`;
}

setInterval(clock, 1000);
