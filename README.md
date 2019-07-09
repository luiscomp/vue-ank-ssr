<div style="margin-top: 50px">
    <p align="center">
        <img src="assets/ank_icon.png?v=4&s=200" width="200" height="200" alt="Icon modifyed per @luiscomp from a icon made by Freepik from www.flaticon.com">
    </p>
    <h1 align="center">Vue-Ank-SSR Template</h1>
    <p align="center">Template VueJS-SSR with full Webpack configuration + Vuesax + EsLint + SASS</p>
</div>

### Usage
This is a project template for `vue-cli`.
``` bash 
$ npm install -g vue-cli
$ vue init luiscomp/vue-ank-ssr my-project
$ cd my-project
$ npm install
$ npm run dev
```

### EsLint Configuration for VSCode
To EsLint make a beautiful work in this project at VsCode, configure your `settings.json` as below
``` json
{
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        }
    ]
}
```
