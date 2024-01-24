class TabSection {
    constructor() {
        this.tabWrapper = document.querySelector('.tab-wrapper');
        // 탭 요소 지정
        this.tabWrapperOffsetTop = document.querySelector('.tab-wrapper').offsetTop;
        // tabWrapper의 window 상 y 위치
        this.tabMenus = [...document.querySelectorAll('[data-tab-id]')];
        // 탭 버튼들을 배열로 호출
        this.sections = [...document.querySelectorAll('[data-section-id]')];
        // 섹션들을 배열로 호출
        this.init();
        // 초기화 함수?? 가 아니라 아래 기능 구현 기능 함수?
    }

    init() {
        this.sections = this.sections.map((el) => {
            return {
                el: el,
                id: el.getAttribute('data-section-id'),
                startPosition: el.offsetTop,
            };
        });

        this.tabMenus.forEach((el) => {
            el.addEventListener('click', () => this.moveTo(el.getAttribute('data-tab-id')));
        });

        window.addEventListener('scroll', () => {
            this.checkScrollPosition();
            this.fixedTabMenu();
        });

        return this;
    }

    checkScrollPosition() {
        if (this.isMove) return;

        this.sections.forEach((el) => {
            if (window.pageYOffset >= el.startPosition) {
                this.tabMenus.forEach((el2) => el2.classList.remove('active'));
                const activeButton = this.tabMenus.find((el2) => el2.getAttribute('data-tab-id') === el.id);
                activeButton.classList.add('active');
            }
        });
    }

    fixedTabMenu() {
        if (window.pageYOffset >= this.tabWrapperOffsetTop) {
            this.tabWrapper.classList.add('fixed');
        } else {
            this.tabWrapper.classList.remove('fixed');
        }
    }

    moveTo(idx) {
        try {
            this.isMove = true;

            this.tabMenus.forEach((el) => el.classList.remove('active'));
            const activeButton = this.tabMenus.find((el) => el.getAttribute('data-tab-id') === idx);
            activeButton.classList.add('active');

            gsap.to(window, {
                duration: 0.5,
                scrollTo: this.sections.find((el) => +el.id === +idx).startPosition - this.tabWrapper.offsetHeight,
                onComplete: () => {
                    this.isMove = false;
                },
            });
        } catch (err) {
            console.error(`section Id: ${idx}는 존재하지 않는 DOM입니다.`);
            console.log(err)
        }
    }
}
