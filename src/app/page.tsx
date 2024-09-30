'use client'

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("theme_one")

  function setThemeHandler(e : any){
    setTheme(`theme_${e.target.id}`)
  }
  return (
    <>
      <main className={`${theme} bg-main_background h-screen w-screen grid place-content-center`}>
        <div className="max-w-md w-[960px] mx-auto">
            <div className="flex items-end justify-between">
                <h1 className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-3xl`}>calc</h1>
                <div className="flex items-end space-x-5">
                  <p className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-xs`}>THEME</p>
                  <div>
                    <div className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-sm space-x-4 px-2`}>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                    <div className="switch-toggle space-x-1 switch-3 switch-candy">
                      <input id="one" name="theme" type="radio" onClick={setThemeHandler}/>
                      <label htmlFor="on"></label>

                      <input id="two" name="theme" type="radio" onClick={setThemeHandler}/>
                      <label htmlFor="na" ></label>

                      <input id="three" name="theme" type="radio" onClick={setThemeHandler}/>
                      <label htmlFor="off"></label>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bg-screen_background mt-6 rounded-lg flex items-center py-12 relative">
              <p className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-5xl right-7 absolute`}>399,981</p>
            </div>
            <div className="grid grid-cols-4 gap-5 bg-keypad_background p-7 mt-5 rounded-lg">
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">7</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">8</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">9</p>
              </div>
              <div className="bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center  hover:brightness-125 hover:cursor-pointer">
                <p className="font-LeagueSpartan text-2xl text-text-two">DEL</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">4</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">5</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">6</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">+</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">1</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">2</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">3</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">-</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">.</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">0</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">/</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text">x</p>
              </div>
              <div className="bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center col-span-2  hover:brightness-125 hover:cursor-pointer">
                <p className="font-LeagueSpartan text-2xl text-text-two">RESET</p>
              </div>
              <div className="bg-key-equal-btn rounded-lg border-b-4 border-b-key-equal-btn-shadow flex justify-center col-span-2  hover:brightness-125 hover:cursor-pointer">
                <p className="font-LeagueSpartan text-[32px] text-text-two">=</p>
              </div>
            </div>
        </div>
      </main>
    </>
  );
}
