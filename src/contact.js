export default function Contact(){
  //dom reference
  const content = document.querySelector('.content');
  const contactText = document.createElement('div');
  contactText.classList.add('contact-text');

  //add element content
  contactText.textContent = 'Contact'

  //add to dom
  content.append(contactText);
}