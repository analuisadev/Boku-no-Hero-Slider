const btnNext = document.getElementById('btn__next');
const btnBack = document.getElementById('btn__back');
const card = document.querySelectorAll('.BKHList__card');
let ActualCard = 0;


function HideSelectedCard () {
    const SelectedCard = document.querySelector('.card__select');
    SelectedCard.classList.remove('card__select');
}

function showCard(indiceCard) {
    card[indiceCard].classList.add('card__select');
}

btnNext.addEventListener('click', function () {

    if(ActualCard === card.length -1) {
        return;
    }

    HideSelectedCard();
    ActualCard ++ ;
    showCard(ActualCard);
});

btnBack.addEventListener('click', function () {

    if (ActualCard === 0) {
        return;
    }

    HideSelectedCard();

    
    ActualCard -- ;
    showCard(ActualCard);
});