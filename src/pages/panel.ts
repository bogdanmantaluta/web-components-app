import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/navbar.js';
import '../components/table.js';


@customElement('web-panel')
export class Panel extends LitElement {

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
      <web-table></web-table>
    `;
  }
}
