let arr =["manas","rahul","gaurav"];
let arr2= [...arr,"Sachin"]

let obj = [{name:"manas",
            class:12,
            roll:1},
            {name:"Rahul",
            class:12,
            roll:2}
        ]

let obj2 = [...obj,{name:"Sachin",
                    class:12,
                    roll:3}]
// console.log(obj2);

let obj3 =[{id:1},{id:2},{id:3},{id:4},{id:5}];
const obj4= obj3.findIndex(elem => 4===elem.id)
console.log(obj4);