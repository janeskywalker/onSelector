const path = require('path');
module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './src/index.js',
    output: {
        // __dirname is a variable that holds path to this file.
        path: path.resolve(__dirname, 'dist'),
        filename: 'onselector.js',
        library: 'onselector'
    }
}
