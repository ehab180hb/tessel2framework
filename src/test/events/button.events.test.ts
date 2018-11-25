import * as five from 'johnny-five'
import { attachButtonUpdate, updateButtons } from '../../button/button.events'
import { initComponents } from '../../init'

describe('Button events', () => {
  let buttonSpy: string[] = []
  const mockButtonAction = () => {}
  const mockButtonAction2 = () => {}

  describe('attachButtonUpdate()', () => {
    beforeEach(() => {
      buttonSpy = []
      ;(five.Button as any) = jest.fn(pin => ({
        on: (e: any, fn: Function) => {
          buttonSpy.push(JSON.stringify({ e, fn: fn.name, pin }))
        },
      }))
    })
    test('Works with default parameters', () => {
      attachButtonUpdate({})
      expect(buttonSpy).toMatchSnapshot()
    })
    test('Works with custom parameters', () => {
      attachButtonUpdate({
        greenButtonCb: mockButtonAction,
        blueButtonCb: mockButtonAction,
        redButtonCb: mockButtonAction,
      })
      expect(buttonSpy).toMatchSnapshot()
    })
  })

  describe('updateButtons()', () => {
    test('Works with custom parameters', () => {
      initComponents()
      updateButtons({
        greenButtonCb: mockButtonAction2,
        blueButtonCb: mockButtonAction2,
        redButtonCb: mockButtonAction2,
      })
      expect(buttonSpy).toMatchSnapshot()
    })
  })
})
