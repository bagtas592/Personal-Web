// Tabs
const buttons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.tab-section');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('visible'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('visible');
    });
});

// Dark mode
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    toggle.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '🌞';
});
