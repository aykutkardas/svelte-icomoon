![Svelte-Icomoon Logo](./banner.png)

[![npm](https://img.shields.io/npm/v/svelte-icomoon?color=%234fc921)](https://www.npmjs.com/package/svelte-icomoon)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

It makes it very simple to use SVG icons in your `Svelte` projects.

## [demo](https://codesandbox.io/s/svelte-icomoon-demo-7ohyqm) - [svgps.app](https://svgps.app?ref=svelte-icomoon)

## Install

```
npm install svelte-icomoon
```

```
yarn add svelte-icomoon
```

## Usage

You can use [svgps.app](https://svgps.app/) to access over `40,000` free icons and convert your own icons into `selection.json`.

Or you can use [IcoMoon](https://icomoon.io/app/) to generate the `selection.json` file.

### Declare

```html
// Icon.svelte
<script>
  import Icomoon from "svelte-icomoon";
  import iconSet from "./selection.json";
</script>

<Icomoon iconSet="{iconSet}" {...$$props} />
```

### Use

```html
<script>
  import Icon from "./Icon.svelte";
</script>

<Icon name="pencil" size="{30}" color="blue" />
```

## Props List

| Name              | Type          | Default | Sample                        |
| ----------------- | ------------- | ------- | ----------------------------- |
| iconSet           | Object        | -       | "selection.json file content" |
| name              | String        | -       | "home"                        |
| size              | Number,String | -       | "1em", 10, "100px"            |
| color             | String        | -       | "red", "#f00", "rgb(0,0,0)"   |
| style             | Object        | {...}   | { color: '#ff0'}              |
| title             | String        | -       | "Icon Title"                  |
| disableFill       | Boolean       | -       | true                          |
| removeInlineStyle | Boolean       | -       | true                          |

### Default Style

```js
{
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
}
```

### Related Links

- [react-icomoon](https://github.com/aykutkardas/react-icomoon)
- [vue-icomoon](https://github.com/aykutkardas/vue-icomoon)
- [preact-icomoon](https://github.com/aykutkardas/react-icomoon)
