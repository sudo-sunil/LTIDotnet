function store()
{
   if(typeof(Storage)=="undefined")
   {
       alert("Storage not supported by browser");
       return;
   }
   else
   {
       var name=document.getElementById("txtname").value;
       var age=document.getElementById("txtage").value;
       sessionStorage.setItem("n",name);
       sessionStorage.setItem("a",age);
       alert("Data stored....");
   }
}
function get()
{
  var n=sessionStorage.getItem("n");
  var a=sessionStorage.getItem("a");
  //if u want data to be printed in HTML tags, innerHTML property is used
  document.getElementById("result").innerHTML="local storage values are:"+n + "," + a;

}