// 다크 모드
function updateThemeButton() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return false;

    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        themeBtn.setAttribute('aria-label', '라이트 모드로 전환');
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        themeBtn.setAttribute('aria-label', '다크 모드로 전환');
    }
    return true;
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// nav.html이 fetch로 나중에 불러와져도 버튼 아이콘 맞추기
if (!updateThemeButton()) {
    let count = 0;
    const checkBtn = setInterval(function () {
        count++;
        if (updateThemeButton() || count >= 30) {
            clearInterval(checkBtn);
        }
    }, 100);
}

// 버튼 클릭 시 다크 모드 <-> 라이트 모드 번갈아 전환
document.addEventListener('click', function (event) {
    const btn = event.target.closest('#theme-toggle');
    if (btn) {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeButton();
    }
});

const searchPages = [
    { keywords: ['메인', '홈', '결망'], url: 'index.html' },
    { keywords: ['팀 소개', '소개'], url: 'team.html' },
    { keywords: ['팀원', '프로필', '멤버'], url: 'members.html' },
    { keywords: ['포트폴리오', '프로젝트', '갤러리'], url: 'gallery.html' },
    { keywords: ['활동', '회의', '기록', '개발'], url: 'activity_log.html' },
    { keywords: ['faq', '질문', '문의'], url: 'faq.html' },

    { keywords: ['송명근'], url: 'member-song.html' },
    { keywords: ['박민찬'], url: 'member-park.html' },
    { keywords: ['김동근'], url: 'member-kim.html' },
    { keywords: ['목인수'], url: 'member-mok.html' },
    { keywords: ['정에디'], url: 'member-chung.html' },
    { keywords: ['최윤하'], url: 'member-choi.html' }
];

document.addEventListener('keydown', function (event) {
    if (!event.target.matches('.search input')) {
        return;
    }

    if (event.key !== 'Enter') {
        return;
    }

    const inputText = event.target.value.trim().toLowerCase();

    if (inputText === '') {
        alert('검색어를 입력해 주세요.');
        return;
    }

    for (let i = 0; i < searchPages.length; i++) {
        const keywords = searchPages[i].keywords;

        for (let j = 0; j < keywords.length; j++) {
            const word = keywords[j].toLowerCase();
            if (word.includes(inputText) || inputText.includes(word)) {
                window.location.href = searchPages[i].url;
                return;
            }
        }
    }

    alert('검색 결과가 없습니다. (예: 팀원, 포트폴리오, 활동 기록, FAQ, 팀원 이름)');
});
