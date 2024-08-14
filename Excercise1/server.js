const express = require('express');
const { findSourceMap } = require('module');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended:true}));
 

function findSummation(n=1){
    if( typeof n!=='number'|| n<=0 || !Number.isInteger(n)){
        return false;
    }
    let sum =0;
    for(let i =1 ;i<=n;i++){
        sum+=i;
    }
    return sum;

}

app.post('/findSummation',(req,res)=>{
    const number = parseInt(req.body.number,10);
    const result = findSummation(number);
    res.send(`The summation is: ${result}`);
});

//Excercise 1 b)
function uppercaseFirstandLast(inputString) {
    if (typeof inputString !== 'string' || inputString.length === 0) {
      return '';
    }
  
    const words = inputString.split(' ');
  
    const modifiedWords = words.map(word => {
      if (word.length === 1) {
        return word.toUpperCase();
      }
  
      const firstLetter = word[0].toUpperCase();
      const middle = word.slice(1, -1);
      const lastLetter = word[word.length - 1].toUpperCase();
  
      return firstLetter + middle + lastLetter;
    });
  
    return modifiedWords.join(' ');
}
function findAverageAndMedian(nums){
    if (!Array.isArray(nums) || nums.length === 0) {
        return { average: 0, median: 0 };
      }

    let total=0;
    const arr = nums;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    let average=total/arr.length;

    nums.sort((a,b)=> a - b);
    const mid = Math.floor(nums.length/2);

    let median;
    if(nums.length %2 === 0){
        median=(nums[mid-1]+nums[mid+1])*0.5;

    }else{
        median=nums[mid];
    }
    return {average, median};

}

function find4Digits(numbers){
    const digits=numbers.split(' ');
    for(const num of digits){
        if(num.length == 4 && !isNaN(num)){
            return num;
        }
        
    }
    return false;
  
}


app.post('/find4Digits',(req,res) => {
    const digs = req.body.numbers;
    const four = find4Digits(digs);
    res.send(`The first four digit numbers is ${four}`);
});

app.post('/findAverageAndMedian',(req,res)=>{
    
    const nums=req.body.nums.split(',').map(Number);
    const result = findAverageAndMedian(nums);
    res.send(`The average is ${result.average} and the median is ${result.median}`);
});



app.post('/upperFirstandLast',(req,res)=>{
    const inString= req.body.inString;
    const result = uppercaseFirstandLast(inString);
    res.send(`New String is: ${result}`);
});



app.get('/',(req,res)=>{
    const filePath = path.join(__dirname,'public','index.html');
     res.sendFile(filePath);
 });
 


app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});
