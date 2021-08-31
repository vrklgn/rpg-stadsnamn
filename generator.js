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
    for (let i = 0; i < 10; i++) {
        let first = Object.keys(data["prefix"][getRandomInt(data["prefix"].length)]);
        let last = Object.keys(data["suffix"][getRandomInt(data["suffix"].length)]);
        let li = document.createElement("li");
        li.innerHTML = (first + last);
        mainContainer.appendChild(li);
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}