import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  remName: string;
  remDate: Date;
  toggleBtn: boolean;

  constructor(private storage: Storage) {}

  store() {
    alert("pressed");
  }

}
