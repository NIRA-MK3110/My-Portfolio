// バーガーメニュー
document.getElementById('hamburger-toggle').addEventListener('click', function() {
    var navigation = document.getElementById('main-navigation');
    var closeButton = document.getElementById('close-toggle');
    var menuButton = document.getElementById('hamburger-toggle');
    if (window.innerWidth >= 601 && window.innerWidth <= 960) { // タブレットサイズ
        navigation.style.display = 'flex';
        closeButton.style.display = 'block'; // 閉じるボタンを表示
        menuButton.style.display = 'none'; // メニューボタンを非表示
    } else if (window.innerWidth <= 600) { // モバイルサイズ
        navigation.style.display = 'block';
        closeButton.style.display = 'block'; // 閉じるボタンを表示
        menuButton.style.display = 'none'; // メニューボタンを非表示
    }
});

document.getElementById('close-toggle').addEventListener('click', function() {
    var navigation = document.getElementById('main-navigation');
    var closeButton = document.getElementById('close-toggle');
    var menuButton = document.getElementById('hamburger-toggle');
    navigation.style.display = 'none';
    closeButton.style.display = 'none'; // 閉じるボタンを非表示
    menuButton.style.display = 'block'; // メニューボタンを表示
});