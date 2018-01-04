var onClick = function (e) {
    var $el = e.target;
    e.stopPropagation();

    $el.style.backgroundColor = 'yellow';
    alert('CLICK!');
    $el.style.backgroundColor = '';
};

document.body.onclick = onClick;
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;