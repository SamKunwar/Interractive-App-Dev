import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.page.html',
  styleUrls: ['./editcontact.page.scss'],
})
export class EditcontactPage implements OnInit {

  firstName: string;
  lastName: string;
  email: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {

    let firstName = this.firstName;
    let lastName = this.lastName;
    let email = this.email;    
  }

  change() {

    let edited = []
    edited['firstName'] = this.firstName;
    edited['lastName'] = this.lastName;
    edited['email'] = this.email;
    
    this.modalController.dismiss(edited)
  } 

}
