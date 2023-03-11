function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


async function dislike() {
    picture.src = "img/icons8-löschen-48.png";
    await delay(2000);
    picture.src = "img/placeholder.png";
}