import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName = '';
  serverContent = '';
  constructor() {}

  ngOnInit() {}

  // onCreateServer() {
  //   this.servers.push({
  //     type: 'Server',
  //     name: this.serverName,
  //     content: this.serverContent
  //   });
  // }
  // onCreateBlueprints() {
  //   this.servers.push({
  //     type: 'Blueprints',
  //     name: this.serverName,
  //     content: this.serverContent
  //   });
  // }
}
