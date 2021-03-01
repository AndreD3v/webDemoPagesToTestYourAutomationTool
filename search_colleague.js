// First function is used by index.html
function searchColleague(colleague) {
    if (colleague == "Andre" || colleague == "Bert" || colleague == "Brigitte" || colleague == "Daniel " || colleague == "Eric" || colleague == "Tobias" || colleague == "Rick " || colleague == "Kim" || colleague == "Jurgen") {
		window.location = "yes.html"; //warning not that visible bug: one colleagy you will find only after using a space after the name
    } else {
        window.location = "no.html";
    }
}
// Below functions are used by yes.html
function returnNumberWithLeadingZerosUpToATotalOfFour(number) {
  let s = "0000" + number;
  return s.substr(s.length-4);
}

function ShowColleaguePhotoAndName(){
let pic;
let tExt = textGenerator();
let tEst = testGenerator();
let valueSelectedDropDownOption = $("#newsparkEmployeeDropdown").val();
$("#Div_to_show_the_name").html(valueSelectedDropDownOption);
if($('#newsparkEmployeeDropdown').val()=="ANDRE"){
  $("#Div_to_show_the_joke").html(tExt);
} else {
  $("#Div_to_show_the_joke").html(tEst);  
}
pic = resturnPhotoUrl(valueSelectedDropDownOption);
document.getElementById('PasPhoto_PP').src = pic;
}

function returnConfigObject() {
  let config = {
    consultants : [{
    name : "ANDRE",
    url : "https://newspark.nl/wp-content/uploads/2017/04/BW-Andr%C3%A9-Koene.jpg"
    },{
    name : "ERIC",
    url : "https://newspark.nl/wp-content/uploads/2017/04/BW-Eric-Klooster.jpg"
    },{
    name : "BRIGITTE",
    url : "https://newspark.nl/wp-content/uploads/2020/01/brigittebw.png"
    },{
    name : "DANIEL",
    url : "https://newspark.nl/wp-content/uploads/2017/10/DanielDeBruijn.jpg"
    },{
    name : "FAROEK",
    url : "https://newspark.nl/wp-content/uploads/2017/04/BW-Eric-Klooster.jpg"
    },{
    name : "JURGEN",
    url : "https://newspark.nl/wp-content/uploads/2017/04/BW-Andr%C3%A9-Koene.jpg"
    },{
    name : "KIM",
    url : "https://newspark.nl/wp-content/uploads/2019/09/Kim-van-Dessel.png"
    },{
    name : "MENNO",
    url : "https://newspark.nl/wp-content/uploads/2020/06/Pasfoto-Menno-Pot-Rabo-2018-150x150-1.jpg"
    },{
    name : "RICK",
    url : "https://newspark.nl/wp-content/uploads/2019/01/Newspark_Rick-e1546594340545-150x150.jpg"
    }]
  };
  return config;
}

function returnArrayWithAllColleagues() {
  let data = returnConfigObject();
  let arrayToReturn = [];
  for (let i = 0; i < data.consultants.length; i++) {
    let consultantToAdd = data.consultants[i].name
    arrayToReturn.push(consultantToAdd);
  };
  return arrayToReturn;
}

// kind of fake function ::
function addColleague(name, url) {
  console.log("name = " + name);
  let i = returnArrayWithAllColleagues().length +1;
  let elementIdSuffix = returnNumberWithLeadingZerosUpToATotalOfFour(i);
  document.getElementById("employeeDropdown_" + elementIdSuffix).innerHTML = name.toUpperCase();
  let tempUrl = String(url);
  console.log(`url = ${tempUrl}`);
  document.getElementById('PasPhoto_PP').src = tempUrl;
}

function resturnPhotoUrl(nameConsultant) {
  let photoConfig = returnConfigObject();
  let urlToReturn = "";
  for (let i = 0; i < photoConfig.consultants.length; i++) {
    if (nameConsultant !== photoConfig.consultants[i].name) {
      urlToReturn = "img\\PP_newspark.jpg"; // default placeholder
    } else {
      urlToReturn = photoConfig.consultants[i].url;
      break; // as soon there is a match we do not want to overwrite the url again with the default
    }
  };
  console.log("returned url will be :: " + urlToReturn);
  return urlToReturn;
}

function textGenerator(){
return "I had a dream I was swimming in a ocean of orange soda. Turns out it was just a Fanta Sea";
}

function testGenerator(){
return "";
}