type ButtonSize = "extrasmall" | "small" | "large"
type ButtonVarient = "default" | "primary" | "secondary"

type ButtonConstType = {
    padding:{
        [size in ButtonSize] :{
            [varient in ButtonVarient] : string
        }
    }
    width:{
        [size in ButtonSize] : string
    },
    icons:{
        [size in ButtonSize] : string
    }
}
const buttonConstants:ButtonConstType={
    padding:{
        "small": {
            "default":"",
            "primary":"",
            "secondary":""
        },
        "large":{
            "default":"",
            "primary":"",
            "secondary":""
        },
        "extrasmall":{
            "default":"",
            "primary":"",
            "secondary":""
        }
    },
    width:{
        "small":"20px",
        "extrasmall":"20px",
        "large":"30px"
    },
    icons:{
        "small":"20px",
        "extrasmall":"20px",
        "large":"30px"
    }
}
