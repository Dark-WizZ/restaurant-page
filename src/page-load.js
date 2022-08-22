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
  const descText = document.createElement('div');



  //add element content
  headText.textContent = 'Pinetrant';
  logo.src = Logo;
  descText.textContent = 
      `--tab Pinetrant Restaurant is so famous for it's special pineapples
      which we serve for all customers at the end of every meal.
      It's one of the best place to have fun with friends on vacations.
      Please visit our menu page we have delicious items just for you.
      Don't let it cool. Grab your's at our restaurant.
      `;
    descText.innerHTML = descText.innerHTML.replace(/--br\r?/g, '<br />');
    descText.innerHTML = descText.innerHTML.replace(/--tab\r?/g, '&emsp;');


  //add to dom
  desc.append(descText);
  headline.append(logo, headText);
  content.append(headline, desc);

};