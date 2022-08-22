export default function Menu(){

  const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
  }, {});

  const images = importAll(
    require.context("./img", false, /\.(png|jpe?g|svg)$/)
  );

  //dom reference
  const content = document.querySelector('.content');
  const menu = document.createElement('div');
  menu.classList.add('menu-container')
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');
  const menuText = document.createElement('div');
  menuText.classList.add('menu-text');


  //add element content
  menuText.textContent = 'MENU'

  //add menu items
  for(let [key, value] of Object.entries(images)){
    const item = document.createElement('div');
    item.classList.add('item');
    const itemImage = document.createElement('img');
    itemImage.src = value;
    const itemDesc = document.createElement('div');
    itemDesc.classList.add('item-desc');
    item.append(itemImage, itemDesc);
    menuContent.append(item);
  }

  //add to dom
  menu.append(menuText, menuContent);
  content.append(menu);
}