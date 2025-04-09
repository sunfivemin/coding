// const nextBtn = document.querySelector(".next-btn");

// const changeTransform = () => {
//   const items = document.querySelectorAll(".carousel-item");
// };

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);
  // 스크롤 위치가 650px ~ 1150px 범위 내에 있는지 확인
  if (scrollPosition >= 650 && scrollPosition <= 1150) {
    // 첫 번째 카드의 투명도 조절
    let firstCardOpacity = 1 - (scrollPosition - 650) / 500; // 500은 1150 - 650의 범위를 의미합니다.
    document.querySelector(".cardbox.first").style.opacity = firstCardOpacity;

    // 카드의 크기 조절
    let cardScale = 1 - (scrollPosition - 650) / 1000; // 1000은 1150 - 650의 범위를 의미합니다.
    document.querySelector(
      ".cardbox.first"
    ).style.transform = `scale(${cardScale})`;
  } else if (scrollPosition < 650) {
    // 스크롤 위치가 650px 미만인 경우
    document.querySelector(".cardbox.first").style.opacity = "1"; // 첫 번째 카드의 투명도를 1로 설정하여 보임
    document.querySelector(".cardbox.first").style.transform = "scale(1)"; // 첫 번째 카드의 크기를 원래대로 설정
  } else {
    // 스크롤 위치가 1150px 초과인 경우
    document.querySelector(".cardbox.first").style.opacity = "0"; // 첫 번째 카드의 투명도를 0으로 설정하여 숨김
    document.querySelector(".cardbox.first").style.transform = "scale(0.9)"; // 첫 번째 카드의 크기를 줄임
  }

  if (scrollPosition >= 980 && scrollPosition <= 1580) {
    let secondCardOpacity = 1 - (scrollPosition - 980) / 600;
    document.querySelector(".cardbox.second").style.opacity = secondCardOpacity;

    let cardScale = 1 - (scrollPosition - 980) / 1200;
    document.querySelector(
      ".cardbox.second"
    ).style.transform = `scale(${cardScale})`;
  } else if (scrollPosition < 980) {
    document.querySelector(".cardbox.second").style.opacity = "1";
    document.querySelector(".cardbox.second").style.transform = "scale(1)";
  } else {
    document.querySelector(".cardbox.second").style.opacity = "0";
    document.querySelector(".cardbox.second").style.transform = "scale(0.9)";
  }

  if (scrollPosition >= 1600 && scrollPosition <= 3000) {
    let secondCardOpacity = 1 - (scrollPosition - 1600) / 1400;
    document.querySelector(".cardbox.third").style.opacity = secondCardOpacity;

    let cardScale = 1 - (scrollPosition - 1600) / 2800;
    document.querySelector(
      ".cardbox.third"
    ).style.transform = `scale(${cardScale})`;
  } else if (scrollPosition < 1600) {
    document.querySelector(".cardbox.third").style.opacity = "1";
    document.querySelector(".cardbox.third").style.transform = "scale(1)";
  } else {
    document.querySelector(".cardbox.third").style.opacity = "0";
    document.querySelector(".cardbox.third").style.transform = "scale(0.9)";
  }
});

// window.addEventListener("scroll", function () {
//   let scrollPosition = window.scrollY;
//   console.log(scrollPosition);

//   adjustCard(".cardbox.first", 650, 1150, 500, 1000);
//   adjustCard(".cardbox.second", 980, 1580, 600, 1200);
//   adjustCard(".cardbox.third", 1600, 3000, 1400, 2800);
// });

// function adjustCard(selector, startRange, endRange, opacityRange, scaleRange) {
//   let scrollPosition = window.scrollY;
//   let card = document.querySelector(selector);

//   if (scrollPosition >= startRange && scrollPosition <= endRange) {
//     let opacity = 1 - (scrollPosition - startRange) / opacityRange;
//     let scale = 1 - (scrollPosition - startRange) / scaleRange;

//     card.style.opacity = opacity;
//     card.style.transform = `scale(${scale})`;
//   } else if (scrollPosition < startRange) {
//     card.style.opacity = "1";
//     card.style.transform = "scale(1)";
//   } else {
//     card.style.opacity = "0";
//     card.style.transform = "scale(0.9)";
//   }
// }
