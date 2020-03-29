import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.page.html',
  styleUrls: ['./editcontact.page.scss'],
})
export class EditcontactPage implements OnInit {

  fname: string;
  lname: string;
  email: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
