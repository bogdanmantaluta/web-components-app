import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import './icon.js';
import './button.js';

@customElement('web-card')
export class Card extends LitElement {
  static styles = css`
  .card-container {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30vw;
    height: 30vw;
    background: rgb(6,108,182);
    background: linear-gradient(90deg, rgba(6,108,182,1) 0%, rgba(6,108,182,1) 13%, rgba(6,108,182,1) 15%, rgba(0,212,255,1) 100%);
    border-radius: 50px;
  }
`;

  render() {
    return html`
      <div class="card-container">
        <slot></slot>
      </div>
    `;
  }
}
