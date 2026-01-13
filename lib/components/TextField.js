"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const TextFieldComponent = js_1.Components.components.textfield;
class ViewerTextField extends TextFieldComponent {
    constructor(component, options, data) {
        var _a;
        super(component, options, data);
        // Pass along the pdf option to the calendar widget.
        if (this.options.pdf && ((_a = this.component.widget) === null || _a === void 0 ? void 0 : _a.type) === 'calendar') {
            this.component.widget.type = 'viewercalendar';
        }
    }
    performInputMapping(input) {
        if (input.widget && input.widget.settings) {
            //set to don't lose it after redraw.
            this.component.widget.submissionTimezone = this.submissionTimezone;
            input.widget.settings.submissionTimezone = this.submissionTimezone;
        }
        return input;
    }
}
exports.default = ViewerTextField;
