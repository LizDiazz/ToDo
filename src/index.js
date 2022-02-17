import './styles.css';

import { Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';



export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo('Aprender JavaScript');
// // todoList.nuevoTodo ( newTodo ); 
todoList.todos[0].imprimirClase();

// newTodo.imprimirClase();
console.log('todos', todoList.todos);