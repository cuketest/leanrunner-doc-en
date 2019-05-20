# Objects API

The objects API fall into two categories, operations and properties. The operation does operation on the control, and the property is the actual property of the control. Because it is asynchronous, the "get" property is also in the form of a method, that is, it needs to be bracketed "()", and the return value is Promise object. The actual returned value can be obtained by adding `await` in the async function.

### Common APIs

Different types of object operations have different operations and properties. They all have some common operations and properties, as follows:
```javascript
export interface IWinControl extends IWinContainer {
  click(x?: number, y?: number, mousekey?: number): Promise<void>;
  dblClick(x?: number, y?: number, mousekey?: number): Promise<void>;
  wheel(value: number): Promise<void>;
  exists(time: number): Promise<boolean>;
  hScroll(value: any): Promise<void>;
  vScroll(value: any): Promise<void>;
  getProperty(propertyIds: PropertyIds): Promise<string | boolean | number>;
  waitProperty(propertyIds: PropertyIds, value: string, timeoutSeconds: number): Promise<boolean>
  drop(x?: number, y?: number): Promise<void>;
  drag(x?: number, y?: number): Promise<void>;
  pressKeys(keys: string): Promise<void>;

//properties
  text(): Promise<string>;
  name(): Promise<string>;
  hwnd(): Promise<number>;
  x(): Promise<number>;
  y(): Promise<number>;
  height(): Promise<number>;
  width(): Promise<number>;
  enabled(): Promise<boolean>;
  focused(): Promise<boolean>;
  helpText(): Promise<string>;
  labeledText(): Promise<string>;
  value(): Promise<string>;
  processId(): Promise<number>
}

```

Specific help for each operation and property can be found in the Model Manager.

### Each object's own API
Other objects, because they inherit IWinControl, have some other operations and properties in addition to these operations and properties. E.g:

The CheckBox control has `check` operation, which is used to set whether to check or clear the check, and `checked` property, which is used to determine the check state of the CheckBox:

```javascript
export interface IWinCheckBox extends IWinControl {
  check(value: boolean): Promise<void>;
  checked(): Promise<boolean>;
}
```

The following are the operations and properties specific to ComboBox:
```javascript
export interface IWinComboBox extends IWinControl {
  getItem(index: number): Promise<string>;
  itemCount(): Promise<number>;
  selectedItem(): Promise<string>;
  select(value: string | number): Promise<void>;
  open(): void;
}
```
More help for the operation and properties of the controls can be found in the Model Manager.

# Virtual Control API

A virtual Control is a special control, so its operation is different from other controls. It has no operations and properties common to other Windows controls. It has only the following operations and properties.

```javascript

export interface IWinVirtual {
  click(x: number, y: number, mousekey: number): Promise<void>;
  pressKeys(keys: string): Promise<void>;
  wheel(value: number): Promise<void>;
}
```

