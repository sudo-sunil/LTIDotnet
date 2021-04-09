var cities=['Bangalore','Mumbai','Hyderabad','Pune'];
var emp=[1,'Rashmi','IT',424234,false];
document.write(cities);
document.write("<br>");
for(var i=0;i<emp.length;i++)
{
    document.write("<b>"+emp[i]+"</b>");
}
document.write("<hr>");
var d=new Date();
//this will display the current date and time
document.write("Current Date Time:"+d);
document.write("<br>");
document.write(d.getDay()+ " "+d.getHours()+":"+d.getMinutes() + d.getSeconds()+" "+d.getMonth());