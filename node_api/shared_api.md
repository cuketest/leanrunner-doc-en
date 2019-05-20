## Common API Usage

#### click
```javascript
click(x?: number, y?: number, mousekey?: MouseKey): Promise<void>;
```

Click on the control. mouseKey=1 is the left button, 2 is the right button, 4 is the middle button, and the default is 1. x, y is the click area, set both to the default values 0 will click on the center area.

Where MouseKey is defined as follows:
   ```javascript
   enum MouseKey {
       LButton = 1,
       RButton = 2,
       MButton = 4,
       Ctrl = 8,
       Shift = 16,
       Alt = 32
   }
   ```

Here is an example of how to use the MouseKey enumeration to specify the mouse click button value.

```javascript
const { TestModel, MouseKey } = require("leanpro.win");
var model = TestModel.loadModel(__dirname + "yourModel.tmodel");

async function r(){
    //Click the left mouse button
    await model.getButton("button").click();
    //Right click on the image x = 10, y = 20
    await model.getImage("image1").click(10, 20, MouseKey.RButton);
    //Click the left button while holding down the Ctrl key
    await model.getImage("image1").click(10, 20, MouseKey.Ctrl | MouseKey.LButton);
}
```

#### dblClick

Double click on the control
```javascript
dblClick(x?: number, y?: number, mousekey?: MouseKey): Promise<void>;
```

All parameters of `dblClick` are the same as the `click` method.


#### exists
```javascript
    exists(time: number): Promise<boolean>;
```

Checks if the control exists, where "time" is the retry time in seconds. The default retry seconds is 0, which means only check once.

   ```javascript
   let isExists=model.getButton(‘button1’).exists(20)
   if (isExists) {
      //.... some operations
   }
   ```
In the above example, value "20" in the "exists" method call means do automatically check and loop in 20 seconds. If the control exists, it will return "true" immediately. If the control does not exist, it will return false after 20 seconds. The user can adjust the number of seconds to wait based on how long can the control appears.

#### takeScreenshots

```javascript
takeScreenshot(filePath?: string): Promise<void | string> 
```

Get the screenshot of the control, pass in the file name of the full path, ending with a .png file.

filePath is passed to the file path, which is the location where the screenshot is saved. When the actual path is passed, the screenshot is saved to the file and the method returns null.

If passes "null" to filePath, indicating that the user wants to get the screenshot data directly, the screenshot data will be returned as a base64 encoded string.

You can compare this method on the control with Util's takeScreenshots method. The two methods are similar. The difference is that this method only intercepts the a screenshot of a control itself, while Util.takeScreenshots intercepts the screenshots of one entire monitor.

#### pressKeys

```javascript
pressKeys(keys: string): Promise<void>;
```
Press one or more buttons. For the special button values, please refer to Appendix: Input Key Correspondence Table. For example: the key value can be "Good morning,{DELETE}"

> Note: if you are using IME to import Chinese or other Asian characters, please turn IME off before start automation. pressKeys does not switch Chinese input method, directly input Chinese or English. Otherwise, the English input entered by pressKeys will be intercepted by the Chinese input method, which can cause unexpected input.

