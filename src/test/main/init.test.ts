import { attachScreenUpdate } from '../../lcd/lcd.events'
import { boardEvents, BoardEvents } from '../../board/board.events'
import { initComponents } from '../../init'
import { buttonHandler } from '../../button/button.handler'

describe('init tests', () => {
  beforeEach(() => {
    ;(attachScreenUpdate as any) = jest.fn()
    ;(buttonHandler.initDefaultButtons as any) = jest.fn()
  })

  test('Screen update methods attacher is called', () => {
    initComponents()
    boardEvents.emit(BoardEvents.UPDATE_SCREEN, 'x')
    expect(attachScreenUpdate).toBeCalledWith('x')
  })

  test('Button update methods attacher is called', () => {
    initComponents()
    expect(buttonHandler.initDefaultButtons).toMatchSnapshot()
  })
})
