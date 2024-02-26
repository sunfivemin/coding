// 호버 상태에 따른 이미지 맵핑 객체
const starImageSourceMap = {
    empty: "./src/images/icon_empty_star.svg",
    half: "./src/images/icon_half_star.svg",
    full: "./src/images/icon_star.svg",
};

class StarPoint {
    constructor() {
        this.starContentElement = document.querySelector(".content-star");
        this.starBackgroundElement = this.starContentElement.querySelector(".star-background");
        this.starImages = this.starBackgroundElement.querySelectorAll("img");
        this.starPointResetButton = this.starContentElement.querySelector(".icon-star-delete");
        this.lockedStarPoint = false; // 별점 고정 상태를 알려주는 변수
    }

    setup() {
        this.bindEvents();
    }

    // 별점을 고정된 상태로 만들어 준다.
    lockStarPoint() {
        this.lockedStarPoint = true;
    }

    // 별점을 고정되어 있지 않은 상태로 만들어 준다.
    unLockedStarPoint() {
        this.lockedStarPoint = false;
    }

    // 별점의 상태를 반환한다.
    isLockedStarPoint() {
        return this.lockedStarPoint;
    }

    bindEvents() {
        // 마우스 무브 이벤트
        this.starBackgroundElement.addEventListener("mousemove", (e) => {
            // 별점이 고정되어 있다면 이벤트 핸들링 중지
            if (this.isLockedStarPoint()) {
                return;
            }

            // const target = e.target; const currentUserPoint = e.offsetX;구조분해할당
            // offsetX : 타겟 요소에서의 마우스 포인터의 X축
            const { target, offsetX: currentUserPoint } = e;

            const { point } = target.dataset;
            const starPointIndex = parseInt(point, 10) - 1; // 10진수처리 후 0번째 인덱스를 1번째 인덱스로 바꿈

            // const clientRects = target.getClientRects(); const starImageClientRect = clientRects[0]; 구조분해할당
            const [starImageClientRect] = target.getClientRects(); // 요소의 좌표와 크기에 대한 정보를 반환
            const starImageWidth = starImageClientRect.width;
            const isOverHalf = starImageWidth / 2 < currentUserPoint; // 마우스 포인터의 위치가 별점의 중간을 넘어서면 true

            this.renderStarPointImages({ drawableLimitIndex: starPointIndex, isOverHalf });
        });

        // 마우스 클릭시 별점 고정
        this.starBackgroundElement.addEventListener('click', () => this.lockStarPoint());

        // 리셋버튼 이벤트 할당
        this.starPointResetButton.addEventListener('click', () => {
            this.unLockedStarPoint();
            this.resetStarPointImages();
        });

        // 마우스 아웃 당시 별점이 고정상태가 아니라면 별점 초기화
        this.starBackgroundElement.addEventListener('mouseout', () => {
            !this.isLockedStarPoint() && this.resetStarPointImages();
        });
    }

    renderStarPointImages(payload = {}) {
        const { drawableLimitIndex = -1, isOverHalf = false } = payload; // 초기값 할당
        // NodeList !== Array.call을 통해서 함수를 호출하는 객체를 Array에서 NodeList 객체로 재할당
        Array.prototype.forEach.call(this.starImages, (starImage, index) => {

            // 현재 순환 순서보다 마우스가 호버된 별의 인덱스가 크다면 꽉찬별, 아니면 빈별을 채웁니다.
            let imageSource = index < drawableLimitIndex ? starImageSourceMap.full : starImageSourceMap.empty;

            // 현재 순환 순서와 마우스가 호버된 별의 인덱스가 같은 경우
            if(drawableLimitIndex === index) {
                imageSource = isOverHalf ? starImageSourceMap.full : starImageSourceMap.half;
            }

            // 현재 순환중인 이미지에 src값을 할당
            starImage.src = imageSource;
        });
    }

    // 별점 제거 함수
    resetStarPointImages() {
        this.renderStarPointImages();
    }
}

export default StarPoint;
