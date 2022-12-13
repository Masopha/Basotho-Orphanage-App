
let api_url = "https://lesotho-orphanages.vercel.app/";


fetch(api_url).then((response) => {


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
  
   let information = 
    `<thead>
    <tr>
     <th style="width:100px; font-weight:bold; height:45px; background-color:#4771cb; border:10px solid #4771cb; color:#fff;">Gallery</th>
      <th style="width:100px; font-weight:bold; height:45px; background-color:#4771cb; border:none; color:#fff;">Orphanage Id</th>
      <th style="width:100px; font-weight:bold; height:45px; background-color:orange; border:none; color:#fff;">Name</th>
      <th style="width:100px; font-weight:bold; height:45px; background-color:orange; border:none; color:#fff;">Residence</th>
      <th style="width:100px; font-weight:bold; height:45px; background-color:#4771cb; border:none; color:#fff;">
     <h3>Search Orphanage Details By ID</h3>
      <br>

      <input type="number"  id="urls" placeholder="Enter Orphanage Id Number...." style="width:200px; height:25px; margin-left:15px; margin-top:10px; float:left;">
     <button  type="submit" id="search" onclick="getInputValue();"
    style="display: inline-block;
    background-color: orange;
    font-size: 15px;
    height: 37px;
    width: 180px;
    font-weight: 300;
    margin-right:2px;
    margin-bottom: 5px;
    color: #fff;
    text-transform: capitalize;
    padding: 12px 12px;
    border-radius: 15px;
    letter-spacing: 0.25px;
    cursor:pointer;
    border-bottom: 1px solid #4771cb!important;
    transition: all .3s;
    float:right;">
    search details
    </button>
<div class="col-lg-3" role="status" id="load">
<span class="src-only" ><pre><p style="float:left;  width: 40%; border-radius: 20px; text-align: center; margin-top:25px; color:orange; background:rgb(212, 69, 201);"><b>loading.....<img src="assets/images/img/loading.gif" height="25" style="margin-top: 5px; border-radius: 20px;"></b></p></pre></span>
  </div>
      </th>
 
       </tr>
       </thead>`;
  
    for(var i = 0; i < data.length; i++){


   information  += `<tbody>
     <tr>
    <td><img src="${data[i].image}" style="border: 2px solid #000; width:120px; height: 90px; border-radius:50%; margin-left: 10px;"></td>
    <td style="margin-left: background:#000; 10px; color: #4771cb;"></b>${data[i].id}</b></td>
    <td style="color: #4771cb;">${data[i].name}</td>
    <td style="color: #4771cb;"><b>${data[i].location}</b></td>
    <td><img src="assets/images/img/Modify.ico" style="width:60px; height:50px;" alt=""></td>
    </tr>
    </tbody>`;

    if(data.length = 4){

       let imgacc =`
        
        <img src="${data[i].image}" style="width: 330px; height: 200px; flex: inherit;">
        
        `; 

        document.getElementById('imgAcomodation').innerHTML = imgacc;
    }

  if(data.length == 6){

   let img =`
    
    <img src="${data[i].image}" style="width: 330px; height: 200px; flex: inherit;">
    
    `;

    document.getElementById('image').innerHTML = img;

 }


    }

    let date = new Date();

    let year = date.getFullYear();

    document.getElementById('date').innerHTML =year;
    
    count = data.length;
    document.getElementById('totalOrphanage').innerHTML = count;
    document.getElementById('orphanages').innerHTML = information;
   
  

    


 
}


function hideloader(){

    document.getElementById('loading').style.display = 'none';

}






       



