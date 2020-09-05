
function myFunction(){
    let numm;
    let li;
    let p;
    let pnumm;
    let pdate;


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;


    let email = document.getElementById("email").value;
    let pemm = document.getElementById("pemm");
    let nemm = document.getElementById("nemm");
    let emtag = document.getElementById("email");
    let comm = document.getElementById("comm").value;
    let commtag = document.getElementById("commcheck");
    let uls = document.getElementById('fir');
    let incor = document.createElement("p");
    let dater = document.createElement("p");
    dater.innerText = today;
    incor.innerText = 'incorrect info';
    let rates = document.getElementsByName('numm');
    numm = 0;


    for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            numm = rates[i].value;
        }
    }


    let result = email.match(/@/);
    if(result == null){
        pemm.innerText = 'INCORRECT EMAIL!';
        document.getElementById("nemm").innerText = ' ';
        document.getElementById("commcheck").innerText = ' ';
    }


    else if (numm == 0){
        nemm.innerText = 'TAKE ONE NUMBER!';
        document.getElementById("commcheck").innerText = ' ';
        document.getElementById("pemm").innerText = ' ';
    }


    else if (comm.length < 3){
        commtag.innerText = 'INCORRECT COMM!';
        document.getElementById("nemm").innerText = ' ';
        document.getElementById("pemm").innerText = ' ';
    }


    else{
        document.getElementById("commcheck").innerText = ' ';
        document.getElementById("pemm").innerText = ' ';
        document.getElementById("nemm").innerText = ' ';

        li = document.createElement("li");
        p = document.createElement("p");
        pnumm = document.createElement("p");
        p.innerText = comm;
        li.innerText = email;
        pnumm.innerText = numm + ' звёзд!';

        li.appendChild(dater);
        li.appendChild(pnumm);
        li.appendChild(p);
        uls.appendChild(li);
        document.getElementById("email").value = ' ';
    }
}


