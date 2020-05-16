import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.page.html',
  styleUrls: ['./newcontact.page.scss'],
})
export class NewcontactPage implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  process: string
  state: boolean
  narr = [];
 
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    if (this.process == "add"){
      this.state = true;
    }else{
      this.state= false;
    }
  }

  addcontact(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email; 
    let narr = []
    narr['firstName'] = this.firstName;
    narr['lastName'] = this.lastName;
    narr['email'] = this.email;
    this.modalController.dismiss(narr);

  }

  change() {

    let edited = []
    edited['firstName'] = this.firstName;
    edited['lastName'] = this.lastName;
    edited['email'] = this.email;
    
    this.modalController.dismiss(edited)
  }

}
