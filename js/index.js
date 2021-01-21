let url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=c2aa1d4eade2404a9ea5fb468f17333f'
        fetch(url).then(function (response) {
            return response.json()
        }).then(function (dataRes) {
            let allNews = dataRes.articles

            let str = ''
            let getCon = document.querySelector('.row')


            allNews.forEach(element => {
                console.log(element)
                
                let html = `<div class="card khawar" style="width: 18rem; margin-top:3%; margin-right:8%;">
                    <img src="${element.urlToImage}" class="card-img-top" alt="No Images">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.description}</p>
                        <a href="${element.url}" class="btn btn-primary">Read More</a>
                        </div>
                        </div>`
                        
                        str += html
                        
                        
                        
                    });
                    
                    getCon.innerHTML = str
                    
                    
                })
