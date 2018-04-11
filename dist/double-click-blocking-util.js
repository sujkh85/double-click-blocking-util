export default class ButtonBlockUtil {
	constructor() {
		this.timerInstance = null;
		this.isActived = false;

		this.isBlocking = this.isBlocking.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
	}

	isBlocking(timer = 5000) {
		if (this.isActived === false) {
			this.start(timer);
			return false;
		} else {
			return true;
		}
	}

	start(timer = 5000, callback) {
		this.isActived = true;
		this.callback = callback;
		this.timerInstance = setTimeout(() => {
			this.stop();
		}, timer);
	}

	stop() {
		this.isActived = false;
		clearTimeout(this.timerInstance);
		if (this.callback) {
			this.callback();
		}
	}
}
