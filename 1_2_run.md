# Run

LeanRunner supports multiple programming languages，For each language, you can choose the development tool that you are familiar with.

Node.js, JScript (WScript), VBScript can be devekoped and run in the LeanRunner Script Editor, and C# automation scripts are developed and debugged in Visual Studio.

> **Note**: LeanRunner Lite supports only Node.js script

The Script Editor is a multi-document interface that can edit multiple files at the same time. When the JavaScript script file is active, the Run button is allowed. The Run button is disabled when some non-script file tab is active. 

## 运行配置

### Log level
The log level of script to run can be configured to levels of `error`, `warn`, and `debug`. In the `error` level, the error message is output only when the error occurs. The `warn` level outputs the warning message. The `debug` level output the most information, which is generally used for scripts. debugging.

![](/assets/settings-dialog.png)

### "Minimize window during run"
After setting this option, the window will be minimized before running the script.

### C&#35;
Create and run project from within Visual Studio。See ["Visual Studio Integration"](/5_vs_integrate.md) for more details

### JavaScript(WScript) and VBScript

To run JavaScript and VBScript script, WScript need to be used, which is the script engine that comes with Windows. The executable file is cscript.exe or wscript.exe.

LeanRunner supports the development of automated test scripts in both scripting languages. Compared to C#, they have the advantage of no compilation, small and flexible. But the downside is the type check, which may be wrong until it runs. There are many editors for scripting language development, and users can choose the tools they are familiar with. Use the Model Manager to generate the code for the corresponding language, then drag or paste it into your editor.

In addition to its professional script editor, you can edit the run script with the script test editor that comes with LeanRunner Model Manager:

Click on "Actions" => "Script Test Editor"

The script test editor interface will open:
![](/assets/5.2_script_window.png)

Depending on the language you set in the settings window, it will automatically populate the corresponding model loading code in this editor, you just drag and drop the corresponding test object call to this editor, and then click "Run" ", which will run this automation script. You can also click on the "Load..." button to load a pre-written file to execute.

Sample code for some VBScript is provided below:

```VBScript
Dim auto
Set auto = CreateObject("Win.Automation")

'button
auto.GetWindow("className:=Window","title:=SimpleStyles").WinButton("className:=Button","name:=Default").WinText("className:=TextBlock","name:=Default").Click 0, 0, 1

auto.GetWindow("className:=Window","title:=SimpleStyles").WinButton("className:=Button","name:=Normal").WinText("className:=TextBlock","name:=Normal").Click 0, 0, 1

'check box
auto.GetWindow("className:=Window","title:=SimpleStyles").WinCheckBox("className:=CheckBox","name:=Normal").WinText("className:=TextBlock","name:=Normal").Click 0, 0, 1

auto.GetWindow("className:=Window","title:=SimpleStyles").WinCheckBox("className:=CheckBox","name:=Checked").WinText("className:=TextBlock","name:=Checked").Click 0, 0, 1

auto.GetWindow("className:=Window","title:=SimpleStyles").WinCheckBox("className:=CheckBox","name:=Indeterminate").WinText("className:=TextBlock","name:=Indeterminate").Click 0, 0, 1
```

The complete sample code is provided in the installation package. When installed, can be found in the "C:\Program Files (x86)\LeanRunner\samples" directory.


