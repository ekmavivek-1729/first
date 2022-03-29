import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
