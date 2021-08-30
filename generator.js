fetch('places.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    let mainContainer = document.getElementById("places");
    document.createElement("ol")
    for (var i = 0; i < 10; i++) {
        let start = data[1]["starts"][getRandomInt(data[1]["starts"].length)];
        let end = data[0]["ends"][getRandomInt(data[0]["ends"].length)];
        let li = document.createElement("li");
        li.innerHTML = (start + end);
        mainContainer.appendChild(li);
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}