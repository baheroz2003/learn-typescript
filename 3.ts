// function getValue(myVal:number):string{
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }
const getHello=(s: string):string=>{
    return ""
}
const heros=["thor","spiderman","iron"]
// heros.map(hero=>{
//     return `hero is ${hero}`
// })
//automatically ts uses type inference
// heros.map((hero): string =>{
//     return 1
// )
function consoleError(errmsg:string): void{
    console.log(errmsg);
    return 
}
function handleError(errmsg: string): void{
    console.log(errmsg);
}
//some fucntion never returns a value 
function fail(msg:string): never {
    throw new Error(msg);
}


