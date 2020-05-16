import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NavMenuPage } from './nav-menu/nav-menu.page';

@NgModule ({
    imports: [
        IonicModule
    ],
    declarations: [
        NavMenuPage
    ],
    exports: [
        NavMenuPage
    ]

})

export class SharedModule {
    
}