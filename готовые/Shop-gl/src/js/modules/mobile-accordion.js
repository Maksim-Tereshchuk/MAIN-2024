function accordion() {
  const btns = document.querySelectorAll(".mobile-nav__parent-btn");
  btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const content = btn.nextElementSibling;
      console.log(content);

      const isOpen = btn.classList.toggle("active");

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }

      //   content.style.maxHeight = "200px";
    });
  });
}

export default accordion;
