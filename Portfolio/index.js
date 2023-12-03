// Counter animation script
const counters = document.querySelectorAll(".count");
const speed = 200; // The lower the slower
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // You can add code here to handle the form submission, e.g., sending an email or saving to a database.
    alert("Form submitted successfully!");
  });

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
