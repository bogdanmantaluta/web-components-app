import { __decorate } from "tslib";
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LionIcon } from '@lion/ui/icon.js';
let Icon = class Icon extends LionIcon {
    static get styles() {
        return [
            ...super.styles,
            css `
        :host {
          color:black;
        }
      `,
        ];
    }
};
Icon = __decorate([
    customElement('web-icon')
], Icon);
//# sourceMappingURL=icon.js.map