import { getBoard } from './board/board.handler'
import { initComponents } from './init'
import { welcomeScreenHandler } from './welcome/welcome.handler'

const board = getBoard()

board.on('ready', () => {
  initComponents()
  welcomeScreenHandler()
})
