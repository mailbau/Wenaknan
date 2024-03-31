import * as React from "react";

function FilterPopup() {
  return (
    <div className="flex flex-col px-9 pt-10 pb-4 bg-rb-lightbeige rounded-3xl max-w-[792px] max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl font-semibold text-black max-md:mt-10">
              <div>Sort By</div>
              <div className="flex gap-0 px-0.5 mt-3.5 text-base font-medium text-center whitespace-nowrap">
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  None
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
                <div className="justify-center px-6 py-3 bg-rb-lightbeige border border-solid shadow-lg border-neutral-400 max-md:px-5">
                  Distance
                </div>
              </div>
              <div className="mt-4">Rating</div>
              <div className="flex gap-0 px-0.5 mt-3.5 text-base font-medium text-center whitespace-nowrap">
                <div className="justify-center px-7 py-2.5 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Any
                </div>
                <div className="justify-center px-8 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  2+
                </div>
                <div className="justify-center px-8 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  3+
                </div>
                <div className="justify-center px-8 py-3 bg-rb-lightbeige border border-solid shadow-lg border-neutral-400 max-md:px-5">
                  4+
                </div>
              </div>
              <div className="mt-5">Hours</div>
              <div className="flex gap-0 mt-5 text-base font-medium text-center">
                <div className="justify-center px-12 py-2.5 whitespace-nowrap bg-rb-lightbeige border border-solid shadow-lg border-neutral-400 max-md:px-5">
                  Any
                </div>
                <div className="justify-center px-7 py-2.5 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Open Now
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base font-medium text-black whitespace-nowrap max-md:mt-10">
              <div className="text-xl font-semibold">Categories</div>
              <div className="flex gap-3 px-0.5 mt-3.5 text-center">
                <div className="justify-center px-6 py-3 bg-rb-lightbeige border border-solid shadow-lg border-neutral-400 max-md:px-5">
                  Seafood
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
              </div>
              <div className="flex gap-3 px-0.5 mt-4 text-center">
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
              </div>
              <div className="flex gap-3 px-0.5 mt-4 text-center">
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
                <div className="justify-center px-6 py-3 bg-rb-lightbeige border border-solid shadow-lg border-neutral-400 max-md:px-5">
                  Chinese
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
              </div>
              <div className="flex gap-3 px-0.5 mt-4 text-center">
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
                <div className="justify-center px-9 py-3 border border-solid bg-rb-beige border-neutral-400 max-md:px-5">
                  Price
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-end mt-7 text-base font-medium text-center text-white whitespace-nowrap">
        <div className="btn-primary">
          Cancel
        </div>
        <div className="btn-primary">
          Apply
        </div>
      </div>
    </div>
  );
}

export default FilterPopup;