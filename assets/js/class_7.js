function doSomething() {
    var fristNam = document.getElementById("fname").value;
    var lastNam = document.getElementById("lname").value;
    var emale = document.getElementById("emal").value;
    var numbr = document.getElementById("mbile").value;
    var colrs = document.getElementById("colors").value;
    var dated = document.getElementById("dates").value;
    var timtd = document.getElementById("times").value;


    document.getElementById("name").innerHTML = "Name: " + fristNam + " " + lastNam;
    document.getElementById("emailr").innerHTML = "Email: " + emale;
    document.getElementById("numebr").innerHTML = "Number: " + numbr;
    document.getElementById("colrsed").innerHTML = "Color Code: " + colrs;
    document.getElementById("datde").innerHTML = "Birth Date: " + dated;
    document.getElementById("timtede").innerHTML = "Birth Time: " + timtd;
};
