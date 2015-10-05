# suite-flipper-js

Install
---------

```bash
npm install --save suite-flipper-js
```
Usage
---------

```javascript
var flipper = Flipper.create(['bi', 'dummy', 'dummy2']);

flipper.isOn('bi'); //true
flipper.isOn('notInTheList'); //false
flipper.isOff('bi'); //false
flipper.isOff('notInTheList'); //true
```

Usage from service api response
---------

```javascript
var flipper = Flipper.createForApiResponse([
  { id: 'bi', isOn: true },
  { id: 'dummy', isOn: true },
  { id: 'dummy2', isOn: false }
]);

flipper.isOn('bi'); //true
flipper.isOn('dummy2'); //false
flipper.isOn('notInTheList'); //false
flipper.isOff('bi'); //false
flipper.isOff('dummy2'); //true
flipper.isOff('notInTheList'); //true
```

Usage in Angular Js
---------

[There is a wrapper for this class to use with angularJS](https://github.com/emartech/angular-suite-flipper)


