import { Component, OnInit } from '@angular/core';
import {Todos} from "../../Todos"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todos[] | undefined;

  constructor() { 
    this.todos=[
      {
        sn:1,
        title: "This is my title",
        desc: "Hi this todos for me",
        active: true
      },
      {
        sn:2,
        title: "This is my title2",
        desc: "Hi this todos for me2",
        active: true
      },
      {
        sn:1,
        title: "This is my title3",
        desc: "Hi this todos for me3",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
