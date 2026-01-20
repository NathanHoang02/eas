const container = document.getElementById('container')

const headerTitle = document.createElement('h1')

const btnCreateNewGrid = document.createElement('button')

const btnResetGrid = document.createElement('button')

const btnContainer = document.createElement('div')

const gridContainer = document.createElement('div')

const gridItemSize = 580

const colorPallets = ['blue','navy','purple','lightblue']

let gridNumber = 20

let gridSize = gridItemSize / gridNumber

headerTitle.setAttribute('class','title')

gridContainer.setAttribute('class','gridContainer')

btnContainer.setAttribute('class','btnContainer')

headerTitle.innerText='Etch A Sketch'

btnCreateNewGrid.textContent='New Grid'

btnResetGrid.textContent='Reset Grid'

container.append(headerTitle, btnCreateNewGrid, btnResetGrid, gridContainer)

gridContainer.style.width=`${gridItemSize}px`

gridContainer.style.height=`${gridItemSize}px`

btnCreateNewGrid.addEventListener('click', ()=>newGridHandler())

btnResetGrid.addEventListener('click', ()=>btnResetGridColor())

btnContainer.append(btnCreateNewGrid, btnResetGrid)

container.append(headerTitle, btnContainer, gridContainer)

updateNewGrid(gridNumber, gridSize)

function updateNewGrid(gridNumber, gridSize)
{
   clearGrid() 
}

function newGridHandler()
{
    let newGrid = parseInt(prompt('Enter a new value between 1 - 100:'))
    if(isNaN(newGrid))
        {
            alert('ERROR! Invalid number. \nPlease try again!')
            newGridHandler()
        }
    else 
        {
            if(newGrid > 100)
                {
                    alert('It cannot be higher than 100. \nPlease try again.')
                    newGridHandler()
                }
            else 
                {
                    updateNewGrid(newGrid,gridItemSize / newGrid)
                }
        }
        
}

for (let index = 0; index < (gridNumber * gridNumber); index++) 
    {
        const gridBox = document.createElement('div')
        gridBox.style.width = `${gridSize}px`
        gridBox.style.height = `${gridSize}px`
        gridBox.style.boxShadow = '0 0 0px 0.5px black' 
        gridBox.addEventListener('pointerenter',()=>
        {
        gridBox.style.backgroundColor= colorPallets[Math.floor(Math.random()*colorPallets.length)]
        })
        gridBox.addEventListener('mouseenter',()=>
        {
            gridBox.style.backgroundColor= colorPallets[Math.floor(Math.random()*colorPallets.length)]
        })
        gridBox.addEventListener('touchstart',()=>
        {
            gridBox.style.backgroundColor= colorPallets[Math.floor(Math.random()*colorPallets.length)]
        })
        gridContainer.append(gridBox)
    }


function clearGrid()
{
    gridContainer.replaceChildren()
}

function resetGridColor()
{
    let gridChildren = gridContainer.childNodes

    gridChildren.forEach(child=>child.style.background='transparent')
}

