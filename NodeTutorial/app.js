const fs = require('fs');

// const testContent = fs.readFileSync('./test.js', {
//     encoding: 'utf-8',
// });

// const asynread = fs.readFile('./test.js', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
const data = {
    iceberg: 'troll',
    wacek: 'teges',
};

function write(data) {
    fs.writeFileSync('./test.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('object written');
        }
    });
}
write(data);
