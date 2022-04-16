module.exports = text => {

    const colors = [ '\x1b[35m', '\x1b[36m', '\x1b[91m', '\x1b[95m', '\x1b[94m', '\x1b[97m' ];

    if (typeof text !== 'string') throw new TypeError('The text must be a string');

    let textOutput = '';

    for(letter of text) {
        textOutput += `${colors[~~(Math.random() * colors.length)]}${letter}`;
    }

    return '\u001b[1m' + textOutput + '\x1b[0m';

};