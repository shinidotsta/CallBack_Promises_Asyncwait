
/* here i want to display the details in the browser wlong with the item that inserted
with the help of  createDetails() function using call back.
In my understanding callback is nothing but which is help to achieve aynchronous behaviour 
in js
*/
const details=[
    {writer : 'chetan Bagath' ,book : 'one night at the call center'},
    {writer : 'chris' ,book :'the fault in our stars'}
];

function getdetails()
{
    setTimeout(() => {
        let output = '';
        details.forEach((item,index) => {
       output +=`<li>${index}  ${item.writer}</li>`;
      

     });
     document.body.innerHTML = output;
    },1000);
}

/* call back  */
function createDetails(item,callback)
{
setTimeout(() => {
   details.push(item);
   callback();
},2000);
}
/* function calls*/
getdetails();
createDetails({writer : 'tagore' ,book :'jan gana mana'},getdetails);