
# svelte-toasty
[![package version](https://img.shields.io/npm/v/svelte-toasty.svg?style=flat-square)](https://npmjs.org/package/svelte-toasty)
[![package downloads](https://img.shields.io/npm/dm/svelte-toasty.svg?style=flat-square)](https://npmjs.org/package/svelte-toasty)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/svelte-toasty.svg?style=flat-square)](https://npmjs.org/package/svelte-toasty)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Easily configurable toast notification component for Svelte

## Table of Contents

- [Demo](#demo)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)


## About

Check out the demo [here](https://svelte-toasty.netlify.app/) ([source](./src/App.svelte))

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install svelte-toasty
$ # OR
$ yarn add svelte-toasty
```


## Usage

```svelte
<script>
  import {
    ToastContainer,
    success
  } from "svelte-toasty";
</script>

<button type="button" on:click={() => }>Click me</button>
```

<div align="center">
    <img src="./example.gif" alt="Example of toasts" width="75%">
</div>


## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT 
    
