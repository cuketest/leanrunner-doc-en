## OCR (Optical Character Recognition)

This automation tool supports the recognition of text in controls via OCR.

OCR can be used in the following ways:

#### OCR method on some Windows objects

##### 1. getVisualText method

The following Windows objects support the `getVisualText` method:
1. Image control
2. Virtual control

`getVisualText` method has the following signature:
```javascript
   getVisualText(): Promise<string>;
```

For details, see [getVisualText method](virtual_api.md#getVisualTest)

##### 2. clickVisualText

The clickVisualText method only exists in the vVirtual control. it uses OCR to find the specified text on the virtual control snapshot and click on the corresponding text.

```javascript
clickVisualText(text: string, options?: ClickVisualTextOptions): Promise<void>;
```

Detailed documentation can be found in [clickVisualText method](virtual_api.md#clickVisualText)

#### Ocr class

You can directly use the Ocr class in `leanpro.visual` package to recognize images in memory or image files. The following is the definition of the Ocr class:

```javascript
   class Ocr {
      public static inited: boolean; //readonly
      public static language: OcrLanguage;
      public static init(lang?: OcrLanguage, dataPath?: string): Promise<boolean>;
      public static getVisualText(imageData: Buffer | string, options?: OcrOptions): Promise<string>;
      public static getVisualTextFromFile(filePath: string, options?: OcrOptions): Promise<string>;
      public static getTextLocations(imageData: Buffer | string): Promise<TextBlock[][]>;
public static getTextLocation(imageData: Buffer | string, text: string): Promise<TextBlock>;
    }
```

* **init(lang?: OcrLanguage, dataPath?: string): Promise&lt;boolean&gt;**

  Initialize the OCR recognition library. The CukeTest comes with a training library that recognizes Chinese and English. The definition of OcrLanguage is as follows:
  ```javascript
  enum OcrLanguage {
    English = 'eng',
    ChineseSimplified = 'chi_sim'
  }
  ```
  If you download other trained data, you can pass in the corresponding name to `lang`. The `dataPath` is the directory where the trained data is located, don't pass anything will use the default value.
  
* **getVisualText(imageData: Buffer | string, options?: OcrOptions): Promise&lt;string&gt;**

  you can pass in Buffer of the incoming image content, or a base64 encoded string to identify the image.
  
* **getVisualTextFromFile(filePath: string, options?: OcrOptions): Promise&lt;string&gt;**

  Pass the image file path to recognize the image to text

* **getTextLocations(imageData: Buffer | string): Promise&lt;TextBlock[][]&gt;**

  Input the Buffer or a base64 encoded string of the incoming image, it will recognize text from the image, and return the recognized words and their positions, the returning value is a two-dimensional array of TextBlock structures, each of which is a one-dimensional array that contains a line of text.
  
  Below is the structure of TextBlock
   ```javascript
   interface TextBlock {
      text: string;
      boundingRect: {
         left: number,
         top: number,
         width: number,
         height: number
      }
   }
   ```

* **getTextLocation(imageData: Buffer | string, text: string): Promise&lt;TextBlock&gt;**

  Among them:
  * imageData: Buffer or base64 encoded string of image content
  * text: The text to be found needs to be continuous text in the image, and should be on the same line.
  
  Returns the TextBlock structure of the position of the text in the image. If it does not exist, it returns null.

>Note: that the methods of the Ocr class are asynchronous and return Promise, therefore please handle it properly, e.g. use `await` keyword.

You can call `getVisualText` or `getVisualTextFromFile` directly to recognize the text in the file in memory or in the file. They will use the default language library. For example, if your UI language setting is Chinese, use the Chinese library to process, if the UI language is set to English, use the English library to process. In some cases, you need to override the UI language setting, then you call  `init` function to set the language, such as the following code, before calling the recognition method such as getVisualText:

```javascript
   const { Ocr, OcrLanguage } = require('leanpro.visual');

   Ocr.init(OcrLanguage.ChineseSimplified);

   (async () => {
      let text = await Ocr.getVisualTextFromFile("c:\\temp\\sample.png");
      console.log(`text is ${text}`);
   })()
```

The above example uses the Chinese library to identify the text by explicitly specifying the data library as Chinese, regardless of whether the UI language of the current automation tool is Chinese or English.

### OCR in Model Manager

Usually in order to use OCR, you can create a virtual control in Model Manager for the part of a control that contains visible text. And then you can call the getVisualText method on the virtual control. You can also test the getVisualText method in Model Manager. Please note the following:

* When testing, the control area to be recognized should not be covered by other windows.
* The recognition library loaded by Model Manager is also related to the UI language of Model Manager, that is, the English UI will load the English language training data, and the Chinese UI will load the Chinese data.

For more information on virtual controls, please refer to [Virtual Controls](/model_mgr/virtual_control.md)

### More languages

If you need other language libraries, you can download them from [https://github.com/tesseract-ocr/tessdata](https://github.com/tesseract-ocr/tessdata) and copy it to the "tessdata" folder of the installation directory, and then call call "init" to initialized the corresponding language. For example, you can download the file "deu.traineddata" and call "Ocr.init('deu')" in the code to do the initialization.

### OCR support for other controls

Although not all control objects support OCR text recognition, you can still do it, with the following steps:
1. get the snapshot image by calling `takeScreenshot` on the control,
2. call the Ocr.getVisualText method to recognize the text on the image. As the following example:

```javascript
   const { Ocr, OcrLanguage } = require('leanpro.visual');

   (async () => {
      let image = await model.getButton("Clear entry").takeScreenshot();
      let text = await Ocr.getVisualText(image);
      console.log(text);
   })();
```

This example takes an image from a button control and converts the image into text.


