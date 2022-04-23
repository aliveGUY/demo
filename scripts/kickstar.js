const container = document.querySelector('.scroll_images');

fetch("../data/kickstar_data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {
        if(container != null) {
            const card = container.querySelector('.card');

            data.forEach((item) => {
                const aCard = card.cloneNode(true);

                fillValues(aCard, item);
                container.appendChild(aCard);
            });
            card.remove();
        }
    })

const fillValues = (card, data) =>{
    card.querySelector('.card_img').style.backgroundImage = `url(${data.Image})`;
    card.querySelector('.card_title').innerHTML = data.Title;
    card.querySelector('.card_description').innerHTML = data.Description;
}