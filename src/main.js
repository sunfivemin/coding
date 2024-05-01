"use strict";

const header = document.querySelector(".header");
const headerRect = header.getBoundingClientRect();
const headerHeight = header.offsetHeight;
const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;
const arrowUp = document.querySelector(".arrow-up");
const logoImg = document.querySelector(".header_logo_img");
const logoTit = document.querySelector(".header_logo_title");
const progressBar = document.querySelector(".progress_fill");

document.addEventListener("scroll", () => {
    // Header에 페이지 아래로 스크롤시 다크 스타일링 적용
    if (window.scrollY > headerHeight) {
        header.classList.add("header-dark");
    } else {
        header.classList.remove("header-dark");
    }

    // Home 섹션을 아래로 스크롤시 투명하게 처리함
    home.style.opacity = 1 - window.scrollY / homeHeight;

    // Arrow up버튼을 아래로 스크롤시 투명하게 처리함
    if (window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }

    // 스크롤시 로고 작아짐
    if (window.scrollY > headerHeight) {
        logoImg.style.width = "3rem";
        logoImg.style.height = "3rem";
        logoTit.style.fontSize = "2.8rem";
    } else {
        logoImg.style.width = "3.6rem";
        logoImg.style.height = "3.6rem";
        logoTit.style.fontSize = "3.2rem";
    }

    // div의 스크롤바 내린 양(scrollTop) + 눈에보이는 div 높이(scrollHeight) == div의 실제 높이(clientHeight)
    const 스크롤양 = document.querySelector("html").scrollTop;
    const 실제높이 = document.querySelector("html").scrollHeight;
    const 높이 = document.querySelector("html").clientHeight;
    const scrollPosition = window.scrollY; // 현재 스크롤 위치 계산
    const documentHeight = document.body.scrollHeight; // 문서 전체 높이
    const viewportHeight = window.innerHeight; // 뷰포트 높이
    const progress = (scrollPosition / (documentHeight - viewportHeight)) * 100; // 스크롤 위치에 따른 진행률 계산

    if (스크롤양 + 높이 > 실제높이 - 1) {
        console.log("scrollY:", scrollPosition, "viewportHeight:", viewportHeight, "scrollTop:", 스크롤양, "scrollHeight:", 실제높이, "clientHeight:", 높이, "offsetHeight:", homeHeight, "headerRect:", headerRect);
    }

    // 진행률을 프로그래스 바에 적용
    progressBar.style.width = progress + "%";
});
