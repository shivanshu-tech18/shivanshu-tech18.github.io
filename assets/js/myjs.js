window.onload = () => {
    const fetchPort = db.ref('Portfolio/');
    fetchPort.on('child_added', function (snapshot) {
        const items = snapshot.val();
        const portItem = document.getElementById('portItem')
        const Print = `<div class="col-md-4">
                <div class="work-box">
                  <a href="${items.WebLink}" data-gallery="portfolioGallery"
                    class="portfolio-lightbox">
                    <div class="work-img">
                      <img src="${items.Image}" alt="" class="img-fluid">
                    </div>
                  </a>
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

};