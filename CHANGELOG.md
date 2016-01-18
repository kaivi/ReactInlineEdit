1.0.4 / 2016-01-18
==================

* Added `editingElement` and `staticElement` props, so one can pass custom component names: [\#5](https://github.com/kaivi/ReactInlineEdit/issues/5)
* Added proper Babel v6.4 dependency to `devDependencies`, so it just builds on `npm install` with OS X
* Added a small demo under `demo/` directory
* Added tab stops via `tabIndex` property on `staticElement`
* Added custom `style` prop to pass styles, obviously
* When `text` prop changes, the component is now re-rendered: [\#6](https://github.com/kaivi/ReactInlineEdit/pull/6)
* Upgraded React peer dependency, so it matches React of any `v0.x.x` version
* Updated `LICENSE` to MIT, as in `package.json`