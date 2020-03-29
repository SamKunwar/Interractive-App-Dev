import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    
  username: string;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username);
  }

}
