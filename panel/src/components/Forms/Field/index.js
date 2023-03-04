import BlocksField from "./BlocksField.vue";
import CheckboxesField from "./CheckboxesField.vue";
import ColorField from "./ColorField.vue";
import DateField from "./DateField.vue";
import EmailField from "./EmailField.vue";
import FilesField from "./FilesField.vue";
import GapField from "./GapField.vue";
import HeadlineField from "./HeadlineField.vue";
import InfoField from "./InfoField.vue";
import LayoutField from "./LayoutField.vue";
import LineField from "./LineField.vue";
import ListField from "./ListField.vue";
import MultiselectField from "./MultiselectField.vue";
import NumberField from "./NumberField.vue";
import ObjectField from "./ObjectField.vue";
import PagesField from "./PagesField.vue";
import PasswordField from "./PasswordField.vue";
import RadioField from "./RadioField.vue";
import RangeField from "./RangeField.vue";
import SelectField from "./SelectField.vue";
import SlugField from "./SlugField.vue";
import StructureField from "./StructureField.vue";
import TagsField from "./TagsField.vue";
import TelField from "./TelField.vue";
import TextField from "./TextField.vue";
import TextareaField from "./TextareaField.vue";
import TimeField from "./TimeField.vue";
import ToggleField from "./ToggleField.vue";
import TogglesField from "./TogglesField.vue";
import UrlField from "./UrlField.vue";
import UsersField from "./UsersField.vue";
import WriterField from "./WriterField.vue";

export default {
	install(app) {
		app.component("k-blocks-field", BlocksField);
		app.component("k-checkboxes-field", CheckboxesField);
		app.component("k-color-field", ColorField);
		app.component("k-date-field", DateField);
		app.component("k-email-field", EmailField);
		app.component("k-files-field", FilesField);
		app.component("k-gap-field", GapField);
		app.component("k-headline-field", HeadlineField);
		app.component("k-info-field", InfoField);
		app.component("k-layout-field", LayoutField);
		app.component("k-line-field", LineField);
		app.component("k-list-field", ListField);
		app.component("k-multiselect-field", MultiselectField);
		app.component("k-number-field", NumberField);
		app.component("k-object-field", ObjectField);
		app.component("k-pages-field", PagesField);
		app.component("k-password-field", PasswordField);
		app.component("k-radio-field", RadioField);
		app.component("k-range-field", RangeField);
		app.component("k-select-field", SelectField);
		app.component("k-slug-field", SlugField);
		app.component("k-structure-field", StructureField);
		app.component("k-tags-field", TagsField);
		app.component("k-text-field", TextField);
		app.component("k-textarea-field", TextareaField);
		app.component("k-tel-field", TelField);
		app.component("k-time-field", TimeField);
		app.component("k-toggle-field", ToggleField);
		app.component("k-toggles-field", TogglesField);
		app.component("k-url-field", UrlField);
		app.component("k-users-field", UsersField);
		app.component("k-writer-field", WriterField);
	}
};
