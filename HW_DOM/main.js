(function () {
    var createForm = document.createElement('form');
    document.body.appendChild(createForm);
    createForm.setAttribute('name', 'login');
    createForm.setAttribute('action', 'google.com');

    var getForm = document.querySelector('form');

    function createInput() {
        var input,
            appInp;

        function inp(elem, setAtr, nameAtr, setAtr1, nameAtr1, setAtr2, nameAtr2) {
            input = document.createElement(elem);
            appInp = createForm.appendChild(input);
            appInp.setAttribute(setAtr, nameAtr);
            appInp.setAttribute(setAtr1, nameAtr1);
            appInp.setAttribute(setAtr2, nameAtr2);

        }

        inp('input', 'type', 'text', 'name', 'age', 'placeholder', 'age');
        inp('input', 'type', 'text', 'name', 'username', 'placeholder', 'user_*');
        inp('input', 'type', 'text', 'name', 'date', 'placeholder', '12/11/2017');

        input = document.createElement('input');
        appInp = createForm.appendChild(input);
        input.setAttribute('type', 'submit');
        input.setAttribute('value', 'Validate Me');

        function check() {
            getForm.addEventListener('submit', function (event) {
                var age = document.querySelector('form > input:first-child').value;
                if (!isNaN(age) && age > 0 && age <= 150) {
                } else {
                    alert('This must be number from 1 to 150!');
                    return event.preventDefault();
                }
            });
        }

        check();

    }

    createInput();

    function checkEmail() {
        // language=JSRegexp
        var reg = /^user_/;

        getForm.addEventListener('submit', function (event) {
            var email = document.querySelector('form input:nth-child(2)').value;

            if (!email.match(reg)) {
                alert('You must write username with "user_" at first!!');
                return event.preventDefault();
            }
        });
    }

    checkEmail();

    function valDate() {
        var reg = /\d\d\/\d\d\/\d\d\d\d/;

        getForm.addEventListener('submit', function () {
            var timeDate = document.querySelector('form input:nth-child(3)').value;

            if (timeDate.search(reg) !== -1) {
            } else {
                alert('Your data is invalid, please rewrite it!');
                return event.preventDefault();
            }

        });
    }

    valDate();
})();
