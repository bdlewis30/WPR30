## Setting up your React App

1. `create-react-app name_of_app`
2. `cd name_of_app`
3. `npm start`

## Basic skeleton for a class component WITHOUT state

```js

import React, { Component } from 'react'

class StatelessClass extends Component {
  render() {
    return (
      // one child element here, often a div
    )
  }
}

export default StatelessClass

```

## Basic skeleton for a class component WITH state

```js

import React, { Component } from 'react'

class StatefulClass extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      // one child element here, often a div
    )
  }
}

export default StatefulClass

```

## Classes with extends

We use `class Name extends Component {...}` so that we can have access to all the good stuff from the Component class.

```js
class Parent {
  constructor() {
    this.number = 1
  }
  
  add(num) {
    return num + this.number
  }
  
}

class Child extends Parent {
  constructor() {
    super()
    this.other_number = 2  
  }
  
}

let obj = new Child()
// the Child class now has access to the methods and properties from the Parent class. 
```

