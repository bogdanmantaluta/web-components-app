import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {LionButton} from '@lion/ui/button.js';

@customElement('web-button')
class Button extends LionButton {
  @property({type: String}) href = '';

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          border-radius:30px;
          color: white;
          background-color:rgb(6,108,182);
          font-weight: bold;
          min-width:130px;
          width:100%;
          padding:10px;
          cursor:pointer;
        }
          :host(:hover) {
              background:#05375c;
          }
        .button-content{
          margin:auto;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
  }

  _handleClick($event: any) {
    if (this.href) {
      window.location.href = this.href;
    }
  }

  render() {
    return html`
      <div class="button-content" id="${this._buttonId}">
        <slot></slot>
      </div>
    `;
  }
}
