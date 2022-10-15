// const modal = document.getElementById("modal");
const btn = document.getElementById("new");
const inputFile = document.getElementById("inputFile");
const dlt= document.getElementById("delete")
const deletRow=document.getElementById("deleteRow");



let url = "https://jsonplaceholder.typicode.com/users";
let num=''
console.log("num",num);

const arrayFromApi = [];
console.log("arrayFromApi",arrayFromApi);

fetch(url)
       
    .then((data) => {
        return data.json();
    })
    .then((objectData) => {
        arrayFromApi.push(objectData);
        let tableData = "";
        objectData.map((users,i) => {
            tableData+= `<tr>
         <td>${users.id}</td>
         <td>${users.name}</td>
         <td>${users.email}</td>
         <td>${users.address.city}</td>
         <td><button class="btnn" id="editbtn"onclick="editbtn()">Edit</button></td>
         <td><button class="btnn" id="deletbtn" onclick="Deletbtn(${i})">Delete</button></td>
         </tr>`;
        });
        document.getElementById("Tdshow").innerHTML = tableData;
    });
    

// open modal NEW
function openPopup() {
    modal.classList.add("openModal");
    
}
function closePopup() {
    modal.classList.remove("openModal");
}





function create(){
    const UserName = document.getElementById("inputName");
    const Email = document.getElementById("inputEmail");
    const textArea = document.getElementById("inputField");
fetch(url,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name:UserName.value,
        email:Email.value,
        address:{city:textArea.value}
      })

      
}).then((data)=>{
  
    return data.json()
})
.then((res)=>{
   console.log('res',res);
    arrayFromApi[0].push(res);
  
     let tableData = "";
    arrayFromApi[0].map((users,index) => {
       
        tableData+= `<tr>

     <td>${index+1}</td>
     <td>${users.name}</td>
     <td>${users.email}</td>
     <td>${users.address.city}</td>
     <td><button class="btnn" id="editbtn" onclick="editbtn()">Edit</button></td>
     <td><button class="btnn" id="deletbtn" onclick="Deletbtn(${index+1})">Delete</button></td>
     </tr>`;
    });
    document.getElementById("Tdshow").innerHTML = tableData;
    console.log("data1",arrayFromApi[0])
})
  
    
.catch((err)=>console.log(err))


}

function Deletbtn(id){
     num=id
    console.log("id",id);

// const dltbtn=document.getElementById("delete")

dlt.classList.add("Modal1");


}
function Submit(){

    dlt.classList.remove("Modal1");
    document.getElementById("table").deleteRow(1);
    console.log(num); 


}
// function delete_row(no) {
//     document.getElementById("row" + no + "").outerHTML = "";
// }

function remove(){
    dlt.classList.remove("Modal1");
}




