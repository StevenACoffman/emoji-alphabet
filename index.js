const alphabet = {
    A: ['🅰️'],
    B: ['🅱️️'],
    C: [ '©️', '☪️', '🗜️' ],
    D: ['↩️'],
    E: ['🅴','📧'],
    F: ['🎏'],
    G: ['🅶','⛽️'],
    H: ['🏩','♓️'],
    I: ['💈','ℹ️'],
    J: ['☔', '🎷', '🗾'],
    K: ['🅺', '🎋'],
    L: ['👢', '🕒'],
    M: [ 'Ⓜ️', '♏️', '♍️', '〽' ],
    N: ['🅽','📈'],
    O: ['🅾️', '⭕️', '💍'],
    P: ['🅿️'],
    Q: ['🍳','🍭','♌','🇶','ℚ','℺'],
    R: ['Ⓡ','®️'],
    S: [ '💰', '⚡️' ],
    T: ['🏋', '✝️'],
    U: ['🐋', '⛎'],
    V: ['✌️️', '♈️'],
    W: ['👐','〰️'],
    X: [ '❎', '❌', '✖️', '🙅' ],
    Y: ['🌱', '🍸'],
    Z: ['💤'],
    '!': [ '❗️', '❕' ],
    '?': [ '❓', '❔' ],
    '#': ['#️⃣'],
    '*': ['*️⃣'],
    '+': ['➕'],
    0: ['0️⃣'],
    1: ['1️⃣'],
    2: ['2️⃣'],
    3: ['3️⃣'],
    4: ['4️⃣'],
    5: ['5️⃣'],
    6: ['6️⃣'],
    7: ['7️⃣'],
    8: ['8️⃣'],
    9: ['9️⃣']
};

const compounds = {
    COOL: '🆒',
    NEW: '🆕',
    FREE: '🆓',
    OK: '🆗',
    NG: '🆖',
    ATM: '🏧',
    ABCD: '🔠',
    10: '🔟',
    VS: '🆚',
    WC: '🚾',
    CL: '🆑',
    SOS: '🆘',
    ID: '🆔',
    END: '🔚',
    100: '💯',
    BACK: '🔙',
    TOP: '🔝',
    SOON: '🔜',
    '!!': '‼️',
    '!?': '⁉️'
};

const translateLetter = (input) => {
    if (typeof input !== 'string' || !input || input.length != 1) {
        return ''
    }
    const items = alphabet[input.toUpperCase()]
    if(!items) {
        return input
    }
    return items[Math.floor(Math.random()*items.length)]
}

const translate = (input) => input.split('').map(translateLetter).join('')


module.exports = {
    alphabet: alphabet,
    compounds: compounds,
    translate: translate,
};
