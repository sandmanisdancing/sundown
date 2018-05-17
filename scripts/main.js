var popups = [].slice.call(document.querySelectorAll('.popup'))

popups.forEach(function (popup) {
  popup.style.display = 'none'
})

var popupFormBtn = [].slice.call(document.querySelectorAll('.form-open'))
var videoBtn = document.querySelector('.video-btn')

popupFormBtn.forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault()

    $('.popup--form').bPopup({
      closeClass: 'popup__close'
    })
  })
})

videoBtn.addEventListener('click', function (e) {
  e.preventDefault()

  $('.popup--video').bPopup({
    closeClass: 'popup__close'
  })
})

document.getElementById('help-btn').addEventListener('click', function () {
  document.querySelector('.contribution').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// var config = {
//   apiKey: "AIzaSyCKRdvEC1qTw7LYcuYnvGqIgZMguH6vuEc",
//   authDomain: "sundownsyndrome-7dcc8.firebaseapp.com",
//   databaseURL: "https://sundownsyndrome-7dcc8.firebaseio.com",
//   projectId: "sundownsyndrome-7dcc8",
//   storageBucket: "sundownsyndrome-7dcc8.appspot.com",
//   messagingSenderId: "1075856712872"
// };
// firebase.initializeApp(config);
//
// var database = firebase.database();
//
// document.querySelector('#form-donate').addEventListener('submit', function (e) {
//   e.preventDefault()
//
//   var formData = {
//     name: document.querySelector('#input1').value,
//     number: document.querySelector('#input2').value,
//     email: document.querySelector('#input3').value
//   }
//   firebase.database().ref('formData/').push(formData, function (error) {
//     if (error) {
//       console.log('Something went wrong')
//     } else {
//       document.getElementById('form-donate').style.display = 'none'
//       document.querySelector('.donate__form-sent').style.display = 'block'
//     }
//   });
// })
