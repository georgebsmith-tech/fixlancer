(function () {
    var attachHolder = document.querySelector(".attach-requirement")
    var hiddenAttachment = document.querySelector(".hidden-attachment")
    var fileNameHolder = document.querySelector(".file-name")
    var startOrderBtn = document.querySelector(".start-order")
    var requirementsInput = document.querySelector("#requirements")
    var orderID = document.querySelector(".order-id").value



    var file = ""
    var fileName = ""

    attachHolder.addEventListener("click", function (e) {
        hiddenAttachment.click()

    });
    hiddenAttachment.addEventListener("input", function (e) {
        fileNameHolder.textContent = this.files[0].name

        // const reader = new FileReader()
        // reader.readAsDataURL(hiddenAttachment.files[0])
        // reader.onload = () => {
        //     file = reader.result
        //     fileName = this.files[0].name
        //     console.log(reader.result)

        // }
    });

    startOrderBtn.addEventListener("click", function () {
        var requirements = requirementsInput.value.trim()
        sendRequirements(requirements)

    })

    var sendRequirements = (requirements) => {
        var formData = new FormData()
        formData.append("requirements", requirements)
        formData.append("order_id", orderID)
        formData.append("file", hiddenAttachment.files[0])
        formData.append("fileName", hiddenAttachment.files[0].name)

        // for (let [key, value] of formData) {
        //     console.log(key)
        //     console.log(value)
        // }




        // const body = JSON.stringify({
        //     order_id: orderID,
        //     fileName,
        //     requirements,
        //     file


        // })
        // console.log(body)
        // return


        fetch("/api/requirements", {
            method: "post",
            body: formData

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                location.href = `/dashboard/order-chat?oid=${orderID}`
            })

    }

})()