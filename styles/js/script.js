document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
    
input.addEventListener('focus', function () {
  form.classList.add('form--active');
});
    
input.addEventListener('blur', function () {
  form.classList.remove('form--active');
});