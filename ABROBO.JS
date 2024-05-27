//////////////////////////////////////// CHECKING FIBBANACCI NUMBER OR NOT GIVEN NUMBER ///////////////////////////////////////////
// function isFibanacci(n){
//    let a=0;
//    let b=1;
//    let c;
//    while(true){
//      if(a===n) return true;
//      else if(a > n) return false;

//      c=a+b;
//      a=b;
//      b=c;
//    }
// }
// const num=9;
// if(isFibanacci(num)){
//   console.log("it is a Fibb")
// }else {
//   console.log("it is  not aFibb")

// }

// //////////////// //////////////////////// PRINTING UPTO 10 FIBANACCI NUMBERS  USING RECURSSIVE FUNVTION//////////////////////////////////////////////////////////
// <!-- function fibanacci(n){
//     if(n <= 1){
//       return n;
//     }else {
//       return fibanacci(n-1) + fibanacci(n-2)
//     }
//     }
//     const num=10;
//     for(let i=0;i<num;i++){
//       console.log(fibanacci(i))
//     } -->
    
//     <!-- //////////////////////////////////////////////////////////// FACTORIAL OF NUMBER //////////////////////////////////////////////////
// m 
//        -->
      
    
//        ///////////////////////////////////////////   PRIME NUMBERS UPTO 100/////////////////////////////////////////
    
//     <!--    
//     function prime(n){
//         if(n <=1){
//           return false
//         }
//         for(let i=2;i<=Math.sqrt(n);i++){
//           if(n % i === 0) return false
//         }
//         return true;
//         }
        
        
//         const num=100;
//         for(let i=2;i<num;i++){
//           if(prime(i)){
//             console.log(i)
//           }
//         }
//          -->
    
//          <!-- /////////////////////////////////////// CHECKING PRIME OR NOT /////////////////////////////////////////
//          function isPrime(n) {
//             if (n <= 1) {
//               return false;
//             }
          
//             for(let i=2;i<=Math.sqrt(n);i++){
//               if(n % i === 0) return false
//             }
//             return true;
//           }
//           const num=5;
//           if(isPrime(num)){
//             console.log("prime")
//           }else {
//             console.log("not a prime")
//           } -->
    
//           ////////////////////////////////////////////////  EVEN OR NOT ////////////////////////////////////////////////////
    
//           <!-- function isEven(n){
//             return n%2 ===0
//          }
//          const num=4;
//          if(isEven(num)) console.log("even")
//          else console.log("odd") -->



// function even(num){
//   let result=[];
//   for(let i=0;i<num;i++){
//     if(i % 2 ==0) result.push(i)
//   }
//   return result;
// }
// console.log(even(30))


///////////////////////////////////////////////////////PALINDROME OR NOT //////////////////////////////////////////


// function palindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//   left ++;
//   right --;

//   } return true;
// }
// console.log(palindrome('manam'));



// function isPlaindrome(str){
//   return str===str.split('').reverse().join('')
// }

//////////////// REMOVE DUPLICATE PROPERTIES FROM AN OBJECT////////////////////////////////////////////////////////////////
let arr1 = [{id: 1, title: 'title 1'}, {id: 2, title: 'title 2'}];

let arr2 = [{id: 1, roll: 101}, {id: 2, roll: 102}, {id: 3, roll: 103}];

////   USING SPREAD OPERATOR ///////////////
// let arr3={...arr1,...arr2};
// console.log(arr3)


/////// USING OBJECT.ASSIGN METHOD ////////////////
// let arr3=Object.assign({},arr1,arr2)
// console.log(arr3)


//////// CREATE OWN METHODS /////////////////////////

// function isPresent(arr,id){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i].id === id) return true;
//   }
//   return false
// }

// function meregeArr(a1,a2){
//   let output=[]
//   for(let i=0;i<a1.length;i++){
//     if(!isPresent(output,a1[i].id)){
//       output[output.length]=a1[i]
//     }
    
//   }
//   for(let i=0;i<a2.length;i++){
//     if(!isPresent(output,a2[i].id)){
//       output[output.length]=a2[i]
//     }
    
//   }
//   return output;
// }
// console.log(meregeArr(arr1,arr2))


function isPresent(obj, key) {
  return obj.hasOwnProperty(key);
}

function mergeObjects(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    if (!isPresent(result, key)) {
      result[key] = obj1[key];
    }
  }
  for (let key in obj2) {
    if (!isPresent(result, key)) {
      result[key] = obj2[key];
    }
  }
  return result;
}

