
const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }

const openForm = (event) => {
    let domString = '';

    domString += `<form id="myForm">`
    domString +=`<label for="name">Scroll your name here!</label>`
    domString +=`<input type="text" class="form-control" id="name" placeholder="Neville Longbottom">`
    domString +=`</div>`
    domString +=`<button id="sort" type="submit" class="btn btn-primary">Sort</button>`
    domString +=`</form>`

    printToDom('#form', domString);
    document.querySelector('#sort').addEventListener('click', sortHouse)
}

const clickEvents = () => {
    document.querySelector('#openForm').addEventListener('click', openForm);
  }

const init = () => {
        clickEvents();

}

init();