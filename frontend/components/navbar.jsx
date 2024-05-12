import * as React from "react";

function Navbar() {
  return (
    <div className="flex gap-5 justify-between py-3 pr-20 pl-9 bg-red-800 max-md:flex-wrap max-md:px-5 max-sm:pr-4">
      <img
          loading="lazy"
          src="/assets/logo.png"
          alt="Logo"
          className="max-w-full aspect-[4.55] w-[180px]"
      />
      <div className="flex gap-4 mx-auto max-md:flex-wrap">
      <form className="flex gap-0 max-md:flex-wrap">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-amber-100 border border-solid border-red-800 border-opacity-0 h-[40px] w-[500px] max-sm:h-[35px] max-sm:w-[235px] focus:outline-none px-4"
        />
        <button type="submit">
          <img
            loading="lazy"
            src="/assets/search.png"
            alt="Search"
            className="w-10 border border-solid  bg-rb-beige border-red-800 border-opacity-0 max-sm:w-9"
          />
        </button>
      </form>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/edcf1860700335d1b876d81340d06f4d167879a4a1957f785d660b92ed3b46b8?"
          className="shrink-0 my-auto aspect-[1.37] fill-white w-[40px] max-sm:w-10"
        />
      </div>
    </div>
  );
}

export default Navbar;