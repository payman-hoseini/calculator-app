

export default function Home() {
  return (
    <>
      <main className="theme_one bg-main_background h-screen w-screen grid place-content-center">
        <div className="max-w-md w-[960px] mx-auto">
            <div className="flex items-end justify-between">
                <h1 className="text-text-two font-LeagueSpartan text-3xl">calc</h1>
                <div className="flex items-end space-x-5">
                  <p className="font-LeagueSpartan text-text-two text-xs">THEME</p>
                  <div>
                    <div className="font-LeagueSpartan text-text-two text-sm space-x-4 px-2">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                    <div className="switch-toggle space-x-1 switch-3 switch-candy">
                      <input id="on" name="state-d" type="radio" />
                      <label htmlFor="on"></label>

                      <input id="na" name="state-d" type="radio" />
                      <label htmlFor="na" ></label>

                      <input id="off" name="state-d" type="radio" />
                      <label htmlFor="off"></label>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bg-screen_background mt-6 rounded-lg flex items-center py-12 relative">
              <p className="text-text-two font-LeagueSpartan text-5xl right-7 absolute">399,981</p>
            </div>
            <div className="grid grid-cols-4 gap-5 bg-keypad_background p-7 mt-5 rounded-lg">
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">7</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">8</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">9</p>
              </div>
              <div className="bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center">
                <p className="font-LeagueSpartan text-2xl text-text-two">DEL</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">4</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">5</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">6</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">+</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">1</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">2</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">3</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">-</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">.</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">0</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">/</p>
              </div>
              <div className="bg-key-active-back rounded-lg border-b-4 border-b-key-active-shadow flex justify-center">
                <p className="font-LeagueSpartan text-[32px] text-text">x</p>
              </div>
              <div className="bg-key_background rounded-lg border-b-4 border-b-key_shadow flex justify-center items-center col-span-2">
                <p className="font-LeagueSpartan text-2xl text-text-two">RESET</p>
              </div>
              <div className="bg-key-equal-btn rounded-lg border-b-4 border-b-key-equal-btn-shadow flex justify-center col-span-2">
                <p className="font-LeagueSpartan text-[32px] text-text-two">=</p>
              </div>
            </div>
        </div>
      </main>
    </>
  );
}
