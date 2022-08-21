export default function Menu(){
  //dom reference
  const content = document.querySelector('.content');
  const menuText = document.createElement('div');
  menuText.classList.add('menu-text')

  //add element content
  menuText.textContent = 'MENU'

  //add to dom
  content.append(menuText);
}