import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/navbar.js';
import '../components/card.js';
import '../components/input.js';
import '../components/form.js';
import '../components/input-datepicker.js';
let Register = class Register extends LitElement {
    render() {
        return html `
      <web-card id="top-card"></web-card>
      <web-form submitEventName="navigation">
        <form>
          <h2>Register</h2>
          <web-input type="text" name="username" placeholder="Your Username" label="Username"></web-input>
          <web-input type="password" name="password" placeholder="Your Password" label="Password"></web-input>
          <web-input type="email" name="email" placeholder="Your Email" label="Email"></web-input>
          <web-input-datepicker label="Birth date" name="birthdate"></web-input-datepicker>
      </web-form>
      </form>
      <web-card id="bottom-card"></web-card>
    `;
    }
};
Register.styles = css `
    :host{
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    }
    #top-card{
      z-index: 1;
      position: absolute;
      top:0;
      right:-17%;
      transform: rotate(45deg);

    }
      #bottom-card{
      position: absolute;
      bottom:0;
      left:-17%;
      transform: rotate(20deg);
}
  `;
Register = __decorate([
    customElement('web-register')
], Register);
export { Register };
//# sourceMappingURL=register.js.map