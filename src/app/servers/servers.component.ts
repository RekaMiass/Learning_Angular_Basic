import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .more5 {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  usernameIsExist = '';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  secret = '';
  secretShown = false;
  secretNums = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.secretNums.length >= 5 ? 'white' : 'black';
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateName() {
    this.usernameIsExist = this.username;
  }

  onShowSecret() {
    this.secretShown = !this.secretShown;
    this.secretNums.push(this.secretNums.length + 1);
    this.secret = 'You caught me son!';
  }
  // getFifthColor() {
  //   return this.secretNums >= 5 ? 'blue' : 'white';
  // }
}
