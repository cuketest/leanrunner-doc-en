# Script Editor

### Code Toolbox

The LeanRunner designer provides a Code Toolbox, as shown below:

![](assets/code_toolbox.png)

One can quickly generate code by dragging items from the corresponding toolbox and dropping into the code editor. When the code is generated, the require call of the corresponding library is also inserted in the header of the file.

### Auto-completion
When import "leanrunner" library with "require" statement, you can access the object model of LeanRunner and get intelli-sense for the script code. As shown below:

![](/assets/intelli-sense.png)

TestModel is the object model, and can be loaded with `loadModel` call. For example:

```javascript

const {TestModel, Util} = require('leanrunner');                //line 1
let model = TestModel.loadModel(__dirname + '/test.tmodel');    //line 2
(async function () {                                            //line 3
    await model.getButton("Five").click(0, 0, 1);               //line 4
})();                                                           //line 5

```

1. The code in the above figure also shows another require call, which is:

   ```javascript
   const { TestModel, Util } = require('leanrunner');
   ```

   This can be used directly to get TestModel or other related objects.

2. The second line gets the model object model through `loadModel`, and the rest of the lines use the model to access the control and perform operation on it.

   Line 3 ~ 5 calls the method of the button in asynchronous manner. All operations on objects in Node.js are asynchronous, which means a Promise object is returned. If you want to wait for it to complete before making the next await call, the await function needs to be placed in the async function. To learn async/await syntax, see the JavaScript tutorial for more information.