console.log(mergeObjects(arr1,arr2));

/////////////////////////////////////////////// TWO OBJECTS FIND COMMOM PROPERTIES ////////////////////////////////////////////////////////////////

// const input1={a:1,b:2,c:3,d:10,e:12};
// const input2={a:1,e:12,f:6,d:10};
// function findCommonProperties(obj1,obj2){
//   let commonProperties={};
//   for(let key in obj1){
//     if(obj2.hasOwnProperty(key)){
//       commonProperties[key]=obj1[key]
//     }
//   }
//   return commonProperties
// }
// console.log(findCommonProperties(input1,input2))


// const input1={a:1,b:2,c:3,d:10,e:12};
// const input2={a:10,e:12,f:6,d:10};
// function findCommonProperties(obj1,obj2){
//   let commonProperties={};
//   for(let key in obj1){
//   if(obj1[key] == obj2[key]) commonProperties[key]=obj1[key]
//   }
//   return commonProperties
// }
// console.log(findCommonProperties(input1,input2))

////////////////////////////////////////////FIND NTHLARGEST NUMBER FROM AN ARRAY ////////////////////////////////////////////////

// let arr=[1,2,3,4,5,6];
// function findLargest(arr,n){
//   let max;
//   for(let i=0;i<n;i++){
//     max=arr[0]
//     for(let j=1;j<arr.length;j++){
//       if(arr[j]>max){
//         max=arr[j]
//       }
//     }
//     arr.splice(arr.indexOf(max),1)
//   }
//   return max;
// }
// console.log(findLargest(arr,1))
//////////////////////////////////////////////// FIND LARGEST AND SMALLEST NUMBER FROM AN ARRAY ////////////////////////////////

// let arr=[1,2,3,4,5,6];
// function largestSmallest(arr){
// let largest=-Infinity;
// let smallest=Infinity;
// for(let num of arr){
//   if(num>largest){
//     largest=num
//   }
//   if(num < smallest){
//     smallest=num
//   }
// }
// return {largest,smallest}
// }
// console.log(largestSmallest(arr))

//////////////////////////////////////// IN-BUILT METHOD////////////////////////////////////////////////////////////
// const arr=[1,2,3,4,5]

// console.log(arr[arr.length-2])




/////////////////////////////////////////////  FIND SECOND LARGEST NUMBER FROM AN ARRAY////////////////////////////////////////////
// let arr=[1,2,3,4,5,6];
// function secondMax(arr){
// let first=-Infinity;
// let second=-Infinity;
// for(let num of arr){
//   if(num > first){
//     second=first;
//     first=num;
//   }
//   else if(num  > second && num!== first){
  
//     second=num;
//   }
// }
// return second

// }
// console.log(secondMax(arr))

let arr=[1,2,3,4,5,6,7];
// function secondMax(arr){
//   let first=-Infinity;
//   let second=-Infinity;
//   let third=-Infinity;
//   let fourth=-Infinity
//   for(let num of arr){
//     if(num >first){
//       fourth=third;
//       third=second;
//       second=first;
//       first=num;
//     }
//     else if(num > second && num!==third && num!==second && num!==first   ){
//       fourth=third;
//       third=second;
//       second=num;
//     }
//     else if(num > third && num!==third && num!==second){
//       fourth=third;
//       third=num;
//     }
//     else if(num > fourth && num!==third){
//       fourth=num
//     }
//   }
//    return fourth

// }
// console.log(secondMax(arr))

///////////////////////////////////////////////////// REMOVE DUPLICATES NUMBERS FROM ANA ARRAY////////////////////////////////////////////////////////////
// let arr=[1,2,3,4,5,6,1,2,3,4,5];
// function findUnique(arr){
//   let temp={};
//   let output=[];
//   for(let irem of arr){
//     temp[irem]=true;
//   }
//   for(let key in temp){
//     output[output.length]=key
//   }
//   return output;
// }
// console.log(findUnique(arr))


// let arr=[1,2,3,4,5,6,1,2,3,4,5];

// function isPresent(arr,ele){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===ele) return true;

//   }
//   return false
// }

// function findUnique(arr){
//  let output=[];

//  for(let i=0;i<arr.length;i++){
//    if(!isPresent(output,arr[i])){
//      output[output.length]=arr[i]
//    }
//  }
//  return output
// }
// console.log(findUnique(arr))



