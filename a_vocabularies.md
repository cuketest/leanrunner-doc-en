# Concepts

### Test Object
Contains property information of a control, which can be used to locate the control and perform operations on it.

### Identification Properties
Properties used to identify a control. A test object can have one or more properties. All the properties are "AND"  together to  identified the target control. This means that if any of an identification property do not match, the control will not be recognized as a matching control.

### Index Property
As a special property，Index property can be used as an index to locate one of the controls when other identifying properties cannot uniquely identify the control.

### Test Model
A file with .tmodel extension, which contains information about a set of test objects and their hierarchy. The test model is used to manage the application's control identification information. When an application is updated, it is usually necessary to update the test model to keep the test model in sync.

