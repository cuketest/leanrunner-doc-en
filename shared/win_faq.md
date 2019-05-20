## Windows Automation FAQ


<a id="datetimepicker"></a>
#### Q: How to automate DateTimePicker control?

**A**: DateTimePicker is a composite control consisting of multiple basic controls, so its type is Custom or Pane (under Windows 10). Here's an automated example of an automated composite control, how to get its value and set its value:

```javascript
    let datePicker = model.getCustom("dateTimePicker1")
    //get DateTimePicker value
    console.log('value=' + await datePicker.name())
    //set DateTimePicker value
    await datePicker.click(2, 2);
    await datePicker.pressKeys('2018-08-18')
```

To get the value use its `name` property, To set the value, click on the front part, and use `pressKeys` to enter the date.

<a id="performance"></a>
#### Q: How to improve the performance of automation code

**A**: You can try the following practices:
1. When multiple operations have the same target control, you can assign the identified control object to the variable instead of calling getXXX("controlName") in every operation. For example:
In order to avoid repeated recognition, you can write:

   ```javascript
   let newControl = await model.getXXX('new control')
   await newControl.exists(10);
   await newControl.click() 
   ```
Write this way, there is only one attempt of identifying the control.

2. If the set of controls to be manipulated is under a container control, you can get the container object first, then call the container object to get the control, it can also speed up the execution, because the time to identify the container control is save.

For example, the "userName" edit box, the "password" edit box, and the "login" button are all under a "Pane" container control. The code can be written as the following:

   ```javascript
   let pane = getPane('pane1`);
   let userName = await pane.getEdit('userName');
   //...operations on userName
   let password = await pane.getEdit('password');
   //...operations on password
   await pane.getButton('login').click();
   ```
   
>Note: Not all seemingly identical controls can be accessed repeatedly with cached test object variables. For example, for the same menu, if opened twice, can be two different instances. If you cache the identified control to a variable , the second time you open this menu with this variable, it may still raise "Object does not exist" error because they are two different instances of controls.

>It is recommended not to global variables to cache objects, only local variables should be used. If a control is not recreated during operations, you can cache them in variables and reuse them. If the control is created, you cannot reuse its test object, instead use model.getXXX method gets a new test object.


<a id="promise"></a>
#### Q: When run my code, I get error "UnhandledPromiseRejectionWarning: Unhandled promise rejection ..."

**A**: The error can happen when you did not catch error when calls an asynchronous function, that is, it returns a Promise. In order to handle this error or get the error information, you can use the `try/catch` statement, in the calling code to include the wrong code, and `await` the Promise, so that the exception can be caught. You can handle this error in the `catch` statement. e.g. 

```javascript
(async function() {
   try {
      await model.getButton('button1').click();
   } catch(err) {
      console.log(err);
   }
}
```
In the above code, if "button1" does not exist or is not recognized, "click" statement will throw an exception and be caught and print the exception information.




