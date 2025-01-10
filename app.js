let tasks=[];
function updateTask(){
    document.getElementById('output').innerHTML=tasks.map((task,index)=>`<li>${task}</li> 
                                                                    <button class="btn btn-primary" onclick="deleteTask(${index})">Delete</button>
                                                                    <br>
                                                                    `).join('');
}
function addTask(){
    input=document.getElementById('input');
    inputelements=input.value
    tasks.push(inputelements);
    input.value='';
     updateTask();
}
function deleteTask(i){
    tasks.splice(i,1);
    updateTask();
  
}
function clearall(){
    tasks=[];
    // updateTask(); // alternate method
    document.getElementById('output').innerHTML='';

}

//2.second operation
let marks=[];

function addMarks(){
    
    input2=parseInt(document.getElementById('input2').value);
 
    marks.push(input2);
    console.log(marks);

    document.getElementById('input2').value='';
   
    // calculate();
}

function calculate(){
    let totalsum=0
    len=marks.length
    for(let i=0;i<len;i++){
       
        totalsum+=marks[i];
    
       
    }
    // ts=marks.reduce((ele,index)=>ele+index)
    // console.log("ts:",ts);
    
    let  average=totalsum/len;
    let  max=Math.max(...marks);
    let min =Math.min(...marks);
    console.log(totalsum);
    console.log(average);
    console.log(max);
    console.log(min);

    document.getElementById('output2').innerHTML=`
    <li>Total Marks :  ${totalsum} </li> <br>
    <li>Average Marks :  ${average}</li><br>
    <li>Highest Marks :  ${max}</li><br>
    <li>Lowest Marks :  ${min}</li><br>
                     
                      `

}

function clearAll(){
    marks=[];
    document.getElementById('output2').innerHTML='' //*importatnt

}

// third operation
let match=["maithilee","gaurav","anushka","Ajeet","vishvas","kajal","anita"];


function search(){
    input3= document.getElementById('input3').value;
console.log(input3);
    find=match.filter((student)=>student===input3);
    console.log(find);
    
    document.getElementById('output3').innerHTML=find.join();
    document.getElementById('input3').value=''
}

//fourth operation
let number=[];
function AddNumber(){ 
    input4=parseInt(document.getElementById('input4').value);
    number.push(input4);
    console.log(number);
    document.getElementById('input4').value='';
}

function evennumber(){
   even=number.filter((num)=>num%2===0)
   console.log(even);
   document.getElementById('output4').innerHTML="Even Number is :"+even;
}

function oddnumber(){
    odd=number.filter((num)=>num%2!==0)
    console.log(odd);
    document.getElementById('output42').innerHTML="Odd Number is :"+odd;
 }

 function Clear_All(){
    number=[];
        // oddnumber();
        // evennumber();
    document.getElementById('output42').innerHTML='';
    document.getElementById('output4').innerHTML='';

 }

 // fifth operation
 let  namear=[];
 function addname(){
 input5=document.getElementById('input5').value;
  inputele=namear.push(input5);
  console.log(namear);
  document.getElementById('input5').value='';
  document.getElementById('output5').innerHTML=namear;
}
function sort(){
 sorting=namear.sort();
 console.log(sorting);
 document.getElementById('output5').innerHTML=sorting;
}

reset=()=>{
    namear=[];
 document.getElementById('output5').innerHTML='';

}

