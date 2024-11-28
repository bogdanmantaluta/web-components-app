import { __decorate } from "tslib";
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LionInputDatepicker } from '@lion/ui/input-datepicker.js';
import { loadDefaultFeedbackMessages } from "@lion/ui/validate-messages.js";
loadDefaultFeedbackMessages();
let InputDatepicker = class InputDatepicker extends LionInputDatepicker {
    static get styles() {
        return [
            ...super.styles,
            css `
        :host {
          display: block;
          margin-bottom: 16px;
          ::slotted(input) {
              outline:none;
              width:300px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
           }
          ::slotted([slot="suffix"]) {
              height:50px;
              background-color: white;
              border: 1px solid #ccc;
              border-left: none;
              cursor: pointer;
              }
           }
             .form-field__label {
              color:gray;
              margin-bottom:15px;
           }
        }
      `,
        ];
    }
    render() {
        return html `
      ${super.render()}
    `;
    }
};
InputDatepicker = __decorate([
    customElement('web-input-datepicker')
], InputDatepicker);
//# sourceMappingURL=input-datepicker.js.map