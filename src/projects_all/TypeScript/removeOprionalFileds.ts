// make optional fileds to mandatory using mapped types
type details ={
    name:string,
    age : number,
    lastName?:string
}

type removeOptional<T> = {
    [property in keyof T]-? : T[property]
}

type n = removeOptional<details>