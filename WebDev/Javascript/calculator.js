var ans='y';
do{
    var n1=parseInt(prompt("Enter 1st number"));
var n2=parseInt(prompt("Enter 2nd Number"));
var op=prompt("Enter Operator(+,-,*,/)");
    switch(op)
    {
        case '+':alert("Add:"+(n1+n2));
        break;
        case '-':alert("Sub:"+(n1-n2));
        break;
        case '*':alert("Mul:"+(n1*n2));
        break;
        case '/':alert("Div:"+(n1/n2));
        break;
        default:alert("Invalid operator");
    }
    ans=prompt("Do u want to continue(y/n)?");
}while(ans=='y'||ans=='Y');