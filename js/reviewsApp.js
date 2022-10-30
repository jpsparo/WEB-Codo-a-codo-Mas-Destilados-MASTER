getReviews();

var comments = [
    {
        'comerce':"Sitio andino S.A",
        'comment':"Exelente atencion! El trato fue muy cordial y supieron resolver todas mis dudas. Los productos llegaron muy rapido."
    },
    {
        'comerce':"Mosku - beer store",
        'comment':"Productos variados y de gran calidad. Los recomeindo ampliamente"
    },
    {
        'comerce':"Parador nautico beer&food",
        'comment':"El precio mas competitivo en el mercado. El proceso de compra se desarrollo de manera muy rapida y eficaz. muy feliz de contar con uds."
    }
];

/* consumiendo api generadora de usuarios aleatorios https://randomuser.me/ */
function getReviews(){
    fetch("https://randomuser.me/api/?results=3")
    .then((results) => {
        return results.json();
    })
    .then((data)=>{
        console.log(data);
        let cards = document.getElementsByClassName('review');
        for(var i = 0; i < cards.length; i++){
            let thumb = cards[i].querySelector('.review__thumbnail');
            let name = cards[i].querySelector('.review__name');
            let comerce = cards[i].querySelector('.review__comerce');
            let comment = cards[i].querySelector('.review__comment');
            thumb.src = data.results[i].picture.large;
            thumb.alt = data.results[i].name.first + " " + data.results[i].name.last;
            name.textContent = data.results[i].name.first + " " + data.results[i].name.last;
            comerce.textContent = comments[i].comerce;
            comment.textContent = comments[i].comment;
        }
    })
}

