//change style that can not via css
setTimeout(() => {
  const root = document.querySelector(':root');
  const html = document.querySelector('html');
  root.style.setProperty('font-size', '14px')
  root.style.setProperty('--text--size--small', '0.85rem')
  root.style.setProperty('--text--size--h6', '0.85rem')
  root.style.setProperty('--ui--small--padding', '0.3rem')
  root.style.setProperty('--ui--basePadding', '0.4rem')
  root.style.setProperty('--ui--big--padding', '0.6rem')
  root.style.setProperty('--ui--large--padding', '0.8rem')
  root.style.setProperty('--ui--xlarge--padding', '1rem')
  root.style.setProperty('--ui--animation--baseSpeed', '.1s')
  root.style.setProperty('--gutter', '1rem')
  html.style.setProperty('font-familty', 'Roboto,Ubuntu,Fira sans-serif;')
  html.style.setProperty('--input--height', '2.1rem')
  html.style.setProperty('--input--height--small', '1.6rem')
}, 0)

//Add notepad to the bottom right that data is save via browser local storage
setTimeout(() => {
  const notesWrapper = `
<div class="keep--notes--wrapper">
<textarea class="note-body"></textarea>
  <button type='button' class='note-header'>${notes_svg}</button>
</div>
`
  document.querySelector("html").innerHTML += notesWrapper
  document.querySelector("button.note-header").addEventListener("click", () => {
    document.querySelector("textarea.note-body").classList.toggle("display")
  })
  let saved = localStorage.keepNotesText;
  if (saved) document.querySelector("textarea.note-body").value = saved;
  document.querySelector("textarea.note-body").addEventListener("input", () => {
    let keeperTextarea = document.querySelector("textarea.note-body")
    let start = keeperTextarea.selectionStart
    let end = keeperTextarea.selectionEnd
    let val = keeperTextarea.value
    localStorage.setItem('keepNotesText', val)
    this.setSelectionRange(start, end)
  })
}, 0)

//clear logs every minute
setInterval(() => { console.clear() }, 60000)

//spice loading screen up
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

//add Adresses to a link in the nav box
let navigatorBar = setInterval(() => {

  if (document.querySelector(`.app--navigation`)) {
    const navBar = document.querySelector(`.app--navigation:not(.done)`)
    navBar.classList.add(`done`)
    const menuItems = document.querySelector(`.app--navigation .groups .items`)
    menuItems.children[8].remove()
    const billingLink = menuItems.children[1]
    const settingsLink = menuItems.children[12]

    const addressLink = `
    <div class="item">
    <a href="#/accounts/" class="">
    <div class="navIcon icon icon-accounts icon--type--navigation">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="12" cy="10" r="4" class="icon-quaternary"></circle><path class="icon-primary" d="M14.97552,12.65015C14.24292,13.47217,13.18774,14,12,14c-1.18762,0-2.24274-0.52771-2.97534-1.34961C6.62628,13.61182,4.80951,15.68524,4.21002,18.25C6.10425,20.61591,8.96924,21.99506,12,22c3.03076-0.00494,5.89575-1.38409,7.78998-3.75C19.17303,15.61072,17.31287,13.58978,14.97552,12.65015z"></path><path class="icon-tertiary" d="M9.02466,12.65039C8.39453,11.94348,8,11.02155,8,10c0-2.20917,1.79083-4,4-4s4,1.79083,4,4c0,1.02142-0.39447,1.94324-1.02448,2.65015c2.33069,0.93695,4.18561,2.94965,4.80786,5.57794c1.37164-1.70923,2.19659-3.8761,2.19659-6.2381c0-5.51178-4.4682-9.97998-9.97998-9.97998s-9.97998,4.4682-9.97998,9.97998c0,2.362,0.82495,4.52881,2.19659,6.23804C4.82141,15.67371,6.6333,13.60901,9.02466,12.65039z"></path></svg>
    </div> 
    <div class="navLabel">Accounts</div>
    </a>
    </div>
    `
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

//change user avatar icon on top right
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

//I dont remember what this is for....
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

//if links are from v1. will edit to make it v2
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

//add clipboard icon to the right of account number and click to copy the number
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

//edit layout od scheduling dispatcher view. Auto hides que and map and zooms to schedule timeline in 2 clicks
let scheduleHiddenMenus = setInterval(() => {
  if (document.querySelector("div.scheduleBody > div.map > button:not(.done)")) {
    const hideMap = document.querySelector("div.scheduleBody > div.map > button:not(.done)")
    hideMap.classList.add("done")
    hideMap.click()
    const hideJobs = document.querySelector("div.queueToggle > button:not(.done)")
    hideJobs.click()
  }
}, 3000)

let scheduleTimelineResize = setInterval(() => {
  const timelineSize = document.querySelector("#router--wrapper > div.page--layout > div > div > div.content.context--fixedLayout.context--scheduling > div > div > div.scheduleBody > div.calendar > div.body--wrapper > div.body > div.schedule--row.schedule--hours:not(.done)")
  timelineSize.classList.add("done")
  if (timelineSize.style.width == "3130px") {
    const zoomIn = document.querySelector("#router--wrapper > div.page--layout > div > div > div.content.context--fixedLayout.context--scheduling > div > div > div.scheduleBody > div.calendar > div.header > div.users > div.-zoom > button:nth-child(1)")
    zoomIn.click()
    zoomIn.click()
  }
}, 3000)

//Added copy button next to phone numbers and removed being able to click to call from computer.
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

//hides radius id and nas and calculates the time between starts and ends.
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

//reformats the layout of tickets
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

// // NEEDS EDITING IF USED
// // Item has to have PMP in the modal name
// // if your using cnmaestro this will take mac and make a link to radio/cpe/ap directly
// let cnM = setInterval(() => {
//   if (document.querySelector(".ipAssignmentsEntity--wrapper div.displayModel .display--inventoryItem--line:not(.done)")) {
//     const assigneeMACs = document.querySelectorAll(".ipAssignmentsEntity--wrapper div.displayModel .display--inventoryItem--line:not(.done)")
//     for (const i in assigneeMACs) {
//       //EDIT URL
//       let cnM_SM_URL = `https://[your_cnmaestro_instance]/#/0/home-view/`
//       let correctMAC = assigneeMACs[i].parentElement.parentElement.children[0].textContent
//       correctMAC = correctMAC.replace(/\s+/,"")
//       correctMAC = correctMAC.replace(/\s+/,"")
//       let e = assigneeMACs[i]
//       let text = e.textContent
//       let m = text.split(":")
//       let mac = `${m[0].substr(-2)}:${m[1]}:${m[2]}:${m[3]}:${m[4]}:${m[5].substr(0,2)}`
//       mac = correctMAC
//       if (text.includes("PMP100")) {
//         continue
//       }
//       if (text.includes("AP")) {
//        cnM_SM_URL += `ap/ap=mac@`
//       } else { 
//         cnM_SM_URL += `sm/sm=mac@`
//       }
      
//       if (text.includes("PMP")) {
//         e.children[1].innerHTML = ` 
//         <a href="${cnM_SM_URL}${mac}/dashboard/" target='cnM' style="font-weight:bold;font-size:1rem !important;">
//         ${cnm_svg} 
//         ${text}
//         </a>
//         `
//       }
//       e.classList.add("done")     
//     }
//   }
  
  

// }, 3000)

//User for radius history table
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