document.querySelector('#push').onclick = function(){
    var input  = document.querySelector('.new-task input').value;
    if(input == "") alert('Please enter a task ');
    else{
        var tasks = document.querySelector('.tasks');
        tasks.innerHTML += `
           <div class="task">
              <span id="taskname" class=""> ${input} </span>
              <button class="delete btn btn-danger btn-sm">Delete</button>
           </div>

        `;

        document.querySelector('.new-task input').value = "";

        var current_tasks = document.querySelectorAll('.delete');
        for(var i=0; i<current_tasks.length;i++){
            current_tasks[i].onclick = function(){
               this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('.task');
        for(var i=0; i<tasks.length;i++){
            tasks[i].onclick = function(){
               this.classList.toggle('completed');
            }
        }
    }
} 