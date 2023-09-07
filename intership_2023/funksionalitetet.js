function fetch_data() {
    var flag=1; //variabli flag do te mbaje ID e fushave te emrit, mbiemrit dhe shtetit gjate kontrollit nese keto fusha jane boshe
    if (document.getElementById('fname').value == "") {
        flag = document.getElementById('fname');
        flag.style.backgroundColor = "#E78587";
        if (document.getElementById('lname').value == "") {
            flag = document.getElementById('lname');
            flag.style.backgroundColor = "#E78587";
        }

        if (document.getElementById('country').value == "Select Country") {
            flag = document.getElementById('country');
            flag.style.backgroundColor = "#E78587";
        }

    }
    if (document.getElementById('lname').value == "") {
        flag = document.getElementById('lname');
        flag.style.backgroundColor = "#E78587";
        if (document.getElementById('country').value == "Select Country") {
            flag = document.getElementById('country');
            flag.style.backgroundColor = "#E78587";
        }

 }
        if (document.getElementById('country').value == "Select Country") {
            flag = document.getElementById('country');
            flag.style.backgroundColor = "#E78587";
    }
    if (flag != 1) {
        window.alert("Ju lutem plotesoni te githe fushat ! ");
    }
    //Berja reset e ngjyrave te fushave
    if (document.getElementById('country').value == "") {
        flag = document.getElementById('country');
        flag.style.backgroundColor = "#E78587";
    }
    if (document.getElementById('fname').value != "") {
        flag = document.getElementById('fname');
        flag.style.backgroundColor = "white";
    }
    if (document.getElementById('lname').value != "") {
        flag = document.getElementById('lname');
        flag.style.backgroundColor = "white";
    }
    if (document.getElementById('country').value != "Select Country") {
        flag = document.getElementById('country');
        flag.style.backgroundColor = "white";
    }

    if (document.getElementById('fname').value != "" && document.getElementById('lname').value != "" && document.getElementById('country').value != "Select Country") {
        var firstname = document.getElementById('fname').value;
        var lastname = document.getElementById('lname').value;
        var countryname = document.getElementById('country').value;
        var rating = document.getElementById('score').value;
        new_table_row(firstname, lastname, countryname, rating);
        clear_data();
        add_votes(rating);
    }

}
function new_table_row(firstname, lastname, countryname, rating) {
    let table = document.getElementById("review_table");
    let row = table.insertRow(-1);
    row.style.backgroundColor = "#e6f2f1";
    row.style.fontFamily = "Arial";
    row.style.fontHeight = "50 px";
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    if (document.getElementById('male_status').checked) {
        c1.innerHTML = "<img src='resources/male.png' id='location' cellpadding='0' cellspacing='0' border='0' /> ";
    }
    else {
        c1.innerHTML = "<img src='resources/female.png' id='img_standardize'/>";
    }
    c2.innerText = firstname;
    c3.innerText = lastname;
    c3.width = '250px';
    c4.innerHTML = "<img src='resources/location.png' cellpadding='20' cellspacing='20' border='0' /> ";
    c5.innerText = countryname;
    c5.width = '700px';
    c6.innerText = rating;
    c7.innerHTML = "<img src='resources/stars.png' id='img_standardize' cellpadding='0' style = ' position: relative; left:-10px' cellspacing='0' border='0' /> ";


}

function reset_fname_color() {
    document.getElementById('fname').style.backgroundColor = 'white';
}
function reset_lname_color() {
    document.getElementById('lname').style.backgroundColor = 'white';
}
function reset_country_color() {
    document.getElementById('country').style.backgroundColor = 'white';
}
function uncheck_female() {
    let checking_status = document.getElementById('female_status');
    checking_status.checked = false;
}

function uncheck_male() {
    let checking_status = document.getElementById('male_status');
    checking_status.checked = false;
}
function clear_data() {
    document.getElementById('fname').style.backgroundColor = "white";
    document.getElementById('lname').style.backgroundColor = "white";
    document.getElementById('country').style.backgroundColor = "white";

    datas.reset();
}
var number_of_votes = 0;
var sum_of_points = 0;
var avg = 0;
function add_votes(latest_vote) {
    sum_of_points = parseInt(sum_of_points) + parseInt(latest_vote);
    number_of_votes = parseInt(number_of_votes) + parseInt(1);
    document.getElementById("counted_votes").textContent = number_of_votes;
    calculate_average();
}
function calculate_average() {
    avg = parseFloat(sum_of_points) / parseFloat(number_of_votes);
    document.getElementById("avrg").textContent = parseFloat(avg).toFixed(1);
}