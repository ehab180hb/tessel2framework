import * as five from 'johnny-five'
import { fiveTypes } from '../typings/johnny-five'
import { LCDPins } from '../config'
import { memo } from '../util/memo.decorator'

class Lcd {
  @memo()
  getLcd(): fiveTypes.LCD {
    return new five.LCD({ pins: LCDPins }) as any
  }
}

export const lcdHandler = new Lcd()
