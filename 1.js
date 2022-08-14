function myFunc(){
   var user = document.getElementById('username').value;
   var pass = document.getElementById('password').value;
   var alearnoti;
   
   if ( user === "Admin"){
      alert('Enter the password for admin');
      if (pass === "TheMaster"){
         alearnoti = " Welcome";
      } else if (pass === null){
         alearnoti = "Canceled";
      } else {
         alearnoti = "Wrong password";
      }
   } else if ( user === null){
      alearnoti = "Canceld";
   } else {
      alearnoti = " I don't know";
   }
   document.getElementById('exp').innerHTML = alearnoti;
}