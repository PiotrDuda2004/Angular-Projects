import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  LoginStatus = 'You are not logged in!';
  loginName = '';
  passName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  checkPasses() {
    if(this.loginName == "LoginTest" && this.passName == "PassTest" ){
      this.LoginStatus = 'You logged in succesfully ';
    }
    else{
      this.LoginStatus = 'Passwords are wrong';
    }}

  onUpdateServerName(event: Event) {
    this.loginName = (<HTMLInputElement>event.target).value;
    this.passName = (<HTMLInputElement>event.target).value;
  }
}
