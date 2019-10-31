# Create A React Todo App With Jason Server as backend database

## Check List
### Front End: React Part...
* [x] - Create a React todo App
* [x] - Render a message in App component
* [x] - Render msg from state 
* [x] - Create a todo form 
* [x] - Add a form submit and onChange event handlers
* [x] - Create New Todo Form
* [x] - Call a function when the todo is submitted
* [x] - Create a string property on our state to store the user input
* [x] - List the default todos in browser
* [x] - Listen for when the input changes and update state
* [x] - Log the user input chagnes and update the state
* [x] - Create an arrray of property on our state for todos
* [x] - Add a nwe tod into the tods array fwith done: false
* [x] - Show the todos in a list in a browser
* [x] - add Check input to show done on the todo to mark it
* [x] - Show a line through the todo text
* [x] - Add a button to remove a todo
* [x] - Add a button to mark all todos as done
* [x] - What are components...
* [x] - Create a component for the new todo form and pass on to all the relevant props
* [x] - Create todoItem in TodoList components and pass their respective props down the chain

### Simple JSON Server for Backend storage of the todo items

* [x] Setup JSON Server for API endpoint
    * [x] Install jSON server `npm install -g json-server`
    * [x] Create a db.json file with some data

    ```json 
    {
        "todos": [
            {
                "id": 1,
                "title": "setting up json-server",
                "done": false
            },
            {
                "id": 2,
                "title": "connecting react fron end to json server",
                "done": false
            },
            {
                "id": 3,
                "title": "setup axios for connecting react and json server",
                "done": false
            }
        ]
    }
    ```
    * [x] Start JSON Server `json-server --watch db.json`

At this point you should see at `http://localhost:3000/todos`

```json
[
  {
    "id": 1,
    "title": "setting up json-server",
    "done": false
  },
  {
    "id": 2,
    "title": "connecting react fron end to json server",
    "done": false
  },
  {
    "id": 3,
    "title": "setup axios for connecting react and json server",
    "done": false
  }
]
```
* [] - `npm install axios --save`







