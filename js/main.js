var body = document.querySelector("body");
            var elMenu = document.querySelector("#menu");
            var elOp1 = document.querySelector("#op1");
            var elOp2 = document.querySelector("#op2");
            var elOp3 = document.querySelector("#op3"); 
            var elContent = document.querySelector("#content")
            var elIcon = document.createElement('i');
            elIcon.setAttribute("class", "fa fa-close");
            elIcon.setAttribute("id", "close");


            function Animacao(){
                
            }


            elOp1.onclick =  function(e){
            // prevenção de recarregar a pagina
            e.preventDefault();

            // animação 
            if(elMenu.classList.contains('toggleUpMenu')){

            //exibição
            
                elContent.innerHTML = "";
                var elTexto = document.createElement('p');
                var txtElTexto = document.createTextNode("Refeição x");
                elTexto.appendChild(txtElTexto);
                elContent.appendChild(elTexto);

            }else{

                // removendo classe Down
                elMenu.classList.remove('toggleDownMenu');
                elContent.classList.remove('toggleDownContent');

                // adicionando classe Up
                elMenu.classList.toggle('toggleUpMenu');
                elContent.classList.toggle('toggleUpContent');
                elMenu.appendChild(elIcon);

                //exibição
                elContent.innerHTML = "";
                var elTexto = document.createElement('p');
                var txtElTexto = document.createTextNode("Refeição x");
                elTexto.appendChild(txtElTexto);
                elContent.appendChild(elTexto);
            }

             
            

            }   

            elOp2.onclick = function(e){
                // prevenção de recarregar a pagina
                e.preventDefault();

                // animação
                if(elMenu.classList.contains('toggleUpMenu')){

                    //exibição
                    elContent.innerHTML = "";
                    var elTexto = document.createElement('p');
                    var txtElTexto = document.createTextNode("Bebida x");
                    elTexto.appendChild(txtElTexto);
                    elContent.appendChild(elTexto);

                }else{

                    // removendo classe Down
                    elMenu.classList.remove('toggleDownMenu');
                    elContent.classList.remove('toggleDownContent');

                    // adicionando classe Up
                    elMenu.classList.toggle('toggleUpMenu');
                    elContent.classList.toggle('toggleUpContent');
                    elMenu.appendChild(elIcon);

                    //exibição
                    elContent.innerHTML = "";
                    var elTexto = document.createElement('p');
                    var txtElTexto = document.createTextNode("Bebida x");
                    elTexto.appendChild(txtElTexto);
                    elContent.appendChild(elTexto);
                }       
            }

            elOp3.onclick = function(e){
                // prevenção de recarregar a pagina
                e.preventDefault();

                // animação
                if(elMenu.classList.contains('toggleUpMenu')){

                    //exibição
                    elContent.innerHTML = "";
                    var elTexto = document.createElement('p');
                    var txtElTexto = document.createTextNode("Cerveja x");
                    elTexto.appendChild(txtElTexto);
                    elContent.appendChild(elTexto);

                }
                else {

                    // removendo classe Down
                    elMenu.classList.remove('toggleDownMenu');
                    elContent.classList.remove('toggleDownContent');

                    // adicionando classe Up
                    elMenu.classList.toggle('toggleUpMenu');
                    elContent.classList.toggle('toggleUpContent');
                    elMenu.appendChild(elIcon);

                    //exibição
                    elContent.innerHTML = "";
                    var elTexto = document.createElement('p');
                    var txtElTexto = document.createTextNode("Cerveja x");
                    elTexto.appendChild(txtElTexto);
                    elContent.appendChild(elTexto);
                }
            }

            elIcon.onclick = function(){
                if(elMenu.classList.contains('toggleUpMenu')){
                    // removendo classe Up
                    elMenu.classList.remove('toggleUpMenu');
                    elContent.classList.remove('toggleUpContent');

                    // Adicionando class Down
                    elMenu.classList.toggle('toggleDownMenu');
                    elContent.classList.toggle('toggleDownContent');
                    elMenu.removeChild(elIcon);
                }
                
            }
