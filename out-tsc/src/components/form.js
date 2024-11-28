import { __decorate } from "tslib";
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionForm } from '@lion/ui/form.js';
import './button.js';
import { getDemoState, setDemoState } from '../utils/localStorageService.js';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
let Form = class Form extends LionForm {
    constructor() {
        super(...arguments);
        this.submitEventName = 'submit';
        this.submitHandler = ($event) => {
            loadDefaultFeedbackMessages();
            $event.preventDefault();
            $event.stopPropagation();
            this.submitGroup();
            const currentState = getDemoState();
            const stateRow = {};
            this.formElements.forEach(element => {
                if (element.name === 'birthdate') {
                    stateRow[element.name] = this.formatDateTime(element.modelValue);
                }
                else {
                    stateRow[element.name] = element.modelValue;
                }
            });
            currentState.push(stateRow);
            setDemoState(currentState);
            if (!this.hasFeedbackFor?.includes('error')) {
                this.dispatchEvent(new CustomEvent(this.submitEventName, {
                    detail: { target: 'panel' },
                    bubbles: true,
                    composed: true
                }));
            }
            else {
                this._setFocusOnFirstErroneousFormElement(this);
            }
        };
    }
    static get properties() {
        return {
            ...super.properties,
        };
    }
    static get styles() {
        return [
            ...super.styles,
            css `
        :host {
          display: block;
          padding: 16px;
          z-index:2;
        }
      `,
        ];
    }
    formatDateTime(dateTimeString) {
        return dateTimeString.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
    }
    mockSubmit() {
    }
    render() {
        return html `
      ${super.render()}
      <web-button @click="${this.submitHandler}">Submit</web-button>
    `;
    }
};
__decorate([
    property({ type: String })
], Form.prototype, "submitEventName", void 0);
Form = __decorate([
    customElement('web-form')
], Form);
//# sourceMappingURL=form.js.map