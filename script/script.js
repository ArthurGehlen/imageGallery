const file_input = document.getElementById('file_input');
const open_menu_btn = document.getElementById("open_menu_btn");
const create_card_btn = document.getElementById("create_card_btn");
const container = document.getElementById("container");

function load_img(event, img) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img_data = event.target.result;
            img.src = img_data;
        };
        reader.readAsDataURL(file);
    }
}

function verify_date_under_10(date) {
    if (date < 10) {
        return `0${date}`;
    }
    else {
        return `${date}`;
    }
}

function create_card() {
    const card_description_input = document.getElementById("description_input").value;
    const file = file_input.files[0];

    if (card_description_input && file) {
        let card = document.createElement('div');
        card.className = 'card';

        let card_bg = document.createElement('img');
        load_img({ target: { files: [file] } }, card_bg);

        let card_section = document.createElement('section');

        let card_description = document.createElement('p');
        card_description.textContent = card_description_input;
        card_section.appendChild(card_description);

        let card_span = document.createElement('span');

        // Date
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        card_span.textContent = `Data: ${verify_date_under_10(day)}/${month}/${year} ${verify_date_under_10(hour)}:${verify_date_under_10(minutes)}h`;
        card_section.appendChild(card_span);

        card.appendChild(card_bg);
        card.appendChild(card_section);
        container.appendChild(card);

        file_input.value = "";
        document.getElementById("description_input").value = "";
    } else {
        alert('O card deve ter uma imagem e descrição.');
    }
}

function open_menu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle('show');
}

open_menu_btn.addEventListener('click', open_menu);
create_card_btn.addEventListener('click', create_card);