const createModalFunctionality = () => {
  let modal = document.querySelector('.modal');

  document.getElementById('btn--modal').onClick = function(){
    alert('hi');
    // toggleModal(modal);
    // setTimeout(function(){
    //  modal.classList.toggle('move');
    //  console.log(modal);
    // }, 100);
  }

  modal.onclick = function(e){
    if(e.target != document.getElementById('modal__wrapper') && 
      e.target != document.getElementById('modal__header') && 
      e.target != document.getElementById('modal__form') && 
      e.target != document.getElementById('form__label') && 
      e.target != document.getElementById('form__input') ){
        console.log('You clicked outside');
        removeModal(modal);
    } else {
      console.log('You clicked inside');
    }
  }
}

const toggleModal = (elem) => {
  elem.classList.toggle('d-none');
}

const removeModal = (elem) => {
  elem.classList.toggle('move');
  setTimeout(function(){
    elem.classList.toggle('d-none');
  }, 1000);
}


createModalFunctionality();
dragElement(document.getElementById("modal__wrapper"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:



    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    /* If user clicks insode the input field, make the input field active */
    if (e.target.id === "form__input") {
      e.target.focus();
    }

    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}