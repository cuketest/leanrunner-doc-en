# Basic Operations API

### TestModel

TestModel is a class that load object model, it has the following declarations:

```javascript
class TestModel {
    static loadModel(modelPath: string): IModel;
    static bindToProcess(processId: number);
}
```

* **loadModel**

loadModel load object model from a model file, and return the model object.  The following is an example:

```javascript
const { TestModel } = require("leanpro.win");
var model = TestModel.loadModel(__dirname + "/simle_styles.tmodel");

async function run() {
    await model.getButton("Default").click();
}

run();
```

* **bindToProcess**

bindToProcess is used to bind the model to a process of the automation application. In some situation, there are multiple identical application instances during runtime, if this method is called to bind to one of the process, the rest calls on this model object will only manipulate this specific application.




