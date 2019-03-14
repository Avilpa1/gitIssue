
let APICall = document.getElementById('APICall')
let data = document.getElementById('data')
let outExist = document.getElementsByTagName('out')
let APIurl = 'https://api.github.com/'

window.addEventListener("keypress",
    function(event) {
        if (event.keyCode == '13') {
            searchOrgs()
        }
});

function searchOrgs() {
    if (outExist.length) {
        console.log(outExist)
        clearSearch()
    }
    let search = document.getElementById('searchInput')
    if(search.value == '') {
        alert('Nothing to seach..')
    } else {
        fetch(APIurl + 'orgs/' + search.value + '/repos?sort=created')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            for(let x=0; x < json.length; x++) {
                let out = document.createElement('div')
                out.setAttribute("id", "repo" + x);
                out.innerHTML = json[x].name + '<br>';
                let br = document.createElement('br');
                data.appendChild(out);
                data.appendChild(br);
            }
        })
    }

}

function clearSearch() {
    document.getElementsByTagName('out').innerHTML = ''
    // var parent = document.getElementById("div1");
    // var child = document.getElementById("p1");
    // parent.removeChild(child);
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
  