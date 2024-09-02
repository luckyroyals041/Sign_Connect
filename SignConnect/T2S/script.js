// Map each character to its corresponding sign image
const signMap = {
    'A': 'a.jpg',
    'B': 'b.jpg',
    'C': 'c.jpg',
    'D': 'd.jpg',
    'E': 'e.jpg',
    'F': 'f.jpg',
    'G': 'g.jpg',
    'H': 'h.jpg',
    'I': 'i.jpg',
    'J': 'j.jpg',
    'K': 'k.jpg',
    'L': 'l.jpg',
    'M': 'm.jpg',
    'N': 'n.jpg',
    'O': 'o.jpg',
    'P': 'p.jpg',
    'Q': 'q.jpg',
    'R': 'r.jpg',
    'S': 's.jpg',
    'T': 't.jpg',
    'U': 'u.jpg',
    'V': 'v.jpg',
    'W': 'w.jpg',
    'X': 'x.jpg',
    'Y': 'y.jpg',
    'Z': 'z.jpg',
    'a': 'a.jpg',
    'b': 'b.jpg',
    'c': 'c.jpg',
    'd': 'd.jpg',
    'e': 'e.jpg',
    'f': 'f.jpg',
    'g': 'g.jpg',
    'h': 'h.jpg',
    'i': 'i.jpg',
    'j': 'j.jpg',
    'k': 'k.jpg',
    'l': 'l.jpg',
    'm': 'm.jpg',
    'n': 'n.jpg',
    'o': 'o.jpg',
    'p': 'p.jpg',
    'q': 'q.jpg',
    'r': 'r.jpg',
    's': 's.jpg',
    't': 't.jpg',
    'u': 'u.jpg',
    'v': 'v.jpg',
    'w': 'w.jpg',
    'x': 'x.jpg',
    'y': 'y.jpg',
    'z': 'z.jpg',
    '0': '0.jpg',
    '1': '1.jpg',
    '2': '2.jpg',
    '3': '3.jpg',
    '4': '4.jpg',
    '5': '5.jpg',
    '6': '6.jpg',
    '7': '7.jpg',
    '8': '8.jpg',
    '9': '9.jpg'
};

function convertTextToSigns() {
    const text = document.getElementById('textInput').value.toUpperCase();
    const outputDiv = document.getElementById('outputSigns');
    outputDiv.innerHTML = ''; // Clear previous output

    for (let char of text) {
        if (signMap[char]) {
            const img = document.createElement('img');
            img.src = signMap[char];
            outputDiv.appendChild(img);
        } else {
            // Handle unknown characters or skip
            console.warn(`No sign available for character: ${char}`);
        }
    }
    
}
