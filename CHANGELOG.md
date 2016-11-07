
1.0.8 / 2016-11-07
==================
* Merged PR [#26](https://github.com/kaivi/ReactInlineEdit/pull/26)
  - Remove onReturn props From Element

1.0.7 / 2016-04-28
==================

* Merged PR [#16](https://github.com/kaivi/ReactInlineEdit/pull/16)
  - Implement option to disable editing
* Merged PR [#17](https://github.com/kaivi/ReactInlineEdit/pull/16)
  - Update peer dependencies to allow React 15.x.x

1.0.6 / 2016-01-25
==================

* Merged PR [#11](https://github.com/kaivi/ReactInlineEdit/pull/11)
  - fixed a bug introduced in [#6](https://github.com/kaivi/ReactInlineEdit/pull/6)

1.0.5 / 2016-01-19
==================

* Merged PR [#9](https://github.com/kaivi/ReactInlineEdit/pull/9)
  - consistent style (and basic lint stuff)
  - spacing
  - spaces after if
  - let instead of var
  - dangling commas
  - lower case `functionName`
  - life-cycle methods before others, followed by render.
  - class properties (since stage 0 is being utilized)
  - other initialization stuff in `componentWillMount` as opposed to `constructor`

* Upgraded peerDependency to React 0.14.6 PR [#10](https://github.com/kaivi/ReactInlineEdit/pull/10)

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
