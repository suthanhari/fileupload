document.getElementById("myform").addEventListener('submit', async function (e) {
    e.preventDefault();

    var userData = {
        name: document.getElementById('name').value,
        eamil: document.getElementById('email').value,
        Number: document.getElementById('number').value,
        password: document.getElementById('password').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value,
        pincode: document.getElementById('pincode').value,
        education: document.getElementById('education').value
    }
    try {
        let postData = await fetch("https://6193477cd3ae6d0017da8485.mockapi.io/userForm", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json"
            }

        })
    } catch (error) {
        console.log(error);
    }
   

})

const api = "https://6193477cd3ae6d0017da8485.mockapi.io/userForm"

async function getweather() {
    let apis = await fetch(api);
    return apis.json()
}
getweather()

    .then(function (letGetData) {

        let li = `<tr>
        <th>Name</th>
        <th>Email</th>
        <th>Number</th>
            <th>Password</th>
            <th>State</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>Education</th>
            <th></th>
            
            </tr>`;

        // Loop through each data and add a table row
        letGetData.forEach(user => {
            li += `<tr>
                            <td class="tdata">${user.name} </td>
                            <td class="tdata">${user.eamil}</td>        
                            <td class="tdata">${user.Number}</td>        
                            <td class="tdata">${user.password}</td>        
                            <td class="tdata">${user.state}</td>        
                            <td class="tdata">${user.city}</td>        
               <td class="tdata">${user.country}</td>        
               <td class="tdata">${user.pincode}</td>        
               <td class="tdata">${user.education}</td>        
               <td class="tdata"><button class="btnE">Edit</button>
                <button class="btnD">Delete</button></td>
                </tr>`;

        })
        document.getElementById("tform").innerHTML = li;

        var btns = document.querySelectorAll(".tdata .btnD");

        Array.from(btns).forEach(function(btn){
            btn.addEventListener("click",function(e){

                const lm = e.target.parentNode.parentNode
                lm.parentNode.removeChild(lm);
            })
        })

    })
