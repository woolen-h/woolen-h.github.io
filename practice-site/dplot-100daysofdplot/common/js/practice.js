class TabSection {
    constructor() {
        this.tabWrapper = document.querySelector('.tab-wrapper');
        // 탭 요소 지정 변수, class 문법에서는 this를 각 객체마다 붙인다.
        this.tabWrapperOffsetTop = document.querySelector('.tab-wrapper').offsetTop;
        // 탭 요소의 window 상 위치값 Y 변수
        this.tabMenus = [...document.querySelectorAll('[data-tab-id]')];
        // 탭 버튼들을 배열로 호출(data-tab-id 속성을 가지고 있는 요소를 모두 호출)
        // [...셀렉터all] 의 구성은 nodelist로 호출된 객체를 배열로 바꿔주는 방법

        // 위 구성 사용하지 않을 시 nodelist로 호출된 객체를 배열로 바꿔주는 과정을 거쳐야함
        // this.tabMenusNodelist = document.querySelectorAll('[data-tab-id]');
        // this.tabMenus = Array.from(tabMenusNodelist);

        this.sections = [...document.querySelectorAll('[data-section-id]')];
        // 섹션들을 배열로 호출(data-section-id 속성을 가지고 있는 요소를 모두 호출)
        // [...셀렉터all] 의 구성은 nodelist로 호출된 객체를 배열로 바꿔주는 방법

        // 위 구성 사용하지 않을 시 nodelist로 호출된 객체를 배열로 바꿔주는 과정을 거쳐야함
        // this.sectionsNodelist = document.querySelectorAll('[data-section-id]');
        // this.sections = Array.from(sectionsNodelist);

        this.init();
        // 기능 모아서 호출하는 함수
    } // 기본 구성 constructor 

    init() {
        this.sections = this.sections.map((el) => {
            // map 함수로 속성값 return
            el.addEventListener('click', () => this.moveTo(el.getAttribute('data-tab-id')));

        })
    } // init 함수
    checkScrollPosition() {} // 지정된 섹션으로 스크롤 이동 시 tab 버튼에 active 클래스를 추가하는 함수
    fixedTabMenu() {} // fixed 클래스를 추가 및 제거하여 tab-wrapper가 일정 범위를 넘어가면 fixed 상태가 될 수 있게 기능하는 함수

    // idx 별로 이동하는 함수
    moveTo(idx) {} // 지정된 섹션으로 스크롤 이동하는 함수
} // class는 한 덩어리로 만들어짐