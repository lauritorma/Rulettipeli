function buttonclick(){

    var panos = document.getElementById("input_number").value;

    if(isNaN(panos)){
        return vittuilu();
    }

    var kuolema = new Audio("./sounds/laukaus.mp3");
    var voitto = new Audio("./sounds/voitto.mp3")

    

    if(panos.length == 0){

        alert("Pitää arvata numero..jänishousu");
    }

    else if( panos < 1 || panos > 6 ){
        return vittuilu()
    
    
    function vittuilu (){

        var jarppi = Math.floor(Math.random()* 4);
        if(jarppi == 0){
            alert("Mene takaisin ykkösluokan matematiikantunnille\nkulkematta lähtöruudun kautta");
        }
        else if(jarppi == 1){
            alert("Osaatsä lukea :D");
        }

        else if(jarppi == 2){
            alert("SÄ PELAAT TÄTÄ PELII VÄÄRIN");
        }
        else{
            window.open('https://www.youtube.com/watch?v=Of5NP9S0pC0', '_blank');
        }
    }
    }

    else {
        return rollaus()
    }

    function rollaus(){

    

    
        if(panos == 1){
        
        var vertaus= 0;
        var tulos = arvontaA();

        function arvontaA() {
        var notRandomNumbers = [0, 1, 1, 1, 1, 1];
        var idx = Math.floor(Math.random() * notRandomNumbers.length);
        return notRandomNumbers[idx];
            }

        }
        
        else if(panos == 2){

        var vertaus = 0;
        var tulos  = arvontaB();

        function arvontaB() {
        var notRandomNumbers = [0, 0, 1, 1, 1, 1];
        var idx = Math.floor(Math.random() * notRandomNumbers.length);
        return notRandomNumbers[idx];
            }
        
        }
        else if(panos == 3){
        
        var vertaus = 0;
        var tulos = arvontaC();

        function arvontaC() {
        var notRandomNumbers = [0, 0, 0, 1, 1, 1];
        var idx = Math.floor(Math.random() * notRandomNumbers.length);
        return notRandomNumbers[idx];
            }
            
        }
        else if(panos == 4){

        var vertaus= 0;
        var tulos=arvontaD();
        
        function arvontaD() {
        var notRandomNumbers = [0, 0, 0, 0, 1, 1];
        var idx = Math.floor(Math.random() * notRandomNumbers.length);
        return notRandomNumbers[idx];
        }
                
        }
        else if(panos == 5){
        var vertaus = 0;
        var tulos = arvontaE();

        function arvontaE() {
        var notRandomNumbers = [0, 0, 0, 0, 0, 1];
        var idx = Math.floor(Math.random() * notRandomNumbers.length);
        return notRandomNumbers[idx];
            }
                    
        }

        else if(panos == 6){
            alert("Nyt on vähän heikot mahdollisuudet...");
            return rollaus;
        }



    console.log(tulos);

    if(vertaus == tulos ){
        
        kuolema.play();
        setTimeout(function(){alert("Nyt kävi huonosti....");},100);
    }
    
    
    else{
        voitto.play();
        setTimeout(function(){alert("Selvisit!");},100);
        
     }
}



}





