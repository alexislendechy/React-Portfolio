const footerSections = [
  {href:  'https://www.github.com/alexislendechy'}
]

const Footer = () => {
  return (
    <footer>
      {footerSections.map((section) => (
        <a key={section.href} href={section.href}>  
        </a>
      ))}
      
    </footer>
  );
};

export default Footer;
