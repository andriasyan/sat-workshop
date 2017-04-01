module.exports = {
  entry: './frontend/app.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'] // importing from files with or without putting the extensions
  },
  module:{
    loaders:[
      { test: /\.jsx?$/,
        loader: 'babel-loader', // this is coverting jsx to js and webpack calls this
        exclude:/node_modules/,
        query: { // what kind of abilities you want to use
          presets: ['es2015', 'react'] //collection of plugins from babel are the presets
        }
      }]
  }
};
