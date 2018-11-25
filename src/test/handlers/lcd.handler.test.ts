import * as five from 'johnny-five'
import { getLcd } from '../../lcd/lcd.handler'
import { LCDPins } from '../../config'

describe('LCD handler', () => {
  beforeEach(() => {
    ;(five.LCD as any) = jest.fn()
  })

  describe('getBoard()', () => {
    test('returns properly instantiated LCD', () => {
      const lcd = getLcd()
      expect(lcd).toMatchSnapshot()
      expect(five.LCD).toHaveBeenCalledWith({
        pins: LCDPins,
      })
    })
  })
})
