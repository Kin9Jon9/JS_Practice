const listEmployee = [
    {name : '1', age : 31, salary : 4000},
    {name : '2', age : 31, salary : 5000},
    {name : '3', age : 35, salary : 6000}
]

const raisedSalayList = listEmployee.map(n => n.salary * 1.1);
raisedSalayList.forEach(n => console.log(n));