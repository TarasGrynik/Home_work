var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0) {
        if (navigator.platform === 'Win32') {
            var $name = document.querySelector('.download-message[data-version="windows"]');
            $name.classList.add('showMessage');
        } else {
            var $macOS = document.querySelector('.download-message[data-version="macos"]');
            $macOS.classList.add('showMessage');
        }
    }
}
