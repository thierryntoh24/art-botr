import * as TensorFlow from '@tensorflow/tfjs-node'
import MobileNet from '@tensorflow-models/mobilenet'
import fs from 'fs'

let imagePath = 'data/test/IMG_2989.JPG'

const classify = async () => {
  const image = fs.readFileSync(imagePath);
  const decodedImage = TensorFlow.node.decodeImage(image) as TensorFlow.Tensor3D;

  const model = await MobileNet.load();
  const predictions = await model.classify(decodedImage);
  console.log('predictions: ', predictions);
}

// const imageBuffer = fs.readFileSync(path)
// const tImage = TensorFlow.node.decodeImage(imageBuffer) as TensorFlow.Tensor3D

// const classifyImage = async () => {
//     const mobilenetmodel = await MobileNet.load()
//     const predicton = await mobilenetmodel.classify(tImage)
//     console.log('Classificction : ', predicton)
// }

if (process.argv.length !== 3)
    throw new Error('Incorrect argument blah blah <Im> ')

classify()
