//spicy loading screen up
let loading = setInterval(() => {
  if (document.querySelector(`h3#phraseWrapper`)) {
    const loadingPhrase = document.querySelector(`h3#phraseWrapper:not(.done)`)
    const phrases = ["5-4-3-2...",
    "Oops!",
    "<img src='https://media1.giphy.com/media/cdh6PGBxMl4f0a67jx/200.webp?cid=ecf05e47pyki1csjwqd9h76932zeddxwmcfqvxh8iv8pwbdz&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media1.giphy.com/media/cdh6PGBxMl4f0a67jx/200.webp?cid=ecf05e47pyki1csjwqd9h76932zeddxwmcfqvxh8iv8pwbdz&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media1.giphy.com/media/cdh6PGBxMl4f0a67jx/200.webp?cid=ecf05e47pyki1csjwqd9h76932zeddxwmcfqvxh8iv8pwbdz&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media1.giphy.com/media/cdh6PGBxMl4f0a67jx/200.webp?cid=ecf05e47pyki1csjwqd9h76932zeddxwmcfqvxh8iv8pwbdz&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2c2ZGUwczQxdmxkNHE4dzN4N2l6MDMxM2p1dm9xMDF0dmI5NXBrcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zDrQxFFgiiGoU/giphy.gif'>",
    "<img src='https://media4.giphy.com/media/8G7HYlhLqtOvu/200.webp?cid=ecf05e4735trfxrn6k2ffkx40mgnqnb122rfmod0sty3s9bk&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media1.giphy.com/media/rIp49nsB14L7wVRAmc/200.webp?cid=790b76115sfzz8tbdbcprbpu9vrcbt8uqku01noacxshhnjc&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media1.giphy.com/media/GBg58w14FovtuzHykg/200.webp?cid=ecf05e47p2jdx5pj5kz30czul5pev82h4ink5a8fcdxu9wgv&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media4.giphy.com/media/SR5uulkMhiWHcjhACN/200.webp?cid=790b76115sfzz8tbdbcprbpu9vrcbt8uqku01noacxshhnjc&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media0.giphy.com/media/1eU7LMinLsCLGTCdyI/200.webp?cid=ecf05e474z194rfcp3h6bixe9v8wdrmqlfp3n3enx1y34fgi&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media1.giphy.com/media/sSmxfWnEVxtWU/200.webp?cid=ecf05e47rk17hr4gehzsy3aezrfx6x5qh7e3k70fbgkp60e8&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media1.giphy.com/media/3eS7kmMo9Ibzk0F7xg/200.webp?cid=ecf05e47d87ita0h1sev4h1l6ae1rz2nivjytwxnnknwhtsr&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media3.giphy.com/media/0saxF4eNE7x2fEqrN6/200.webp?cid=ecf05e47uxgxb0zjlutb8wiz9xu1vp8qrfrewuoxn4lh11yf&ep=v1_gifs_search&rid=200.webp&ct=g'>",
    "<img src='https://media3.giphy.com/media/oNmO06JNhnNtGk08Nr/200.webp?cid=ecf05e47o4ujnefatftul3u1x5wwen0w89y7zdi088bulg2l&ep=v1_gifs_search&rid=200.webp&ct=g'>",
      "<img src='https://64.media.tumblr.com/tumblr_m6fzxqTCkw1rziwwco1_250.gifv'>",
    "Oops!",
    "Uh-oh!",
    hurt_loading_svg,
    snail_loading_svg,
    turtle_loading_svg,
    oldMain_loading_svg,
    falling_loading_svg,
    oldMain2_loading_svg,
    fallButt_loading_svg,
    "Running on empty.",
    "Did John fix it yet?",
    "My brain says 'crunches'.",
    "Trying not to delete data...",
    "Uh, what did you want again?",
    "I have no idea what I am doing.",
    "I’m not slow. I’m limited edition.",
    "Oh, that is what you wanted?... Whoops!",
    "Just taking a little break right now.",
    "Just sitting here spinning around in circles.",
    "Did you try turning it off and back on again.",
    ]
    let i = Math.floor(Math.random() * phrases.length + 1);
    loadingPhrase.innerHTML = phrases[i]
    loadingPhrase.classList.add('done') 
    clearInterval(loading)
  }
}, 100)

