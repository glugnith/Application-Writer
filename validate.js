var res=true;
function funcValidate(){
  var inputDate=document.getElementById("inputDate").value;
  var inputTime=document.getElementById("inputTime").value;
  if(!(/\d\d\/\d\d\/\d\d\d\d/.test(inputDate))){
    document.getElementById("inputDate").style.border="2px solid red";
  }
  else {
    var arr=inputDate.split("/");
    if(Number(arr[0])>31 || Number(arr[1]>12))
        document.getElementById("inputDate").style.border="2px solid red";
    else
      document.getElementById("inputDate").style.border="1px solid black";
  }
  if(!(/\d\d\:\d\d\:\d\d/.test(inputTime))){
      document.getElementById("inputTime").style.border="2px solid red";
  }
  else{
    var arr=inputTime.split(":");
    if(Number(arr[0])>23 || Number(arr[1]>59) || Number(arr[2]>59))
        document.getElementById("inputTime").style.border="2px solid red";
    else
      document.getElementById("inputTime").style.border="1px solid black";
  }
}
