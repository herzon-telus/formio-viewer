"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewerCalendar = void 0;
const js_1 = require("@formio/js");
const CalendarWidget = js_1.Widgets.calendar;
class ViewerCalendar extends CalendarWidget {
    constructor(settings, component, instance, index) {
        super(settings, component, instance, index);
        this.originalDisplayInTimezone = this.settings.displayInTimezone;
    }
    get timezone() {
        // Ensure the displayInTimezone is never viewer since the server "views" the submission...
        if (!this.originalDisplayInTimezone || this.originalDisplayInTimezone === 'viewer') {
            this.settings.displayInTimezone = this.settings.submissionTimezone ? 'submission' : 'utc';
        }
        return super.timezone;
    }
}
exports.ViewerCalendar = ViewerCalendar;
// Create the viewer calendar.
js_1.Widgets.viewercalendar = ViewerCalendar;
