var onClickDef = function (e) {
    var $el = e.target;
    e.preventDefault();

    $el.style.backgroundColor = 'yellow';
    alert('CLICK!');
    $el.style.backgroundColor = '';
};

document.body.onclick = onClickDef;
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
box1.onclick = onClickDef;
box2.onclick = onClickDef;
box3.onclick = onClickDef;



var onClickProp = function (e) {
    var $el = e.target;
    e.stopPropagation();

    $el.style.backgroundColor = 'yellow';
    alert('CLICK!');
    $el.style.backgroundColor = '';
};

document.body.onclick = onClickProp;
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
box4.onclick = onClickProp;
box5.onclick = onClickProp;
box6.onclick = onClickProp;