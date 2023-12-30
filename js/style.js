// アコーディオンのアクセシビリティ
document.addEventListener('DOMContentLoaded', function() {
    const accordionTitles = document.querySelectorAll('.accordion__title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', toggleAccordion);
        title.addEventListener('keydown', handleKeydown);
    });

    function toggleAccordion(event) {
        const content = event.target.nextElementSibling;
        const isExpanded = event.target.getAttribute('aria-expanded') === 'true';

        event.target.setAttribute('aria-expanded', !isExpanded);
        content.setAttribute('aria-hidden', isExpanded);
    }

    function handleKeydown(event) {
        let newIndex;
        const index = Array.from(accordionTitles).indexOf(event.target);

        switch (event.key) {
            case 'ArrowUp':
                newIndex = index - 1;
                break;
            case 'ArrowDown':
                newIndex = index + 1;
                break;
            case 'Enter':
            case ' ':
                toggleAccordion(event);
                return;
        }

        if (newIndex !== undefined) {
            event.preventDefault();
            accordionTitles[newIndex].focus();
        }
    }
});

// 画像要素を全て選択
const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const close = document.getElementsByClassName("close")[0];

// 各画像に対してクリックイベントを設定
images.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// クローズボタンのクリックイベントを設定
close.onclick = function() { 
    modal.style.display = "none";
}

