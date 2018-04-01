This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

To get started run `npm install`  to download dependencies


## Starting a local server

To start up run:

```
npm start
```

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Static Server

For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest:

```sh
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port **5000**. Like many of [serve](https://github.com/zeit/serve)’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:

```sh
serve -h
```

### [Firebase](https://firebase.google.com/)

Install the Firebase CLI if you haven’t already by running `npm install -g firebase-tools`.
Run `firebase login` and login with your Firebase account.
This app is already configured with Firebase but you can follow a simple guide [here](https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf) for future use cases.
Essentially you just run  `firebase init` command from your project’s root and follow the terminal prompts. Choose `build` as the public directory and say no to overwritting our index.html.

IMPORTANT: you need to set proper HTTP caching headers for `service-worker.js` file in `firebase.json` file or you will not be able to see changes after first deployment ([issue #2440](https://github.com/facebookincubator/create-react-app/issues/2440)). It should be added inside `"hosting"` key like next:

```
{
  "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...
```

Now, to update live site with changes run  `npm run build && npm run deploy`.
If you don't see the updates you may have to clear your cache or open an incognito window.

For more information see [Add Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup).

Also checkout the API calls for the [Re-Base library](https://github.com/tylermcginnis/re-base)
