import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit() {}

  onCreateServer(serverName) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.newServerContent
    });
  }
  onCreateBlueprint(serverName) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.newServerContent
    });
  }
}
