"use strict";

/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

// script.js
function submitForm(event) {
  event.preventDefault(); // Mencegah form untuk melakukan submit

  // Mengambil nilai-nilai input dari form
  var email = document.getElementById("email").value;
  var nama = document.getElementById("nama").value;
  var pesan = document.getElementById("pesan").value;

  // Validasi form sebelum mengirim data
  if (!validateEmail(email)) {
    alert("Email tidak valid");
    return;
  }

  // Kirim data ke alamat email menggunakan metode yang sesuai, misalnya Ajax atau API HTTP

  // Contoh penggunaan JavaScript untuk mengirim email dengan menggunakan mailto:
  var subject = "Form Kontak - " + nama;
  var body =
    "Email: " + email + "\n" + "Nama: " + nama + "\n" + "Pesan: " + pesan;
  var mailtoLink =
    "mailto:prasetiopangestu11@gmail.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  window.location.href = mailtoLink;
}

// Validasi email menggunakan regular expression
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

addEventOnElem(window, "scroll", headerActive);
