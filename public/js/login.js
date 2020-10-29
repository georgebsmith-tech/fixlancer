(function () {
    const loginBtn = document.getElementById('login-btn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const spinnerHolder = document.querySelector(".lds-ring")
    loginBtn.addEventListener('click', function (e) {
        spinnerHolder.classList.remove("hide")
        document.querySelector(".error").classList.add("hide")
        // this.parentElement.classList.remove("margin20-top")
        // validateLogin();

    })

    function validateLogin() {
        fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        // .then(response => {
        //     // console.log(response)
        //     // if (response.status === 200)
        //     //     // window.location.href = "/dashboard"
        //     //     console.log(response.json())
        //     // return response.json();

        // })
        // .then(data => {
        // console.log(data)


        // )catch (err => {
        //         // console.log("Error")
        //         // document.querySelector(".login-error").classList.remove("hide")
        //         console.log(err)
        //     })
    }

})()