$(document).ready(function(){

    // Setando configuração do datepicker para pt-BR
    $.datepicker.regional['pt'] = {
        closeText: 'Fechar',
        prevText: '&#x3c;Anterior',
        nextText: 'Seguinte',
        currentText: 'Hoje',
        monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
        'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
        'Jul','Ago','Set','Out','Nov','Dez'],
        dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&aacute;bado'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],
        dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],
        weekHeader: 'Sem',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['pt']);

    $("#telefono").mask("(99) 9999-9999");
    $("#parametro4").datepicker();

    // Montando a listagem dos estados de acordo com a categoria.
    $('input:radio[name=parametro1]').on('click', function(){

        $("#lista_hoteis").fadeOut();
        
        var estados = mostraEstado($(this).val());
        var optionsEstados = "<option value=''>Selecione o estado</option>";
        for (var i=0; i < estados.length; ++i) {
            optionsEstados += "<option value='"+estados[i]+"#"+i+"'>"+estados[i]+"</option>";
        }

        $("#slc_estado").html(optionsEstados);
    });

    // Montando a listagem dos hóteis
    $("#slc_estado").change(function(){
        var dataEstado = $(this).val().split("#");
        $("#parametro2").val(dataEstado[0]);
        var hoteis = mostraHoteis($('input[name=parametro1]:radio:checked').val(), dataEstado[1]);
        var listaHoteis = "";
        for (var i=0; i < hoteis.length; ++i) {
            listaHoteis += '<li><input type="radio" name="parametro3" id="gt'+i+'" value="'+hoteis[i].nome+'"><label for="gt'+i+'"><p>'+hoteis[i].cidade+' - '+hoteis[i].estado+'</p><img src="fotos/'+hoteis[i].foto+'"><p>'+hoteis[i].nome+'</p></label></li>';
        }

        $("#lista_hoteis").fadeOut(function(){
            $(this).html(listaHoteis).fadeIn();
        });
    });

    $('#form_hotel').validate({
        rules: { 
            parametro1: { required: true},
            parametro2: { required: true},
            parametro3: { required: true},
            parametro4: { required: true},
            parametro5: { required: true},
            nombre: { required: true},
            telefono: { required: true},
            email: { required: true, email: true}
        }, messages: {
            parametro1: "O campo Categoria é obrigatório.",
            parametro2: "O campo Estado é obrigatório.",
            parametro3: "Selecione 1 hotel.",
            parametro4: "O campo Data é obrigatório.",
            parametro5: "O campo Noites é obrigatório",
            nombre: "Informe um nome.",
            telefono: "Informe um telefone.",
            email: "Informe um e-mail válido.",

        },
        submitHandler: function(form) {
            $("#form_hotel").submit();
        }
    });

});

function mostraEstado(categoria) {

    var estados = [
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
        'São Paulo'
    ];

    // Tratando exceção
    if(categoria == 'Espaço para Eventos') {
        var estados = [
            'Bahia', 
            'Distrito Federal', 
            'Espírito Santo', 
            'Paraná', 
            'Pernambuco',
            'Rio de Janeiro', 
            'São Paulo'
        ];
    }

    return estados;
}

