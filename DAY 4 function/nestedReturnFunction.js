function func1(){
    console.log("Hello from outer")
    return function(){
        console.log("Hello from inner")
        return function(){
            console.log("Hello from innermost")
        }
    }
}

func1()()()
/**
 
function func1(){
    console.log("Hello from outer")
    return function func2(){
        console.log("Hello from inner")
        return function func3(){
            console.log("Hello from innermost")
        }
    }
}

func1()()()

 */