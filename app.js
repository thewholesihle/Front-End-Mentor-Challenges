let names = document.querySelectorAll('.name'),
abouts = document.querySelectorAll('.about'),
links = document.querySelectorAll('.links')

async function getData() {
  let res = await fetch('projects.json');
  return res.json();
}

// render the data to each card
getData().then(project => {
  console.log(project)
  for(let i = 0; i < project.length; i++){

    //setting text
    names[i].innerText = project[i].name
    abouts[i].innerText = project[i].about

    //setting links
    links[i].children[0].href = project[i].demo
    links[i].children[1].href = project[i].github

  };
})


function setDemoLinks(url) {
  links.forEach(link => {
    link.children[0].href = url;
    console.log(link.children[0].href)
  });
}
