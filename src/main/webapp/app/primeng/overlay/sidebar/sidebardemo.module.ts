import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared';
import {ButtonModule} from 'primeng/components/button/button';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';
import {GrowlModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';


import {
    SideBarDemoComponent,
    sidebarDemoRoute
} from './';

const primeng_STATES = [
    sidebarDemoRoute
];

@NgModule({
    imports: [
        SharedModule,
        ButtonModule,
        SidebarModule,
        GrowlModule,
        BrowserAnimationsModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        SideBarDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventmanagerSideBarDemoModule {}
