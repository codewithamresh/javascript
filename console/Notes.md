# Cost of console.log

### Agenda


- Solution 1
- Solution 2
- Solution 3
  


--- 

### variants

```js
console.log("hello log")
console.warn("hello log")
console.error("hello log")

console.time("my timer")
console.timeLog("my timer")
for(let i = 0; i < 10000; i++){
    // console.log(1) //  1000 ms delay
}
console.timeLog("my timer")


```
  > Loop k andar console use krna is costly (takes lots of time).

  >> Loop 1sec le raha h lekin 5-6sec console api le rahi h output ko console me dikhane me.

  ### Solution 1
```js 
 if(process.env.NODE_ENV === 'production'){
    // webpack
    console.log = ()=>{}
    console.warn = ()=>{}
    console.error = ()=>{}

  }
// in vite - import.meta.env.MODE
  ```

  ### Solution 2
- Use centerised logger

```js
const  logger = {
    log: (...args)=>{
        if(process.env.NODE_ENV !== 'production'){
            console.log(...args)
        }
    }
    warn: (...args)=>{
        if(process.env.NODE_ENV !== 'production'){
            console.warn(...args)
        }
    }

    error: (...args)=>{
        if(process.env.NODE_ENV !== 'production'){
            console.error(...args)
        }
    }
}

```

### Solution 3 (Best solution)
```js
npm install terser-webpack-plugin --save-dev
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization:{
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions:{
                    compress:{
                        drop_console:true // removes all console.*
                    }
                }
            })
        ]
    }
}

```

```js
// for vite - npm i vite-plugin-remove-console --save-dev

plugins:[
    react(),
    removeConsole({
        exclude : ["error","warn"] // remove log but keep error and warn
    })
]
```

## For logs - use these packages
- sumo logic
- bugsna
- mixpanel