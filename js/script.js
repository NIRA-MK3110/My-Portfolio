window.onload = function() {
    var lines = [
        "ご訪問いただきありがとうございます。",
        "現在、Web制作を中心に取り組んでおり、",
        "IT関連のスキルを独学で学んでいます。",
        "長年の営業経験を活かし、新しいスキルを習得して",
        "キャリアを築くために日々学習しています。",
        "ぜひ私のポートフォリオをご覧ください。",
    ];

    var container = document.getElementById('fadein-animated-text');

    for (var i = 0; i < lines.length; i++) {
        var p = document.createElement('p');
        p.className = 'text';
        p.textContent = lines[i];
        container.appendChild(p);
    }

    var textElements = Array.from(document.getElementsByClassName('text'));
    var i = 0;

    function fadeInText() {
        if (i < textElements.length) {
            textElements[i].classList.add('fade-in');
            i++;
            setTimeout(fadeInText, 2000);
        }
    }

    fadeInText();
};









