(function () {
  function getUserName() {
    var userName = localStorage.getItem('user');

    if (!userName) {
      var userName = prompt('Please, enter your name!');
      localStorage.setItem('user', userName);
      var reg = userName.match(/\s/g);
      if (userName === null || userName === undefined || reg) {
        getUserName();
      }
    }
    var firstLetNameToUpperCase = userName.charAt(0).toUpperCase() + userName.slice(1);
    document.querySelector('.userName').innerHTML = firstLetNameToUpperCase;

    return firstLetNameToUpperCase;
  }

  getUserName();


  function defLang() {
    var getLang = localStorage.getItem('lang');
    var classVisible = document.querySelectorAll('#welcome-message span.lang-' + getLang) || document.querySelectorAll('.lang-ua');
    for (var l = 0; l < classVisible.length; l++) {
      classVisible[l].classList.add('visible');
    }
  }

  defLang();


  function saveLangToLocalStor(lang) {
    var btnSaveLang = document.querySelector('#btn');
    btnSaveLang.addEventListener('click', function () {
      localStorage.setItem('lang', lang);
    });
  }

  function saveNameToLocalStr() {
    var btnSave = document.querySelector('#btn');
    btnSave.addEventListener('click', function () {
      localStorage.setItem('user', getUserName());
    });
  }

  saveNameToLocalStr();

  var getAllInput = document.querySelectorAll('input');

  for (var i = 0; i < getAllInput.length; i++) {

    getAllInput[i].addEventListener('click', function () {
      var currentLang = document.querySelector('input[name = "lang"]:checked').id;
      var greetLangList = document.querySelectorAll('#welcome-message span.lang-' + currentLang);
      var elemWithClassVisible = document.querySelectorAll('.visible');
      saveLangToLocalStor(currentLang);

      for (var k = 0; k < elemWithClassVisible.length; k++) {
        elemWithClassVisible[k].classList.remove('visible');
      }

      for (var j = 0; j < greetLangList.length; j++) {
        greetLangList[j].classList.add('visible');
      }
    });
  }

})();

