# Getting Started with Create React App

`npx create-react-app react-debugging` `||` `clone` [existing repository](https://github.com/robhitt/react-debugging) from github.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Notes / Tips`

#### Double logs while in strict mode

- Many times while adding a `console.log("Hello, world");`, Chrome's console will show the `Hello, world` twice.
- Allowing the log only once may be obtained by going into
- In React dev tools _Components_ tab, open the settings gear > _Debugging_ tab > select the _Hide logs during second render in Strict Mode_ checkbox.

#### Set up VS Code Editor with Browser

- Click on VS Code Debug button
- Select _Web App (Chrome)_
- Replace with your current URL. E.g., `"url": "http://localhost:3000",`
- Select the _play_ button which says _Launch Chrome with localhost_ to load a separate browser ui for VS Code

#### React Dev Tools

##### Components Tab

- Select a component
- Can manually add new props
- **hooks**
  - select the magic wand to see the name of the hook listed next to the type of the hook
  - hooks are listed in order
  - Can also update state value of a hook manually
- Icons
  - Selecting the ⏱️ will show what a Suspense Component would look like if enabled
  - Selecting the 👁️ will bring you directly to the DOM element the component is rendering
  - Selecting the 🐞 icon will log out all the information about the component
