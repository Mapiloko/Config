### Enviroment Configs

Node version 14.17.3.  
NPM version 6.14.16.

### Basic Rules

1. Page folder will contain the actual component to render to that respected route.
2. All the comman components should be created inside component folder with their index and style files.
3. If any file exceds more than 300 line then create a new component which can be placed in components folder or in the same folder as the file depending upon the reusability.
4. All the functions should be used with function expersions and not to use pseudo or anonymous function.
5. Apart from the common scss file all the scss must use module scss structure.
6. Names of function, variables should follow camel cases.
7. Names of Components should follow pascal cases.
8. De-structure all the props and object properly with error handling.
9. For all the component add a default props while creating a component or adding a new one.
10. For more than one css class or for dynamic css which will have module structure use classnames package.
11. For any of the third party packages used please refer to there Docs or npm for implementation details.
12. To use custom scss variable, import the custom scss using @use "path to custom scss" and then custom.$variable-name
