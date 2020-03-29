import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewcontactPage } from '../newcontact/newcontact.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  // newcontact = [];

  contacts = [
    {firstName: 'Fran', lastName:'Jipani', email:'f.jipani@griffith.edu.au'},
    {firstName: 'Harry', lastName:'Potter', email:'H.potter@griffith.edu.au'},
    {firstName: 'Sam', lastName:'Willsion', email:'S.willsion@griffith.edu.au'}
  ];

  i: any;
  

  constructor(public modalController: ModalController) {}
  
  async addcontact() {
    const modal = await this.modalController.create({
      component: NewcontactPage
    });

    modal.onDidDismiss().then((retval) => {
      // this.newcontact = retval.data;
      // console.log(this.newcontact);
      let nc = retval.data;
      if ((nc['firstName'] == undefined) && (nc['lastName'] == undefined) && (nc['email'] == undefined)){
      
      }else {
        this.contacts.push(nc);
      } 
      
    });
    return await modal.present();

  };

  editContact(i) {
    console.log(i);
  };

  deleteContact(i) {
    if (confirm("Delete " + this.contacts[i].firstName + " " + this.contacts[i].lastName + " from contact list?")) {
      this.contacts.splice(i, 1);
    }
  };

}
