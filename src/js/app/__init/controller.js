import {
	headerTrigger,
	vhUnit,
	headerOnResize,
} from "../__modules/header-trigger";

// GLOBAL APP CONTROLLER
const controller = {
	init() {},
	loaded() {
		headerTrigger();
		vhUnit();
	},
	resized(e) {
		headerOnResize(e);
		vhUnit();
	},
	mouseUp(e) {},
	keyDown(e) {},
	scrolled(e) {},
};

export default controller;
