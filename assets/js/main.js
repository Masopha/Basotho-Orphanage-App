function getInputValue() {
 
  var inputVal = document.getElementById("urls").value;

var url = "https://lesotho-orphanages.vercel.app/"+inputVal;

  

fetch(url).then((response) => {


    if(response){

        hideloader();
    
    }

    return response.json();

    
    
    }).then(function(data) {

   appendData(data);

    }).catch(function (err) {
        
    console.log("Error: " + err);


    });

  

function appendData(data) {

   let count = 0;
  
 for(let  x in data){


   let information  = `<div class="skill-item wow fadeIn" style="text-align:center;  margin-top:40px;">
   <h1 style="color: #4771cb;">Results Of ${data.name} Available Information</h1>
   <br>
   <br>
    <img src="${data.image}" style="border: 2px solid #000; width:320px; height: 250px; border-radius:50%; margin-left: 10px;">
    <br><br>
    <p style="margin-left: 10px; font-size:30px; color:orange;"><b>Located At ${data.location}</b></p>
   <br><br> <pre><p style="font-size:25px;"><b>Amount Donated: M${data.donated}.00</b>  <b style="color: #4771cb;">Targeted Donation: M${data.target}.00</b></p></pre>
    <br><br>
    <img src="assets/images/logo/2022-11-22-12-55-30-Dsa-Gif-min.gif" style="width: 80px; border-radius:50%;" alt="">
    
    </div>`;

    document.getElementById('details').innerHTML = information;
    document.getElementById('oname').innerHTML = data.name;
    document.getElementById('target').innerHTML = "M"+data.target+".00";
    document.getElementById('odonate').innerHTML = "M"+data.donated+".00";
  

    }

  
    let date = new Date();

    let year = date.getFullYear();

    document.getElementById('date').innerHTML =year;
    

}


function hideloader(){

    document.getElementById('load').style.display = 'none';

}






       








      


}