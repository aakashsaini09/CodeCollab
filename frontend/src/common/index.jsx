const backendDomain = "http://localhost:5000"
const SummaryApi = {
    signUp : {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    signIn : {
        url: `${backendDomain}/api/login`,
        method: "post"
    },
    current_user : {
        url: `${backendDomain}/api/userdetails`,
        method: "get"
    },
    userLogOut : {
        url: `${backendDomain}/api/userlogout`,
        method: "get"
    },
    allUsers : {
        url: `${backendDomain}/api/all-users`,
        method: "get"
    },
    
    updateUser : {
        url: `${backendDomain}/api/update-user`,
        method: "post"
    },
    allProducts : {
            url: `${backendDomain}/api/update-user`,
        method: "post"
    },
}
export default SummaryApi
