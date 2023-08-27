window.onload = function() {
    var lines = [
        "もし私と仕事を共にすることがあれば、",
        "私のことを少しでも知っていただけるよう、",
        "このポートフォリオを作成しました。",
        "Otherページでは、私自身について簡潔に説明しています。",
        "最後までご覧いただき、ありがとうございました。",
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


