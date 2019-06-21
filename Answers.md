1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    To create a new Object/Array while extending the properties of another object we can use, 'Object.assign', 'Array.concat', or a much simpler way would be to use the 'spread' operator...

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    The 'store' in Redux is the single source of truth because it will house all of our application data and it is very predictable because it can only be changed in one way - by using reducers. Reducers are pure functions that will determine how the next state of the redux store will look like. We tell our reducers to change the store based of different actions that we define. Actions are simply just an object that will have to have a 'type' property so our reducers will know how to change the store based on that property. These actions can also have additional properties like a 'payload' or 'data' to pass along more info to the reducer.
    
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
