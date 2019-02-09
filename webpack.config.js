const path = require('path');
module.exports = {
    mode: 'development',
    // mode: 'production',
    // tell webpack this whole thing is a module, not an app
    entry: './src/index.js',
    output: {
        // __dirname is a variable that holds path to this file.
        path: path.resolve(__dirname, 'dist'),
        filename: 'onselector.js',
        // expose the library
        library: 'onselector',
        // unuversial module definition, flexible module that fits in 
        // various enviroment 
        libraryTarget: 'umd',
    }
}

