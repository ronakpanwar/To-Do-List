document.querySelector('#add').onclick = function(){
    let input = [];
     input = document.getElementById('inputText').value;
    let Task = document.querySelector('.tasks');
    if(input.length == 0){
        alert("enter the note")
    }
    else{
      
        Task.innerHTML +=`
        <div class="task">
        <span id = 'text'>
        ${input} </span>
        <button id = 'delete'>
        delete</button>
        </div>

        `;
    }
   
    var currentText = document.querySelectorAll('#delete');
    for (let i =0 ; i < currentText.length ; i++){
         currentText[i].onclick = function(){
            this.parentNode.remove()
         }
    }
   
    document.getElementById('inputText').value = "";
};




