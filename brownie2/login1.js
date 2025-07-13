//chat,login button
const chat=document.querySelector(".chat");
const btnpopup=document.querySelector(".buttonLogin");
// close icon for pop up window
const closeIcon=document.querySelector(".closeIcon");
//logi,register link swith
const loginlink=document.querySelector(".loginlink");
const registerlink=document.querySelector(".registerlink");
//login,register chat base plase wrapper
const wrapper=document.querySelector(".wrapper");
const chatwrapper=document.querySelector(".chatwrapper");
//chat popup place
//chat button onclick event

chat.addEventListener('click',()=>{
    wrapper.classList.add('chatwrapper');
    console.log("created chatwrapper");
    wrapper.classList.remove('wrapper');
    const chatwrapper=document.querySelector(".chatwrapper");
    console.log("remove wrapper");
    chatwrapper.classList.add("active-popup");
    console.log("created active-popup");
    chatwrapper.classList.add("activechat");
    
});



//login register popup place
//register link onclick event switch between login page to register page
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    
});
//login link onclick event switch between register page to login page
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
});
//login button onclick show popup window
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');

    
    
    
});
//close icon onclick remove popup window
closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    window.location.reload();
    
});

window.onload = function() {   
    wrapper.classList.add('active-popup');
}


//firebase code
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGYH0CeVCQDESjcJdvikoKmeOyhLCYoyk",
    authDomain: "grand-lekage-web.firebaseapp.com",
    projectId: "grand-lekage-web",
    storageBucket: "grand-lekage-web.appspot.com",
    messagingSenderId: "185245033432",
    appId: "1:185245033432:web:258e597d6b2b7ad46f48ad",
    measurementId: "G-B4GCWFR374"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

signin.addEventListener("click",(e)=>{
    e.preventDefault();
    
    const email = document.getElementById('emailL').value;
    const password = document.getElementById('passwordL').value;
    const errorMessage = document.getElementById('error-messageL');

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.uid);
            console.log("successfully loggedin");
            sessionStorage.setItem("isLogin", "true");
            sessionStorage.setItem("UserId", user.uid);
            sessionStorage.setItem("Email", document.getElementById('emailL').value);
        
            
            window.location.href = "articles/index.html"; // Redirect to home page after login
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
    
})


signup.addEventListener("click",(e)=>{
    






    e.preventDefault();

    const email = document.getElementById('emailC').value;
    const password = document.getElementById('passwordC').value;
    const errorMessage = document.getElementById('error-messageC');

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            sessionStorage.setItem("Number", document.getElementById('number').value);
            alert('Registration successful!');
            console.log('Registration successful!');
            window.location.href = "index.html"; // Redirect to login page after registration
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
})
