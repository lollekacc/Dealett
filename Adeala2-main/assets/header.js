  function getOperatorFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("op");
}

document.addEventListener("DOMContentLoaded", () => {
  
  const wrappers = document.querySelectorAll(".partner-wrapper");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      wrappers.forEach(w => w.classList.add("shrink"));
    } else {
      wrappers.forEach(w => w.classList.remove("shrink"));
    }
  });

});
document.addEventListener("DOMContentLoaded", () => {
  const operator = getOperatorFromURL();
  if (operator) {
    sessionStorage.setItem("preferredOperator", operator);
  }
});
