function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

function changeContent(page) {
    var pageContent = document.getElementById('page-content');

    // Change content based on page
    if (page === 'home') {
        pageContent.innerHTML = 'Hey Welcome to my channel'; // Change to desired text
    } else if (page === 'Like') {
        pageContent.innerHTML = 'Thank you so much for like'; // Change to desired text
    } else if (page === 'Subscribe') {
        pageContent.innerHTML = 'Thank you so much for subscribe my channel.'; // Change to desired text
    } else if (page === 'Comment') {
        pageContent.innerHTML = 'Thank you so much for for comments'; // Change to desired text
    }
}
