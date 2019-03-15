
let APICall = document.getElementById('APICall')
let data = document.getElementById('data')
let out = document.getElementsByTagName('out')
let APIurl = 'https://api.github.com/'

window.addEventListener("keypress",
    function(event) {
        if (event.keyCode == '13') {
            searchOrgs()
        }
});

function searchOrgs() {
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
                out.setAttribute("value", json[x].name);
                out.innerHTML = json[x].name + '<br>';
                let br = document.createElement('br');
                data.appendChild(out);
                data.appendChild(br);

                out.addEventListener("mousedown",function(event){
                    console.log(event.srcElement.textContent);
                    let repo = event.srcElement.textContent
                    listOrgsIssues(search.value, repo)
                   });
            }
        })
    }
}

function listOrgsIssues(org, repo) {
        fetch(APIurl + 'repos/' + org + '/' + repo + '/issues')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            for(let x=0; x < json.length; x++) {
                let out = document.createElement('div')
                out.setAttribute("id", "issues");
                // out.setAttribute("value", json[x].name);
                out.innerHTML = json[x].title + '#' + json[x].number + '<br>' + json[x].body + '<br>';
                // out.innerHTML = json[x].body + '<br>';
                // out.innerHTML = json[x].title + '<br>';
                let br = document.createElement('br');
                main.appendChild(out);
                main.appendChild(br);

                // out.addEventListener("mousedown",function(event){
                //     console.log(event.srcElement.textContent);
                //    });
            }
        })
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
  