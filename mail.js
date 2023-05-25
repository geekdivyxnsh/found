const firebaseConfig = {
    apiKey: "AIzaSyBdiK9ATgajBhshVRDLQhjCYelg7Vxw-uI",
    authDomain: "details-e68d1.firebaseapp.com",
    databaseURL: "https://details-e68d1-default-rtdb.firebaseio.com",
    projectId: "details-e68d1",
    storageBucket: "details-e68d1.appspot.com",
    messagingSenderId: "1045079994308",
    appId: "1:1045079994308:web:7f70f39fbf064773863e91"
};
  
//initialize firebase
firebase.initializeApp(firebaseConfig);
// reference database
var detailsDB=firebase.database().ref('details');
document.getElementById('details').addEventListener('submit',submitdetails);

function submitdetails(e){
    e.preventDefault();

    var Name = getElementVal('name');
    var Registernumber = getElementVal('registerno');
    var MobileNumber = getElementVal('mobileno');
    var EmailId = getElementVal('email');
    var FoundDate = getElementVal('founddate');
    var LostDate = getElementVal('lostdate');
    var FoundPlace = getElementVal('foundplace');
    var LostPlace = getElementVal('lostplace');
    var ItemDescription = getElementVal('itemdescription');

    console.log(Name, Registernumber, MobileNumber,EmailId, FoundDate, LostDate,FoundPlace,LostPlace, ItemDescription);


       
}
const getElementVal=(id) => {
    return document.getElementById(id).value;

};
