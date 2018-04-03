import path from 'path';

export default {
  debug: true,     // enable some debuging information
  devtool: 'inline-source-map',  // higher quality take longer to generated
  noInfo: false,  // will desplay all files
  entry: [
    path.resolve(__dirname, 'src/index') // use the path package that come with node
  ],
  target: 'web',  // we can use node instead if we build for node
  output: {             // this will not write actual file we simulate the file existentce
    path: path.resolve(__dirname, 'src'),
    publicPath:'/',
    filename: 'bundle.js'
  },
  plugins:[],  // exmple hot reloding
  module: {   // we tell webpack how to hendale different files
    loaders: [
      {test:/\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test:/\.css$/, loaders:['style','css']}
    ]
  }
}
