import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  todoList: Todo [] = [];
  get initTodo():Todo {
     return {
      title: '',
      id: null
     }
  }
  todo:Todo = this.initTodo;

  addTodo(): void{
    if(this.todo.id){

      this.todoList = this.todoList.map(elemet => {
        if(elemet.id == this.todo.id){
           elemet.title = this.todo.title
        }
        return elemet;
      })

    }else{
      console.log(this.todo)
     this.todo.id = Date.now();
     this.todoList.push({...this.todo});
    }
    console.log(this.todoList)

     this.todo = this.initTodo
     
  }

  editTodo(todo: Todo): void{

    this.todo = {...todo}

  }

  deleteTodo(id: number): void{

    this.todoList = this.todoList.filter(data => data.id != id);

  }

}
