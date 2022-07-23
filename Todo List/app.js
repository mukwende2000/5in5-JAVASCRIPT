const input = document.querySelector('.input')
const place = document.querySelector('.place');
const placeholder = document.querySelector('.placeholder')

place.addEventListener('click', () => {

    if(input.value === '') {
        placeholder.textContent = 'Please write something'
        setTimeout ( () => {
            placeholder.textContent = 'No task Yet'
        }, 2000)
    } else {
        placeholder.classList.add('inactive')

        const task =  document.createElement('span');
        task.className = 'task';
        task.textContent = input.value;
        
        const del =  document.createElement('span');
        del.className = 'del';
        del.textContent = 'Delete';
        
        
        const li = document.createElement('li');
        li.appendChild(task)
        li.appendChild(del)
    
        const tasks = document.querySelector('.tasks');
        tasks.appendChild(li)
    
        input.value = '';
        input.focus();
        console.log(tasks.children.length)
        
        del.addEventListener('click', (e) => {
            tasks.removeChild(e.target.parentElement);
            if(tasks.children.length === 1) {
                placeholder.classList.remove('inactive')
                console.log(tasks.children.length)
            }
        })
    
    }
   
})