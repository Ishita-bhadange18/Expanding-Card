const cardEls = document.querySelectorAll('.card'); 
let prevCard=cardEls[0];

cardEls.forEach ((card) => {
    card.addEventListener('click', () => {
    prevCard.classList.remove('active');
    card.classList.add('active');
    prevCard = card;
    })
})