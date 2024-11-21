var containerdiv=document.getElementById("container")
// containerdiv.textContent="sumanth"
var maindiv=document.createElement("div")
containerdiv.appendChild(maindiv)
 var imgtag=document.createElement("img")
 imgtag.setAttribute("src","https://images.unsplash.com/photo-1484788984921-03950022c9ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww")
 imgtag.style.borderRadius="100px"
 imgtag.style.width="150px"
 maindiv.appendChild(imgtag)
var ptag=document.createElement("p")
ptag.textContent="laptop"
maindiv.appendChild(ptag)
var spantag=document.createElement("button")
ptag.appendChild(spantag)
spantag.textContent="BUY NOW"
containerdiv.style.border="3px solid black"
containerdiv.style.width="180px"
containerdiv.style.padding="40px"
containerdiv.style.borderRadius="40px"