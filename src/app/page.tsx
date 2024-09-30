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
  const [theme, setTheme] = useState("theme_one");
  function setThemeHandler(e : any){
    setTheme(`theme_${e.target.id}`)
  }

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  const numClickHandler = (e : any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (calc.num.toString.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num.toString().includes(".")
            ? calc.num + value
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };
  const commaClickHandler = (e : any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });

  };
  const signClickHandler = (e : any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };
  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a : number, b : number, sign : string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;
  
      setCalc({
        ...calc,
        res:
          calc.num === 0 && calc.sign === "/"
            ? 0
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  };
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };
  const deleteHandler = () => {
    setCalc({
      ...calc,
      res : parseInt((calc.res / (calc.res.toString.length * 10)).toString()),
      num : parseInt((calc.num / (calc.num.toString.length * 10)).toString())
    })
  }
  return (
    <>
      <main className={`${theme} bg-main_background h-screen w-screen grid place-content-center`}>
        <div className="max-w-md md:w-[960px] w-[90vw] mx-auto">
            <div className="flex items-end justify-between">
                <h1 className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-3xl`}>calc</h1>
                <div className="flex items-end space-x-5">
                  <p className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-xs tracking-widest`}>THEME</p>
                  <div>
                    <div className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-sm space-x-4 px-2`}>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                    <div className="switch-toggle space-x-1 switch-3 switch-candy">
                      <input id="one" name="theme" type="radio" onClick={setThemeHandler} checked={(theme == "theme_one" ? true : false)} onChange={()=>{}}/>
                      <label htmlFor="on"></label>

                      <input id="two" name="theme" type="radio" onClick={setThemeHandler} checked={(theme == "theme_two" ? true : false)} onChange={()=>{}}/>
                      <label htmlFor="na" ></label>

                      <input id="three" name="theme" type="radio" onClick={setThemeHandler} checked={(theme == "theme_three" ? true : false)} onChange={()=>{}}/>
                      <label htmlFor="off"></label>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bg-screen_background mt-6 rounded-lg flex items-center md:py-8 py-5 px-7 justify-end">
              <p className={`${theme == "theme_one" ? "text-text-two" : "text-text"} font-LeagueSpartan text-5xl overflow-hidden`}>{calc.num ? calc.num : calc.res}</p>
            </div>
            <div className="grid grid-cols-4 md:gap-5 gap-3 bg-keypad_background md:p-7 p-5 mt-5 rounded-lg">
              {
                btnValues.map((btn , i) => {
                  return (
                    <Button key={i} className={(btn == "DEL") ? "font-LeagueSpartan md:text-2xl text-xl text-text-two bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center  hover:brightness-125 hover:cursor-pointer" : 
                      (btn == "RESET") ? "font-LeagueSpartan md:text-2xl text-xl text-text-two bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center col-span-2  hover:brightness-125 hover:cursor-pointer" :
                      (btn == "=") ? "font-LeagueSpartan text-[32px] text-text-two bg-key-equal-btn rounded-lg border-b-4 border-b-key-equal-btn-shadow flex justify-center col-span-2  hover:brightness-125 hover:cursor-pointer" :
                      "font-LeagueSpartan text-[32px] text-text bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center  hover:brightness-[1.15] hover:cursor-pointer"} value={btn} 
                      onClick={
                        btn == "RESET"
                        ? resetClickHandler
                        : btn == "="
                        ? equalsClickHandler
                        : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                        ? signClickHandler 
                        : btn === "."
                        ? commaClickHandler
                        : btn == "DEL"
                        ? deleteHandler
                        : numClickHandler
                      }/>
                  )
                })
              }
            </div>
        </div>
      </main>
    </>
  );
}
