let openButtonClick = document.querySelector(".user__edit");
let PopUp = document.querySelector(".popup");
let closeButtonClick = document.querySelector(".popup__close");
let formElement = document.querySelector(".form");
let nameInput = document.getElementById('name__form');
let jobInput = document.getElementById('profession__form');
let po = document.querySelector(".user__name");
let op = document.querySelector(".user__profession");
let submit = document.querySelector(".form");
let addButon = document.querySelector(".user__add-btn");
let PopUpAddButon = document.querySelector(".popup-add");
let CloseAddButton = document.querySelector(".popup-add__close");

function openAddButton () {
  PopUpAddButon.classList.toggle("popup-add_non");
}
function closeAddButton () {
  PopUpAddButon.classList.remove("popup-add_non");
}

function open () {
  nameInput.value = po.textContent;
  jobInput.value = op.textContent;
  PopUp.classList.toggle("popup_non");
}

function close () {
  PopUp.classList.remove("popup_non");
}
/*let edit1 = document.querySelector(".user__name");*/
/*let input1 = document.getElementById('name__form');*/
/*let edit2 = document.querySelector(".user__profession");*/
/*let input2 = document.getElementById('profession__form');*/

function formSubmitHandler (ev) {
  ev.preventDefault();
  po.textContent = nameInput.value;
  op.textContent = jobInput.value;
  close ()
}

submit.addEventListener('submit', formSubmitHandler);
openButtonClick.addEventListener("click" , open);
closeButtonClick.addEventListener("click" , close);
addButon.addEventListener("click" , openAddButton);
CloseAddButton.addEventListener("click" , closeAddButton);

// вывод массива
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const placeTemplate = document.querySelector("#user").content; // наша заготовка
const OnPage = document.querySelector('.elements__place'); // место для вставки заготовок
const userElement = placeTemplate.querySelector('.element').cloneNode(true);// создаем клона


initialCards.forEach(function (element) {
  const userElement = placeTemplate.querySelector('.element').cloneNode(true);// создаем клона
  userElement.querySelector('.element__name').textContent = element.name; // присваеваем значение name
  userElement.querySelector('.element__img').src = element.link;//присваеваем значение link
  const ButtonLike = userElement.querySelector(".element__like");// вытаскиваем кнопку лайк
  ButtonLike.addEventListener("click", addLike);
  //удаление
  const deleteButton = userElement.querySelector('.element__trash');// выберем кнопку удаления
  function del (ev) {
    ev.preventDefault();
    const listItem = deleteButton.closest('.element');
    listItem.remove();
  }
  // добавим обработчик
  deleteButton.addEventListener('click', del);

  OnPage.append(userElement);//добовляем на страницу
});

function addPlace() {
  const placeTemplate = document.querySelector("#user").content; // наша заготовка
  const OnPage = document.querySelector('.elements__place'); // место для вставки заготовок
  const userElement = placeTemplate.querySelector('.element').cloneNode(true);// создаем клона
  const Name = document.getElementById('NewPlace');
  const link = document.getElementById('NewPicture');
  userElement.querySelector('.element__name').textContent = Name.value; // присваеваем значение name
  userElement.querySelector('.element__img').src = link.value;//присваеваем значение link

  const ButtonLike = userElement.querySelector(".element__like");// вытаскиваем кнопку лайк
  ButtonLike.addEventListener("click", addLike);

  const deleteButton = userElement.querySelector('.element__trash');// выберем кнопку удаления
  function del (ev) {
    ev.preventDefault();
    const listItem = deleteButton.closest('.element');
    listItem.remove();
  }
  // добавим обработчик
  deleteButton.addEventListener('click', del);
  closeAddButton ();
  OnPage.append(userElement);
}
const Create = document.getElementById("create");
Create.addEventListener("click", addPlace);
addPlace();

//Добавляем лайки
  function addLike (evt) {
      const like = evt.target;
      like.classList.toggle("element__like_active")
  }

// Удаление элемента
const deleteButton = document.querySelector('.element__trash');// выберем кнопку удаления


function del () {
  const listItem = deleteButton.closest('.element');
  listItem.remove();
}
// добавим обработчик
deleteButton.addEventListener('click', del);
