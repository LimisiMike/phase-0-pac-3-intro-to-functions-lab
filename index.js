function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log('hello'.toUpperCase());
}

function logWhisper(string) {
    console.log('HELLO'.toLowerCase());
}

// function sayHiToHeadphonedRoommate(string) {
//     if (string.toLowerCase()) {
//         return ("I can't hear you!");

//     } else if (string.toUpperCase()) {
//         return ('YES INDEED!');
//     }
//     else (string == 'I would love to!'); {
//         return ('I would love to!');
//     }
// }

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase()===string) {
        return ("I can't hear you!");

    } else if (string.toUpperCase()===string) {
        return ('YES INDEED!');
    }
    else (string == 'I would love to!'); {
        return ('I would love to!');
    }
}
