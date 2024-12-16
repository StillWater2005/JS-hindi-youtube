function addTwoNumbers(number1, number2){
    return number1 + number2
}

function loginUserMessage(username)
{
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Hitesh Choudhary"))
console.log(loginUserMessage())