# {{ name }}
![document version 1.0](https://img.shields.io/badge/vers%C3%A3o-1.0-green.svg)

{{ description }}

> ####
Project Organization:
```
.
├── assets
├── build
├── mixins
├── src
|   ├── components
|   |   ├── modals --------------- Folder to modal components
|   |   ├── templates ------------ Folder to generic components
|   |   └── index.js ------------- File to import all generics components
|   ├── modules
|   |   ├── app ------------------ Folder of application
|   |   |   ├── app.js ----------- Main app file
|   |   |   ├── App.vue ---------- Layout root
|   |   |   └── appStore.js ------ Global app store
|   |   ├── login ---------------- Login base folder
|   |   └── principal ------------ Module after login successfully
|   ├── plugins
|   |   └── i18n.js -------------- Internationalization file with plugin i18n
|   ├── router
|   |   ├── index.js ------------- Router file
|   |   └── meta.json ------------ Meta router file
|   ├── scss
|   |   └── base ----------------- Folder to variables of scss
|   |   └── pages ---------------- Folder to pages of scss
|   |   └── theme ---------------- Folder of theme base scss file
|   |   └── style.scss------------ Style file
|   └── utils
|       ├── Constantes.json ------ Constants file
|       ├── ResponseCodes.json --- Response codes requests file
|       ├── UrlRequests.json ----- Configuration file of requests
|       └── Utils.json ----------- Utils methods file
├── static
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
└── server.js
```

> #### Change the execution port:
- file destiny: /server.js

``` javascript
140. const port = process.env.PORT || 3000
141.     app.listen(port, '0.0.0.0', () => {
142.    console.log(`server started at localhost:${port}`)
143. })
```

> #### Criar alias de importação:
- file destiny: /build/webpack.base.config.js

add to each import alias the name and path basis:
``` javascript
21. alias: {
22.    'constantes': resolve('../src/utils/Constantes')
23. }
```

Example of use:
``` javascript
import Constantes from 'constantes'
```
