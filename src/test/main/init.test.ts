import { attachScreenUpdate } from '../../lcd/lcd.events'
import { attachButtonUpdate } from '../../button/button.events'
import { boardEvents, BoardEvents } from '../../board/board.events'
import { initComponents } from '../../init'

describe('init tests', () => {
  beforeEach(() => {
    ;(attachScreenUpdate as any) = jest.fn()
    ;(attachButtonUpdate as any) = jest.fn()
  })

  test('Screen update methods attacher is called', () => {
    initComponents()
    boardEvents.emit(BoardEvents.UPDATE_SCREEN, 'x')
    expect(attachScreenUpdate).toBeCalledWith('x')
  })

  test('Button update methods attacher is called', () => {
    initComponents()
    boardEvents.emit(BoardEvents.UPDATE_BUTTONS, 'x')
    expect(attachButtonUpdate).toBeCalledWith('x')
  })
})
