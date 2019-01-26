import { LCDGeneralOption, LCDI2COption, LCDParallelOption } from 'johnny-five'

declare namespace fiveTypes {
  export class LCD {
    constructor(option: LCDGeneralOption | LCDI2COption | LCDParallelOption)

    id: string
    rows: number
    cols: number

    print(message: string): this
    useChar(char: string): this
    clear(): this
    cursor(row: number, col: number): this
    home(): this
    on(): this
    off(): this
    display(): this
    noDisplay(): this
    blink(): this
    noBlink(): this
    autoscroll(): this
    noAutoscroll(): this
    bgColor(color: any): this
    noBacklight(): this
    backlight(): this
  }
}
