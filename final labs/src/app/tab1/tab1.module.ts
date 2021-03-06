import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NewcontactPage } from '../newcontact/newcontact.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { EditcontactPage } from '../editcontact/editcontact.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, NewcontactPage, EditcontactPage],
  entryComponents: [NewcontactPage,EditcontactPage]
})
export class Tab1PageModule {}
