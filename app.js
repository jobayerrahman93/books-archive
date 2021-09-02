// search book

const searchBook = () => {

    const input = document.getElementById('bookInput');
    const inputValue = input.value;
    if(inputValue===''){

    }
    else{
        const url = `https://openlibrary.org/search.json?q=${inputValue}`;

        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data, data.docs));
    }
    

    input.value = '';

}


// display book

const displayData = (data, book) => {
    document.getElementById('bookNumber').innerText = data.numFound;
   

    const bookSection = document.getElementById('book-section');
    const notFound = document.getElementById('notFound');

    if (book.length === 0) {
        console.log('invalid');
        notFound.style.display = 'block';
        bookSection.textContent = '';
    }
    else {

        bookSection.textContent = '';
        book.forEach(element => {
    

        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img height="200px" src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">Author Name: ${element.author_name}</p>
          <p class="card-text">Publisher: ${element.publisher}</p>
          <p class="card-text">Publish Date: ${element.first_publish_year}</p>
        </div>
        </div>
        `;
        bookSection.appendChild(div);

        });

        notFound.style.display = 'none';

    }


}


