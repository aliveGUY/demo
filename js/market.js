const allItems = document.querySelector(".allItems");

let itemsArr = [];

console.log(itemsArr)

async function GetAllItems() {
    await fetch('../data/market_data.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            data.items.forEach(i => {
                itemsArr.push(i);
            });
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

GetAllItems();

window.addEventListener("load", function(e){
    e.preventDefault();
    itemsArr.forEach(i => {
        allItems.innerHTML += "<div class='itemDesc'>" +
                          "<img src='../"+ i.img + "'/>" +
                          "<p>"+i.description+"</p>" +
                          "</div>"
    });
})

