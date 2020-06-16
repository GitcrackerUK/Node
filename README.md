# Node
**Repo for learning and practising node.js**

Install Node Version Manager: <br>

    $ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash <br>

List of installed node versions:

	$ nvm list

List of available node versions:

	$ nvm ls-remote
    
Install version:

    $ nvm install [version]
    
Check node version:<br>

    $ node -v <br>

Check npm version:<br>
       
    $ npm -v

Install express || express generator:

    $ npm install express --save
    $ npm install -g express-generator
    $ express

Install nodemon as a development dependency and run:

    $npm install --save-dev nodemon
    $npx nodemon app.js

Install livereload and run:

    $npm install -g livereload
    $livereload
