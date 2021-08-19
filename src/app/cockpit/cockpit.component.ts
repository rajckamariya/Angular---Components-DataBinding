import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

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
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContent: ElementRef;

  constructor() {}

  ngOnInit() {}

  onCreateServer(serverName) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }
  onCreateBlueprint(serverName) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }
}
