


const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }

const openForm = (event) => {
    let domString = '';

    domString += `<form id="myForm" action="javascript:void(0)">`
    domString +=`<label for="name">Scroll your name here!</label>`
    domString +=`<input type="text" class="form-control" id="name" placeholder="Neville Longbottom">`
    domString +=`</div>`
    domString +=`<button id="sort" type="submit" class="btn btn-danger">Sort</button>`
    domString +=`</form>`

    printToDom('#form', domString);
    document.querySelector('#sort').addEventListener('click', sortStudent)
}

const sortingHat = () =>{

  sortedHouse =  (Math.floor(Math.random() * 4))
  // console.log(sortedHouse)
  switch (sortedHouse) {
  case 0:
    return("Gryffindor");
    break;
  case 1:
    return ("Slytherin");
    break;
  case 2:
    return ("Hufflepuff");
    break;
  case 3:
    return ("Ravenclaw");
    break;
  }
}

const sortedStudent = [];
// console.log(sortedStudent);
const sortStudent = (event) => {
  // console.log(sortedStudent);
  let student = {};

  if (document.querySelector('#name').value === "" ) {
    alert("FILL IN YOUR NAME");
    return
  }
  student.name = document.querySelector('#name').value;
  student.house = sortingHat();
  student.unique = Math.floor(Math.random() * 100);
  sortedStudent.push(student);

  document.querySelector('#name').value="";

  printedCard();
}

const printedCard = () => {
  let domString = '';
 
  
  for (let i = 0; i < sortedStudent.length; i++) {


    domString += `<div class="card" style="width: 18rem;">`
    domString += `<div class="card-body">`
    domString += `<h3 class="card-title">${sortedStudent[i].name}</h3>`
    domString += `<h5>${sortedStudent[i].house}<h5>`
    domString += `<button id="${sortedStudent[i].unique}" class="btn btn-success expel">Expelliarmus!</button>`
    domString += `</div>`
    domString += `</div>`
    
}
      printToDom('#card', domString);
      const buttons = document.querySelectorAll('.expel');
        for(let i = 0; i < buttons.length; i++)buttons[i].addEventListener('click', expelStudent);
}

const expelStudent = () => {
  //  console.log('epxel works');
  let tempStudent = sortedStudent;

  for (let i = 0; i < sortedStudent.length; i++) {

    if (event.target.id === `${sortedStudent[i].unique}`) {
      tempStudent.splice(i , 1);
    }
  }
  printedCard(tempStudent);
};

const clickEvents = () => {
    document.querySelector('#openForm').addEventListener('click', openForm);
  }

const init = () => {
        
    clickEvents();
    sortingHat();
}

init();