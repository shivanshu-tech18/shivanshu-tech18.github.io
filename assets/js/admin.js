let msgDiv = document.getElementById('msgDiv')
const password = prompt('Enter admin Password')

if(password === 'sklopr'){
    const fetchData = db.ref('Submissions/');
    fetchData.on('child_added', function (snapshot){
        const data = snapshot.val();
        const htmlPrint = `<div class="col-sm-6 mt-1">
        <div class="card bg-dark text-white">
            <div class="card-body">
                <h5 class="card-title">Name : ${data.Name}</h5>
                <h6 class="card-title">Subject : ${data.Subject}</h6>
                <p class="card-title">E-mail : ${data.Email}</p>
                <p class="card-text">Message : ${data.Message}</p>
                <a href="mailto:${data.Email}" class="btn btn-primary">E-mail Reply</a>
            </div>
        </div>
        </div>`
        msgDiv.innerHTML += htmlPrint
        // console.log(data)
    })
}else{
    alert('Wrong Password!!')
}