//add Addresses to a link in the nav box under Accounts
let navigatorBar = setInterval(() => {

  if (document.querySelector(`.app--navigation`)) {
    const navBar = document.querySelector(`.app--navigation:not(.done)`)
    navBar.classList.add(`done`)
    const menuItems = document.querySelector(`.app--navigation .groups .items`)
    menuItems.children[8].remove()
    const billingLink = menuItems.children[1]
    const newItem = document.createElement(`div`)
    newItem.classList.add(`item`)
    const anchorLink = document.createElement(`a`)
    anchorLink.href = `#/settings/accounts/serviceable-addresses`
    const navIconDiv = document.createElement(`div`)
    navIconDiv.classList.add(`navIcon`, `icon`, `icon-address`, `icon--type--navigation`)
    navIconDiv.innerHTML = road_svg
    const navLabel = document.createElement(`div`)
    navLabel.classList.add(`navLabel`)
    navLabel.textContent = `Addresses`

    anchorLink.append(navIconDiv)
    anchorLink.append(navLabel)
    newItem.append(anchorLink)

    menuItems.insertBefore(newItem, billingLink)
    clearInterval(navigatorBar)
          
  }
}, 1000)

//Change User Avatar icon on top right
let userHereIcons = setInterval(() => {
  if (document.querySelector(`div.usersHere:not(.expanded)`) != null) {
    const userHereDiv = document.querySelector(`div.usersHere:not(.expanded)`)
    userHereDiv.classList.add(`expanded`)
    document.querySelector(`div.usersHere__label[aria-label="Users Here"]`).remove()
  }
}, 1000)

//CTRL + ENTER to quick input 'account:
let globalSearchSetInterval = setInterval(() => {
  if (document.querySelector(`input[autocomplete="sonar-input-global-search"]`) != null) {
    const globalSearchInput = document.querySelector(`input[autocomplete="sonar-input-global-search"]`)
    globalSearchInput.addEventListener("keydown", (e) => {
      if (e.key == "Enter" && e.ctrlKey == true) globalSearchInput.value = "account:"
    })
    clearInterval(globalSearchSetInterval)
    const tipsDiv = globalSearchInput.parentElement.parentElement.children[1].children[1]
    tipsDiv.style = "font-weight:bold;"
    tipsDiv.textContent = `CTRL + ENTER to quick input 'account:'`
  }
}, 2000)

//account map zoom in and switch to satellite view
let mapStatic = setInterval(() => {
  if (document.querySelector(`.map--static:not(.changed)`) != null) {
    const mapDiv = document.querySelectorAll(`.map--static:not(.changed)`)
    for (const i in mapDiv) {
      mapDiv[i].classList.add("changed")

      let mapStyle = mapDiv[i].getAttribute("style")

      mapStyle = mapStyle.replace(`zoom=7`, `zoom=16`)
      mapStyle = mapStyle.replace(`zoom=11`, `zoom=17`)
      mapStyle = mapStyle.replace(`zoom=10`, `zoom=17`)
      mapStyle = mapStyle.replace(`maptype=roadmap`, `maptype=satellite`)

      mapDiv[i].setAttribute("style",mapStyle)
    }
  }
}, 2000)

//Account group list show all changes
let hoverItemsShow = setInterval(() => {
  if (document.querySelector(`.hover-list:not(.done)`) != null) {
    const elements = document.querySelectorAll(`.hover-list:not(.done)`)
    for (const i in elements) {
      let e = elements[i]
      e.removeAttribute("style")
      e.classList.add("done")
    }
  }
}, 2000)

//If account links in notes are from v1. This will edit to make it v2
let noteLinks = setInterval(() => {
  if (document.querySelector(`.cardWrapper .dataTable--tableWrapper .dataTable--row td div.bottom a:not(.done)`) != null) {
    const elements = document.querySelectorAll(`.cardWrapper .dataTable--tableWrapper .dataTable--row td div.bottom a:not(.done)`)
    for (const i in elements) {
      let e = elements[i]
      e.classList.add("done")
      let url = e.href
      e.target = "_BLANK"
      if(url.includes("software/accounts")) e.href = url.replace("accounts","app#/accounts/show")
     
    }
  }
}, 2000)

//Add clipboard icon to the right of account number and click to copy the number
let copyAccBtn = setInterval(() => {
  if(document.querySelector(`.secondary--content .stat div.value span[data-text="number"]:not(.done)`)){
    let accountIdSpan = document.querySelector(`.secondary--content .stat div.value span[data-text="number"]:not(.done)`)
    const accountID = accountIdSpan.textContent
    let copylink = document.createElement("a")
    copylink.dataset.copyaccid = accountID
    copylink.style = "color:var(--app--content--outer--text--color);margin-left:0.2rem;"
    copylink.innerHTML = clip_svg

    accountIdSpan.append(copylink)
    const copyBtn = document.querySelector(`[data-copyAccID="${accountID}"]`)
    copyBtn.addEventListener("click", () => {
      const copyText = copyBtn.dataset.copyaccid
      navigator.clipboard.writeText(copyText)    
    })
    accountIdSpan.classList.add("done")
  }
}, 5000)

