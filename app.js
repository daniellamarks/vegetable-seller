import { vegetables } from './data.js';
import { createVeggie } from './utils.js';

const ul = document.getElementById('list');

for (let myVeggie of vegetables) {
    const li = createVeggie(myVeggie);

    // Side effect happens here!
    ul.append(li);
}
