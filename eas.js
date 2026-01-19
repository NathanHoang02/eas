const container = document.getElementById('container')

const headerTitle = document.createElement('h1')

const btnCreateNewGrid = document.createElement('button')
const btnResetGrid = document.createElement('button')

const gridContainer = document.createElement('div')

const gridItemSize = 580

let gridNumber = 20

let gridSize = gridItemSize / gridNumber

headerTitle.setAttribute('class','title')

gridContainer.setAttribute('class','gridContainer')

headerTitle.innerText='Etch A Sketch'

btnCreateNewGrid.textContent='New Grid'

btnResetGrid.textContent='Reset Grid'

container.append(headerTitle, btnCreateNewGrid, btnResetGrid, gridContainer)

gridContainer.style.width=`${gridItemSize}px`

gridContainer.style.height=`${gridItemSize}px`

for (let index = 0; index < (gridNumber * gridNumber); index++) 
    {
        const gridBox = document.createElement('div')
        gridBox.style.width = `${gridSize}px`
        gridBox.style.height = `${gridSize}px`
        gridBox.style.boxShadow = '0 0 0px 0.5px black'
        gridContainer.append(gridBox)
    }
