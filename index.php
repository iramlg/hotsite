<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Golden Tulip</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="css/style.css" rel="stylesheet" />
</head>
<body>
    <div id="center">
        <div id="header">
        </div>
        <div id="categoria">
            <input type="radio" name="categoria" value="nupcias">Noite de núpcias
            <input type="radio" name="categoria" value="lua">Lua de Mel
            <input type="radio" name="categoria" value="eventos">Espaço para Eventos
        </div>
        <div id="bg1">
        </div>
        <div id="estado">
                <p>Escolha um estado</p>
                <form name="Menu">
                                <select id="slc_estado" name="slc_estado" size="1">
                    <option value="">Selecione primeiro a categoria</option>
                                </select>
                        </form>
        </div>
        <div id="bg2">
        </div>
        <div id="hoteis">
            <h2>Escolha um Hotel</h2>
                <ul>
                    <li>
                        <label for="gtrv1">
                            <p>Salvador - BA</p>
                            <img src="fotos/sp/grand_plaza.jpg">
                            <p>Golden Tulip Rio Vermelho</p>
                        </label>
                        <input type="radio" name="hoteis" id="gtrv1">
                    </li>
                    <li>
                        <label for="gtrv">
                            <p>Salvador - BA</p>
                            <img src="fotos/sp/grand_plaza.jpg">
                            <p>Golden Tulip Rio Vermelho</p>
                        </label>
                        <input type="radio" name="hoteis" id="gtrv">
                    </li>
                    <li>
                        <p>Salvador - BA</p>
                        <img src="fotos/sp/grand_plaza.jpg">
                        <p>Golden Tulip Rio Vermelho</p>
                        <input type="radio" name="hoteis">
                    </li>
                    <li>
                        <p>Salvador - BA</p>
                        <img src="fotos/sp/grand_plaza.jpg">
                        <p>Golden Tulip Rio Vermelho</p>
                        <input type="radio" name="hoteis">
                    </li>
                </ul>
        </div>
        <div id="bg3">
        </div>
        <div id="data">
                <label for="parametro4">Escolha a data</laber>
                <input type="text" name="parametro4" id="parametro4"></input>
                <label for="parametro5">Noites</laber>
                <input type="text" name="parametro5" id="parametro5"></input>
        </div>
        <div id="footer">
                <div>
                        <label for="nombre">Nome</label>
                        <input type="text" name="nombre" id="nombre"></input>
                </div>
                <div>
                        <label for="telefono">Fone</label>
                        <input type="text" name="telefono" id="telefono"></input>
                </div>
                <div>
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email"></input>
                </div>
                <div>
                        <input type="submit" value="Enviar">
                </div>
        </div>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</html>