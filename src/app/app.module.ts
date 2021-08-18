import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ServerElementComponent, CockpitComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
