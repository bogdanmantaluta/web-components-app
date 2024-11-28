import { html, fixture, expect } from '@open-wc/testing';
import '../src/web-lion.js'

describe('WebLion Component', () => {
  it('should have a default currentView of "register"', async () => {
    const el = await fixture<any>(html`<web-lion></web-lion>`);
    await el.updateComplete; // Ensure the component is fully updated
    expect(el.currentView).to.equal('register');
  });

  it('should render <web-register> when currentView is "register"', async () => {
    const el = await fixture<any>(html`<web-lion></web-lion>`);
    await el.updateComplete;
    const registerElement = el.shadowRoot?.querySelector('web-register');
    expect(registerElement).to.exist;
  });

  it('should render <web-panel> when currentView is "panel"', async () => {
    const el = await fixture<any>(html`<web-lion></web-lion>`);
    el.currentView = 'panel';
    await el.updateComplete;
    const panelElement = el.shadowRoot?.querySelector('web-panel');
    expect(panelElement).to.exist;
  });

  it('should update currentView when handleNavigation is called', async () => {
    const el = await fixture<any>(html`<web-lion></web-lion>`);
    const event = new CustomEvent('navigation', {
      detail: { target: 'panel' },
    });
    el.handleNavigation(event);
    expect(el.currentView).to.equal('panel');
  });

  it('should apply correct styles', async () => {
    const el = await fixture<any>(html`<web-lion></web-lion>`);
    const style = getComputedStyle(el);
    expect(style.display).to.equal('block');
    expect(style.backgroundColor).to.equal('rgb(255, 255, 255)');
  });
});
