const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = Math.ceil(target / 50);

    if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 20);
    } else {
        counter.innerText = target;
    }
    };
    update();
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for your feedback!");
  this.reset();
});
