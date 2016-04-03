//PART 1: WORKING: Creates an array of objects. Each object is a name of mountain with elevation and country.

function mountain(name, elevation, country, image) {
    this.name = name;
    this.elevation = elevation;
    this.country = country;
    this.image = image;
}
var aconcagua = new mountain("Aconcagua", 22841, "Argentina", "aconcagua.jpg");
var alpamayo = new mountain("Alpamayo", 19511, "Peru", "alpamayo.jpg");
var huascaran = new mountain("Huascaran", 22208, "Peru", "huascaran.jpg");
var antisana = new mountain("Antisana", 18709, "Ecuador", "antisana.jpg");
var cotopaxi = new mountain("Cotopaxi", 19344, "Ecuador", "cotopaxi.jpg");
var ojosDelSalado = new mountain("Ojos del Salado", 22615, "Chilean/Argentine border", "ojos_del_salado.jpg");
var nevadoSajama = new mountain("Nevado Sajama", 21463, "Bolivia", "nevado_sajama.jpg");
var chimborazo = new mountain("Chimborazo", 20565, "Ecuador", "chimborazo.jpg");
var huaynaPotosi = new mountain("Huayna Potosi", 19974, "Bolivia", "huayna_potosi.jpg");
var chacaltaya = new mountain("Chacaltaya", 17700, "Bolivia", "chacaltaya.jpg");
var fitzRoy = new mountain("Fitz Roy", 11020, "Argentina", "fitz_roy.jpg");

var tallMountains = [];
tallMountains.push(aconcagua, alpamayo, huascaran, antisana, cotopaxi, ojosDelSalado, nevadoSajama, chimborazo, huaynaPotosi, chacaltaya, fitzRoy);

//PART 2: WORKING: Prints every mountain, elevation and country on the same line.

var mountainList = function(mountainArray) {
    for (i=0; i<mountainArray.length; i++) {
        console.log(mountainArray[i].name + ", " + mountainArray[i].elevation + ", " + mountainArray[i].country);
    }
}
mountainList(tallMountains);


//PART 3: Drops div on page load.

$(document).ready(function(){
    $(".body_text").animate({ top: '+=100px'}, 1000 );
});

//PART 4: Finds the lowest and highest elevations in array.

function findShortestElevation() {
    var shortestElevation = null
    for (i=0; i<tallMountains.length; i++) {
        if (shortestElevation === null) {
            shortestElevation = tallMountains[i].elevation;
        } else if (shortestElevation > tallMountains[i].elevation) {
            shortestElevation = tallMountains[i].elevation;
        }
    }
    return shortestElevation;
};

function findTallestElevation() {
    var tallestElevation = null
    for (i=0; i<tallMountains.length; i++) {
        if (tallestElevation === null) {
            tallestElevation = tallMountains[i].elevation;
        } else if (tallestElevation < tallMountains[i].elevation) {
            tallestElevation = tallMountains[i].elevation;
        }
    }
    return tallestElevation;
};

//PART 5: Fades away opening div on click, and replaces with input div.

$(document).ready(function() {
    $("#button").click(function() {
        $("#opening_text").fadeOut("slow");
        setTimeout(function() {
            $("#closing_text").fadeIn("slow");
        }, 800);
    });
    document.getElementById("tallestElevationDisplay").innerHTML = findTallestElevation();
    document.getElementById("shortestElevationDisplay").innerHTML = findShortestElevation();
});

//PART 6: On user click, compares user input to array elevations and returns closest.

function myFunction() {
    var response = document.getElementById("elevationUserInput").value;
    var closestElevation = null;
    var closestMountain = null;
    var closestCountry = null;
    var closestImage = null;
            for (i=0; i<tallMountains.length; i++) {
                if (closestElevation === null) {
                    closestElevation = tallMountains[i].elevation;
                    closestMountain = tallMountains[i].name;
                    closestCountry = tallMountains[i].country;
                    closestImage = tallMountains[i].image;

                } else if (Math.abs(response - tallMountains[i].elevation) < Math.abs(response - closestElevation)) {
                    closestElevation = tallMountains[i].elevation;
                    closestMountain = tallMountains[i].name;
                    closestCountry = tallMountains[i].country;
                    closestImage = tallMountains[i].image;
                }
            }
            document.getElementById("closestElevationResponse").innerHTML = "Looks like you're climbing " + closestMountain + ", which is " + closestElevation + " feet tall and located in " + closestCountry + "!";
            console.log(closestImage);
            $("body").css('background-image', "url" + "(" + closestImage + ")");
};













/*OLD CODE BELOW
var findClosestElevation = function (mountainArray) {
        var response = prompt("How tall of a mountain do you want to climb today?", "In feet, with no commas, please!");
        var closestElevation = null;
        var closestMountain = null;
        for (i=0; i<mountainArray.length-1; i++) {
            if (closestElevation === null) {
                closestElevation = mountainArray[i].elevation;
                closestMountain = mountainArray[i].name;

            } else if (Math.abs(response - mountainArray[i].elevation) < Math.abs(response - closestElevation)) {
                closestElevation = mountainArray[i].elevation;
                closestMountain = mountainArray[i].name;
            }
            console.log(closestMountain, closestElevation);
        }
        console.log("Looks like you're climbing " + closestMountain + " , which is " + closestElevation + " feet tall!");
        alert("Looks like you're climbing " + closestMountain + " , which is " + closestElevation + " feet tall!");
};
*/