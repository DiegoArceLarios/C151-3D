AFRAME.registerComponent("move-box",{
    schema:{
        moveX: {type: "number", default: 1},  
        moveY: {type: "number", default: 1}
    },
    tick: function(){ //activar mucho
        this.data.moveX += 0.01; 
        this.data.moveY -= 0.01; 
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX  
        pos.y = this.data.moveY
        this.el.setAttribute("postion",{x: pos.x, y: pos.y, z: pos.z})
        
    }
})