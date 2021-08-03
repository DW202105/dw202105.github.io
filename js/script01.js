
$(document).ready(function (){
        console.log(navigator.geolocation)
        if(!navigator.geolocation){
            $("#coordenadas").html("Navegador sin Geolocalizacion.");
        }else{
            navigator.geolocation.getCurrentPosition(sucess, error);
        }

        function sucess(position){
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            $("#coordenadas").html("Latitud: " + latitud + 
                                        "º <br> Longitud: " + longitud + "º")

        }

        function error(){
            $("#coordenadas").html("Error en el proceso");
        }

    }
);
