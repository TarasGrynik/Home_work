(function () {
    function getUserName() {
        var userName = prompt('Please, enter your name!', 'username');
        if (userName === null || userName === undefined || userName == '') {
            getUserName();
        }
        localStorage.setItem('userName', JSON.stringify(userName));
        var userWithLocalStorage = JSON.parse(localStorage.getItem('userName'));
        var changeUserName = userWithLocalStorage.charAt(0).toUpperCase() + userWithLocalStorage.slice(1) + ' ,';
        document.querySelector('.userName').innerHTML = changeUserName;
    }

    getUserName();

    var applyLanguage = function (lang) {
        // alert('Now language is: ' + lang);
    };

    function defLang() {
        var classVisible = document.querySelectorAll('.lang-ua');

        for (var k = 0; k < classVisible.length; k++) {
            classVisible[k].classList.add('visible');
        }
    }

    defLang();

    var getAllInput = document.querySelectorAll('input');

    for (var i = 0; i < getAllInput.length; i++) {

        getAllInput[i].addEventListener('click', function () {
            var currentLang = document.querySelector('input[name = "lang"]:checked').id;
            var greetLangList = document.querySelectorAll('#welcome-message span.lang-' + currentLang);
            var elemWithClassVisible = document.querySelectorAll('.visible');

            applyLanguage(currentLang);

            for (var k = 0; k < elemWithClassVisible.length; k++) {
                // console.log(elemWithClassVisible[k]);
                elemWithClassVisible[k].classList.remove('visible');
            }

            for (var j = 0; j < greetLangList.length; j++) {
                greetLangList[j].classList.add('visible');
            }

        });
    }

})();

