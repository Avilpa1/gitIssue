
let APICall = document.getElementById('APICall')
let data = document.getElementById('data')
let outExist = document.getElementsByTagName('out')
let APIurl = 'https://api.github.com/'

APICall.onclick = function() {
    if (outExist.length) {
        console.log(outExist)
        clearSearch()
    }
    let search = document.getElementById('searchInput')
    fetch(APIurl + 'orgs/' + search.value + '/repos?sort=created')
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

function clearSearch() {
    // let elem = document.getElementById("data");
    console.log(elem)
    outExist.parentNode.removeChild(outExist);
}


let toggleNav = document.getElementById('open')
let open = true
toggleNav.onclick = function() {
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
  