////////////////// ANOTHER WAY  =>REMOVE DUPLICATES FROM ANA ARRAY AND COUNT THE NUMBER OF DUPLICATES FROM ANA ARRAY///////////////////////////////
// const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7];

// function removeDuplicatesAndCount(arr) {
//   let counts = {};
//   let totalDuplicates = 0;
//   let output = [];

//   for (let item of arr) {
//     counts[item] = (counts[item] || 0) + 1;    <=>=>
//     if (counts[item] > 1) {
//       totalDuplicates++;
//     }
//   }

//   for (let key in counts) {
//     // output.push(parseInt(key));/
//     output[output.length]=Number(key)
//   }

//   return { totalDuplicates, uniqueArray: output };
// }
// const result = removeDuplicatesAndCount(arr);
// console.log(result)

////////////////////////////////////////////// FREQUENCY OCCURENCE OF CHARACTERS FROM AN STRING ///////////////////////////////////////

// let str="abcdabcdabacd"
// function freqOccurrence(str){
//   let charCount={};
//   for(let char of str){
//        if(charCount[char]){
//          charCount[char]++
//        }else {
//          charCount[char]=1
//        }
//   }
//   return charCount
// }
// console.log(freqOccurrence(str))


// function freqOccurence(arr){
//   let charCount={};
//   for(let item of arr){
//     if(charCount[item]){
//       charCount[item]++;
//     }else {
//       charCount[item]=1
//     }
//   }
//   let result=[];
//   for(let key in charCount){
//    let array=Array( charCount[key]).fill(Number(key))
//    result.push(array)
//   }
//   return result
// }
// let arr=[1,1,2,3,3,4,5,5,] 
// console.log(freqOccurence(arr))


// let str="helloworld"
// function printCharDuplicate(str){
//   let charCount={};
//   for(let char of str){
//        if(charCount[char]){
//          charCount[char]++
//        }else {
//          charCount[char]=1
//        }
//   }
//   let output="";
//   for(let key in charCount){
//     if(charCount[key] > 1){
//       output+=key
//     }
//   }
//   return output;
// }
// console.log(printCharDuplicate(str))

////////////////////////////////////////////////////// REVERSE OF A STRING //////////////////////////////////////////////////////////

// let str="helloworld";
// function reverse(str){
//   let reverse="";
//   for(let i=0;i<str.length;i++){
//     reverse=str[i] + reverse
//   }
//   return reverse;
// }
// console.log(reverse(str))



///////////////////////////////////// REMOVE CHARCETRS FROM A STRING/////////////////////////////////////////////////////
// function removeCharacters(str,charRemove){
//   return str.split('').filter(char=>!charRemove.includes(char)).join('')
// }
// console.log(removeCharacters('helloworld',['l','0']))



//////////////////////////////////////////////// ROTATE THE NUMBER AS PER THE INDEX /////////////////////////////////////////////////////
// let arr=[1,2,3,4,5,];
// // const index=3;

// function rotatedArray(arr,index){
//   let result=[];
//   for(let i=index;i<arr.length;i++){
//     result.push(arr[i])
//   }
//   for(let i=0;i<index;i++){
//     result.push(arr[i])
    
//   }
//   return result;
// }
// console.log(rotatedArray(arr,3))

/////////////////////////////////////////////// CURRYING FUNCTION //////////////////////////////////////////////////////////////


// const sum=sum1(1)(2)(3)(4)(5)(6)()

// function sum1(a){
//   return function(b){
//            if(b) return sum1(a+b)
//            return a;


//   }
// }
// console.log(sum)

// function outer(a){
//   return function inner1(b){
//     return function inner2(c){
//       return function inner3(d){
//         return function inner4(e){
//           return a+b+c+d+e
//         }
//       }
//     }
//   }
// }
// let mf=outer(2)(2)(2)(2)(2);
// console.log(mf)

//////////////////////// AFTER EVERY CAPITAL LETTER I WANT TO ADD  A SPACE IN A STRING//////////////////////////////////////////////

// let str="MyNameIsJohn";
// let string=str.replace(/([a-z])([A-Z])/g,`$1 $2`)
// console.log(string)


// function getSpace(str){
//   let result="";
//   for(let i=0;i<str.length;i++){
//     if(str[i]=== str[i].toUpperCase()){
//       result+=" "+str[i]
//     }else {
//       result+=str[i]
//     }
//   }
//   return result;
// }
// console.log(getSpace(str))

/////////////////////////////////// SWAPPING TO STRINGS WITH AND WITHOUT THIRD VARAIBLE //////////////////////////////////////


