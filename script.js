let todo=[];
let req=prompt("Please Enter Your Request");
while(true){
    if(req == "quit"){
        console.log("Quitting from the App");
        break;
    }
    if(req == "list"){
        console.log("-----------------")
        for(let i=0 ; i<todo.length ; i++){
            console.log(i,todo[i])
        }
        console.log("-----------------");
    }
    else if(req == "add"){
        let task=prompt("Please Enter Your Tasks")
        todo.push(task)
        console.log("Task Added")
    }
    else if(req == "delete"){
        let idx=prompt("Please Enter the Index Number of the Task that you want to Remove")
        todo.splice(idx,1)
        console.log("Task Removed")
    }
    else{
        console.log("Wrong Request")
    }
    req=prompt("Please Enter Your Request");

}
