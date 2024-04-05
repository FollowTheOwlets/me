const ACTIVE = 'active';
const DEACTIVE = 'deactive';

const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const height = sections[0].offsetHeight;
let prevCurrent = 0;

const clear = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove(ACTIVE);
    }
};

main.addEventListener('scroll', () => {
    const current = Math.floor((+main.scrollTop + height / 2) / height);
    if (current === prevCurrent) return;
    prevCurrent = current;
    clear(sections);
    sections[Math.max(0, current)].classList.add(ACTIVE);
});

const projects = document.querySelectorAll('.projects__block');
const icons = document.querySelectorAll('.projects__icons-list .logo');
let prevProject = document.querySelector('.projects__block.active');

document.addEventListener('click', ({ target }) => {
    const { active } = target.dataset;

    if (!active) return;

    clear(projects);
    clear(icons);

    target.classList.add(ACTIVE);
    prevProject.classList.remove(ACTIVE);
    prevProject.classList.add(DEACTIVE);
    const temp = prevProject;

    setTimeout(() => {
        temp.classList.remove(DEACTIVE);
    }, 600);

    prevProject = document.querySelector(`.projects__block.${active}`);
    prevProject.classList.add(ACTIVE);
});

const createRipple = (event) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000);
};

document.addEventListener('mousemove', createRipple);
