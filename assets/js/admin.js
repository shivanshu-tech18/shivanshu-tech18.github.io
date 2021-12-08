let msgDiv = document.getElementById('msgDiv')
let exit = document.getElementById('exit')
let password = prompt('Enter admin Password')
// let password = ""
const domain = 'https://shivanshu-tech18.github.io/'
// const domain = 'http://127.0.0.1:5500/'

exit.addEventListener('click', () => {
  window.location.replace('/')
})
let body = document.getElementById('body')
body.style.display = "none"

if (password === 'sklvpr18') {
  body.style.display = "block"
  if (window.location.href === `${domain}admin/submission.html`) {
    const fetchData = db.ref('Submissions/');
    fetchData.on('child_added', function (snapshot) {
      const data = snapshot.val();
      const htmlPrint = `<div class="col-sm-6 mt-1">
        <div class="card bg-dark text-white">
            <div class="card-body">
                <h5 class="card-title">Name : ${data.Name}</h5>
                <p class="card-title">E-mail : ${data.Email}</p>
                <h6 class="card-title">Subject : ${data.Subject}</h6>
                <p class="card-text">Message : ${data.Message}</p>
                <a href="mailto:${data.Email}" class="btn btn-primary">E-mail Reply</a>
            </div>
        </div>
        </div>`
      msgDiv.innerHTML += htmlPrint
      // console.log(data)
    })
  } else if (window.location.href === `${domain}admin/portfolio_item.html`) {
    body.style.display = "block"
    const formJee = document.getElementById('formJee');
    const id = Date.now();
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let webLink = document.getElementById('webLink');
    let image = document.getElementById('image');

    formJee.addEventListener('submit', (e) => {
      e.preventDefault();
      const InpId = id;
      const InpTitle = title.value;
      const InpCat = category.value;
      const InpLink = webLink.value;
      const InpImg = image.value;

      title.value = ""
      category.value = ""
      webLink.value = ""
      image.value = ""

      db.ref("Portfolio/" + InpId).set({
        Id: InpId,
        Title: InpTitle,
        Category: InpCat,
        WebLink: InpLink,
        Image: InpImg,
      });



    })
    const fetchPort = db.ref('Portfolio/');
    fetchPort.on('child_added', function (snapshot) {
      const items = snapshot.val();
      const portItem = document.getElementById('portItem')
      const Print = `<div class="col-md-4">
      <div class="work-box">
          <div class="work-img" style="cursor: pointer;">
            <img src="${items.Image}" alt="" class="img-fluid">
          </div>
        <div class="work-content">
          <div class="row">
            <div class="col-sm-8">
              <h2 class="w-title">${items.Title}</h2>
              <div class="w-more">
                <span class="w-ctegory">${items.Category}</span>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="w-like">
                <a href="${items.WebLink}" target="_blank"> <span
                    class="bi bi-plus-circle"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
      portItem.innerHTML += Print
    })
  }
} else {
  body.style.display = "none"
  alert('Wrong Password!!')
  window.location.reload()
}