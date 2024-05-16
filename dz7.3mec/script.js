
fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
            document.getElementById('preloader').style.display = 'none'; // Скрыть прелоадер после загрузки данных
            data.forEach(item =>{
                document.getElementById('root')
                .innerHTML += `
                <h1 style="display: inline">Name: ${item.name}</h1>
                <br>
                <p style="font-size: 22px; display: inline">Username: ${item.username}</p>
                <br>
                <p style="font-size: 22px; display: inline">Email: ${item.email}</p>
                <br>
                <p style="font-size: 22px; display: inline">ID: ${item.id}</p>
                <hr style="margin-bottom: 40px;">
                `
            })
        })
        .catch(error => {
            document.getElementById('preloader').style.display = 'none'; // Скрыть прелоадер в случае ошибки
            document.getElementById('root').innerHTML = 'An error occurred while fetching data.';
        });