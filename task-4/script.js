const employeeBox = document.querySelector("#employees");


async function loadUsers(){


    let response = await fetch("https://dummyjson.com/users");


    let usersData = await response.json();



    usersData.users.map((employee)=>{


        let profile = document.createElement("section");


        profile.classList.add("profile");



        profile.innerHTML = `


        <div class="photo">

            <img src="${employee.image}">

        </div>


        <div class="info">


            <h2>${employee.firstName} ${employee.lastName}</h2>


            <p><b>Age:</b> ${employee.age}</p>


            <p><b>Email:</b> ${employee.email}</p>


            <p><b>Phone:</b> ${employee.phone}</p>


            <p><b>Company:</b> ${employee.company.name}</p>


            <div class="options">

                <button>Profile</button>

                <button>Call</button>

            </div>


        </div>


        `;



        employeeBox.appendChild(profile);



    });



}



loadUsers();