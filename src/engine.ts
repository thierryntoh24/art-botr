import TensorFlow from '@tensorflow/tfjs-node'
import MobileNet from '@tensorflow-models/mobilenet'
import fs from 'fs'

let path = '../data/test/IMG_2989.JPG'
const imageBuffer = fs.readFileSync(path)
const tImage = TensorFlow.node.decodeImage(imageBuffer) as TensorFlow.Tensor3D

const classifyImage = async () => {
    const mobilenetmodel = await MobileNet.load()
    const predicton = await mobilenetmodel.classify(tImage)
    console.log('Classificction : ', predicton)
}

if (process.argv.length !== 3)
    throw new Error('Incorrect argument blah blah <Im> ')

classifyImage()