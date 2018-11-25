import * as five from 'johnny-five'

const isTesting = process.env.NODE_ENV === 'test'

const Tessel = !isTesting ? require('tessel-io') : class {}

export const getBoard = () => {
  return new five.Board({
    io: new Tessel(),
  })
}
