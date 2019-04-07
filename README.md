<div style="text-align: center; margin-top: 50px">
    <p align="center">
        <img src="assets/ank_icon.png?v=4&s=200" width="200" height="200">
    </p>
    <h1>Vue-Ank-SSR Template</h1>
    <p>Template VueJS-SSR with full Webpack configuration + Vuesax + EsLint + SASS</p>
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
To EsLint work correctly for this template in VsCode, configure your `settings.json` as below
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