////// using a third variable  ///
// var x="hello";
// var y="world";

// let temp=x;
// x=y;
// y=temp;
// console.log(x);
// console.log(y)

/////////// without third variable ///////////
// var x="hello";
// var y="world";

// [x,y]=[y,x]
// console.log(x);
// console.log(y)

/////////////////////////////////////////////////////// INTERVIEW QUESTION //////////////////////////////////////////////////////

///////////////////////CONVERT ARRAY INTO OBJECT //////////////////////////

// let arr=['a','b','c'];
// let obj=arr.reduce((a,b)=>{
//   return {...a,[b]:b}
// },{})
// console.log(obj)

///////////////////////CONVERT OBJECT INTO ARRAY //////////////////////////

// const obj = { a: 1, b: 2, c: 3 };  
// const arr = Object.entries(obj);
// console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]

// const obj = { a: 1, b: 2, c: 3 };
// const arr = Object.keys(obj).map(key => [key, obj[key]]);
// console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]




/////////////////////////// DELETE OPERATOR //////////////////////////
// var x=1;
// var output=(function (){
// delete x;                // delete operator removes property of an object but not delete variable
// return x;
// })()                                 delete obj.name
// console.log(output)

// var name="pankaj";
//  age=25;           

// console.log(delete name);
// console.log(delete age)           It can delete global variable
// console.log(name)


// function foo(){
//   console.log(x);  //undefined
//   var x=10;
// }
// foo()

// function foo(){
//   console.log(x);  //Reference error cant access before initialization
//   let x=10;
// }
// foo()

// function foo(){
//   console.log(x);   // xis not defined beacuse in memory creation phase x is not cxreated and it is created in code execution phase
//    x=10;
// }
// foo()

// function foo(){
//     x=10;
//    }
//    foo()
//    console.log(x); //10 =>acts like global variable


////////////////////////////////////// ASYNC IMPLEMENT /////////////////////////////
// async function foo (){
//   return "hello world"
// }
// (async ()=>{
//  const response=await foo()
//  console.log(response)
// })()
   

//////////////////////////////////// PURE FUNCTION .//////////////////////////////////////////

// let a=1;
// function pure(b){
//    return a+b
// }
// console.log(pure(1))
// console.log(a)

/////////////////////////////////// IMPURE FUNCTION /////////////////////////////////////


// let a=1;
// function impure(b){
//    return a+=b;

// }
// console.log(impure(1))
// console.log(impure(1))
// console.log(impure(1))
// console.log(impure(1))
// console.log(a)


/////////////////////////////////////////////////////////////////////////////////////////
//// => here it is aobject that has properties and did shallow copy and then i convert deep copy by 2 ways

// const user1={
//     name:'mani',
//     age:24,
//     address:{
//       city:'Bengalury',
//       state:'Karnataka'
//     }
//   }
// 1(a)  const user2={...user1,address:{...user1.address}};   /// shallow to deep
//1(b) const user2=structuredClone(user1)   nested objproperties

// user2.name="Naga";
//   user2.address.city="hyderabad"
  
//   console.log(user1);
//   console.log(user2)

///////////////////////////// Destructure of object //////////
// let student={
//     name:"mani",
//     age:25,
//     address:{
//       street:"hyderabad",
//       state:"karnataka"
//     }
//   }
//   let {name,age,address:{street,state}}=student;
//   console.log(name);
//   console.log(age)
//   console.log(street)
//   console.log(state)



// let obj={
//   name:"manikanta",
//   id:123,
// }
// Object.defineProperties(obj,{id:{writable:false}})
// obj.id="234";
// obj.name="harinadh"
// console.log(obj)



///////////////////////////////////[5,4,3,1]=>5+4+3+1 =>13 =>1+3 =4 /////////////////////////

// function calaculateDigits(numbers){
//   sum= numbers.reduce((a,b)=>a+b,0)
//   if(sum >= 10){
// 1   sum= sum.toStrimg().split('').map(Number).reduce((a,b)=>a+b,0)
// 2 Array(sum).reduce((a,b)=>a+b,0)

//   }
//   return sum;
//  }
//  console.log(calaculateDigits([5,4,3,1]))
 





//////////////////////////////////// USING FLAT MULTI TO SINGLE DIMENSIONAL /////////////////////
// let arr=[[1],[2],[[3],[4]]];

