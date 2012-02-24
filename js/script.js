$(document).ready(function(){

	// Montando a listagem dos estados de acordo com a categoria.
	$('input:radio[name=categoria]').on('click', function(){
		
		var estados = mostraEstado($(this).val());
		var optionsEstados = "<option value=''>Selecione o estado</option>";
		for (var i=0; i < estados.length; ++i) {
			optionsEstados += "<option value='"+estados[i]+"'>"+estados[i]+"</option>";
		}

		$("#slc_estado").html(optionsEstados);
	});

});

function mostraEstado(categoria) {

	var estados = new Array(
		'Bahia', 
		'Ceará', 
		'Distrito Federal', 
		'Espírito Santo', 
		'Goiás', 
		'Mato Grosso', 
		'Pará',
		'Paraná', 
		'Pernambuco', 
		'Rio de Janeiro', 
		'Rio Grande do Norte',
		'Rio Grande do Sul',
		'São Paulo');

	// Tratando exceção
	if(categoria == 'eventos') {
		var estados = new Array(
			'Bahia', 
			'Distrito Federal', 
			'Espírito Santo', 
			'Paraná', 
			'Pernambuco',
			'Rio de Janeiro', 
			'São Paulo');
	}

	return estados;
}