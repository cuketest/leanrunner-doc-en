## Excel File Operations

#### Load Excel datasheet

Data contents is often stored in Excel files (*.xlsx). To read data from it in your script, `leanpro.xlsx` package can be used to read and write Excel files. This package is a thin wrapper of the NPM package `XLSX`. For more details, refers to [XLSX NPM package](https://www.npmjs.com/package/xlsx).

Follow the below steps to add Excel loading code:

	* Drag and drop the `Load Excel Data` tool into the code
	* Then select the Excel file from the tool dialog
	* Set the variable name of the Excel data table, the default value is "workbook"
	* Select the worksheet name or index to read (default is 0, which means the first worksheet)
	* Finish reading Excel data
	
example code:

```js
    const xlsx = require('leanpro.xlsx');
    let workbook = xlsx.readFile("C:\\temp\\data.xlsx");
    let worksheetData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    console.log(worksheetData); // Output workbook contents, default to comment state
```

the results as follows, which should be the same as the worksheet:

```json
[
  { "first_name": "James",
    "last_name": "Butt",
    "company_name": "Benton, John B Jr",
    "state": "LA",
    "zip": "70116" },
  { "first_name": "Josephine",
    "last_name": "Darakjy",
    "company_name": "Chanay, Jeffrey A Esq",
    "state": "MI",
    "zip": "48116" },
  { "first_name": "Art",
    "last_name": "Venere",
    "company_name": "Chemel, James L Cpa",
    "state": "NJ",
    "zip": "8014" } 
]
```

If you want to access the worksheet by its name, such as "sheet1", the code should looks like the following:

```js
    const xlsx = require('leanpro.xlsx');
    let workbook = xlsx.readFile("C:\\temp\\data.xlsx");
    let worksheetData = xlsx.utils.sheet_to_json(workbook.Sheets["sheet1"]); // use the workbook name to index directly
```