//Edit layout of Scheduling Dispatcher View. 
//Auto hides queued jobs and map.
let scheduleHiddenMenus = setInterval(() => {
  if (document.querySelector("div.scheduleBody > div.map > button:not(.done)")) {
    const hideMap = document.querySelector("div.scheduleBody > div.map > button:not(.done)")
    hideMap.classList.add("done")
    hideMap.click()
    const hideJobs = document.querySelector("div.queueToggle > button:not(.done)")
    hideJobs.click()
  }
}, 3000)
//Zooms to schedule timeline in 2 clicks
let scheduleTimelineResize = setInterval(() => {
  const timelineSize = document.querySelector("#router--wrapper > div.page--layout > div > div > div.content.context--fixedLayout.context--scheduling > div > div > div.scheduleBody > div.calendar > div.body--wrapper > div.body > div.schedule--row.schedule--hours:not(.done)")
  timelineSize.classList.add("done")
  if (timelineSize.style.width == "3130px") {
    const zoomIn = document.querySelector("#router--wrapper > div.page--layout > div > div > div.content.context--fixedLayout.context--scheduling > div > div > div.scheduleBody > div.calendar > div.header > div.users > div.-zoom > button:nth-child(1)")
    zoomIn.click()
    zoomIn.click()
  }
}, 3000)

//Adds clipboard icon button next to phone numbers and can click to copy instead of being able to click to call from computer.
let phoneNumbers = setInterval(() => {
  const phoneLinks = document.querySelectorAll(".phoneLink:not(.done)")
  for (const link of phoneLinks) {
    link.classList.add("done")
    let number = link.href
    number = number.replace("tel:", "")
    link.removeAttribute("href")
    link.setAttribute("data-number", number)
    link.addEventListener("click", () => {
      const copyText = link.dataset.number
      navigator.clipboard.writeText(copyText) 
    })
    link.innerHTML += ` ${clip_svg}`
    
  }

}, 3000)

//Hides radius_id and NAS. Adds calculates the time between starts and ends, if the table is sorted right...
let radiusHistoryTable = setInterval(() => {

  if (document.querySelectorAll(".accountShow--tabs .dataTable--tableWrapper table.dataTable--table.slim.light.dataTable--table--scroll:not(.done)")) {
    let table = document.querySelectorAll(".accountShow--tabs .dataTable--tableWrapper table.dataTable--table.slim.light.dataTable--table--scroll:not(.done)")
    for (const i in table) {
      if (table[i].classList) table[i].classList.add("done")
      let e = table[i]
      if (e.children) {
        var header = e.children[0]
        var body = e.children[1].children
      }
      //check for correct table
      if (header.children[0].textContent == "Real Session ID") {
        //header
        // header.children[0].remove()
        header.children[0].textContent = ``
        header.children[3].textContent = "TIME UP / DOWN"
        header.children[5].textContent = ``
        //body
        for (const i in body) {
          let row = body[i]
          let radiusId_col = 0
          let startTime_col = 1
          let endTime_col = 2
          let times_col = 3
          let ip_col = 4
          let station_col = 5
          let mac_col = 6
          let button_col = 7
          //remove radius id field 
          // row.children[0].remove()
          let realSessionId = row.children[radiusId_col].textContent
          row.title = realSessionId
          row.children[radiusId_col].textContent = ``
          row.children[station_col].textContent = ``
          //mac
          if (i == 0) { 
            let callingStation = row.children[mac_col]
            let mac = callingStation.textContent
            mac = mac.replace(/\s+/g, '')

            callingStation.innerHTML = `${mac}<BR> <iframe src='https://api.macvendors.com/${mac}' scrolling="no" style='width:10rem;height:2rem;border:0;background:#FFF;color:#000;border-radius:0.25rem;scroll-behavior:none'></iframe>`
  
          }

          //get dates
          let start = row.children[startTime_col].textContent
          let stop = row.children[endTime_col].textContent
          //check is the router has an empty filled
          if (!hasNumbers(stop) && i > 0) {
            row.children[endTime_col].innerHTML = `${down_svg} Err`
            continue
          }

          //uptime
          var startDate = new Date(start)
          var stopDate = new Date()
          if (hasNumbers(stop)) stopDate = new Date(stop)        
          const diff = diff_minutes(startDate, stopDate)
          row.children[times_col].innerHTML = `${up_svg} ${diff}`
        
          //droptime
          let lastI = parseInt(1) + parseInt(i)
          if (lastI != body.length) {
            let lastStop = body[lastI].children[endTime_col].textContent
            if (!hasNumbers(lastStop)) {
              row.children[times_col].innerHTML += ` / ${down_svg} Err`
              continue
            }
            let lastStopDate = new Date(lastStop)
            const droptime = diff_minutes(startDate, lastStopDate)
            row.children[times_col].innerHTML += ` / ${down_svg} ${droptime}`
          }
        }
      }
    }
  }
  
  
}, 2000)

