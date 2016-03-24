# react-redux-talk
**just another react redux talk**
_but with counters and colors!_

We'll review state, props, react-router, and more.  
We'll talk about the pain redux aims to alleviate.  
We'll talk about how it alleviates that pain.  
We'll alleviate that pain.

## Commands to get started

**Clone this repo**
```
git clone https://github.com/brandonfancher/react-redux-example.git
```

**Install**
```
npm install
```

**Start the application in dev mode with hot-module-replacement**
```
npm start
```

**To follow along with the talk, check out the first commit**
```
git checkout c43d896
```

**Then follow along!**

# Some documentation

**What each commit covers**

* `c43d896`: Initial Commit. The Counter and Color components work, but the CounterHistory and ColorHistory components aren't hooked up yet.
* `52bddbe`: Get the CounterHistory and ColorHistory components to work by pushing the Counter and Color state higher and passing down props.
* `bb1365b`: DRY out the state.
* `bb6c9f4`: The CounterHistory and ColorHistory components are working with the Counter and Color components properly now, but those dashboards
lose their state if you leave them. We want state to persist when changing routes. This is where we set the foundation to push the state even higher.
* `e1b25b5`: Push all app state and handlers (actionCreators) higher into parent App component that doesn't unmount. Stuff starts getting weird. Maybe there's a better way?
* `3817ba0`: Enter redux. Install and migrate to react-redux.
* `996bd28`: Check out the redux dev tools chrome browser extension!
* `fcbc599`: Separate out concerns a bit: Separate state for each dashboard into separate reducer files.
* The rest are minor...merges, bug fixes, etc.

**Mapping out our initial component hierarchy, state and props**

Component | Has State | Receives Props
--- | --- | ---
**Main** | -- | --
-->**Routes** | -- | --
-->-->**App** | -- | `children` (object)
-->-->-->**Home** | -- | --
-->-->-->**DashboardCounter** | `countEntries` (array) | --
-->-->-->-->**Counter** | `counter` (number) | --
-->-->-->-->**CounterHistory** | -- | `countEntries` (array)
-->-->-->**DashboardColor** | `colorEntries` (array) | --
-->-->-->-->**Color** | `color` (string) | --
-->-->-->-->**ColorHistory** | -- | `colorEntries` (array)


# Resources

* Free course from redux' creator--Dan Abramov (30 videos): https://github.com/tayiorbeii/egghead.io_redux_course_notes
* Community notes on that course on github: https://github.com/tayiorbeii/egghead.io_redux_course_notes
* Redux documentation: http://redux.js.org/index.html
* Redux documentation for react specifically: http://redux.js.org/docs/basics/UsageWithReact.html
* Boilerplate for quickly getting a react project started. See Below.


# Cool stuff from the boilerplate that serves as the foundation for this app:

I started this app by cloning another repository, _react-kickstart_, which is a react + webpack boilerplate.
That way, I didn't have to spend a ton of time getting everything set up the way I wanted it.

## This boilerplate has lots of cool features
* webpack + hot-module-replacement ([babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) + [react-transform-hmr](https://github.com/gaearon/react-transform-hmr))
* Stateless functional components
* [css-modules](https://github.com/css-modules/css-modules/) + [PostCSS](https://github.com/postcss/postcss)
* basic routing setup with react-router (you most likely need routing in your app)
* [babeljs](https://babeljs.io/)
* unit tests ([tape](https://github.com/substack/tape/) + [sinon](http://sinonjs.org/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom)
* code coverage with [isparta](https://github.com/douglasduteil/isparta)
* development and production build

It leaves out redux, so we had to install that one manually. If you clone this _react-redux-talk_ repo and `npm install`, redux will be installed for you.

If you want to use the boilerplate repo as the foundation for another project, check out the README here: https://github.com/vesparny/react-kickstart
