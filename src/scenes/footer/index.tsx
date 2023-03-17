import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">  
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            It's not fitness. It's life.
          </p>
          <p>© Evogym all rights reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About</p>
          <p className="my-5">Careers</p>
          <p className="my-5">Member Polices</p>
        </div>
        <div>
        <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">69 Prince Street</p>
          <p>New York, NY</p>
          <p>69 Prince Street 10012</p>
          <p>(212) 334-4631</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;