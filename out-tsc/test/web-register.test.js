import { expect, fixture, html } from '@open-wc/testing';
import '../src/pages/register.js';
describe('Register Component', () => {
    it('should render the component', async () => {
        const el = await fixture(html `
      <web-register></web-register>`);
        expect(el).to.exist;
    });
    it('should have a top card', async () => {
        const el = await fixture(html `
      <web-register></web-register>`);
        const topCard = el.shadowRoot?.querySelector('#top-card');
        expect(topCard).to.exist;
    });
    it('should have a bottom card', async () => {
        const el = await fixture(html `
      <web-register></web-register>`);
        const bottomCard = el.shadowRoot?.querySelector('#bottom-card');
        expect(bottomCard).to.exist;
    });
    it('should contain a form with inputs', async () => {
        const el = await fixture(html `
      <web-register></web-register>`);
        const form = el.shadowRoot?.querySelector('web-form');
        expect(form).to.exist;
        if (form) {
            const usernameInput = form.querySelector('web-input[name="username"]');
            expect(usernameInput).to.exist;
            const passwordInput = form.querySelector('web-input[name="password"]');
            expect(passwordInput).to.exist;
            const emailInput = form.querySelector('web-input[name="email"]');
            expect(emailInput).to.exist;
            const datepickerInput = form.querySelector('web-input-datepicker[name="birthdate"]');
            expect(datepickerInput).to.exist;
        }
    });
    it('should display the title "Register"', async () => {
        const el = await fixture(html `
      <web-register></web-register>`);
        const title = el.shadowRoot?.querySelector('h2');
        expect(title).to.exist;
        if (title) {
            expect(title.textContent).to.equal('Register');
        }
    });
});
//# sourceMappingURL=web-register.test.js.map