// Array.prototype.flat=function (flattend=1){
//   return this.reduce((acc,val)=>{
//     if(Array.isArray(val) && flattend>0){
//       acc.push(...val.flat(flattend-1))
//     }else {
//       acc.push(val)
//     }
//     return acc;
//   },[])
// }
// console.log(arr.flat(2))


// function myFlat(arr,depth=1){
//   return arr.reduce((acc,val)=>{
//     if(Array.isArray(val) && depth >0){
//       acc.push(...myFlat(val,depth-1))
//     }else{
//       acc.push(val)
//     }
//     return acc
//   },[])
// }
// console.log(myFlat(arr,Infinity))


// Array.prototype.myFilter=function(cb){
//   let result=[];
//   for(let i=0;i<this.length;i++){
//     if(cb(this[i])){
//     result.push(this[i])
//     }
//   }
//   return result;
// }
// let arr=[1,3,2,4,6,5];
// console.log(arr.myFilter(item=>item>2))



/////////// BUBBLE SORT //////////////////
// const arr=[5,6,9,3,8,2,1];

// Array.prototype.reverseSort=function (){
 
//  for(let i=0;i<this.length-1;i++){
//    for(let j=0;j<this.length-i-1;j++){
//       if(this[j] < this[j+1]){
//         const temp=this[j];
//         this[j]=this[j+1];
//         this[j+1] =temp
//       }
//    }
//  }
//  return this
// }
// console.log(arr.reverseSort())

/////////// INSERTION SORT //////////

// let arr=[50,30,40,20,10];

// function insertionSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i] < arr[j]){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort(arr))

// //////////// SELECTION SORT ////////////
// function selectionSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     // Find the index of the minimum element in the unsorted portion of the array
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     // Swap the minimum element with the current element
//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }

// // Example usage:
// const arr = [64, 25, 12, 22, 11];
// console.log("Original array:", arr);
// console.log("Sorted array:", selectionSort(arr));

// //////////////// MERGE SORT //////////////////////
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const middle = Math.floor(arr.length / 2);
//   const leftHalf = arr.slice(0, middle);
//   const rightHalf = arr.slice(middle);

//   return merge(mergeSort(leftHalf), mergeSort(rightHalf));
// }

// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Add remaining elements from left and right arrays (if any)
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// // Example usage:
// const arr = [64, 25, 12, 22, 11];
// console.log("Original array:", arr);
// console.log("Sorted array:", mergeSort(arr));


//////////////////////////////////////////////////////////////////////////////////////////////

// async function foo(){
//     return "hello world";
//    }
//    // const result=foo();
//    // console.log(result.then(res=>console.log(res)))
//    ( async()=>{
//      const response=await foo();
//      console.log(response)
//    })()


///////////////////////////////////////////////////////////////////////////////////////////////

// function abc(){
//     console.log("hi");
//   }
//   const value= new abc()
//   console.log(value)
  //////////////////////////////////////////////////////////////////////////////////////////////////


// let app=document.getElementById('app');
// let btn=document.getElementById('btn');
// btn.addEventListener('click',function(){
//   app.textContent="bye"
// })
////////////////////////

// console.log(sum(2)(3))
// console.log(sum(2,3))

// function sum(a,b){
//   if(typeof b !== 'undefined'){
//            return a+b;
//   }
//   else {
//     return function(b){
//       return a+b
//     }
//   }
// }


// function addTo(initial){
//   let sum=initial;
//   return function qwerty(value){
//     sum+=value;
//     console.log(sum)
//   }
// }

// const x = addTo(5)
// const qwerty = x;
//  qwerty(5)
//  qwerty(6)
// qwerty(4)





// const arr=[5,6,9,3,8,2,1];
// function findPairs(arr,target){
//   let pairs=[];
//   let temp={};
//    for(let num of arr){
//     let diff=target-num;
//     if(temp[diff] !==undefined){
//       pairs.push([num,diff])
//     }
//     temp[num]=true;
//    }
//    return pairs
// }
// const target=9
// console.log(findPairs(arr,target))

////////////////////////////////////// find missing number in an array //////////////////

// function findMissingnumber(arr){
//     let n=arr.length+1;
//     let sum=0;
//     for(let item of arr){
//       sum+=item
//     }
//     x=(n*(n+1)/2)-sum;`
//     return x;
//   }
//   let arr=[1,2,3,5]
  
//   console.log (  findMissingnumber(arr))


///////////// find total missing numbers in an array/////////////////////////////////////////////
// let arr = [1, 2, 3, 5, 6, 7, 9, 12, 13, 16];

