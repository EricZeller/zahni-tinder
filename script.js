function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


async function dislike() {
    picture.src = "img/placeholder_red.png";
    await delay(1500);
    picture.src = "img/placeholder.png";
}

async function like() {
    picture.src = "img/placeholder_green.png";
    await delay(1500);
    picture.src = "img/placeholder.png";
}

