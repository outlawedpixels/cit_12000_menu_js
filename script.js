var nav = document.body.querySelector(".nav")

var pages = 
  [
    {
     name: "Home",
     content: "Home Page",
     content2: ""
    },
    {
     name: "About",
     content: "About me",
     content2: "My name is Coleman Maxwell, and that's all you need to know."
    },
    {
      name: "Interact",
      content: "",
      content2: ""
    }  
  ]

for(var i = 0; i < pages.length; i++)
  {
    var display = document.createElement("h1")
    var display2 = document.createElement("h3")
    createPage(pages[i])
  }
function createPage(pg)
{
  var button = document.createElement("button")
  button.addEventListener("click", function()
{
  contentWrite(pg.content, pg.content2, pg.name)
})
    button.innerHTML = pg.name
    nav.appendChild(button)
  }
function contentWrite(wd, wd2, pg)
{ 
  if(pg !== "Interact")
    {
      display.innerHTML = wd
      display2.innerHTML = wd2
    }
      else
    {
      display.innerHTML = wd
      display2.innerHTML = wd2
      
      var value = document.body.querySelector(".number")
startingNumber = 5
value.innerHTML = "Counter: " +startingNumber

function increaseValue(num)
  {
   startingNumber = startingNumber + num
   
   value.innerHTML = "Counter: " +startingNumber
  }

function decreaseValue(dnum)
  {
    startingNumber = startingNumber - dnum
    
    value.innerHTML = "Counter: " +startingNumber
  }

function reset()
  {
    startingNumber = 5
    value.innerHTML = "Counter: " +startingNumber 
  }

document.body.querySelector(".increase").addEventListener("click", function()
{
  increaseValue(1)
})

document.body.querySelector(".decrease").addEventListener("click", function()
{
  decreaseValue(1) 
})

document.body.querySelector(".reset").addEventListener("click", function()
{
  reset()
})
    }
  nav.appendChild(display)
  nav.appendChild(display2)
}

contentWrite(pages[0].content, "Home")