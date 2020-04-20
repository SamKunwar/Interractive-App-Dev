import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  remName: string;
  remDate: string;
  toggleBtn: boolean ;
  notfName: string;
  notfDate: string;

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {

    this.toggleBtn = false;
    this.remDate = new Date().toISOString();

    this.notfName = await this.storage.get("Reminder Name");
    this.notfDate = await this.storage.get("Reminder Date");

    if (this.notfName == null) this.notfName = "";
    if (this.notfDate == null) this.notfDate = this.remDate;

    this.remName = this.notfName;
    this.remDate = this.notfDate;

  }



  async store() {
    this.storage.set("Reminder Name", this.remName);
    this.storage.set("Reminder Date", this.remDate); 
  }

}