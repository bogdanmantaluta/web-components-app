import { html } from 'lit';
import '../src/components/card.js';
export default {
    title: 'Card',
    component: 'web-card',
    argTypes: {},
};
const Template = () => html `
  <web-card></web-card>
`;
export const App = Template.bind({});
App.args = {};
//# sourceMappingURL=card.stories.js.map