var arr = {},
    x_pointer = 0,
    y_pointer = 0;
$('#image').mousemove(function(event) {
    x_pointer = event.offsetX ? (event.offsetX) : event.pageX - $('#image')[0].offsetLeft;
    y_pointer = event.offsetY ? (event.offsetY) : event.pageY - $('#image')[0].offsetTop;
    $('#currentPoint').text(x_pointer + "x" + y_pointer);
});
$('#image').mousedown(function(ev) {
    var tmpKey = Math.random();
    arr[tmpKey] = [x_pointer, y_pointer]
    $("body").append($('<div></div>').css('top', (ev.pageY - 1) + 'px').css('left', (ev.pageX - 1) + 'px').addClass('redpoint').attr('tmpKey', tmpKey));
    $('#dataList').append($('<option>' + arr[tmpKey].toString() + '</option>').attr('tmpKey', tmpKey));
});
$("body").on('mouseenter', '.redpoint', function() {
    $(this).animate({
        left: "-=3",
        top: "-=3",
        width: "+=5",
        height: "+=5"
    }, 100);
});
$("body").on('mouseleave', '.redpoint', function() {
    $(this).animate({
        left: "+=3",
        top: "+=3",
        width: "-=5",
        height: "-=5"
    }, 100);
});
$("body").on('click', '.redpoint', function() {
    var tmpKey = $(this).attr('tmpKey')
    $("option[tmpKey='" + tmpKey + "']").remove()
    delete arr[tmpKey];
    $(this).remove();
});
$('#selectAll').click(function() {
    $('#dataList option').prop('selected', true);
});
$('#export').click(function() {
	var listArr = [];
	$.each(arr, function (key, val) {
		listArr.push(val.toString());
	});

	$('#exportedData').html(listArr.join('<br>'))
});