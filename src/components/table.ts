import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {getDemoState} from '../utils/localStorageService.js';

@customElement('web-table')
class Table extends LitElement {
  items = [];

  constructor(){
    super();
    this.items = getDemoState();
  }

  static styles = css`
  .table-container {
    max-height: 700px;
    overflow-y:scroll;
    border: 1px solid #ccc;
    table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 100%;

    & tr,
    & th,
    & td {
      border: 1px solid #ccc;
    }

    & th,
    & td {
      padding: 12px;
    }
  }
 }
   @media only screen and (max-width: 600px) {
    .table-container{
      width:400px;
    }
  }
`;

  render() {
    return html`
      <div class="table-container">
        <table>
          <thead>
          <tr>
            ${Object.keys(this.items[0]).map(i => html`
              <th>${i}</th>`)}
          </tr>
          </thead>
          <tbody>
          ${this.items.map((i: any) => html`
            <tr>
              ${Object.keys(i).map((key) => html`
                <td>${i[key]}</td>`)}
            </tr>
          `)}
          </tbody>
        </table>
      </div>
    `;
  }
}
