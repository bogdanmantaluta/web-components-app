import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/navbar.js';
import '../components/table.js';
import { getDemoState } from '../utils/localStorageService.js';
let Panel = class Panel extends LitElement {
    constructor() {
        super();
        this.items = [];
        this.loadItems();
    }
    loadItems() {
        try {
            this.items = getDemoState();
        }
        catch (error) {
            console.error('Error loading items:', error);
            this.items = [];
        }
    }
    render() {
        return html `
      <web-navbar></web-navbar>
        <h1>All registered users</h1>
      <web-table .items="${this.items}"></web-table>
    `;
    }
};
Panel.styles = css `
    :host {
      box-sizing: border-box;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    }
  `;
Panel = __decorate([
    customElement('web-panel')
], Panel);
export { Panel };
//# sourceMappingURL=panel.js.map
