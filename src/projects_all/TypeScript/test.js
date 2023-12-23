const parent = () =>{
    console.log("parent")

    const children = () =>{
        console.log("children ")
    }
    return children
}

const ref = parent()

ref.children()


export default {
    
}