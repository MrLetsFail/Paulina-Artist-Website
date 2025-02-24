document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        if (window.innerWidth <= 768) {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');
            
            if (nav.classList.contains('active')) {
                setTimeout(() => {
                    navItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50 * index);
                    });
                }, 300);
            } else {
                navItems.forEach(item => {
                    item.style.opacity = '0';
                });
            }
        }
    }

    function resetMenu() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
            navItems.forEach(item => {
                item.style.opacity = '1';
            });
        }
    }

    burger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
                navItems.forEach(item => {
                    item.style.opacity = '0';
                });
            }
        });
    });

    window.addEventListener('resize', resetMenu);
    resetMenu(); // Initial call to set the correct state
});