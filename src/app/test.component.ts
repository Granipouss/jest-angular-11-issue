import {Component} from '@angular/core';
import {CanDisable, mixinTabIndex} from '@angular/material/core';

class ComponentBase implements CanDisable {
    disabled = false;
}

const ComponentWithMixin = mixinTabIndex(ComponentBase);

@Component({
    selector: 'app-test',
    template: `ABC {{ tabIndex }}`,
})
export class TestComponent extends ComponentWithMixin {}
