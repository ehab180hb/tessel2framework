import * as five from 'johnny-five'
import { PIN } from '../board/board.model'
import { ButtonCall, DeviceButton } from './button.model'

export const createdButtons: DeviceButton[] = []

export const checkButtonExistence = (pin: PIN, name: string) => {
  const pinOccupied = createdButtons.find(b => b.pin === pin)
  const nameTaken = createdButtons.find(b => b.name === name)
  return { pinOccupied, nameTaken }
}

export const findOrCreateButton = (pin: PIN, name: string) => {
  const existingButton = createdButtons.find(b => b.pin === pin && b.name === name)
  if (!existingButton) return createButton(pin, name)
  return existingButton
}

export const createButton = (pin: PIN, name: string) => {
  const { pinOccupied, nameTaken } = checkButtonExistence(pin, name)

  if (pinOccupied) throw new Error(`Pin ${pin} is occupied`)
  if (nameTaken) throw new Error(`Button name ${name} is taken`)

  const deviceButton: DeviceButton = {
    name,
    pin,
    listener: new five.Button(pin),
  }

  createdButtons.push(deviceButton)
  return deviceButton
}

export const initDefaultButtons = (buttons: ButtonCall[]) => {
  buttons.forEach(b => findOrCreateButton(b.pin, b.name))
}

export const findButton = (buttonName: string) => {
  return createdButtons.find(b => b.name === buttonName)
}

export const clearButton = (buttonName: string, eventType?: string): DeviceButton => {
  const button = findButton(buttonName)
  if (!button) throw new Error(`Button ${buttonName} does not exist`)
  // @ts-ignore
  button.listener.removeAllListeners(eventType)
  return button
}

export const updateButton = (buttonName: string, eventType: string, cb: () => void) => {
  const button = clearButton(buttonName, eventType)
  button.listener.on(eventType, cb)
}

export const updateButtonPress = (buttonName: string, cb: () => void) => updateButton(buttonName, 'press', cb)