function mostraHoteis(categoria, estado_id) {
    
    var hoteis = [
        [ // Bahia
            {'nome': 'Golden Tulip Rio Vermelho', 'cidade': 'Salvador', 'estado': 'BA', 'foto': 'ba/GT_Rio_Vermelho.jpg'},
            {'nome': 'Tulip Inn Centro de Convenções', 'cidade': 'Salvador', 'estado': 'BA', 'foto': 'ba/TI_Centro_de_Convencoes.jpg' }
        ],
        [ // Ceará
            {'nome': 'Golden Tulip Iate Plaza', 'cidade': 'Fortaleza', 'estado': 'CE', 'foto': 'ce/GT_Iate_Plaza.jpg'},
            {'nome': 'Tulip Inn Saint Martin', 'cidade': 'Fortaleza', 'estado': 'CE', 'foto': 'ce/TI_Saint_Martin.jpg' }
        ],
        [ // Distrito Federal
            {'nome': 'Royal Tulip Brasília Alvorada', 'cidade': 'Brasília', 'estado': 'DF', 'foto': 'df/RT_Brasilia.jpg'},
            {'nome': 'Golden Tulip Brasília Alvorada', 'cidade': 'Brasília', 'estado': 'DF', 'foto': 'df/GT_Brasilia.jpg' }
        ],
        [ // Espírito Santo
            {'nome': 'Golden Tulip Porto Vitória', 'cidade': 'Vitória', 'estado': 'ES', 'foto': 'es/GT_Porto_Vitoria.jpg'}
        ],
        [ // Goiás
            {'nome': 'Address West Side', 'cidade': 'Goiânia', 'estado': 'GO', 'foto': 'go/Address_westside.jpg'}
        ],
        [ // Mato Grosso
            {'nome': 'Golden Tulip Pantanal', 'cidade': 'Cuiabá', 'estado': 'MT', 'foto': 'mt/GT_Pantanal.jpg'}
        ],
        [ // Pará
            {'nome': 'Tulip Inn Batista Campos', 'cidade': 'Belém', 'estado': 'PA', 'foto': 'pa/TI_Batista_Campos.jpg'},
            {'nome': 'Tulip Inn Nazaré', 'cidade': 'Belém', 'estado': 'PA', 'foto': 'pa/TI_Nazare.jpg'},
            {'nome': 'Golden Tulip Belém', 'cidade': 'Belém', 'estado': 'PA', 'foto': 'pa/GT_Belem.jpg'},
            {'nome': 'Soft Inn Batista Campos', 'cidade': 'Belém', 'estado': 'PA', 'foto': 'pa/softInn_Batista.jpg'}
        ],
        [ // Paraná
            {'nome': 'Tulip Inn Batel', 'cidade': 'Curitiba', 'estado': 'PR', 'foto': 'pr/TI_Batel.jpg'},
            {'nome': 'Tulip Inn Santa Felicidade', 'cidade': 'Curitiba', 'estado': 'PR', 'foto': 'pr/TI_santa_felicidade.jpg'},
            {'nome': 'Tulip Inn São José dos Pinhais', 'cidade': 'São José dos Pinhais ', 'estado': 'PR', 'foto': 'pr/TI_Sao_jose_dos_pinhais.jpg'},
            {'nome': 'Tulip Inn Campo Largo', 'cidade': 'Campo Largo', 'estado': 'PR', 'foto': 'pr/TI_Campo_Largo.jpg'},
            {'nome': 'Golden Tulip Internacional Foz', 'cidade': 'Foz do Iguaçu', 'estado': 'PR', 'foto': 'pr/GT_Foz.jpg'}
        ],
        [ // Pernambuco
            {'nome': 'Golden Tulip Recife Palace', 'cidade': 'Recife', 'estado': 'PE', 'foto': 'pe/GT_recife_palace.jpg'}
        ],
        [ // Rio de Janeiro
            {'nome': 'Golden Tulip Regente', 'cidade': 'Rio de Janeiro', 'estado': 'RJ', 'foto': 'rj/GT_Regente.jpg'},
            {'nome': 'Golden Tulip Continental', 'cidade': 'Rio de Janeiro', 'estado': 'RJ', 'foto': 'rj/GT_Continental.jpg'},
            {'nome': 'Golden Tulip Porto Bali', 'cidade': 'Angras dos Reis', 'estado': 'RJ', 'foto': 'rj/GT_Porto_Bali.jpg'},
            {'nome': 'Tulip Inn Copacabana', 'cidade': 'Rio de Janeiro', 'estado': 'RJ', 'foto': 'rj/TI_Copacabana.jpg'},
            {'nome': 'Royal Tulip Rio de Janeiro', 'cidade': 'Rio de Janeiro', 'estado': 'RJ', 'foto': 'rj/RT_Rio.jpg'}
        ],
        [ // Rio Grande do Norte
            {'nome': 'Golden Tulip Interatlântico', 'cidade': 'Natal', 'estado': 'RN', 'foto': 'rn/GT_interatlantico.jpg'}
        ],
        [ // Rio Grande do Sul
            {'nome': 'Tulip Inn Centro Histórico', 'cidade': 'Porto Alegre', 'estado': 'RS', 'foto': 'rs/TI_Centro_Historico.jpg'}
        ],
        [ // São Paulo
            {'nome': 'Golden Tulip Belas Artes', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/GT_Belas_Artes.jpg'},
            {'nome': 'Golden Tulip Paulista Plaza', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/GT_Paulista_Convention.jpg'},
            {'nome': 'Golden Tulip Park Plaza', 'cidade': 'São Paulo ', 'estado': 'SP', 'foto': 'sp/GT_Park_Plaza.jpg'},
            {'nome': 'Tulip Inn Interative', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/TI_Interative.jpg'},
            {'nome': 'Tulip Inn Paulista Convention', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/TI_Paulista_Convention.jpg'},
            {'nome': 'Grand Plaza', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/grand_plaza.jpg'},
            {'nome': 'Luz Plaza', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/Luz_Plaza.jpg'},
            {'nome': 'Hampton Park', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/Hampton.jpg'}
        ],
    ];

    if(categoria == 'Espaço para Eventos') {

        var hoteis = [
            [ // Bahia
                {'nome': 'Golden Tulip Rio Vermelho', 'cidade': 'Salvador', 'estado': 'BA', 'foto': 'ba/GT_Rio_Vermelho.jpg'},
            ],
            [ // Distrito Federal
                {'nome': 'Royal Tulip Brasília Alvorada', 'cidade': 'Brasília', 'estado': 'DF', 'foto': 'df/RT_Brasilia.jpg'},
            ],
            [ // Espírito Santo
                {'nome': 'Golden Tulip Porto Vitória', 'cidade': 'Vitória', 'estado': 'ES', 'foto': 'es/GT_Porto_Vitoria.jpg'}
            ],
            [ // Paraná
                {'nome': 'Golden Tulip Internacional Foz', 'cidade': 'Foz do Iguaçu', 'estado': 'PR', 'foto': 'pr/GT_Foz.jpg'}
            ],
            [ // Pernambuco
                {'nome': 'Golden Tulip Recife Palace', 'cidade': 'Recife', 'estado': 'PE', 'foto': 'pe/GT_recife_palace.jpg'}
            ],
            [ // Rio de Janeiro
                {'nome': 'Royal Tulip Rio de Janeiro', 'cidade': 'Rio de Janeiro', 'estado': 'RJ', 'foto': 'rj/RT_Rio.jpg'}
            ],
            [ // São Paulo
                {'nome': 'Golden Tulip Paulista Plaza', 'cidade': 'São Paulo', 'estado': 'SP', 'foto': 'sp/GT_Paulista_Convention.jpg'},
            ],
        ];
    }

    return hoteis[estado_id];
    
}