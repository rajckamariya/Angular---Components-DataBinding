import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [{ type: 'Blueprints', name: 'Test Server', content: 'TESTING' }];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.servers.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.servers.push({
      type: 'Blueprints',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
