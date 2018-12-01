import * as five from 'johnny-five'
import { PIN } from '../board/board.model'

export interface ButtonCall {
  pin: PIN
  name: string
}

export interface DeviceButton {
  name: string
  pin: PIN
  listener: five.Button
}
