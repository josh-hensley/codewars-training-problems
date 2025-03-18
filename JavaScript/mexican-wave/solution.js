function wave(str) {
    let wave = [];
    for (let i = 0; i < str.length; i++) {
        const letters = str.split('');
        if (letters[i] != ' ') {
            letters[i] = letters[i].toUpperCase();
            wave.push(letters.join(''))
        }
    }
    return wave;
}