const API_URL = 'https://api-colombia.com/api/v1';

const HTMLResponse = document.querySelector('#app');
const ul = document.createElement('div');
ul.classList.add('card');

fetch(`${API_URL}/Department`)
    .then((response) => response.json())
    .then((users) => {
        //se recorre los usuarios para ser pintados
        users.forEach(user => {
            //se crean los elementos como un elemento de lista
            let elem = document.createElement('div');
            elem.classList.add('card-body');

            let header = document.createElement('h5');
            header.classList.add('card-title');
            header.classList.add('fw-semibold');

            header.appendChild(
                document.createTextNode(`${user.name}`)
            )

            let description = document.createElement('p');
            description.classList.add('card-text');

            description.appendChild(
                document.createTextNode(`${user.description}`)
            )

            elem.appendChild(header);
            elem.appendChild(description);

            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);
    }).catch(e => console.error('EXCEPTION: ', e))
