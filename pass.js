const input_area = document.getElementById("area")
const block = document.getElementById("message-container")
const over = document.getElementById("overlay")
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const use = document.getElementById("use");

const allchar = "1234567890qwertyuiop[]asdfghjkl\|\zxcvbnm<>/?@#$%&";
const len = 12;
let blob


function generate(){
    let password = "";

    while (len > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    input_area.value = password;
}

function copy(){
    input_area.select();
    document.execCommand("copy");
}

function save(){
    let data_password = input_area.value;
    let data_fname = fname.value;
    let data_lname = lname.value;
    let data_email = email.value;
    let data_use = use.value;

    blob = new Blob(["Title: " + data_fname + "\n" + "Saved as: " + data_lname + "\n" + "Password: " +
                    data_password + "\n" + "Email: " + data_email  + "\n" + "Used for: " +  data_use
                    ],{type: 'text/plain'});

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = data_lname + ".txt";

    link.click();

    URL.revokeObjectURL(url);

    block.style.display = 'none';
    over.style.display = 'none'
}


function showMessage(){
    let data = input_area.value;
    if (data.length == 12){
        block.style.display = 'block';
        over.style.display = 'block'
    }
}
