interface AddTodoAction {
    type: Types
    text
}

enum Types {
    type = "ADD_TODO",
    type1 = "aaa"
}
export const addTodo3 = (text: string) => <AddTodoAction>({ 
    type: "ADD_TODO",
    text
})

// export const addTodo2 = (text: string)  => ({
//     type: "ADD_TODO",
//     text
// })

const rd = addTodo3("hellow world")
// const rd2 = addTodo2("hellow world")

console.log(rd)


//export const addTodo3 = (text: string) => <AddTodoAction>({  - Using this notation, you typecast the returned object to the type AddTodoAction

