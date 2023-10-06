document.querySelectorAll(".standart_item").forEach((item) => {
  const input = item.querySelector("input");
  const editBtn = item.querySelector("i");
  const p = item.querySelector("p");
  input.addEventListener("input", (e) => {
    p.textContent = e.target.value;
  });
  editBtn.addEventListener("click", () => {
    input.classList.remove("dnone");
    input.value = p.textContent;
    p.classList.add("dnone");
  });
  document.addEventListener("click", (e) => {
    if (
      e.target == input ||
      e.target == editBtn ||
      e.target == p ||
      e.target == item
    ) {
      return;
    } else {
      p.classList.remove("dnone");
      input.classList.add("dnone");
    }
  });
});
document.querySelectorAll(".standart_item_pass").forEach((item) => {
  const input = item.querySelector("input");
  const editBtn = item.querySelector("i");
  const p = item.querySelector("p");
  input.addEventListener("input", (e) => {
    p.textContent = e.target.value;
  });
  editBtn.addEventListener("click", () => {
    document.querySelectorAll(".standart_item_pass").forEach((item) => {
      item.querySelector("input").classList.remove("dnone");
      item.querySelector("input").value = p.textContent;
      p.classList.add("dnone");
    });
  });
});
document.querySelector(".save_btn").addEventListener("click", (e) => {
  e.preventDefault();
  const pass1 = document.getElementById("pass1");
  const pass2 = document.getElementById("pass2");
  if (pass1.value != pass2.value) {
    document.querySelectorAll(".standart_item_pass").forEach((item) => {
      item.classList.add("error");
    });
  } else {
    document.querySelectorAll(".standart_item_pass").forEach((item) => {
      item.classList.remove("error");
      item.querySelector("input").classList.add("dnone");
      item.querySelector("p").classList.remove("dnone");
    });
  }
});
const download = (input) => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    document.querySelector(".empty_img").classList.add("dnone");
    const img = document.querySelector(".profile_img");
    img.classList.remove("dnone");
    img.src = reader.result;
    document.querySelector(".profile_img_file").classList.add("dnone");
    document.querySelector(".change_img").classList.remove("dnone");
  };
};
const profileBtn = document.querySelector(".profile_btn");
const ordersBtn = document.querySelector(".orders_btn");
const accountInfo = document.querySelector(".account_info");
const orderInfo = document.querySelector(".order_info");

profileBtn.addEventListener("click", () => {
  profileBtn.classList.add("active_pagination");
  ordersBtn.classList.remove("active_pagination");
  accountInfo.classList.add("active_info");
  orderInfo.classList.remove("active_info");
});
ordersBtn.addEventListener("click", () => {
  profileBtn.classList.remove("active_pagination");
  ordersBtn.classList.add("active_pagination");
  accountInfo.classList.remove("active_info");
  orderInfo.classList.add("active_info");
});
