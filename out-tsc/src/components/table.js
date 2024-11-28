import { __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let Table = class Table extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
    }
    render() {
        if (!this.items || this.items.length === 0) {
            return html `
        <div class="table-container">
          <p>No data available</p>
        </div>
      `;
        }
        return html `
      <div class="table-container">
        <table>
          <thead>
          <tr>
            ${Object.keys(this.items[0]).map(key => html `
              <th>${key}</th>
            `)}
          </tr>
          </thead>
          <tbody>
          ${this.items.map(item => html `
            <tr>
              ${Object.keys(item).map(key => html `
                <td>${item[key]}</td>
              `)}
            </tr>
          `)}
          </tbody>
        </table>
      </div>
    `;
    }
};
Table.styles = css `
    .table-container {
      max-height: 65vh;
      overflow-y: scroll;
      border: 1px solid #ccc;
    }

    table {
      border: 1px solid #ccc;
      border-collapse: collapse;
      width: 100%;
    }

    tr, th, td {
      border: 1px solid #ccc;
    }

    th, td {
      padding: 12px;
    }

    @media only screen and (max-width: 600px) {
      .table-container {
        width: 400px;
      }
    }
  `;
__decorate([
    property({ type: Array })
], Table.prototype, "items", void 0);
Table = __decorate([
    customElement('web-table')
], Table);
export { Table };
//# sourceMappingURL=table.js.map