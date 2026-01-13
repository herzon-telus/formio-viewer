"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const DateTimeComponent = js_1.Components.components.datetime;
class ViewerDateTime extends DateTimeComponent {
    constructor(component, options, data) {
        super(component, options, data);
        // Pass along the pdf option to the calendar widget.
        if (this.options.pdf) {
            if (!this.component.widget) {
                this.component.widget = {};
            }
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
exports.default = ViewerDateTime;
