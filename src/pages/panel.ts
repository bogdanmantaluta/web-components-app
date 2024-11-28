import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/navbar.js';
import '../components/table.js';
import {getDemoState} from '../utils/localStorageService.js';


@customElement('web-panel')
export class Panel extends LitElement {
  items: any[] = [];

  constructor() {
    super();
    this.loadItems();
  }

  loadItems() {
    try {
      this.items = getDemoState();
      console.log(this.items)
    } catch (error) {
      console.error('Error loading items:', error);
      this.items = [];
    }
  }

  static styles = css`
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

  render() {
    return html`
      <web-navbar></web-navbar>
        <h1>All registered users</h1>
      <web-table .items="${this.items}"></web-table>
    `;
  }
}
