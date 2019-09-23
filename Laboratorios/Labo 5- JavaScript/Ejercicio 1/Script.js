function cuatro(numero){
    valores=[];
    var aleatorios;
    for(var i=0; i<20; i++){
        aleatorios= (Math.floor(Math.random()*100+1));
        valores.push(aleatorios);
    }
    for(var j=0; j<20; j++){
        if(numero===valores[j]){
            console.log("ganaste");
        }
        else{
            console.log("Perdiste");
        }
    }
    return valores;
}