document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbarToggleIcon');
    console.log(navbarToggler)
    const navbarNav = document.querySelector('.navbarNav');
    console.log(navbarNav)

    function hideLists() {
        navbarNav.style.animation = 'fadeOut 700ms ease-out';
        setTimeout(() => {
            navbarNav.style.display = 'none';
        }, 500);
    }
    
    function showLists() {
        navbarNav.style.animation = 'zoomIn 700ms ease-in';
        setTimeout(() => {
            navbarNav.style.display = 'flex';
        }, 500);
    }
    function handleNavToggle() {
        if (navbarNav.style.display === 'flex') {
            hideLists()
        } else {
            showLists()
        }
    }
    navbarToggler.addEventListener('click', handleNavToggle);
});

const founderdiv = document.querySelector('.founderdiv')
const coFounderdiv = document.querySelector('.coFounderdiv')

founderdiv.addEventListener('mouseover', e => {
    coFounderdiv.style.display ='none'
    founderdiv.style.color ='#f6fcfe'

    founderdiv.addEventListener('mouseout', e => {
        coFounderdiv.style.display = ''
    });
})
coFounderdiv.addEventListener('mouseover', e => {
    founderdiv.style.display ='none'
    coFounderdiv.style.color = '#f6fcfe'

    // Handle mouseout for coFounderdiv
coFounderdiv.addEventListener('mouseout', e => {
    founderdiv.style.display = ''
});
})