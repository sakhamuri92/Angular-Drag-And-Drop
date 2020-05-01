import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraggleDirectiveDirective } from './draggle-directive.directive';
import { DroppableDirectiveDirective } from './droppable-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DraggleDirectiveDirective,
    DroppableDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
