// lodash add with bower
var arr = [1];
var other = _.concat(arr, 2, [3], [[4]]);

//jquery add with bower

$("p").click(function () {
  var htmlString = $(this).html();
  $(this).text(alert(other));
});

//moment add with bower
setInterval(function () {
  $("#time").show('slow', function () {
    $(this).html(moment().format('LTS') + '\n');
  });

}, 100);

//numeral add with bower
var string = numeral(10000).format('Oa');
console.log(string);

