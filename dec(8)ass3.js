class Todo{
    constructor(task){
        this.task=task;
    }
}
class UI{
    addToList(todo){
        const list=document.getElementById("todo-list");
        const row=document.createElement('tr');
        row.innerHTML=`<td>${todo.task}</td>
                       <td><a href="#" class='delete'>X</a></td>`;
        list.append(row);
    }
    clearFormFields(){
        document.getElementById('task').value='';
    }
    showAlert(message, className){
        const div =  document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const constainer = document.querySelector('.container');
        const form =  document.querySelector('#todo-form');
        constainer.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
    
}
    deleteTodo(target){
        if(target.className === 'delete')
           target.parentElement.parentElement.remove();

    }

}

class Store{
    static getTodos(){
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }
        else{
            todos=JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    }
    static displayTodos(){
        const todos= Store.getTodos();
        todos.forEach((todo)=>{
            const ui=new UI;
            ui.addBookToList(todo);
           });

    }
    static addTodo(todo){
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem('todos',JSON.stringify(todos));

    }
    static removeTodo(task){
        const todos=Store.getTodos();
        todos.forEach((task,index)=>{

            if(book.task===task){
                todos.splice(index,1)
            }
        });
        localStorage.setItem('todos',JSON.stringify(todos));

       }

}
document.addEventListener('DOMContentLoaded',Store.displayTodos);
document.getElementById('todo-form').addEventListener('submit',
function(e){

    const task = document.getElementById('task').value;
    const todo=new Todo(task);
    Store.addTodo(todo);

    const ui=new UI();

    if(task === ""){
        ui.showAlert('Please populate fields','error');
    }else{

    ui.addToList(todo);
    ui.showAlert('Your task has been added','success');
   
    ui.clearFormFields();

    }
   e.preventDefault();

});

document.getElementById('todo-list').addEventListener
('click',function(e){

 const ui =new UI();
 ui.deleteTodo(e.target);
 Store.removeTodo(e.target.parentElement.textContent);
 ui.showAlert('Your task has been removed','success');

 e.preventDefault();


})
function removeItem() {
var a=document.getElementById("list");
var candidate=document.getElementById("candidate");
var item=dpcument.getElementById("candidate.value");
e.removeChild(item);
}
function filterTodos(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach
        (function (task) {
            const item = task.firstChild.textContent;
              if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        });
}

    