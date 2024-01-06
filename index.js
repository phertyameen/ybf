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


    document.addEventListener('DOMContentLoaded', function () {
        let newsletterForm = document.querySelector('#newsLetterForm');
        let newsletterInput = document.querySelector('#newsletterInput');
        let popUpParent = document.querySelector('#popUpParent');
        let exitMark = document.querySelector('#exitMark');

        console.log(newsletterForm)
        console.log(newsletterInput)
        console.log(popUpParent)
        console.log(exitMark)

        // Form submission handling
        newsletterForm.addEventListener('submit', (e) => {

            e.preventDefault();

            // Perform validation
            let emailInputValue = newsletterInput.value;
            if (isValidEmail(emailInputValue)) 
                {
                    showPopUp()
                    emailInputValue = ''
                }
            else {alert('Input a valid Email Address')}
        });

        // Close pop-up when exitMark is clicked
        exitMark.addEventListener('click', e => {exitPopUp()});

        // Email validation
        function isValidEmail(email) {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function exitPopUp() {
            popUpParent.style.animation = 'fadeOut 700ms ease-out';
            setTimeout(() => {
                popUpParent.style.display = 'none';
            }, 500);
        }
        
        function showPopUp() {
            popUpParent.style.animation = 'zoomIn 700ms ease-in';
            setTimeout(() => {
                popUpParent.style.display = 'flex';
            }, 500);
        }
    });