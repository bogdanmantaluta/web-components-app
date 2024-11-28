import { fixture, html, expect } from '@open-wc/testing';
import '../src/pages/panel.js';
describe('web-panel', () => {
    it('should render the component', async () => {
        const el = await fixture(html `<web-panel></web-panel>`);
        expect(el).to.be.an.instanceOf(HTMLElement);
    });
    it('should contain a web-navbar element', async () => {
        const el = await fixture(html `<web-panel></web-panel>`);
        const navbar = el.shadowRoot?.querySelector('web-navbar');
        expect(navbar).to.exist;
    });
    it('should contain a web-table element', async () => {
        const el = await fixture(html `<web-panel></web-panel>`);
        const table = el.shadowRoot?.querySelector('web-table');
        expect(table).to.exist;
    });
    it('should display the correct heading', async () => {
        const el = await fixture(html `<web-panel></web-panel>`);
        const heading = el.shadowRoot?.querySelector('h1');
        expect(heading).to.exist;
        await expect(heading?.textContent).to.equal('All registered users');
    });
});
//# sourceMappingURL=web-panel.test.js.map