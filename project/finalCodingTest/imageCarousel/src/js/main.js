const carouselUI = document.querySelector(".carousel-list");
const imageInput = document.querySelector(".image-upload-input");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const changeTransform = () => {
    const items = document.querySelectorAll(".carousel-item");

    items.forEach((e, idx) => {
        let degree = 360 / items.length;

        if (items.length > 1) {
            if (idx === 0) {
                e.style.transform = `rotateY(0deg) translateZ(250px)`;
            } else {
                e.style.transform = `rotateY(${degree * idx}deg) translateZ(250px) rotateY(-${degree * idx}deg)`;
            }
        }
        // 아이템의 갯수가 5개 이상인 경우
        if (items.length >= 5) {
            if (idx == 0) {
                e.style.transform = "rotateY(0deg) translateZ(250px)";
            } else if (idx == 1) {
                e.style.transform = `rotateY(72deg) translateZ(250px) rotateY(-72deg)`;
            } else if (idx == 2) {
                e.style.transform = `rotateY(144deg) translateZ(250px) rotateY(-144deg) translateX(400px)`;
            } else if (idx == items.length - 2) {
                // 리스트의 끝에서 두번째 아이템
                e.style.transform = `rotateY(216deg) translateZ(250px) rotateY(-216deg) translateX(-400px)`;
            } else if (idx == items.length - 1) {
                // 리스트의 마지막 아이템
                e.style.transform = `rotateY(288deg) translateZ(250px) rotateY(-288deg)`;
            } else {
                e.style.transform = `rotateY(${degree * idx}deg) translateZ(250px) rotateY(-${degree * idx}deg)`;
            }
        }
    });
};

const moveNext = () => {
    const items = document.querySelectorAll(".carousel-item");

    if (items.length > 1) {
        const currentItem = document.querySelector(".current"); // 첫번째 요소
        const next = currentItem.nextElementSibling; // 두번째 요소
        carouselUI.appendChild(currentItem); // 배열안에서 끝으로 이동
        currentItem.classList.remove("current"); // 첫번째 요소에 current 삭제
        next.classList.add("current"); // 두번째 요소에 current 붙여넣기
    }
    changeTransform();
};

const movePrev = () => {
    const items = document.querySelectorAll(".carousel-item");

    if (items.length > 1) {
        const currentItem = document.querySelector(".current"); // 첫번째 요소
        const lastItem = carouselUI.lastElementChild; // 마지막 요소
        carouselUI.insertBefore(lastItem, items[0]); // 가장 마지막에 있는 요소를 처음으로
        currentItem.classList.remove("current"); // 현재 아이템에 current 삭제
        lastItem.classList.add("current"); // 마지막 아이템에 current 붙여넣기
    }
    changeTransform();
};

const createTag = (url) => {
    const list = document.createElement("li");
    const img = document.createElement("img");
    // list.setAttribute("class", "carousel-item");
    list.classList.add("carousel-item");
    img.src = url;
    list.appendChild(img);

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => {
        item.classList.remove("current");
    });
    list.classList.add("current");

    return list;
};

// 이미지 업로드
const uploadImg = (val) => {
    const items = document.querySelectorAll(".carousel-item");

    if (val.files) {
        const reader = new FileReader(); // 웹어플리케이션이 file의 내용을 읽을수 있게 만들어주는 객체

        reader.onload = (e) => {
            // 2) readAsDataURL 읽기가 완료되면 onload 이벤트를 트리거
            const imgUrl = e.target.result; // 파일의 정보
            carouselUI.insertBefore(createTag(imgUrl), items[0]);
            changeTransform();
        };

        reader.readAsDataURL(val.files[0]); // 1) 컨텐츠를 읽어오는 메서드
    }
};

imageInput.addEventListener("change", (e) => {
    uploadImg(e.target);
});
nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

// 스크립트가 처음 실행될 때 (페이지 로드) 이미지 위치 변경
window.onload = () => {
    changeTransform();
};
