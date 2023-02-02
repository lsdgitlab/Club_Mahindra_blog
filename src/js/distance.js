// console.log('distance JS')
var route = [
  {
    improute: 'Chennai to Pune',
    timetaken: '17 hours 30 min',
    distance: '1,194 km',
  },
  {
    improute: 'Mumbai to Pune',
    timetaken: '5 hours 10 min',
    distance: '1,194 km',
  },
  {
    improute: 'Bangalore to Pune',
    timetaken: '22 hours 31 min',
    distance: '1,194 km',
  },
  {
    improute: 'Dellhi to Pune',
    timetaken: '17 hours 30 min',
    distance: '1,194 km',
  },
  {
    improute: 'Dellhi to Pune',
    timetaken: '5 hours 10 min',
    distance: '1,194 km',
  },
  {
    improute: 'Dellhi to Pune',
    timetaken: '22 hours 31 min',
    distance: '1,194 km',
  },
  {
    improute: 'Manali to Pune',
    timetaken: '17 hours 30 min',
    distance: '1,194 km',
  },
  {
    improute: 'Manali to Pune',
    timetaken: '5 hours 10 min',
    distance: '1,194 km',
  },
  {
    improute: 'Manali to Pune',
    timetaken: '22 hours 31 min',
    distance: '1,194 km',
  },
]
// route.forEach((routeitem) => {
//   routeContainer = document.getElementById('popular-route')
//   var routeList = document.createElement('li')
//   routeList.innerHTML += `
//     <div class="fromTo">${routeitem.improute}</div>
//     <div class="distance">${routeitem.timetaken}</div>
//     <div class="time">${routeitem.distance}</div>
//   `
//   routeContainer.appendChild(routeList)
// })

// console.log(route)

var routeIndex = 0
var loadMbtn = document.getElementById('loadbtn')

function loadPopularRoute() {
  const routeContainer = document.getElementById('popular-route')
  //   var routeList = document.createElement('li')
  routeContainer.style.overflow = 'hidden'
  routeContainer.style.height = 0
  routeContainer.style.transition = 'height 0.5s ease-in-out'

  //   loop through the next 3 items from the array
  for (var i = routeIndex; i < routeIndex + 2; i++) {
    if (i >= route.length) {
      break
    }
    // append the HTML for route arry item
    const routeList = `
    <li>
    <div class="fromTo">${route[i].improute}</div>
        <div class="distance">${route[i].timetaken}</div>
        <div class="time">${route[i].distance}</div>  
    </li>          
    `

    routeContainer.innerHTML += routeList

    setTimeout(() => {
      routeContainer.style.height = routeContainer.scrollHeight + 'px'
    }, 50)

    // routeContainer.innerHTML += routeList
  }
  //   update item to load in route container
  routeIndex += 3

  //   disabled load more button after load last array item
  if (routeIndex >= route.length) {
    loadMbtn.classList.add('disabled')
    loadMbtn.removeEventListener('click', loadPopularRoute)
  }
}
if (document.getElementById('popular-route')) {
  loadMbtn.addEventListener('click', loadPopularRoute)
  loadPopularRoute()
}
