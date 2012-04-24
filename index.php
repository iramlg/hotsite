<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Golden Tulip</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="css/style.css" rel="stylesheet" />
<link href="js/jquery-ui-1.8.18.custom/css/redmond/jquery-ui-1.8.18.custom.css" rel="stylesheet" />
<link href="css/jquery.alerts.css" rel="stylesheet" />
</head>
<body>
    <div id="center">
        <div id="header">
        </div>
        <form id="form_hotel" name="form_hotel" method="post" action="http://www.bodaclick.com/grandes_cuentas/insert.php">
            <div id="categoria">
                <input type="radio" name="parametro1" value="Noite de Núpcias" id="nupcias"><label for="nupcias" class="cat1">Noite de Núpcias</label>
                <input type="radio" name="parametro1" value="Lua de Mel" id="lua"><label for="lua">Lua de Mel</label>
                <input type="radio" name="parametro1" value="Espaço para Eventos" id="eventos"><label for="eventos" class="cat3">Espaço para Eventos</label>
            </div>
            <div id="bg1">
            </div>
            <div id="estado">
                <p>Escolha um estado</p>
                    <select id="slc_estado" name="slc_estado" size="1">
                        <option value="">Selecione primeiro a categoria</option>
                    </select>
                    <input type="hidden" name="parametro2" id="parametro2"></input>
            </div>
            <div id="bg2">
            </div>
            <div id="hoteis">
                <h2>Escolha um Hotel</h2>
                    <ul id="lista_hoteis">
                        
                    </ul>
            </div>
            <div id="bg3">
            </div>
            <div id="data">
                    <label for="parametro4">Escolha a data</label>
                    <input type="text" name="parametro4" id="parametro4"></input>
                    <label for="parametro5">Noites</label>
                    <input type="text" name="parametro5" id="parametro5"></input>
            </div>
            <div id="footer">
                    <div class="for">
                            <label for="nombre">Nome</label>
                            <input type="text" name="nombre" id="nombre"></input>
                    </div>
                    <div class="for">
                            <label for="telefono">Fone</label>
                            <input type="text" name="telefono" id="telefono"></input>
                    </div>
                    <div class="for">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email"></input>
                    </div>
                    <div class="env">
                            <input type="hidden" name="ID" id="ID" value="3013">
                            <input type="hidden" name="UNIQUE_ID" id="UNIQUE_ID" value="GC156244f4795001a26c1.98049849">
                            <input type="hidden" name="retorno" id="retorno" value="index.php">
                            <input type="submit" id="btn_hotel" name="btn_hotel" value="Enviar">
                    </div>
            </div>
        </form>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="js/masked_input_plugin.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.18.custom/js/jquery-ui-1.8.18.custom.min.js"></script>
<script type="text/javascript" src="js/jquery.alerts.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</html>