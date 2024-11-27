import {html, TemplateResult} from 'lit';
import '../src/web-lion.js';
import '../src/components/navbar.js';

export default {
  title: 'NavBar',
  component: 'web-navbar',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <web-navbar style="--web-lion-background-color: ${backgroundColor}" .header=${header}></web-navbar>
`;

export const App = Template.bind({});
App.args = {
  header: 'Navbar',
};
