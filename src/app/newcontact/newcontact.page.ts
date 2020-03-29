import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.page.html',
  styleUrls: ['./newcontact.page.scss'],
})
export class NewcontactPage implements OnInit {

  fname: string;
  lname: string;
  email: string;
  narr = [];
 
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  addcontact(firstName, lastName, email) {
    this.fname = firstName;
    this.lname = lastName;
    this.email = email; 
    let narr = []
    narr['firstName'] = this.fname;
    narr['lastName'] = this.lname;
    narr['email'] = this.email;
   
    // console.log(narr);
    this.modalController.dismiss(narr);

  }

}
