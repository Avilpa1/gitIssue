
let APICall = document.getElementById('APICall')
let data = document.getElementById('data')
APICall.onclick = function() {
    fetch('https://api.github.com/orgs/SoftStackFactory/repos?sort=created')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            for(let x=0; x < json.length; x++) {
                let out = document.createElement('out')
                out.innerHTML = json[x].name + '<br>';
                let br = document.createElement('br');
                data.appendChild(out);
                data.appendChild(br);
            }
        })
}


let openNav = document.getElementById('open')
let open = true
openNav.onclick = function() {
    if(open) {
    open = false
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    } else {
    open = true
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    }
}
  