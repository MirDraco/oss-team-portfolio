const pages = [
    { keywords: ['메인', '홈', '결망'], url: 'index.html' },
    { keywords: ['팀원', '프로필', '소개'], url: 'members.html' },
    { keywords: ['포트폴리오', '프로젝트', '갤러리'], url: 'gallery.html' },
    { keywords: ['활동', '회의', '기록', '개발'], url: 'activity_log.html' },

    { keywords: ['송명근'], url: 'member-song.html' },
    { keywords: ['박민찬'], url: 'member-park.html' },
    { keywords: ['김동근'], url: 'member-kim.html' },
    { keywords: ['목인수'], url: 'member-mok.html' },
    { keywords: ['정에디'], url: 'member-chung.html' },
    { keywords: ['최윤하'], url: 'member-choi.html' }
];

const searchInput = document.querySelector('.search input');

if (searchInput) {
    searchInput.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter') {
            return;
        }

        const inputText = searchInput.value.trim();

        if (inputText === '') {
            alert('검색어를 입력해 주세요.');
            return;
        }

        for (let i = 0; i < pages.length; i++) {
            const keywords = pages[i].keywords;

            for (let j = 0; j < keywords.length; j++) {
                if (keywords[j].includes(inputText) || inputText.includes(keywords[j])) {
                    window.location.href = pages[i].url;
                    return;
                }
            }
        }

        alert('검색 결과가 없습니다. (예: 팀원, 포트폴리오, 활동 기록, 팀원 이름)');
    });
}
