import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiCardModule } from '@shared-ui/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
