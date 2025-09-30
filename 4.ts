//bad behaviour of objects 
const User={
    name:"hitesh",
    email:"hitesh@lco.dev",
    isActive: true
}
//niche wala shi code hai
function createUser({name, isPaid}: {name: string, isPaid: boolean}) {
    console.log(`User: ${name}, Paid: ${isPaid}`);
}
createUser({name: "hitesh", isPaid: false});
// Output: User: hitesh, Paid: false
function createCourse():{name: string, price: number}{
    return {name:"reactjs", price: 399}
}
// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
// createUser(newUser)
//ye upar wala code ek bad behaviour hai



