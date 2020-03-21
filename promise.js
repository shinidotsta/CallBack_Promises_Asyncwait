/* promise is a method used to achieve asynchronous behaviour in js.
return new promise() .then is the syntax
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


function createDetails(item)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            details.push(item);
            const error=false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject("something went wrong");
            }
         },2000);
    });

}

createDetails({writer : 'tagore' ,book :'jan gana mana'})
.then(getdetails)
.catch(err=>Console.log(error));