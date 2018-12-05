
# Tessel 2 firmware development framework

This project is intended to give you a kick start developing firmwares from [Tessel 2](https://tessel.io/) devices.

## Prerequisites

- you have node.js installed.
- yarn is installed
- t2-cli npm package is installed globally

## Pin layout

You'll need to make sure both your screen and buttons are properly connected. Configure their pins in config.ts.
[How to connect a 2-row screen](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-12-using-an-lcd-screen) 
[How to connect a button](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-4-reading-a-push-button) 

## First run

1. Make sure your Tessel 2 device is properly conneted to your computer.
2. Run `yarn` to install the dependancies. 
3. Run `yarn start` to transpile the code from Typescript to Javascript and run the firmware the device.
4. Run `yarn start:prod` when you're ready to flash the firmware into the device.

## Result

After running `yarn start` you should see the following:

![](https://i.imgur.com/NKYwMru.jpg =400x)
