import * as five from 'johnny-five'
import { PIN } from '../board/board.model'
import { ButtonCall, DeviceButton } from './button.model'

class ButtonHandler {
  private createdButtons: DeviceButton[] = []

  checkButtonExistence = (pin: PIN, name: string) => {
    const pinOccupied = this.createdButtons.find(b => b.pin === pin)
    const nameTaken = this.createdButtons.find(b => b.name === name)
    return { pinOccupied, nameTaken }
  }

  findOrCreateButton = (pin: PIN, name: string) => {
    const existingButton = this.createdButtons.find(b => b.pin === pin && b.name === name)
    if (!existingButton) return this.createButton(pin, name)
    return existingButton
  }

  createButton = (pin: PIN, name: string) => {
    const { pinOccupied, nameTaken } = this.checkButtonExistence(pin, name)

    if (pinOccupied) throw new Error(`Pin ${pin} is occupied`)
    if (nameTaken) throw new Error(`Button name ${name} is taken`)

    const deviceButton: DeviceButton = {
      name,
      pin,
      listener: new five.Button(pin),
    }

    this.createdButtons.push(deviceButton)
    return deviceButton
  }

  initDefaultButtons = (buttons: ButtonCall[]) => {
    buttons.forEach(b => this.findOrCreateButton(b.pin, b.name))
  }

  findButton = (buttonName: string) => {
    return this.createdButtons.find(b => b.name === buttonName)
  }

  clearButton = (buttonName: string, eventType?: string): DeviceButton => {
    const button = this.findButton(buttonName)
    if (!button) throw new Error(`Button ${buttonName} does not exist`)
    // @ts-ignore
    button.listener.removeAllListeners(eventType)
    return button
  }

  updateButton = (buttonName: string, eventType: string, cb: () => void) => {
    const button = this.clearButton(buttonName, eventType)
    button.listener.on(eventType, cb)
  }

  updateButtonPress = (buttonName: string, cb: () => void) => this.updateButton(buttonName, 'press', cb)
}

export const buttonHandler = new ButtonHandler()
