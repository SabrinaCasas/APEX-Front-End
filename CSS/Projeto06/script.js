function pagina(nome){

    switch(nome){
        case "Início":
            window.location.assign("index.html");
        break;

        case "Sobre":
            window.location.assign("sobre.html");
        break;

        case "Professores":
            window.location.assign("professores.html");
        break;

        case "Blog":
            window.location.assign("blog.html");
        break;

        case "Contato":
            window.location.assign("contato.html");
        break;
    }

}