import * as five from 'johnny-five'
import { PIN } from '../board/board.model'
import { fiveTypes } from '../typings/johnny-five'

const pins: PIN[] = [PIN.a2, PIN.a3, PIN.a4, PIN.a5, PIN.a6, PIN.a7]

export const getLcd = (): fiveTypes.LCD => new five.LCD({ pins }) as any
