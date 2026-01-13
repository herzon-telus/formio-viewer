"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formio = void 0;
const js_1 = require("@formio/js");
Object.defineProperty(exports, "Formio", { enumerable: true, get: function () { return js_1.Formio; } });
const flatpickr_1 = __importDefault(require("flatpickr"));
window.flatpickr = window['flatpickr-css'] = flatpickr_1.default;
require("./components/ViewerCalendar");
const DateTime_1 = __importDefault(require("./components/DateTime"));
const TextField_1 = __importDefault(require("./components/TextField"));
js_1.Formio.Components.setComponent('datetime', DateTime_1.default);
js_1.Formio.Components.setComponent('textfield', TextField_1.default);
