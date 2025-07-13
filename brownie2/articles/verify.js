const cond=sessionStorage.getItem("isLogin");
        if(cond=="true"){
            console.log("you are logged in as admin");
        }
        else{
            alert("You are not logged in warning");
            window.location.href = "../index.html";
        }