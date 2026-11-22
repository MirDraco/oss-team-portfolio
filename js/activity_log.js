// 1. 카테고리 필터 버튼
const filterButtons = document.querySelectorAll('.filter-btn');
const sections = document.querySelectorAll('.activity-section');

filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const target = button.dataset.target;

        // 버튼 활성화 표시 바꾸기
        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // 선택한 영역만 보여주기
        sections.forEach(function (section) {
            if (target === 'all' || section.id === target) {
                section.hidden = false;
            } else {
                section.hidden = true;
            }
        });
    });
});

// 2. 회의록 펼치기 / 접기 버튼
const toggleButtons = document.querySelectorAll('.meeting-toggle');

toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const detailId = button.dataset.detail;
        const detail = document.getElementById(detailId);

        if (detail.hidden) {
            detail.hidden = false;
            button.textContent = '회의록 접기';
        } else {
            detail.hidden = true;
            button.textContent = '회의록 펼치기';
        }
    });
});
