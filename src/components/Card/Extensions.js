function CardBuy () {
    let stateBack = document.querySelector("#back");
    let stateFront = document.querySelector("#front");

    if (stateBack.style.display === 'none'){
        stateBack.style.display = 'block';
    }
    else{
        stateBack.style.display = 'none';
    }
    if (stateFront.style.display === 'none'){
        stateFront.style.display = 'block';
    }
    else{
        stateFront.style.display = 'none';
    }
}

export default CardBuy;