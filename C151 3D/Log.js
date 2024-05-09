//Registrando el componente en log

AFRAME.registerComponent("log", {
    schema:{
        mensaje: {type: "string", default: "Hola"}

    }, init: function(){ //solo activar una vez
        console.log(this.data.mensaje)
    }
})


