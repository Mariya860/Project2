/**
 * Define Global Variables
 * 
*/
const navbar__list = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section')

// build the nav
document.addEventListener('DOMContentLoaded', function (event) {
  for (let index = 0; index < sections.length; index++) {
      // create a new list item element
      var item = document.createElement('li')
      //create a link element inside a li tag
      var link = document.createElement('a')
      link.classList.add('menu__link')
      link.href = '#!'
      link.innerText = sections[index].dataset.nav
      link.addEventListener('click', function(event) {
        event.preventDefault()
        scrollTo(sections[index].id)
      })

      // append the a element into the li tag
      item.append(link)

      // append the new Li item element to its parent unordered list
      navbar__list.appendChild(item)
  }
})

// Add class 'active' to section when near top of viewport
// this function is to give the active section an active class to navigation items

window.addEventListener('scroll', (e) => {
  const page__header = document.querySelector('.page__header')
  // query sections and menu links
  const menu__links = document.querySelectorAll('.menu__link')

  page__header.classList.remove('hide_nav')

  // inspect each section
  for (let i = 0; i < sections.length; i++) {
    // compare the pixels distance from top
    let top = sections[i].getBoundingClientRect().top + 5;

    // if the distance to the top is between 0-100px
    if (top > 0 && top < 100) {
      sections[i].classList.add('active');
      menu__links[i].classList.add('active');
      // otherwise, remove the class
    } else {
      menu__links[i].classList.remove('active');
      sections[i].classList.remove('active');
    }
  }

  setTimeout(() => {
    page__header.classList.add('hide_nav')
  }, 3000);
});

// Scroll to anchor ID using scrollTO event

function scrollTo(item_id) {
    const y = document.getElementById(item_id).getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
}