//Reformats the layout of tickets
//EDIT with your job names and colors you would like.
let tickets = setInterval(() => {

  if (document.querySelectorAll(`div.controls--item:has(.icon-ticketGroup):not(.done)`)) {
    const tickets = document.querySelectorAll(`div.controls--item:has(.icon-ticketGroup):not(.done)`)
    for (let i in tickets) {
      let ticketGroupText = tickets[i].textContent
      tickets[i].classList.add(`done`)

      if (ticketGroupText.includes("Return") || ticketGroupText.includes("Pickup")) {
        tickets[i].style = `background:#B22222;`
        tickets[i].children[0].children[0].style = `color:white;`
      }
      else if (ticketGroupText.includes("Fiber")) {
        tickets[i].style = `background:#FF8C00;`
        tickets[i].children[0].children[0].style = `color:white;`
      }
      else if (ticketGroupText.includes("Trouble") || ticketGroupText.includes("Tower")) {
        tickets[i].style = `background:#2E8B57;`
        tickets[i].children[0].children[0].style = `color:white;`
      }
      else if (ticketGroupText.includes("Wireless")) {
        tickets[i].style = `background:#1E90FF;`
        tickets[i].children[0].children[0].style = `color:white;`
      }
      else if (ticketGroupText.includes("Miss")) {
        tickets[i].style = `background:gray;`
        tickets[i].children[0].children[0].style = `color:white;`
      }
      else if (ticketGroupText.includes("Labor")) {
        tickets[i].style = `background:darkgray;`
        tickets[i].children[0].children[0].style = `color:white;`
      }
      else if (ticketGroupText.includes("Upgrade")) {
        tickets[i].style = `background:purple;`
        tickets[i].children[0].children[0].style = `color:white;`
      }
      else if (ticketGroupText.includes("Billing") || ticketGroupText.includes("Support")) {
        tickets[i].style = `background:lightblue;`
        tickets[i].children[0].children[0].style = `color:black;`
      }
    }
  }
}, 2000)

//Edit notes date/time to she the date and time and not just how long ago.
let noteTime = setInterval(() => {
  if (document.querySelectorAll(`div.note--time span:not(.done)`)) {
    const notes = document.querySelectorAll(`div.note--time span:not(.done)`)
    for (let i in notes) {
      let noteText = notes[i].textContent
      let noteDate = notes[i].getAttribute(`aria-label`)
      notes[i].textContent = `${noteText} (${noteDate})`
      notes[i].classList.add(`done`)
    }
  }
}, 2000)

//Moves Customer Fields Section to the top right instead of bottom left.
let moveAccountCustomFieldsDiv = setInterval(() => {
  if (document.querySelector(`#router--wrapper > div.page--layout div.col-xs-12.col-lg-7 > div:nth-child(6)`)) {
    const customFields = document.querySelector(`#router--wrapper > div.page--layout div.col-xs-12.col-lg-7 > div:nth-child(6)`)
    const row = customFields.parentElement.parentElement
    const scheduledEvents = row.children[1].children[1]
    row.children[1].insertBefore(customFields, scheduledEvents)
    customFields.classList.add('done')
      
  }
}, 2000)


//Used for radius history table
function diff_minutes(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  var total_mins = Math.abs(Math.round(diff));

  if (total_mins > 1440) {
    var days = Math.floor((total_mins / 1440));
    var hrs = Math.floor((total_mins - (days * 1440)) / 60);
    var mins = Math.floor(total_mins - ((days * 1440) + (hrs * 60)));
    time = days + "d" + hrs + "h" + mins + "m";

  } else if (total_mins > 60) {
    var hrs = Math.floor((total_mins / 60)) ;
    var mins = Math.floor(total_mins - ( hrs * 60 ));
    time = hrs + "h" + mins + "m";

  } else {
    var time = total_mins + "m";
  }
  return time;
}

function hasNumbers(str) {
  let string1 = String(str);
  for (let i in string1) {
    if (!isNaN(string1.charAt(i)) && !(string1.charAt(i) === " ")) {
      return true;
    }
  }
  return false;
}