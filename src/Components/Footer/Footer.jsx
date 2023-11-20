import logo from '../../assets/download (1).png'

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img className='w-36' src={logo} alt="" />
                    <h1 className='text-3xl font-bold font-serif'>Zip Dine Discover</h1>
                    <p className='text-xl font-semibold'>Since 1989</p>
                </div>
                <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
            </div>
            <div className="p-4 footer-center bg-base-300 text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by ZIP DINE DISCOVER Ltd</p>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;