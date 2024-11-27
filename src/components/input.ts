import {css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {LionInput} from '@lion/ui/input.js';

@customElement('web-input')
class Input extends LionInput {

  static get styles() {
    return [
      ...super.styles,
      css`
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
             .form-field__label {
              color:gray;
              margin-bottom:15px;
           }
        }
      `,
    ];
  }

  render() {
    return html`
      ${super.render()}
    `;
  }
}
