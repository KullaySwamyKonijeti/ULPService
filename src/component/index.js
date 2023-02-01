import jwt_decode  from "jwt-decode";

function checkAuth(){
    const jwtToken = window.location.href.split("=")[1]
    let accessToken = Cookies.get("jwt_Token");

    if(accessToken =="" || accessToken == null){
        if(jwtToken !="" || jwtToken != null){
            Cookies.set("access-token",jwtToken);
            var decode = jwt-decode(jwtToken)
            window.location.href = window.location.href.split("?")
        }else{
            //redirect to ULP
            // window.location.replace(http://localhost:3000)
        }
    }
}