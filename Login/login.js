let users = JSON.parse(localStorage.getItem("users"))||[]
//Click on Sign up Link
document.querySelector("h3").addEventListener("click", changeToLogin);

function changeToLogin(event) {
  //Refresh page code if condition saftisfy by checking inner HTML
  if (
    document.querySelector("h3").innerHTML ==
    'New User ? <span><a href="" id="SignIn">Sign up</a></span>'
  ) {
    //Refresh page && Also chnages to Sign in
    window.location.reload();
  }
  //Performing Sign up to Login Mode
  document.querySelector("#container>h2").innerText = "Sign in";
  document.querySelector("#container>button").innerText = "SIGN IN";

  //Changin "Already have an account to New User ?"
  document.querySelector("h3").innerHTML =
    'New User ? <span><a href=""  id="SignIn">Sign up</a></span>';
  //Preventing default property of anchor tag
  event.preventDefault();
}

//Event Listner on Single Sign up && Sign button
document.querySelector("#container>button").addEventListener("click", perform);

//Checking innerText of button either SIGN UP||SIGN IN in perform function
function perform() {
  let status = document.querySelector("#container>button").innerText;
  if (status == "SIGN UP") {
    //perform sign up process
    performSignUp();
  } else {
    //perform sign in process
    performSignIn();
  }
}

//checking validation for sign up process
function checkValidation() {
  //getting values
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  // checking condition
  if (email == ""|| pass == "") {
    alert("Please enter valid details");
    //return false if any field is empty by user
    return false;
  } else if(pass.length<8) {
    //else returning true for further process
    alert("Password must be atleast 8 digit")
    return false;
  }else{
    return true
  }
}

//checking validation for sign in process
function checkValidation2() {
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;

  if (email == "" || pass == "") {
    alert("Please enter valid details");
    return false;
  } else {
    return true;
  }
}

//Performing the final sigup process
function performSignUp() {
  if (checkValidation()) {
    //creating obj of user data entered by the user to store in local storage
    let obj = {
      email: document.querySelector("#email").value,
      pass: document.querySelector("#password").value,
    };

    console.log("working")

    if(users.length==0){
      users.push(obj)
      localStorage.setItem("users",JSON.stringify(users));
      alert("Signup successful")
      document.querySelector("#email").value = "";
      document.querySelector("#password").value = "";
      changeToLogin()
      return
    }

    users.forEach(function(el){

      if(el.email==obj.email){
        alert("Account already exits")
         
        return
      }else{

        users.push(obj)
        localStorage.setItem("users",JSON.stringify(users));
        alert("Signup successful")
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        changeToLogin()


      }

    })

    


    // //Checking if account already exist or not, if not creating new account
    // if (localStorage.getItem(obj.email) == null) {
    //   //finally setting up the credential of user in the key of email
    //   localStorage.setItem(obj.email, JSON.stringify(obj));
    //   //alerting user
    //   alert("Sign up successful");
    //   //setting the values empty of input fields to avpid duplicacy
    //   document.querySelector("#email").value = "";
    //   document.querySelector("#phone").value = "";
    //   document.querySelector("#password").value = "";
    //   //changing the page to sign up to sign
    //   changeToLogin();
    // } else {
    //   //If account already exist showing alert that account already exist to avoid duplicacy
    //   alert("Acoount already Exist login");
    //   //Sending user to Login if account already exist
    //   changeToLogin();
    // }

   


  }
}

//performing final sign up process
function performSignIn() {
  if (checkValidation2()) {
    //creating obj of user entered login credential
    let obj = {
      email: document.querySelector("#email").value,
      pass: document.querySelector("#password").value,
    };

    // //checking if email exist
    // if (localStorage.getItem(obj.email) != null) {
    //   //getting the if user email verified
    //   let data = JSON.parse(localStorage.getItem(obj.email));

    //   //finally checking password is valid or not
    //   if (obj.pass == data.pass) {
    //     // if password is valid alerting user and signin successful
    //     sendToNextPage()
    //     alert("Sign in successful");
    //   } else {
    //     //if password is wrong alerting user
    //     alert("Password is wrong");
    //   }
    // } else {
    //   //if email does not exist in local storage  alerting user that email not exists
    //   alert("Account doesn't exist");
    //   //sending user to sign up page to create new account
    //   window.location.reload();
    // }

    let flag =0

    users.forEach(function(el){

      if(el.email==obj.email){
        flag=1
        if(el.pass==obj.pass){

          alert("Signin Successful")
          window.location.href="../index.html"
        return

        }else{

          alert("password is worng")
          return


        }
         
      }

    })

    if(flag==0){
      alert("Account does not exist")

    }else{
      flag=0
    }







  }
}


function sendToNextPage(){
    let cn = document.querySelector("#container");
    cn.style.display="none"
    let body = document.querySelector("body");
    body.style.background= "linear-gradient(to bottom, #00ffff 0%, #0066cc 100%)";
    let doggo = document.createElement("img")
    doggo.style.width="30%"
    doggo.style.borderRadius="20px"
    doggo.src ="https://c.tenor.com/YHGmyXRaL3YAAAAd/smiling-dog.gif"
    doggo.style.marginTop="50px"

    let text = document.createElement("h1");
    text.style.color="white"
    text.style.marginTop="20px"
    text.innerText="Sign in Successful :)"
    body.style.textAlign="center"
    body.append(doggo,text)

}

