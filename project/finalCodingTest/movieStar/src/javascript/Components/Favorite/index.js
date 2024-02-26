class Favorite {
    // 생성자 함수 - 클래스가 인스턴스를 생성할 때 자동으로 실행되는 함수 (초기화 함수)
    constructor() {
        this.favoriteElement = document.querySelector('.content-favorite')
    }

    setup() {
        this.bindEvents();
    }

    bindEvents() {
        this.favoriteElement.addEventListener('click', (e) => {
            // event.composedPath() : 리스너의 이벤트 경로를 배열로 반환합니다. IE 지원 X
            const cPath = e.composedPath();
            // JavaScript에서 tagName 속성은 HTML 요소의 태그 이름을 대문자로 반환.
            const btnElement = cPath.find(el => el.tagName === 'BUTTON');

            // 없을 경우 return 해서 종료
            if (!btnElement) {
                return;
            }

            btnElement.classList.toggle('on');
        });
    }
}

export default Favorite;