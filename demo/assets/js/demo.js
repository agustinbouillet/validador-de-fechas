function draw(str) {
	$('#debug').empty();
	var a = $('#resultados');
	$('#debug').append('<h2>Return</h2>');

	d = new Fechas(str);

	if (d.isValid()) {

		a.html('<span class="valid">Válido</i>').fadeIn();
		data = d.getData();

		$('#fecha').text(data.day_tostring.abbr + ' ' + data.date + '/' + data.month + '/' + data.year);
		$('#read').val(data.date_format);

		// Muestro el resultado de getData().
		$('<table/>', {
			id: 'debug_results',
			class: 'debug',
		}).appendTo('#debug');

		for (i in data) {
			$('#debug_results').append(
				'<tr><td>' + i + '</td><td>' + data[i] + '</td>'
			);
		}

	} else {

		$('#debug').append('<p>False</p>');
		a.html('<span class="invalid">Inválido</i>').fadeIn();
	}
}

/**
 * Resetea el input.
 */
$('#sample').keydown(function() {
	$('#resultados').fadeOut();
	$('#debug').empty();
});

$('#ver').click(function(e) {
	e.preventDefault();
	draw($('#sample').val());
});