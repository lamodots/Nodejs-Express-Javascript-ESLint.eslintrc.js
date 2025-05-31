# Nodejs-Express-Javascript-ESLint.eslintrc.js
 A complete ESLint config optimized for Node.js + Express + JavaScript projects, adapted from the TypeScript version with JavaScript-specific enhancements:
This configuration maintains all the Express-specific optimizations and production safeguards while adapting to JavaScript's flexibility. It enforces error handling patterns critical for Node.js services and includes JavaScript-specific allowances for common Express patterns.
#Installation for JavaScript Project:

```bash

npm install -D eslint eslint-config-airbnb-base \
eslint-plugin-import eslint-plugin-node \
eslint-plugin-unicorn eslint-plugin-sonarjs \
eslint-plugin-promise eslint-plugin-jest \
eslint-plugin-express eslint-plugin-security \
eslint-plugin-no-relative-import-paths eslint-config-prettier

```
## Recommended Express Project Structure:
```bash
project-root/
├── src/
│   ├── app.js              # Main app entry
│   ├── routes/
│   │   └── user.routes.js  # Route definitions
│   ├── controllers/
│   │   └── user.controller.js # Route handlers
│   └── middleware/
│       └── errorHandler.js # Central error handler
├── tests/
│   └── user.test.js        # Test files
├── .eslintrc.js            # This config
└── .eslintignore           # Add "node_modules/"
└── .vscode/settings.json          # Ensure VScode detects setup good for team"

```
## .vscode/settings.json

```json
{
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "configFile": ".eslintrc.js"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Pro Tips for Team Setup:
Add to package.json:

```json
"scripts": {
  "lint": "eslint . --ext .js",
  "lint:fix": "eslint . --ext .js --fix"
}

```
## Create .vscode/extensions.json:
(Prompts teammates to install ESLint extension)
```json
{
  "recommendations": ["dbaeumer.vscode-eslint"]
}
```

## Triggers automatic linting:
# 1. Install the enforcer  
npm install husky --save-dev  

# 2. Arm it with your ESLint config  
npx husky add .husky/pre-commit "npm run lint:fix && npm test"  

# 3. Watch junior devs cry happy tears 😭➡️😊  
    Runs your lint:fix script before every commit

    Executes ESLint with --fix option
```bash
npx husky add .husky/pre-commit "npm run lint:fix"

```
For a typescript project and documentaion of lint file see https://github.com/lamodots/Nodejs-Express-Typescrip-ESLint.eslintrc.js
