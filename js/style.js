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
