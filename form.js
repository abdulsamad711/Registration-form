function callvalue(){
    var name= document.getElementById("uname").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("pas").value;
    var confirmpassword= document.getElementById("cpas").value;
    
    document.write("Your info: "+"<br>" + "your name: "+name +"<br>");
    document.write("Your email: "+email+"<br>");
    document.write("Your password: "+password+"<br>");
    document.write("Your confirm password: "+confirmpassword);
}