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
/* async wait */
async function init()
{
 await   createDetails({writer : 'tagore' ,book :'jan gana mana'});
 getdetails();
}

init();