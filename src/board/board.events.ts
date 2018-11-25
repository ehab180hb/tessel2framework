import * as events from 'events'
export const boardEvents = new events()

export enum BoardEvents {
  UPDATE_BUTTONS = 'updateButtons',
  UPDATE_SCREEN = 'updateScreen',
}
