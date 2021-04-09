function Validate()
{
    var name=document.getElementById("txtname").value;
    if(name=="")
    {
        alert("Name cannot be blank");
        return;
    }
    var addr=document.getElementById("txtaddress").value;
    if(addr=="")
    {
        alert("Enter address");
        return;
    }
    var pwd=document.getElementById("txtpass").value;
    if(pwd=="")
    {
        alert("Password should be entered");
        return;
    }
    //regex
    var exp=new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])(?=.{4,8}))");
    if(exp.test(pwd)){
        alert("Password is strongly typed");
    }
    else
    {
        alert("Follow Password restriction");
        return;
    }
    //validate radio button
    var ctr=0;
    var g=document.getElementsByName("g");
    for(var i=0;i< g.length;i++)
    {
        if(g[i].checked)
        {
            alert(g[i].value);
            ctr++;
        }
    }
   if(ctr==0)
   {
       alert("Select a Gender");
       return; 
   }

   //validate combo box
   var cn=document.getElementById("country").value;
   if(cn=="")
   {
       alert("Select a country");
       return;
   }
   alert("Country name:"+cn);
   //validate of multi selection combobox
   var hobby=document.getElementById("hobby");
   var count=0;
   for(var i=0;i<hobby.length;i++)
   {
       if(hobby[i].selected)
       { 
           count++;
           alert(hobby[i].value);
       }
   }
   if(count==0)
   {
       alert("Select atleast one hobby");
       return;
   }

}