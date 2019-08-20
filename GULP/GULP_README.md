# Initialize the project
*node package manager*  

`npm init`

*press ENTER for all except entry point => use ./dist/main.js*  
*can change configuration in package.json generated*

# Install Gulp-CLI
*Gulp is a task-runner : JS minifier, CSS preprocessor, etc.*  

*install gulp-cli globally*  
`npm install -g gulp-cli`


# Install dependencies in project
*--save-dev put dependecies in package.json*
*gulp-typescript is a gulp plugin for Typescrip*

*dependencies are installed in 'node_modules' folder along with their own dependencies*

`npm install --save-dev typescript gulp@4.0.0 gulp-typescript`

# Configure TypeScript compiler

create/edit tsconfig.json at root of project

#Define Gulp Tasks

# Execute Task
gulp == gulp default

gulp task-name


# Browserify
## Bundle all modules into one JS file to send to the browser

# Watchify
## edit-save-refresh loop to view file updates

# Babel
## Compile ES6(ES2015) and above to previous ES5(ES2009) and ES3

# Watchify
## Minify code to speed up download