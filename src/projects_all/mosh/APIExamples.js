import React, { useEffect, useState } from 'react'
import config from './config.json'
import http from './Services/httpService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function APIExamples() {
    const [posts, setPosts] = useState([])
    
   useEffect(()=>{
    async function getAllPosts(){
        const {data : allposts}= await http.get(config.APIENDPOINT)
        setPosts([...allposts])
        toast.success("fetched data sucesfully ");

    }
    getAllPosts()
   },[])

   const hanglePost= async ()=>{
        let obj = {
            "title": "test",
            "body": "test"
          }
        const {data : addNew} = await http.post(config.APIENDPOINT,obj)
        console.log("addNew", addNew)
        const testPosts = [addNew, ...posts]
        setPosts(testPosts)
   }

   const handleEdit = async (post,index)=>{
        const original = JSON.parse(JSON.stringify(posts))
        console.log("original", original)
        post.title = "srikanth"
        console.log("1", original)

        const p = posts.map((item,i)=>{
          if (i == index) {
            return post
          }
          else {return item}
        })
        setPosts(p)
        try{
          await http.put(`${config.APIENDPOINT}/${post.id}`,post)
          // throw new Error("there is an error")
        }catch (err){ //err has request and respone properties
          console.log("log error")
          if(err.response && err.response.status == 404)
            alert("post has already been deleted")
          setPosts(original)
            //expected vs unexpected erros
            //expected - 404 nt found(when u open same page in muiltiplr broser and try to delete in 1 an next u get ths error) -400 bad request- the input given by user is wrong
            //unex - network down, server down, database down, bug in code(log them and display generic n freindly error message)
        }
       
   }
   
   const handleDelete =async (i) =>{
    const original = JSON.parse(JSON.stringify(posts))
    console.log("original", original)
    setPosts(posts.filter((item,index)=> item.id != i.id))
    try{
      await http.delete(config.APIENDPOINT+i.id)
      toast.success("deleted data sucesfully ");

    }catch(err) {
      console.log("delete catch block ")
      setPosts(original)
    }
   }

   useEffect(()=>{
    console.log("posts check", posts)
   },[posts])
  
   if(posts.length <= 0){
    return <div>empty list</div>
   }
  
  return (
    <div>
        <ToastContainer />
        <button onClick={()=>hanglePost()}>Add new</button>
        {
            posts && posts.map((item,index)=>{
                return <div key={index}>{item.title} <button type="button" onClick={()=>handleEdit(item,index)}>Update</button> <button type="button" onClick={()=>handleDelete(item)}>Delete</button></div>
            })
        }
    </div>
  )
}

export default APIExamples