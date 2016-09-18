function draw(str) {
	$('#debug').empty();
	var a = $('#resultados');
	$('#debug').append('<hr /><h2 style="color: #ccc; font-size:1.25rem">Return</h2>');

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

			if (typeof(data[i]) === 'object') {

				for (k in data[i]) {
					$('#debug_results').append(
						'<tr><td>' + i + '.' + k + '</td><td>' + data[i][k] + '</td>'
					);
				}
			} else {
				$('#debug_results').append(
					'<tr><td>' + i + '</td><td>' + data[i] + '</td>'
				);
			}
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

$('.quick').click(function(e){
	e.preventDefault();
	var valor = $(this).data('action');
	$('#sample').val(valor);
	draw($('#sample').val());
});


$('#ver').click(function(e) {
	e.preventDefault();
	draw($('#sample').val());
});