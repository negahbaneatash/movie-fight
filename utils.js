
function debouncing(func) {
    let myTimeoutNo;        
    return (event, delay)=>{
        if(myTimeoutNo){
            clearInterval(myTimeoutNo)
        }
        myTimeoutNo=setTimeout(() => {
            func(event)
        }, delay);
    }
}