import $ from 'jquery';

const character = $("<div></div>");
character.addClass('character');

$("body").append(character);

let dy = 0;
let dx = 0;
let g = 4;
let x = 0;

setInterval(() => {
    character.css('left', `${character.position().left + dx}px`);
    if ((character.position().top + character.outerHeight()) < innerHeight) {
        dy += g;
        character.css('top', `${character.position().top + dy}px`);
    } else {
        dy = 0;
        character.css('top', `${innerHeight - character.outerHeight()}px`)
    }
    if (dx === 0){
        character.css('background-image', `url('./public/img/idle/Idle (${x++}).png')`)
        if (x === 16) x = 1;
    }else{
        character.css('background-image', `url('./public/img/idle/Idle (${x++}).png')`)

    }
}, 50);

$(window).on('keydown', (e) => {
    switch (e.code) {
        case "ArrowRight":
            if (dx === 0) x = 1;
            dx = 10;
            break;
        case "ArrowLeft":
            dx = -10;
            x=1;
            break;
        case "Space":
            if (dy === 0) {
                // dy = 20;
                character.css('top', `${innerHeight - 350}px`);
            }
    }
});

$(window).on('keyup', (e) => {
    switch (e.code) {
        case "ArrowRight":
        case "ArrowLeft":
            dx = 0;
            x=1;
            break;
        case "Space":
            if (dy === 0) {
                character.css('top', `${innerHeight - 350}px`);
            }
    }
});
