# starter-react-next

A starter for server-side render of website with Next based on React.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Clone Starter

This package aims to clone a starter as a beginning of project. So it will detect the package.json file before cloning. And it will auto-install after clone the starter.

```
npm init next-app [new project] --example "https://github.com/vannoel/starter-react-next"
```

## File System

```
+-- assets/
| +-- definitions/ (constant definitions)
| `-- styles/ (style files)
+-- modules/ (module-type components)
+-- pages/ (page-type components for routes)
| |-- api/ (API for routes)
| `-- index.jsx
+-- plugins (configurations of third-party package)
+-- public
| +-- static
| | `-- locales/ (dictionary for i18next)
| `-- favicon.ico
+-- .browserslistrc
+-- .env.development
+-- .env.production
+-- .eslint.js
+-- .gitignore
+-- .huskyrc.json
+-- .lintstagedrc.json
+-- .prettierignore
+-- .prettierrc.js
+-- next.config.js
+-- package.json
+-- package-lock.json
+-- postcss.config.js
+-- RREADME.md
`-- server.js
```
