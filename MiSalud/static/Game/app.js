function iniciar_Game() {
    var cuadro = document.getElementById("my_canvas").getContext("2d"); //OBTENER ID DEL CUADRO
    var Fondo_Imagen  = new Image();
    var nave_Imagen = new Image();

    var enemy1 = new Image();
    var enemy2 = new Image();

    Fondo_Imagen.src = "img/background-pic_2.jpg";
    nave_Imagen.src = "img/spaceship-pic_3.png";

    //IMAGEN DE ENEMIGOS
    enemy1.src = "img/Virus_2.png";
    enemy2.src = "img/Virus_1.png";

    //OBTENIENDO COORDENADAS DE LA PANTALLA
    var cW = cuadro.canvas.width;
    var cH = cuadro.canvas.height;

    //OBTENER POSICION DEL ENEMIGO E IMAGEN DEL ENEMIGO
    var enemy_Position = function(enemi){
        return{
            id: enemi.id || '',
            x: enemi.x || '',
            y: enemi.y || '',
            w: enemi.w || '',
            h: enemi.h || '',
            imagen : enemi.imagen || enemy1
        }
    }

    //ARREGLO DE ENEMIGOS
    var Enemigos = [
        //PRIMERA LINEA DE ENEMIGOS
        new enemy_Position({id: "Enemigo 1", x: 100, y: -20, w: 50, h: 30 }),
        new enemy_Position({id: "Enemigo 2", x: 225, y: -20, w: 50, h: 30 }),
        new enemy_Position({id: "Enemigo 3", x: 350, y: -20, w: 80, h: 30 }),
        new enemy_Position({id: "Enemigo 4", x:100,  y:-70,  w:80,  h: 30}),
        new enemy_Position({id: "Enemigo 5", x:225,  y:-70,  w:50,  h: 30}),
        new enemy_Position({id: "Enemigo 6", x:350,  y:-70,  w:50,  h: 30}),
        new enemy_Position({id: "Enemigo 7", x:475,  y:-70,  w:50,  h: 30}),
        new enemy_Position({id: "Enemigo 8", x:600,  y:-70,  w:80,  h: 30}),
        new enemy_Position({id: "Enemigo 9", x:475,  y:-20,  w:50,  h: 30}),
        new enemy_Position({id: "Enemigo 10",x: 600, y: -20, w: 50, h: 30}),

        //SEGUNDA LINEA DE ENEMIGOS
        new enemy_Position({ id: "Enemigo 11", x: 100, y: -220, w: 50, h: 30, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 12", x: 225, y: -220, w: 50, h: 30, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 13", x: 350, y: -220, w: 80, h: 50, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 14", x: 100, y: -270, w: 80, h: 50, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 15", x: 225, y: -270, w: 50, h: 30, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 16", x: 350, y: -270, w: 50, h: 30, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 17", x: 475, y: -270, w: 50, h: 30, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 18", x: 600, y: -270, w: 80, h: 50, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 19", x: 475, y: -200, w: 50, h: 30, imagen: enemy2 }),
        new enemy_Position({ id: "Enemigo 20", x: 600, y: -200, w: 50, h: 30, imagen: enemy2 })
    ];

    //MOSTRAR ENEMIGOS
    var mostrar_enemigos = function(Enemigos_List){
        for(var i=0; i<Enemigos_List.length; i++){
            //var enemy = Enemigos_List[i]; //OBTENIENDO EL ENEMIGO
            cuadro.drawImage(Enemigos_List[i].imagen, Enemigos_List[i].x, Enemigos_List[i].y += .5, Enemigos_List[i].w, Enemigos_List[i].h); //AGREGANDO LA IMAGEN AL ENEMIGO

            Launcher.Final_Mundo(Enemigos_List[i]);

        }
    }

    //CREANDO LA FUNCION DEL JUGADOR 
    function Jugador(){
        this.y = 500,
        this.x = cW*.5 - 25,
        this.w = 100,
        this.h = 100,
        this.direccion,
        this.bg = "white", //COLOR DE LA BALA
        this.capsulas = [];

        //COMPROBAR EL ESTADO DEL JUEGO
        this.gameStatus = {
            over: false, //COMPROBAR SI SE ACABO
        }

        //MOSTRAR FONDO DE CUADRO
        this.render = function(){

            //DEFINIENDO LA DIRECCION
            if(this.direccion === 'left'){
                this.x -= 5;
            }
            else if(this.direccion === 'rigth'){
                this.x += 5;
            }

            cuadro.fillStyle = this.bg;
            cuadro.drawImage(Fondo_Imagen, 0, 0);
            cuadro.drawImage(nave_Imagen, this.x, this.y, 100, 90);

            //ANIMACION DE DISPAROS
            for(var i=0; i<this.capsulas.length; i++){
                var cap = this.capsulas[i]; //REFERENCIA A CADA BALA
                cuadro.fillRect(cap.x, cap.y -= 5, cap.w, cap.h); //COORDENADAS DE DIRECCION DE LA BALA

                this.danio(cap, i); //COLICION O DAÑO DE LA BALA

                if(cap.y <=0 ){
                    this.capsulas.splice(i, 1);
                }

            }

            //SI AUN HAY ENEMIGOS
            if(Enemigos.length === 0){
                clearInterval(animar_Interval);//DETENER EL JUEGO
                document.querySelector('.enemy').innerHTML = "¡HAZ GANADO! Pulsa la tecla 'SCAPE' para reiniciar el juego";
            }
        }

        this.danio = function(cap, mi){
            
            for(var i=0; i< Enemigos.length; i++){
                var e = Enemigos[i]; //OBTENIENDO CADA ENEMIGO

                //CALCULANDO LA COORDENADA DE LA BALA Y EL ENEMIGO
                if( (cap.x <= e.x + e.w) && (cap.x + cap.w >= e.x) &&
                    (cap.y >=e.y) && (cap.y <= e.y + e.h)){
                    Enemigos.splice(i, 1);
                    document.querySelector('.enemy').innerHTML = "DESTRUIDO "+e.id;
                }
            }
        }

        //COMPROBANDO EL FIN DEL JUEGO
        this.Final_Mundo = function(enemy){
            if(enemy.y > 550){//COMPROBANDO SI EL ENEMIGO LLEGO AL FINAL
                this.gameStatus.over = true;
                document.querySelector('.enemy').innerHTML = "¡HAN INVADIDO TU CUERPO! Pulsa la tecla 'SCAPE' para reiniciar el juego";
            }

            if((enemy.y < this.y +25) && (enemy.y > this.y-25) && (enemy.x < this.x+45 && enemy.x > this.x-45)){
                this.gameStatus.over = true;
                document.querySelector('.enemy').innerHTML = "¡TE HAZ INFECTADO! Pulsa la tecla 'SCAPE' para reiniciar el juego";
            }

            if(this.gameStatus.over === true){ //SI LA OTRA CONDICION ES VERDAD DETENER EL JUEGO
                clearInterval(animar_Interval);
                cuadro.fillStyle = this.gameStatus.fillStyle;
                cuadro.font = this.gameStatus.font;

                cuadro.fillText(this.gameStatus.mensaje, cW*.5, -80, 50);
            }
        }

    }

    var Launcher = new Jugador(); //CREANDO INSTANCIA DEL JUGADOR

    //ANIMAR ENEMIGOS
    function animar(){
        cuadro.clearRect(0, 0, cW, cH);
        Launcher.render();
        mostrar_enemigos(Enemigos); //MOSTRANDO TODOS LOS ENEMIGOS
    }
4
    //EVENTOS BOTONES DE TECLADO SI PULSAN

    //SI PULSA <= A LA IZQUIERDA
    document.addEventListener('keydown', function(event){
        if(event.keyCode == 37){
            Launcher.direccion = 'left'; //ESTABLECIENDO LA DIRECCION
            if(Launcher.x <= cW*.2-130){ //RESTRINGIENDO LA DIRECCION DE LA NAVE
                Launcher.x += 0;
                Launcher.direccion = '';
            }
        }
        
    });

    //SI NO PULSA <= A LA IZQUIERDA
    document.addEventListener('keyup', function(event){
        if(event.keyCode == 37){
            Launcher.x += 0;
            Launcher.direccion = '';
        }
        
    });
    
    //SI PULSA => DERECHA
    document.addEventListener('keydown', function(event){
        if(event.keyCode === 39){
            Launcher.direccion = 'rigth'; //ESTABLECIENDO LA DIRECCION
            if(Launcher.x > cW-110){ //RESTRINGIENDO LA DIRECCION DE LA NAVE
                Launcher.x -= 0;
                Launcher.direccion = '';
            }
        }
        
    });

    //SI NO PULSA => A LA DERECHA
    document.addEventListener('keyup', function(event){
        if(event.keyCode === 39){
            Launcher.x += 0;
            Launcher.direccion = '';
        }
        
    });

    //REINICIO DEL JUEGO
    document.addEventListener('keydown', function(event){
        if(event.keyCode === 27){
            this.location.reload();
        }
        
    });

    var animar_Interval = setInterval(animar, 6); //LLAMADO A LA FUNCION ANIMAR

    //OBTENIENDO LOS ID DE LOS BOTONES
    var boton_izq = document.getElementById('bt_izq');
    var boton_der = document.getElementById('bt_der');
    var boton_fire = document.getElementById('bt_disparo');

    //------- EVENTOS BOTONES DE MOUSE --------------

    //SI PULSA BOTON IZQUIERDO
    boton_izq.addEventListener('mousedown', function(){
        Launcher.direccion = 'left';
    });

    //SI NO PULSA BOTON IZQUIERDO
    boton_izq.addEventListener('mouseup', function(){
        Launcher.direccion = '';
    });


     //SI PULSA BOTON DERECHO
     boton_der.addEventListener('mousedown', function(){
        Launcher.direccion = 'rigth';
    });

    //SI NO PULSA BOTON IZQUIERDO
    boton_der.addEventListener('mouseup', function(){
        Launcher.direccion = '';
    });

     //SI PULSA SPACE
    document.addEventListener('keydown', function(event){
        if(event.keyCode === 32){
            Launcher.capsulas.push({
                x: Launcher.x + Launcher.w *.5,
                y: Launcher.y,
                w: 3,
                h: 10
            })
        }
    });

    
    //SI PULSA BOTON DISPARO
    boton_fire.addEventListener('mousedown', function(){
        Launcher.capsulas.push({
            x: Launcher.x + Launcher.w *.5,
            y: Launcher.y,
            w: 3,
            h: 10
        })
    });

    //SI NO PULSA BOTON DISPARO
    boton_fire.addEventListener('mouseup', function(){
        Launcher.direccion = '';
    });


}

/* INICIAR EL JUEGO UNA VEZ CARGUE LA PAGINA */
window.addEventListener('load', function(event){
    iniciar_Game();
});