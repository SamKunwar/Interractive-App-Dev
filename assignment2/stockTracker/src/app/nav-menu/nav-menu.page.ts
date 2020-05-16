import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.page.html',
  styleUrls: ['./nav-menu.page.scss'],
})
export class NavMenuPage implements OnInit {

  constructor(
    private router: Router, 
    private storageService: StorageService
  ) { }

  current_user_username: string;
  current_user_type: string;
  state: boolean;

  ngOnInit() { }

  
  // Logout as a user
  logout() {
    this.router.navigateByUrl('login');
  }


  //navigate back to home
  goToHome() {
    this.router.navigateByUrl('home');
  }

   
  // function to add new items to the list by the app owner
  async addItem() {
    this.router.navigateByUrl('add-item');
  };

  //navigate to charts page
  chart() {
    this.router.navigateByUrl('chart');
  }

}
