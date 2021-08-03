var text, array_length, j;
var name_array = ["Amar", "Raja", "Rani"];
var place_array = ["Chennai", "Delhi", "Banglore"];
array_length = name_array.length;
text = '<table border="1" cellspacing="0" cellpadding="5">';
text += "<tr><th>Name</th><th>place</th></tr>";
for (j = 0; j < array_length; j++) {
    text += "<tr><td>" + name_array[j] + "</td><td>" + place_array[j] + "</td></tr>";
}
text += "</table>";
document.getElementById("div1").innerHTML = text;
