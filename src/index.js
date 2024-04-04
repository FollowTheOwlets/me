const ACTIVE = 'active';

document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const main = document.querySelector('main');
    const height = sections[0].offsetHeight;
    let prevCurrent = 0;

    const clear = (sections) => {
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove(ACTIVE);
        }
    };

    main.addEventListener('scroll', () => {
        const current = Math.floor((+main.scrollTop + height / 2) / height);
        if (current === prevCurrent) return;
        prevCurrent = current;
        clear(sections);
        sections[Math.max(0, current)].classList.add(ACTIVE);
    });
});
