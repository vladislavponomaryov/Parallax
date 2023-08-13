document.addEventListener("DOMContentLoaded", function () {
  const navigationButton = document.querySelector("#navigationButton");
  const navigation = document.querySelector("#navigation");

  navigationPosition();

  window.addEventListener('resize', navigationPosition)

  function navigationPosition() {
    if (window.innerWidth <= 992) {
      document.querySelector('body > header').append(navigation)
    } else {
      document.querySelector('body > header .end').append(navigation)
    }
  }

  if (navigationButton && navigation) {
    navigationButton.addEventListener("click", (e) => {
      e.stopPropagation();
      navigation.classList.toggle("visible");
      navigationButton.classList.toggle("close");
    });

  }
});
