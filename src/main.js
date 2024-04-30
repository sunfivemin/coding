"use strict";

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerRect = header.getBoundingClientRect();
const headerHeight = header.offsetHeight;

document.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
        header.classList.add("header-dark");
    } else {
        header.classList.remove("header-dark");
    }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;


document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

// 스크롤시 로고 작아짐
const logoImg = document.querySelector(".header_logo_img");
const logoTit = document.querySelector(".header_logo_title");
document.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
        logoImg.style.width = "3rem";
        logoImg.style.height = "3rem";
        logoTit.style.fontSize = "2.8rem";
    } else {
        logoImg.style.width = "3.6rem";
        logoImg.style.height = "3.6rem";
        logoTit.style.fontSize = "3.2rem";
    }
});