// function findMissingNumbers(arr) {
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     let missingNumbers = [];
    
//     for (let i = min + 1; i <= max; i++) {
//         if (!arr.includes(i)) {
//             missingNumbers.push(i);
//         }
//     }
    
//     return missingNumbers;
// }

// let output = findMissingNumbers(arr);
// console.log(output); // Output: [4, 8, 10, 11, 14, 15]

let input = "abcdef";
let input2 = "123";

function comnine(str1, str2) {
  let combine = "";
  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (i < str1.length) {
      combine += str1[i];
    }
    if (i < str2.length) {
      combine += str2[i];
    }
  }
  return combine;
}

console.log(comnine(input, input2)); // Output: "a1b2c3def"


/////////////////////////////////////////////// IN JS FETCHING DATA FROM API USING ASYNC AND AWAIT//////////////////////////////////////////

// async function fetchDataAsync(url){
//     try{
//          let response= await fetch(url)
//          let result=await response.json()
//          return result
//     }
//     catch(error){
//      throw error
//     }
//     }
    
//     (async ()=>{
//        try{
//         const response=await fetchDataAsync('https://jsonplaceholder.typicode.com/posts')
//         console.log(response)
//         fetchData(response)
//        }
//        catch(error){
//          console.log(error)
//        }
//     })()
    
//     function fetchData(data){
//        let app=document.getElementById('app');
//        data.forEach((item)=>{
//         if(item.id %2 ==0){
//           const p1=document.createElement('p');
//           p1.innerText=`ID :-${item.id}  TITLE:-${item.title}`
       
//           app.append(p1)
//         }
//        })
//     }
  

////////////////////////////////////////////////////

// function fetchDataPromise(url){
//     return new Promise((resolve,reject)=>{
//       fetch(url)
//       .then(res=>res.json())
//       .then(data=>resolve(data))
//       .catch(err=>reject(err))
//     })
//   }
  
  
//   fetchDataPromise('https://jsonplaceholder.typicode.com/posts').then(res=>fetchData(res)).catch(err=>console.log(err))
  
  
  
  
//   function fetchData(data){
//      let app=document.getElementById('app');
//      data.forEach((item)=>{
//       if(item.id %2 ==0){
//         const p1=document.createElement('p');
//         p1.innerText=`ID :-${item.id}  TITLE:-${item.title}`
     
//         app.append(p1)
//       }
//      })
//   }


// //////////////////////////// HOW TO CANCEL A REQUEST FROM PROMISE  using fetch///////////////////////////////////////////////////

// const controller= new AbortController();
// const signal=controller.signal 

// fetch('https://jsonplaceholder.typicode.com/posts',{signal})
// .then(res=>res.json())
// .then(res=>console.log(res))
// .catch(err=>{
//   if(err.name=='AbortError'){
//     console.log('request Aborted');
//   }else {
//     console.log(err.message)
//   }
// })
// controller.abort()


// //////////////////////////// HOW TO CANCEL A REQUEST FROM axios ///////////////////////////////////////////////////

// import axios from 'axios';
// const cancelTokenSource=axios.cancelToken.source()
// axios.get('https://jsonplaceholder.typicode.com/posts',{cancelToken : cancelTokenSource.token})
// .then(res=>console.log(res.data))
// .catch(err=>{
//   if(axios.isCancel(err)){
//     console.log('request aborted')
//   }else {
//     console.log(err.message)
//   }
// })
// cancelTokenSource.cancel('request aborted')


///////////////////////////////   CHECKING TWO STRINFS ARE ANAGRAMS OR NOT///////////////////////////////////
// function isAnagram(str1, str2) {
//   let cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
//   let cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
//   if (cleanStr1.length !== cleanStr2.length) {
//     return false;
//   }
//   let countMap = {};
//   for (let char of cleanStr1) {
//     if (countMap[char]) {
//       countMap[char]++;
//     } else {
//       countMap[char] = 1;
//     }
//   }
//   for (let char of cleanStr2) {
//     if (!countMap[char]) {
//       return false;
//     }
//     countMap[char]--;
//   }
//   for (let key in countMap) {
//     if (countMap[key] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isAnagram('silent', 'listen'));


//////// INBUILT METHOD /////////////
// function findAnagram(str1,str2){
//   if(str1.split('').sort().join() === str2.split('').sort().join()){
//     console.log('anagram');
//   }else {
//     console.log('not a aanagram')
//   }
// }
// findAnagram('silent','listen')

