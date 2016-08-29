# Gritcode eslint configuration

> Gritcode specific javascript linting


No additional configuration should be required; upon installation, eslint-config-gritcode adds an .eslintrc.yml into the project root.


## Project setup  
Unfortunately [eslint shareable configs do not resolve dependencies](https://github.com/eslint/eslint/issues/3843) so we need to install all the dev dependencies for each project.  

```bash
npm i -D babel-eslint@^6.1.2 eslint@^3.3.1 eslint-config-airbnb@^10.0.1  \
eslint-plugin-jsx-a11y@^2.1.0 eslint-plugin-import@^1.13.0 \
eslint-plugin-react@^6.1.2 \
git+ssh://git@github.com/gritcode/module-eslint-config-gritcode.git
```

## Atom setup    
To setup linting within atom, install the following atom packages  
`apm install linter linter-eslint`

Make sure you have a single project open in Atom.  
Within the tray for Atom you will be able to see notifications for the project and the current file within the project.  

<img src="https://github.com/gritcode/module-eslint-config-gritcode/raw/master/eslint-file.png" alt="eslint notifications" width="50%" />


## resources  
- [Creating a Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs#creating-a-shareable-config)
- [Sharable config means having to install all its dependencies]()
