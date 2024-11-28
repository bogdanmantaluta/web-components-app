import { __decorate } from "tslib";
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionButton } from '@lion/ui/button.js';
let Button = class Button extends LionButton {
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
        this.href = '';
        this.addEventListener('click', this._handleClick);
    }
    _handleClick($event) {
        if (this.href) {
            window.location.href = this.href;
        }
    }
    render() {
        return html `
      <div class="button-content" id="${this._buttonId}">
        ${super.render()}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], Button.prototype, "href", void 0);
Button = __decorate([
    customElement('web-button')
], Button);
//# sourceMappingURL=button.js.map