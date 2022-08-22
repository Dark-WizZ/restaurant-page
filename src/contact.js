import Logo from './logo.png';

export default function Contact(){
  //dom reference
  const content = document.querySelector('.content');
  const contactText = document.createElement('div');
  contactText.classList.add('contact-text');
  const contactContent = document.createElement('div');
  contactContent.classList.add('contact-content');
  const contactName = document.createElement('div');
  contactName.classList.add('contact-name');
  const contactNumber = document.createElement('div');
  contactNumber.classList.add('contact-number');
  const contactMail = document.createElement('div');
  contactMail.classList.add('contact-mail');
  const contactDP = document.createElement('img');
  contactDP.src = Logo;
  const conatctDetatils = document.createElement('div');
  conatctDetatils.classList.add('contact-details')

  //add element content
  contactText.textContent = 'Contact Us';
  contactName.textContent =   'Name   : The Manager';
  contactNumber.textContent = 'Number : +91 898 344 3434';
  contactMail.textContent =   'Mail   : pinetrant@pinapple.com';

  //add to dom
  conatctDetatils.append(contactName, contactNumber, contactMail)
  contactContent.append(contactDP, conatctDetatils)
  content.append(contactText, contactContent);
}