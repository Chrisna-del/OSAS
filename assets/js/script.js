'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    for (let i = 0; i < themeBtn.length; i++) {
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');
    }
  });
}

// ✅ Toggle submenu for "Student Welfare"
const studentWelfareBtn = document.querySelector('.student-welfare-btn');
const studentWelfareSubmenu = studentWelfareBtn.nextElementSibling;

studentWelfareBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  studentWelfareSubmenu.classList.toggle('active');
});

// ✅ Close submenu when clicking outside
document.addEventListener('click', (e) => {
  if (!studentWelfareBtn.contains(e.target) && !studentWelfareSubmenu.contains(e.target)) {
    studentWelfareSubmenu.classList.remove('active');
  }
});



// ✅ Button function for "About Us"
function goToAboutUs() {
  window.location.href = 'about_us.html';
}
