import { __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './pages/register.js';
import './pages/panel.js';
import { initializeState } from './utils/localStorageService.js';
let WebLion = class WebLion extends LitElement {
    constructor() {
        super();
        this.currentView = '';
        this.currentView = 'register';
    }
    firstUpdated() {
        initializeState();
        this.addEventListener('navigation', this.handleNavigation);
    }
    handleNavigation($event) {
        const { target } = $event.detail;
        this.currentView = target;
    }
    render() {
        return html `
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
        <title>Web lion</title>
      </head>
      ${this.currentView === 'register'
            ? html `<web-register></web-register>`
            : html `<web-panel></web-panel>`}
    `;
    }
};
WebLion.styles = css `
    :host {
      overflow:hidden;
      position:relative;
      display: block;
      min-height: 100vh;
      width: 100vw;
      background-color: #FFFFFF;
      margin: 0;
      padding: 0;

    }

    * {
      box-sizing: border-box;
      font-family: "Roboto Mono", monospace;
      font-weight: 500;
      font-style: normal;
    }
  `;
__decorate([
    property({ type: String })
], WebLion.prototype, "currentView", void 0);
WebLion = __decorate([
    customElement('web-lion')
], WebLion);
export { WebLion };
//# sourceMappingURL=web-lion.js.map