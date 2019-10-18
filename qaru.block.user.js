
var __bad_sites = [
    [/^https?:\/\/qaru.site\//gm, 'источник'],
];

function __my_redrect_to_stackoverflow() {
    for (let s = 0; s < __bad_sites.length; ++s) {
        let regex = __bad_sites[s][0];
        let match = window.location.href.match(regex);

        if (match != null) {
            links = document.getElementsByTagName('a');
            for (let i = 0; i < links.length; ++i) {
                if (links[i].innerHTML == __bad_sites[s][1]) {
                    window.location.href = links[i].getAttribute('href')
                }
            }
            
        }
    }
}

__my_redrect_to_stackoverflow();
