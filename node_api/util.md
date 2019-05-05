# Util

Provide functions commonly used in automation scripts:

```javascript
class Util {
static delay(milliseconds: number): Promise<void>;
static launchProcess(exePath: string, ...args: string[]): any;
static stopProcess(proc: ChildProcess): boolean;
static takeScreenshot(filePath: string = null, monitor: number = 0): string | void
static loadCsvFile(filePath: string): Promise<RowCsv[]>;
}
```

* **delay**

Delays the specified number of milliseconds. Because it is an asynchronous call, remember to add `await` keyword before the statement. E.g:

The following code opens Calculator app, waits for a second till it initializes successfully and starts clicking.

```javascript
async function run() {
    let calcPath = 'c:/windows/system32/calc.exe';
    await Util.launchProcess(calcPath);
    await Util.delay(1000); //wait for process to initialize
    await model.getButton("Two").click();
}

run();
```

* **launchProcess**

Start a process. Typically used to start the application under test. The above example shows how to launch the Calculator application with `launchProcess`.

* **stopProcess**

Stop a process. Pass the launchProcess return value to proc to stop the process.

```javascript
async function run() {
    let notepadPath = 'c:/windows/notepad.exe';
    let proc = await Util.launchProcess(notepadPath);
    //do some other operations...
    Util.stopProcess(proc);
}

run();
```

> **Note**：Some applications are multi-process. For example, a UI window is in another process launched by the main process. Stopping the main process in this case does not close the application interface. This is the case with the calculator app in Windows 10.

* **takeScreenshot** Capture the entire screen image and save it in png format.
  * `filePath` is the file path and should end with a `.png` suffix. If a filename is provided, there is no return value. If `filePath` is null, it returns the base64 encoding of the screen image.
  * `monitor` is the number of the monitor to capture screenshot. 0 is the first screen, 1 is the second screen etc.
* **loadCsvFile** Read the CSV file and return an array of json objects. The key of each object is the column name, and the value is the data. For example, there is a data.csv file with the following content:

first\_name,last\_name,company\_name,state,zip James,Butt,"Benton, John B Jr",LA,70116 Josephine,Darakjy,"Chanay, Jeffrey A Esq",MI,48116 Art,Venere,"Chemel, James L Cpa",NJ,8014

Run the following code to load the csv file and return the json data:

```javascript
(async function() {
    let data = await Util.loadCsvFile('C:\\temp\\data.csv');
    console.log(data);
})();
```

It will return the following json data:

```javascript
[ { first_name: 'James',
  last_name: 'Butt',
  company_name: 'Benton, John B Jr',
  state: 'LA',
  zip: '70116' },
{ first_name: 'Josephine',
  last_name: 'Darakjy',
  company_name: 'Chanay, Jeffrey A Esq',
  state: 'MI',
  zip: '48116' },
{ first_name: 'Art',
  last_name: 'Venere',
  company_name: 'Chemel, James L Cpa',
  state: 'NJ',
  zip: '8014' } ]
```