//////////////////////////////////// COMBINE 2 STRINGS EACH ONE BY ONE //////////////////////////////////////////////
// function mergeArray(str1,str2){
//   let result='';
//   for(let i=0;i<Math.max(str1.length,str2.length);i++){
//     if(i<str1.length){
//       result+=str1[i]
//     }
//     if(i < str2.length){
//       result+=str2[i]
//     }
//   }
//   return result;

// }
// console.log(mergeArray('abcdef','123'))


////////////////// WHEN I CLICK BUTTON PROMISE SHOULD BE REOLVED //////////////////////////////////////////////////////////////////////////////


{/* <button id="btn">resolve</button>
<button id="btn2">reject</button>

<script src="./index.js"></script>





const btnPromise=new Promise((resolve,reject)=>{

  document.getElementById('btn').addEventListener('click',()=>{
        resolve('click')
  })
  
  document.getElementById('btn2').addEventListener('click',()=>{
     reject('rejected for somereason')
})

  
})


btnPromise.then((res)=>console.log("btn clicked")).catch(err=>console.log(err)) */}


/////////////////////////////////////// WITHOUT USE OF  NEW PROMISE WE HAVE TO RETURN PROMISE BY ASYNC AND AWAIT /////////////////////////////////////////////////
// const btnPromise = new Promise((resolve, reject) => {

//   document.getElementById('btn').addEventListener('click', () => {
//       resolve('click')
//   })
//   document.getElementById('btn2').addEventListener('click', () => {
//       reject('rejected for somereason')
//   })


// })


// async function myasync() {

//   // const response = await btnPromise;  //PENDING
//   // return "mani"                      //RESOLVE
//   throw new Error                          //REJECT


// }
// const res = myasync();
// console.log(res)




////////////////////// WE CAN USE  AWAIT OUTSIDE OF THE FUNCTION HOW MEANS JUST USE TYPE="MODULE" IN SCRIPT ////////////////////////////////////

{/* <script type="module">

async function foo() {
   return "hello"
}

let response=await foo();
console.log(response) */}




// //////////////////////////////// EVENT DELEGATION ///////////////////////////////////////////////////////////////////////////////////////////
// <body>
//   <ul id="products">
//     <li id="shoes">shoes</li>
//     <li id="books">Books</li>
//     <li id="wallets">wallets</li>

//   </ul>

//   <script>
//     document.getElementById('products').addEventListener('click',(e)=>{
//       console.log(event)
//       if(e.target.tagName === 'LI'){
//         window.location.href+= '#' +e.target.id
//       }
//     })
//   </script>


//////////// WHEN I CLICK SCREEN IT SHOULD CREATE CIRCLE AND CIRCLE SHOULD NOT BE MORE THAN 2 AND MUST BR INTERSECT//////////////////

// const circleIntersect=[];

// function circleInteresct(x0,y0,r0,x1,y1,r1){
//     return Math.hypot(x0-x1,y0-y1) <=r0+r1

// }
// function logIntersect(){
//    const firstCircle=circleIntersect[0];
//    const secondCircle=circleIntersect[1];
//    const x1=firstCircle.x;
//    const y1=firstCircle.y;
//    const x2=secondCircle.x;
//    const y2=secondCircle.y;
//    return circleInteresct(x1,y1,50,x2,y2,50)
// }

//      document.addEventListener('click',(e)=>{

//         let totalCircles=document.querySelectorAll('.circle');
//         if(totalCircles.length == 2){
//             totalCircles.forEach((cir)=>{
//                 document.body.removeChild(cir)
//                 circleIntersect.shift()
//             })
           
//         }
//           const x=e.clientX;
//           const y=e.clientY;
//           console.log(x,y);
//           circleIntersect.push({x,y})

//           const radius="100px"

//          let circle= document.createElement('div');
//          circle.classList.add('circle');
//          circle.style.width=radius;
//          circle.style.height=radius;
//          circle.style.top=y-50  + 'px';
//          circle.style.left=x-50 + 'px';
//          document.body.append(circle)


//          if(circleIntersect.length === 2){
//          const res=   logIntersect();
//          console.log("intersecting is",  res ) 
//          }
       
         
//      })



////////////////////////////// ChessBoard///////////////////////////////////////////////////////////////////////////////////////////////
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Chessboard</title>
//   <style>
//     .chessboard {
//       display: grid;
//       grid-template-columns: repeat(8, 50px);
//       grid-template-rows: repeat(8, 50px);
//     }

