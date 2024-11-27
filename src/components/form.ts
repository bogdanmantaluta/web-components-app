import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {LionForm} from '@lion/ui/form.js';
import './button.js'
import {getDemoState, setDemoState} from '../utils/localStorageService.js';

@customElement('web-form')
class Form extends LionForm {
  @property({type: String}) submitEventName = 'submit';

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          padding: 16px;
          z-index:2;
        }
        .form-buttons-container {
          margin-top:10px;
          display: flex;
          justify-content: space-between;
        }
      `,
    ];
  }

  render() {
    return html`
      <form>
        <slot></slot>
        <web-button href="#" @click="${this._submit}">Submit</web-button>
      </form>
    `;
  }

  _submit($event: any) {
    $event.preventDefault();
    $event.stopPropagation();
    this.submitGroup();

    const currentState = getDemoState() as any[];
    const stateRow: any = {};
    this.formElements.forEach(element => {
      if (element.name === 'birthdate') {
        stateRow[element.name] = this.formatDateTime(element.modelValue);
      } else {
        stateRow[element.name] = element.modelValue;
      }

    });
    currentState.push(stateRow);
    setDemoState(currentState);

    if (!this.hasFeedbackFor?.includes('error')) {
      this.dispatchEvent(new CustomEvent(this.submitEventName, {
        detail: {target: 'panel'},
        bubbles: true,
        composed: true
      }));
    } else {
      this._setFocusOnFirstErroneousFormElement(this);
    }
  }

  _reset($event: any) {
    $event.preventDefault();
    $event.stopPropagation();
    this.resetGroup();
    this.dispatchEvent(new Event('reset', {bubbles: true}));
  }

   formatDateTime(dateTimeString: Date): string {
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
}
