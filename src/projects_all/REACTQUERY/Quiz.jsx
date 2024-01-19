import axios from 'axios'
import React, { createContext, useState,useEffect, useContext,memo, useRef } from 'react'

import { useQuery } from 'react-query'
import uuid from 'react-uuid'
const Context = createContext({})

const makeGetCall = ()=>{
    return  axios.get("http://localhost:8000/results")
}

const useQueryGetQuestions =()=>{
    return  useQuery({queryKey:["questions"],queryFn:makeGetCall})
}

export default () => {
    console.log("Quiz Compo 1")
    const {data,isLoading}= useQueryGetQuestions()
    const answeredQuestions = useRef({})

    // useEffect(() => {
    //     setQuestionsData(data?.data)
    // }, [data])

    const [show,setShow] =useState(false)
    const [correctAnsers,setCorrectAnser] =useState(0)
    
    const submitQuestions =()=>{
        console.log("submitQuestions", answeredQuestions.current)
        setShow(true);
        let count = 0
        for(let key in answeredQuestions.current){
            console.log(answeredQuestions.current[key])
            if(answeredQuestions.current[key]){
                count++
            }
        }
        console.log("countis", count)
        setCorrectAnser(count)

    }

    
  return (
    <Context.Provider value={{answeredQuestions}}>
    <div>Quiz --</div>
    {!isLoading ?(<>
        {show &&<div>{correctAnsers}/ {data?.data?.length} were answered correctly</div> }

    <QuestionArray questionsData={data?.data}/>
    <button  style={{marginBottom:"150px"}}onClick={submitQuestions}>submit</button>

    </>
    ) :(<div>is Loading</div>)}
    
    </Context.Provider>
  )
}

const QuestionArray =memo(({questionsData})=>{
 
    return(<div>{questionsData?.length ? questionsData?.map((currentQuestion,QuestionNumber)=>{
            return (<>
            <DisplayQuestions key={QuestionNumber} currentQuestion={currentQuestion} QuestionNumber={QuestionNumber} /></>)
        }):<>No Data</>
        }
        </div>
        )
})

const DisplayQuestions =memo(({currentQuestion,QuestionNumber})=>{
    let idd = uuid()
    currentQuestion.incorrect_answers.push(currentQuestion.correct_answer)
    return <div>
        <h1>{QuestionNumber} ) -{currentQuestion.question}</h1>
        {currentQuestion.incorrect_answers.map((anser)=>{
            return <DisplayOptions key={anser} anser={anser} idd={idd} correct_answer={currentQuestion.correct_answer} QuestionNumber={QuestionNumber}></DisplayOptions>

        })}
    </div>
})

const DisplayOptions =memo(({anser,idd,correct_answer,QuestionNumber})=>{
 const {answeredQuestions} = useContext(Context);
    console.log("questionsData",answeredQuestions.current)
    const updateScore=(selectedAnswer)=>()=>{
        const newquestiosDat = answeredQuestions.current
        console.log(selectedAnswer , correct_answer)
        newquestiosDat[QuestionNumber] = false 
        if(selectedAnswer == correct_answer){
            newquestiosDat[QuestionNumber] = true
        }
        console.log("updated data",newquestiosDat)
    }

    return <div>
    <input type="radio" name={idd} onChange={updateScore(anser)}/>{anser}</div>
})