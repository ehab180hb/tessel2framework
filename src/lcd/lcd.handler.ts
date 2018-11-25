import * as five from 'johnny-five'
import { fiveTypes } from '../typings/johnny-five'
import { LCDPins } from '../config'

export const getLcd = (): fiveTypes.LCD => new five.LCD({ pins: LCDPins }) as any
