import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function PhotoSection() {
  return (
    <section className="flex gap-5 pt-1 pr-20 pb-5 pl-8 w-full bg-red-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86bf6b179c895fcfd7c9f7419902d7c3bfc19eaf97ef44d4792ebd58a4fe093f?apiKey=7a756a63a9f44e489954adfab0cbb893&"
        alt=""
        className="shrink-0 self-start mt-1.5 max-w-full aspect-[3.23] w-[167px]"
      />
      <div className="flex gap-4 max-md:flex-wrap">
        <div className="flex flex-auto gap-0 max-md:flex-wrap">
          <div className="shrink-0 max-w-full bg-amber-100 border border-solid border-red-800 border-opacity-0 h-[57px] w-[527px] max-sm:w-[279px]" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/316ec547f5880c076ff914d8945b7fd53711fc43466bba9eedab63e14ac867c3?apiKey=7a756a63a9f44e489954adfab0cbb893&"
            alt=""
            className="shrink-0 w-14 border border-solid aspect-[0.98] border-red-800 border-opacity-0"
          />
        </div>
      </div>
    </section>
  );
}

function MainSection() {
  return (
    <main className="self-center max-md:max-w-full max-sm:flex max-sm:flex-col max-sm:self-center">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40f8d2232269fb1d70cc1884649dc95792ad238adfbf6dc3979f3ecaea100c10?apiKey=7a756a63a9f44e489954adfab0cbb893&"
            className="object-cover overflow-hidden grow justify-center items-end px-16 pt-20 mr-auto aspect-[1.04] object-[top_left] w-[167px] max-md:mt-2 max-sm:mx-auto max-sm:w-full max-sm:max-w-[196px]"
          />
        </div>
        <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
          <h1 className="justify-center self-stretch px-5 my-auto text-5xl leading-4 text-slate-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Michael Smith
          </h1>
        </div>
      </div>
    </main>
  );
}

function FormSection() {
  return (
    <section className="flex flex-col self-center pt-2.5 pb-20 mt-8 ml-2 max-w-full bg-white bg-opacity-80 rounded-[40px] w-[539px]">
      <div className="flex flex-col px-11 mx-auto mt-5 mb-2.5 w-full text-base text-black grow-0 min-h-[200px] max-md:px-5 max-md:max-w-full">
        <label for="newUsername" className="mr-auto max-md:max-w-full">
          New username
        </label>
        <input
          id="newUsername"
          aria-label="Type your new username"
          placeholder="Type your new username"
          className="justify-center items-start px-6 py-6 mt-6 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full"
        />
        <label for="newPassword" className="mt-5 max-md:max-w-full">
          New Password
        </label>
        <input
          id="newPassword"
          aria-label="Type your new password"
          placeholder="Type your new password"
          type="password"
          className="justify-center items-start px-6 py-6 mt-6 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full"
        />
      </div>
    </section>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col pb-8 bg-white">
      <PhotoSection />
      <MainSection />
      <button
        className="box-border relative shrink-0 self-center py-4 pr-6 pl-6 mt-5 w-auto text-center bg-red-700 rounded appearance-none cursor-pointer text-[white]"
        tabIndex="0"
      >
        Change Photo
      </button>
      <FormSection />
    </div>
  );
}