# Owner Info
// TODO

# Dev Info
If you are a developer working on this project here is what you need to know!

## Tech Stack
This website is developed using the following technologies/libraries/frameworks/3d party tools. 

- Typescript
- React https://react.dev/
- Material UI https://mui.com/material-ui/
- Github Pages https://pages.github.com/
- Web3Froms https://web3forms.com
- reCAPTCHA https://www.google.com/recaptcha/about/

Other libraries can be found in the `package.json`.

## Hosting

Hosting is managed by Github Pages on the `gh-pages` branch.
From here Github will host the build and use the custom domain.
There is currently no Github Action to build and deploy from main, instead you must use the `npm run deploy` script.

The domain is managed by //TODO

## SEO & Static Pages

To improve Google's ability to index the site, static HTML versions of key pages are generated in the `public` directory. These pages:
- Contain semantic HTML with essential content for search engines
- Load the full React app when JavaScript is enabled
- Provide a fallback experience for users without JavaScript

Static pages are automatically generated during deployment. To generate manually:
```bash
npm run generate-static
```

See `scripts/README.md` for more details.

## Feature Flag
All feature flags are defined in `src/type/FeatureFlag.ts` and can be toggled locally at `http://localhost:3000/dev`.
There is also a Theme Selector feature flag to previous potential theme changes. Feature use their default value in production,
however you can configure dev only feature flags with the `isDev` value. 

## Available Scripts

In the project directory, you can run:

### `npm start` & `npm start-network`

Using `npm start` or `npm start-network` you can run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If you are running the app with `npm start-network` others on the local network will also be able to visit your site.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You can run the prod version of the app locally by setting `NODE_ENV=prod` before calling the start command.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Deploy to Github Pages

Push the React app to the GitHub repository

`npm run deploy`

That will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

$ npm run deploy -- -m "Deploy React app to GitHub Pages"
