import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loginCounter : number = 0;
  username: string; 

  constructor(private router:Router) {}

  login(username) {
    this.loginCounter++;
    console.log(username);
    // this.router.navigateByUrl('/account');
    this.router.navigate(['/account', username])
  }
}
