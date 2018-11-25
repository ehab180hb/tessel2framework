import * as five from 'johnny-five'
import { PIN } from '../../board/board.model'
import { getLcd } from '../../lcd/lcd.handler'

const pins: PIN[] = [PIN.a2, PIN.a3, PIN.a4, PIN.a5, PIN.a6, PIN.a7]

describe('LCD handler', () => {
  beforeEach(() => {
    ;(five.LCD as any) = jest.fn()
  })

  describe('getBoard()', () => {
    test('returns properly instantiated LCD', () => {
      const lcd = getLcd()
      expect(lcd).toMatchSnapshot()
      expect(five.LCD).toHaveBeenCalledWith({
        pins,
      })
    })
  })
})