//     .chessboard div {
//       width: 100%;
//       height: 100%;
//     }

//     .white {
//       background-color: white;
//     }

//     .black {
//       background-color: black
//     }
//   </style>
// </head>
// <body>
//   <div class="chessboard">
//     <!-- Alternating divs for black and white squares -->
//     <!-- Top row -->
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <!-- Second row -->
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <!-- Third row -->
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <!-- Fourth row -->
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <!-- Fifth row -->
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <!-- Sixth row -->
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <!-- Seventh row -->
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <!-- Eighth row -->
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//     <div class="black"></div>
//     <div class="white"></div>
//   </div>
// </body>
// </html>


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css'
// function App() {
//   return (
//     <div className="container">
//       <div className=" items d-flex align-items-stretch">
//         <div className="p-2">Item 1</div>
//         <div className="p-2">Item 2</div>
//         <div className="p-2">Item 3</div>
//       </div>
//     </div>
//   );
// }

// export default App;


/////////////////////////////////////////////////////// ARRAY OF 0BJECTS ////////////////////////////////////////////////////////////////////
// const users=[
//   {firstName:"john",lastName:"Biden",age:26},
//   {firstName:"jimmy",lastName:"cob",age:75},
//   {firstName:"sam",lastName:"lewis",age:50},
//   {firstName:"Ronald",lastName:"Mathew",age:26},  
// ]


// document.getElementById('app').innerHTML=users.reduce((oldest,person)=>{
//   if(person.age > oldest.age) return person;
//   return oldest;
//   },{age:0}).firstName


// const ageFrequency=users.reduce((acc,person)=>{
//   acc[person.age]=(acc[person.age]||0)+1
//   return acc
// },{})
// console.log(ageFrequency)

// const agrFrequency={};
// users.forEach(person=>{
//   if(agrFrequency[person.age]){
//     agrFrequency[person.age]++

//   }else{
//     agrFrequency[person.age]=1
//   }
// })
// console.log(agrFrequency)

//////////////////////////////////////////
// const transactions = [
//   { type: "credit", amount: 100 },
//   { type: "debit", amount: 50 },
//   { type: "credit", amount: 200 },
//   { type: "debit", amount: 75 }
// ];
// let totalDebit=0;
// let totalCredit=0;

// transactions.forEach((transaction)=>{
//   if(transaction.type === 'debit'){
//       totalDebit+=transaction.amount;
//   }else if(transaction.type === 'credit'){
//       totalCredit+=transaction.amount;
//   }
// })

// let remaingBalance=totalDebit-totalCredit;

// console.log("TotalDebit",totalDebit);
// console.log("TotalCredit",totalCredit);
// console.log("RemaingBalance",remaingBalance)

/////////////////////////////// OWN BIND METHOD ///////////////////////////////////////////////////////////////////////////////////////////////////

// Function.prototype.myBind=function(context){
//   var originalFunction =this;
//   return function (){
//     return originalFunction.apply(context,arguments)
//   }
// }

// var obj={
//   name:'mani'
// }

// function greet(){
//   console.log("hello",this.name)
// }
// let bind=greet.myBind(obj);
// bind()
// ////////////////////////////////////////////////// OWN CALL METHOD ////////////////////////////////////////////////////////////////////////


// Function.prototype.myCall=function(context,...args){
//   context=context || window;
//   context.fn=this;
//   const result=context.fn(...args);
//   delete context.fn;
//   return result;

// }
// var obj={
//   name:'mani',
// }
// function greet(greeting){
//   console.log(greeting,this.name);

// }

// greet.myCall(obj,'hello')


/////////////////////////////////////////////////// OWN APPLY METHOD //////////////////////////////////////////////////////////////////////


// Function.prototype.myApply = function(context, argsArray) {
//   // Make sure context is an object (if not, use global object)
//   context = context || window;

//   // Add the function to the context object
//   context.fn = this;

//   // Call the function with the provided context and arguments array
//   const result = context.fn(...argsArray);

//   // Remove the function from the context object
//   delete context.fn;

//   // Return the result of the function call
//   return result;
// };


// var obj = {
//   name: 'Alice'
// };

// function greet(greeting) {
//   console.log(greeting + ', ' + this.name);
// }

// greet.myCall(obj, 'Hello'); // Output: Hello, Alice

// greet.myApply(obj, ['Hi']); // Output: Hi, Alice
