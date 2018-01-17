var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
    key = key.toLowerCase();

    if (platform.indexOf(key) >= 0) {
        if (navigator.platform === 'Win32') {
            var $name = document.querySelector('.download-message[data-version="windows"]');
            $name.classList.add('showMessage');
        } else if (navigator.platform === 'macos') {
            var $macOS = document.querySelector('.download-message[data-version="macos"]');
            $macOS.classList.add('showMessage');
        } else if (navigator.platform === 'macos') {
            var $linux = document.querySelector('.download-message[data-version="linux"]');
            $linux.classList.add('showMessage');
        } else {
            var $ubuntu = document.querySelector('.download-message[data-version="ubuntu"]');
            $ubuntu.classList.add('showMessage');
        }
    }
}
