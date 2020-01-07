const userList = [
    {name : '1', age : 23, score : 100},
    {name : '2', age : 24, score : 95},
    {name : '3', age : 25, score : 90}
]

userList.forEach(function(user){
    console.log(user);
})

console.log('-------------')

userList.forEach(user=>console.log(user));

