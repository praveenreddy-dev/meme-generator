const memeBtn = document.getElementById('btn');
const memeTitle = document.getElementById('heading-element');
const memeAuthor = document.getElementById('author');
const memeImage = document.querySelector('.meme-image');

function allData(url, title, autor) {
    memeImage.setAttribute('src', url);
    memeTitle.innerText = title;
    memeAuthor.innerText = autor;
}

function generateMeme() {
    const subreddit = document.getElementById('subreddit').value;
    console.log(subreddit);
    if (subreddit) {
        showData(subreddit);
    } else {
        alert("enter the subreddit first..🙄");
    }
}

function showData(subreddit) {
    memeBtn.addEventListener('click', () => {
        let memeUrl = `https://meme-api.com/gimme/${subreddit}`;

        fetch(memeUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response data as JSON
            return response.json();
        }).then((data) => {
            allData(data.url, data.title, data.author); // Corrected parameter names here
        }).catch(error => {
            // Display an error message if something went wrong
            const profileDiv = document.getElementById('meme-generator');
            profileDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    });
}
