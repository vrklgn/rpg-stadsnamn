fetch('places.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data, null);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data, mask) {
    let mainContainer = document.getElementById("places");
    document.createElement("ol")
    mainContainer.innerHTML=""
    if (mask != null) {
        console.log("Filter is: " + mask)
        for (let i = 0; i < 10; i++) {
            let filteredPrefix = (data["prefix"]).filter(function (i) {
                return i.category.includes(mask) || i.category.includes("all")
            })
            let filteredSuffix = (data["suffix"]).filter(function (i) {
                return i.category.includes(mask) || i.category.includes("all")
            })
            let first = filteredPrefix[getRandomInt(filteredPrefix.length)].name;
            let last = filteredSuffix[getRandomInt(filteredSuffix.length)].name;
            let li = document.createElement("li");
            li.innerHTML = (first + last);
            mainContainer.appendChild(li);
        }

    } else {
        console.log("Filter is: " + mask)
        for (let i = 0; i < 10; i++) {
            let first = data["prefix"][getRandomInt(data["prefix"].length)]["name"];
            let last = data["suffix"][getRandomInt(data["suffix"].length)]["name"];
            let li = document.createElement("li");
            li.innerHTML = (first + last);
            mainContainer.appendChild(li);
        }
    }

}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function filterPlaces(filter){
    fetch('places.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data, filter);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}