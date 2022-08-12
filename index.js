const createGridItem = (item) => {
  const {title, icon_class, variant} = item

  //div container
  const gridItem = document.createElement('div')
  gridItem.className = `grid-item ${variant}`

  //icon container 
  const gridIconContainer = document.createElement('div')
  gridIconContainer.className = 'grid-icon-container'

  //icon
  const gridIcon = document.createElement('i')
  gridIcon.className = `grid-icon ${icon_class}`

  //text
  const gridText = document.createElement('h6')
  gridText.className = 'grid-text'
  gridText.textContent = title.length > 15 ? `${title.slice(0,15)}` : title

  //join
  gridIconContainer.appendChild(gridIcon)
  gridItem.appendChild(gridText)
  gridItem.appendChild(gridIconContainer)

  return gridItem
}

const setGrid = (parentItem) => {
  fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(item => {
      parentItem.appendChild(createGridItem(item))
    })
  })
}

window.addEventListener('load', () => {
  //sample
  const grid = document.querySelector('.grid')
  setGrid(grid)
  setGrid(grid)
  setGrid(grid)
  setGrid(grid)
  setGrid(grid)
}) 