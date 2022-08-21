import Logo from './logo.png';

export default function PageLoad(){
  //dom reference
  const content =  document.querySelector('.content');
  const headline = document.createElement('div');
  headline.classList.add('headline');
  const logo = document.createElement('img');
  logo.classList.add('logo');
  const desc = document.createElement('div');
  desc.classList.add('desc');
  const headText = document.createElement('div');
  headText.classList.add('headtext');

  //add element to dom
  headText.textContent = 'Pinetrant';
  logo.src = Logo;
  desc.textContent = `Pinetrant Restaurant is so famous for it special pineapples
    which we serve for all customers at the end of every meal.
    It's one of the best place to have fun with friends on vacations. `;

  headline.append(logo, headText);
  content.append(headline, desc);

};