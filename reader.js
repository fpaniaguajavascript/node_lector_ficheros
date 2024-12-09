import fs from 'node:fs';

try {
    const data = fs.readFileSync('./quijote.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
