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
