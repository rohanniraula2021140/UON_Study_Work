const addButton = document.querySelector("#add");

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = "") => {
    const container = document.querySelector('.container');
  
    const noteElements = `
    <div class="menuBar">
        <div class="edit">
            <i class="fas fa-edit"></i>
        </div>
        <div class="delete">
            <i class="fas fa-trash-alt"></i>
        </div>
    </div>
    <div class="card">
        <div class="face face1">
            <div class="content">
                <span class="stars"></span>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : "" }"></textarea>
        </div>
    </div>
    <div class="face face2">
    <h2></h2>
    </div>
    </div>`;

  
    container.insertAdjacentHTML('afterbegin', noteElements);


    // getting the references
    const editButton = container.querySelector('.edit');
    const delButton = container.querySelector('.delete');
    const mainDiv = container.querySelector('.main');
    const textarea = container.querySelector('textarea');
    
    // deleting the nod
    delButton.addEventListener('click', ()=>{
        container.remove();
    });
    // toggle using edit icon
    textarea.value = text;
    mainDiv.innerHTML= text; 


    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    textarea.addEventListener('change', (event)=>{
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSData();
    }) 
   
     

    document.body.appendChild(container);  
};

// getting back from the local storage
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note)=> addNewNote(note))};

console.log("is accessed");
addButton.addEventListener("click", () => addNewNote());




