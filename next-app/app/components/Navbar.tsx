const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-800 flex justify-evenly p-4 ">
        <div>
          <a href="/">
            <span className="text-base text-white">Home</span>
          </a>
        </div>
        <div>
          <a href="/about">
            <span className="text-base text-white">About</span>
          </a>
        </div>
        <div>
          <a href="/contact">
            <span className="text-base text-white">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
