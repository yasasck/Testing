
console.log("Helyaao World");

const circle = {
    radius : 1,
    isVisble : true,
    draw : function () {
        console.log("YAsass")
    
    },
    location : {
        a : 3,
        b : 6
    }
}
console.log(circle.location);

function createCircle (radius) {
    return {
        radius,
        draw() {
            console.log("YAsass")
        
        },
    }
}

const circle1 = createCircle(1);

console.log(circle1);

const  square = {

    radius : 1
}

square.diameter = 2;
square.tension = false;

delete square.radius;

console.log(square);