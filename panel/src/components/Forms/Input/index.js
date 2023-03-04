import CheckboxInput from "./CheckboxInput.vue";
import CheckboxesInput from "./CheckboxesInput.vue";
import DateInput from "./DateInput.vue";
import ColorInput from "./ColorInput.vue";
import EmailInput from "./EmailInput.vue";
import ListInput from "./ListInput.vue";
import MultiselectInput from "./MultiselectInput.vue";
import NumberInput from "./NumberInput.vue";
import PasswordInput from "./PasswordInput.vue";
import RadioInput from "./RadioInput.vue";
import RangeInput from "./RangeInput.vue";
import SelectInput from "./SelectInput.vue";
import SlugInput from "./SlugInput.vue";
import TagsInput from "./TagsInput.vue";
import TelInput from "./TelInput.vue";
import TextInput from "./TextInput.vue";
import TextareaInput from "./TextareaInput.vue";
import TimeInput from "./TimeInput.vue";
import ToggleInput from "./ToggleInput.vue";
import TogglesInput from "./TogglesInput.vue";
import UrlInput from "./UrlInput.vue";

export default {
	install(app) {
		app.component("k-checkbox-input", CheckboxInput);
		app.component("k-checkboxes-input", CheckboxesInput);
		app.component("k-color-input", ColorInput);
		app.component("k-date-input", DateInput);
		app.component("k-email-input", EmailInput);
		app.component("k-list-input", ListInput);
		app.component("k-multiselect-input", MultiselectInput);
		app.component("k-number-input", NumberInput);
		app.component("k-password-input", PasswordInput);
		app.component("k-radio-input", RadioInput);
		app.component("k-range-input", RangeInput);
		app.component("k-select-input", SelectInput);
		app.component("k-slug-input", SlugInput);
		app.component("k-tags-input", TagsInput);
		app.component("k-tel-input", TelInput);
		app.component("k-text-input", TextInput);
		app.component("k-textarea-input", TextareaInput);
		app.component("k-time-input", TimeInput);
		app.component("k-toggle-input", ToggleInput);
		app.component("k-toggles-input", TogglesInput);
		app.component("k-url-input", UrlInput);
	}
};
