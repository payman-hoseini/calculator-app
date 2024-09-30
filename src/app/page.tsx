'use client'

import { useState } from "react";
import Button from "./components/button";

const btnValues = [
    "7","8","9","DEL",
    "4","5","6","+",
    "1","2","3","-",
    ".","0","/","x",
    "RESET" , "="
]

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
                      <input id="one" name="theme" type="radio" onClick={setThemeHandler} checked={(theme == "theme_one" ? true : false)}/>
                      <label htmlFor="on"></label>

                      <input id="two" name="theme" type="radio" onClick={setThemeHandler} checked={(theme == "theme_two" ? true : false)}/>
                      <label htmlFor="na" ></label>

                      <input id="three" name="theme" type="radio" onClick={setThemeHandler} checked={(theme == "theme_three" ? true : false)}/>
                      <label htmlFor="off"></label>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bg-screen_background mt-6 rounded-lg flex items-center py-8 px-7 justify-end">
              <p className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-5xl right-7`}>399,981</p>
            </div>
            <div className="grid grid-cols-4 gap-5 bg-keypad_background p-7 mt-5 rounded-lg">
              {
                btnValues.map((btn , i) => {
                  return (
                    <Button key={i} className={(btn == "DEL") ? "font-LeagueSpartan text-2xl text-text-two bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center  hover:brightness-125 hover:cursor-pointer" : 
                      (btn == "RESET") ? "font-LeagueSpartan text-2xl text-text-two bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center col-span-2  hover:brightness-125 hover:cursor-pointer" :
                      (btn == "=") ? "font-LeagueSpartan text-[32px] text-text-two bg-key-equal-btn rounded-lg border-b-4 border-b-key-equal-btn-shadow flex justify-center col-span-2  hover:brightness-125 hover:cursor-pointer" :
                      "font-LeagueSpartan text-[32px] text-text bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer"} value={btn} 
                      onClick={()=> {}}/>
                  )
                })
              }
            </div>
        </div>
      </main>
    </>
  );
}
