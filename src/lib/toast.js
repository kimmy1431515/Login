import Toastify from 'toastify-js'

export const toast =
  (message, imageSrc = "") => {
    Toastify(
    { text: message || ""
    , duration: 5000
    , destination: "https://github.com/apvarun/toastify-js"
    , newWindow: true
    , avatar: imageSrc
    , close: true
    , gravity: "bottom"
    , position: "right"
    , stopOnFocus: true
    , style: { }
    , onClick: function(){} 
    }).showToast()
  }
