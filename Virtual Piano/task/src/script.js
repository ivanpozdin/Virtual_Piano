'strict mode'

const keys = {
    'a': 'white_keys/A.mp3',
    's': 'white_keys/S.mp3',
    'd': 'white_keys/D.mp3',
    'f': 'white_keys/F.mp3',
    'g': 'white_keys/G.mp3',
    'h': 'white_keys/H.mp3',
    'j': 'white_keys/J.mp3',
    'w': 'black_keys/W.mp3',
    'e': 'black_keys/E.mp3',
    't': 'black_keys/T.mp3',
    'y' : 'black_keys/Y.mp3',
    'u' : 'black_keys/U.mp3'
};
const keysContainer = document.querySelector('.container');
keysContainer.addEventListener('click', function (e){
    const audioPath = keys[e.target.textContent.toLowerCase()];
    if (!audioPath) return;
    new Audio(audioPath).play();
})
document.addEventListener('keydown', function (e){
    const audioPath = keys[e.key];
    if (!audioPath) return;
    new Audio(audioPath).play();
})