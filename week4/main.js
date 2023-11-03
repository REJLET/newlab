var cityContainer = document.getElementById("city-info");

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://vietteveaaa.github.io/F28WP-lab1/week4/cities1.json");
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ",</br> Where you can enjoy indoor places like: ";
        for (j = 0; j < data[i].places.indoor.length; j++) {
            if (j === 0) {
                htmlString += data[i].places.indoor[j];
            } else {
                htmlString += " and " + data[i].places.indoor[j];
            }
        }
        htmlString += " & enjoy outdoor places like: ";
        for (j = 0; j < data[i].places.outdoor.length; j++) {
            if (j === 0) {
                htmlString += data[i].places.outdoor[j];
            } else {
                htmlString += " and " + data[i].places.outdoor[j];
            }
        }
        htmlString += "</p>";
    }
    cityContainer.insertAdjacentHTML("beforeend", htmlString);
    btn.classList.add("hide-me");
}