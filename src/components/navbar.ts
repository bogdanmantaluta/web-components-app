import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import './icon.js';
import './button.js';

@customElement('web-navbar')
export class Navbar extends LitElement {
  static styles = css`
nav {
  box-sizing: border-box;
  position:fixed;
  width:100%;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #11619c;
  padding: 1rem;
  color:#FFFFFF;

}

.logo {
  font-weight: bold;
  font-size:20px;
}

`;

  handleLogout() {
    this.dispatchEvent(new CustomEvent('navigation', {
      detail: { target: 'register' },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <nav>
        <div class="logo">
            <span>WebLion</span>
        </div>
        <div>
            <web-button class="logout" @click="${this.handleLogout}">Logout</web-button>
        </div>
      </nav>
    `;
  }
}
