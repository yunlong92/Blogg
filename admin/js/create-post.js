window.onload = function () {
    createPunEvent();
}

function createPunEvent() {
    let form = document.getElementById('create-post');
    let selectTagOption = document.getElementById('tags');

    let availableTags = [
        "Hundar",
        "Katter",
        "Blommor",
        "Resor",
        "Mat",
        "Bilar",
        "Inredning"
    ];

    for (let i = 0; i < availableTags.length; i++) {
        selectTagOption.innerHTML += `
        <option>${availableTags[i]}</option>
        
        `;
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        let formData = new FormData(form);

        var options = document.getElementById('tags').selectedOptions;
        var values = Array.from(options).map(({ value }) => value);
        console.log(values);

        formDataObject = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content'),
            "tags": values
        }

        try {
            await fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            })

            location.replace('index.html');
        } catch (error) {

        }
    });
}

