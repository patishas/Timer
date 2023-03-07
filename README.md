# Timer Component

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v14 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/W17Zgevg-Fzh-gBz-EdUGg/timer-component.gif)

## Functionality Requirements

Create a timer component that decreases the count by 1 every second.

The component has the following functionalities:

- The timer value decreases by 1 every second. For example, if the initial value is 100, after 1 second it becomes 99, after 1 more second it becomes 98, and so on.
- The timer value starts decreasing right after the component is mounted.
- The initial value of the timer is set by a prop `initial` passed down to the component.
- Once the counter value becomes 0, it should not decrease further.
- The button `Stop Timer` stops the timer at the current value. For example, if the initial value was 120, and the button is pressed at 110, the timer stops at value 110.
 
## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The timer value should have the data-test-id attribute `timer-value`.
- The `Stop Timer` button should have the data-test-id attribute `stop-button`.

Please note that the component has the above data-test-id attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.


## Project Specifications

**Read Only Files**
- src/app/app.component.spec.ts
- src/app/timer/timer.component.spec.ts

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
