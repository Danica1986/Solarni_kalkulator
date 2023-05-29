window.addEventListener('scroll', function () {
    var header = document.getElementById('main-header');
    var top = window.scrollY || document.documentElement.scrollTop;
    var button = document.querySelector('.back-to-top');

    if (top !== 0) {
        header.style.height = '90px';
        if (top > 250) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    } else {
        header.style.height = '140px';
        button.style.display = 'none';
    }
});

document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
