    var link = document.querySelector(".contacts__button");
    
    var popup = document.querySelector(".appointment-modal");
    var close = popup.querySelector(".modal-close");

    var form = popup.querySelector("form");
    var inputName = popup.querySelector("#appointment-name");
    var email = popup.querySelector("[name=email]");
    var text = popup.querySelector("[name=text]");
  
    var isStorageSupport = true;
    var storage = "";
  
    try {
    storage = localStorage.getItem("inputName");
    } catch (err) {
    isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
     
      if (storage) {
        inputName.value = storage;
        email.focus();
      } else {
        inputName.focus();
      }
    });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
    
  form.addEventListener("submit", function (evt) {
    if (!inputName.value || !email.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("email", email.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });