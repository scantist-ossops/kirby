import Elements from "./Elements/index.js";

import Drawer from "./Drawer.vue";
import FormDrawer from "./FormDrawer.vue";

export default {
	install(app) {
		app.use(Elements);

		app.component("k-drawer", Drawer);
		app.component("k-form-drawer", FormDrawer);
	}
};
