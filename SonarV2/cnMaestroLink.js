// NEEDS EDITING IF USED
// Item has to have PMP in the modal name
// IP needs to be assigned to the Ethernet of an ePMP
// IP needs to be assigned to bridge of PMP 450
// If your using cnmaestro this will take mac and make a link to radio/cpe/ap directly

// let cnM = setInterval(() => {
//  //EDIT URL
//  let cnM_SM_URL = `https://[your_cnmaestro_instance]/#/0/home-view/`
//  if (document.querySelector(".ipAssignmentsEntity--wrapper div.displayModel .display--inventoryItem--line:not(.done)")) {
//     const assigneeMACs = document.querySelectorAll(".ipAssignmentsEntity--wrapper div.displayModel .display--inventoryItem--line:not(.done)")
//     for (const i in assigneeMACs) {
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