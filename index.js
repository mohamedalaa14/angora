


var arr ;

if (localStorage.getItem('sites') != null) {

    arr = JSON.parse(localStorage.getItem('sites'));
    display();
    
}
else
{
    arr = [];
}

var bookMarkname = document.getElementById("book") 
var url = document.getElementById("url") 


function addSite()
{
    if ( validateName()==true)
    {
 
    var info ={
        name : bookMarkname.value,
        url : url.value
    }

   arr.push(info);

   localStorage.setItem("sites",JSON.stringify(arr))

   display()

   clear()

    }

}

function clear()
{

    bookMarkname.value = ""
    url.value = ""

}

function display()
{
    var haga = ""

    for(i=0;i<arr.length;i++) {


        haga +=  ` <tr>
     
        <td>`+arr[i].name+`</td>
        <td><a href="`+arr[i].url+`"  type="button" class="btn btn-outline-info">visit</a></td>
        <td><button onclick ="deleteSites(`+i+`)" type="button" class="btn btn-outline-danger">delete</button></td>


    </tr>
    `
    
    }
    document.getElementById("tBody").innerHTML = haga
   
   
}


function deleteSites(index) {

    arr.splice(index,1)
    localStorage.setItem("sites",JSON.stringify(arr));
    display();
    
}

function validateName() {

    var regex = /[A-Z]{1}[a-z]{3,8}$/ 

    if (regex.test(bookMarkname.value) == true)
    {
         return true ; 
        
    }
    else
    {
        return false ; 
    }
    
}