var sName = document.getElementById("sName");
var sUrl = document.getElementById("sUrl");

    var allInputs = [];


    if(localStorage.getItem("inputs")){

//SHOW STORAGE
allInputs = JSON.parse(localStorage.getItem("inputs"));

//SHOWING DATA
displayData()
}



/*=========================== START ===========================*/
function addUrl(){

    if(validateName()==true && validateUrl()==true){

    //STEP 1
    var inputs={
        name: sName.value,
        url: sUrl.value
    }

        //STEP 2
    allInputs.push(inputs);

        //STORAGE
    localStorage.setItem("inputs" , JSON.stringify( allInputs ))

    //STEP 3
    displayData();
}
}

/*=========================== SHOWING DATA ===========================*/
function displayData(){
    var mainText=
    `
    <tr>
                <th class="text-capitalize">index</th>
                <th class="text-capitalize">website name</th>
                <th class="text-capitalize">visit</th>
                <th class="text-capitalize">delete</th>
            </tr>
    
    `
    var cartona ="";
    for (var i=0 ; i<allInputs.length ; i++){
        cartona += 
        `
        <tr>
            <td class="text-capitalize">${i+1}</td>
            <td class="text-capitalize">${allInputs[i].name}</td>
            <td class="text-capitalize">
                <a href="${allInputs[i].url}" target="_blank" class="btn btn-success text-capitalize">
                    <i class="fa-solid fa-eye pe-2"></i> visit
                </a>
            <td class="text-capitalize">
                <button onclick="deleteInput(${i});" class="btn btn-danger text-capitalize"><i class="fa-solid fa-trash-can"></i> delete</button>
            </td>
        </tr>
        `
    }
    document.getElementById("rowDisplay").innerHTML=mainText + cartona;
}


/*=========================== DELETE DATA ===========================*/
function deleteInput(Index){
    allInputs.splice( Index , 1 );
    localStorage.setItem("inputs", JSON.stringify(allInputs));
    displayData();
}

/*=========================== VALIDATE DATA ===========================*/


//first validation
function validateName(){
    var title = sName.value ;
    var regex = /^[A-Za-z0-9 _-]{3,30}$/
    var sNameInvalid = document.getElementById("sNameInvalid")

    if( regex.test(title) ){
        sName.classList.remove("is-invalid")
        sName.classList.add("is-valid")
        sNameInvalid.classList.add("d-none")
        return true
    }
    else{
        sName.classList.remove("is-valid")
        sName.classList.add("is-invalid")
        sNameInvalid.classList.remove("d-none")
        return false
    }
}


//second validation
function validateUrl(){
    var title = sUrl.value ;
    var regex = /^(https?:\/\/)(www\.)?[a-zA-Z0-9-]{2,256}\.[a-zA-Z]{2,10}(\/[^\s]*)?$/
    var sUrlInvalid = document.getElementById("sUrlInvalid")

    if( regex.test(title)){
        sUrl.classList.remove("is-invalid")
        sUrl.classList.add("is-valid")
        sUrlInvalid.classList.add("d-none")
        return true
    }
    else{
        sUrl.classList.remove("is-valid")
        sUrl.classList.add("is-invalid")
        sUrlInvalid.classList.remove("d-none")
        return false
    }
}








//-----------------------------------------للسؤال

/*
for (var i=0 ; i<allInputs.length ; i++){
    var x;
    if (sName.value == allInputs[i].name || sName.value == اي اسم في اللوب){
        return false

    }
    else{

    }
}
*/



/* حل شات جي بي تي عشان اسال فيه بكرة ان شاء الله
function checkNameExists() {
  var exists = false;

  for (var i = 0; i < allInputs.length; i++) {
    if (sName.value.trim().toLowerCase() === allInputs[i].name.trim().toLowerCase()) {
      exists = true;
      break; // مش ضروري يكمل اللوب بعد ما لقى واحد مطابق
    }
  }

  return exists;
}




الاستخدام


if (checkNameExists()) {
  alert("الاسم موجود بالفعل!");
  return;
} else {
  // كمل الإضافة
}

  */