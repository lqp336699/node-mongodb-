# node-mongodb-

#11-14

babel 的使用总结：

https://github.com/babel/example-node-server

npm install --save-dev @babel/cli @babel/core @babel/preset-env

touch .babelrc 

{
  "presets": ["@babel/preset-env"]
}


"scripts": {
    "build": "babel index.js -d dist",
-   "start": "npm run build && node dist/index.js"
+   "start": "nodemon dist/index.js"
  }
