let str = '---------------------------';
/*
const arr = [5, 15, 25, 35, 45, 55, 65, 75];
const arr2 = [5, 10, 20, 40, 30, 20, 10, 5];*/
let ar1 = [];
let ar2 = [];
let ar3 = [];
let ar4 = [];
const arr = [5, 10, 15, 20, 25]; // x
const arr2 = [7, 4, 6, 3, 5]; // f
let n = arr.length;

let sum = 0; let ans1 = 0; ans2 = 0;
let fixi = 0

for(let i=0; i<n; i++){
    sum = sum + arr2[i];
    let o = arr[i]*arr2[i];
    fixi = fixi + o;
}
let x = fixi / sum;
for(let i=0; i<n; i++){
    let k = arr[i] - x;
    let l = k * k;

    ar1.push(arr[i]*arr2[i]);
    ar2.push(k);
    ar3.push(l)
    ar4.push(l*arr2[i]);
}
for(let i=0; i<n; i++){
    //console.log(ar1[i]);
    ans1 = ans1 + ar1[i];
};
/*console.log(str);
for(let i=0; i<n; i++){console.log(ar2[i])};
console.log(str);
for(let i=0; i<n; i++){console.log(ar3[i])};
console.log(str);*/
for(let i=0; i<n; i++){
    //console.log(ar4[i])
    ans2 = ans2 + ar4[i];
};
let sd = ans2/sum;
let v = Math.sqrt(sd);
let cv = (v/x)*100;
// console.log('σ² =',sd);
// console.log("σ =",v);
// console.log('CV',cv);

// const input = [3, 6, 9, 15, 18, 21, 24]
// const output = 13

// for(i=0; i<input.length; i++){
//     let current = input[i];
//     let next = current+3;
//     if(input[i+1] !== next){
//         console.log(next);
//         break;
//     }
// }

class Human{
    constructor(name,age,school){
        this.name = name;
        this.age = age;
        this.school = school;
    }
    sayHi(){
        console.log(`Hello my name is ${this.name}`)
        console.log(`Im student in ${school}`)
        console.log(`Im ${age} years old`)
    }

}
const name = ['Jay', 'Chintan','Parth', 'Prince', 'Shivam', 'Dhruvil']
const age = [20, 22, 20, 23, 20, 18]
const school = ['Engineering', 'BSC', 'High-School', 'Collage', "Engineering", "BA"]


let newEmptyArr = []
for(i=0; i<name.length-1; i++){
    let a = new Human(name[i],age[i],school[i])
    newEmptyArr.push(a)
}

let Ax = [144, 246, 400, 484,4576, 676, 900]
let Ay = [6, 7.5, 9, 9.8, 10.7, 11.5, 14]

let sumOfAx = 0
let sumOfAy = 0
let sumOfX2 = 0
let AxAy = 0

for(i=0; i<Ax.length; i++){
    let a = Ax[i]
    sumOfAx+=a

    let b = Ay[i]
    sumOfAy+=b

    let c = Ax[i] * Ax[i]
    sumOfX2+=c

    let d = Ax[i] * Ay[i]
    AxAy+=d
}

console.log('Ex',sumOfAx)
console.log('Ey',sumOfAy)
console.log('Ex2',sumOfX2)
console.log('Exy',AxAy)