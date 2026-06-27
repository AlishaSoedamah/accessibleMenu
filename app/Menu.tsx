"use client";

import Button from "./Button";
import ButtonSlider from "./ButtonSlider";
import { useRef, useState, useEffect } from "react";

interface MenuProps {
  showFull: boolean;
  setShowFull: (val: boolean) => void;
}

declare module "react" {
  interface HTMLAttributes<T> {
    popover?: "" | "auto" | "manual" | "hint";
    popovertarget?: string;
    popovertargetaction?: "hide" | "show" | "toggle";
  }
}

const handleStyle = (property: keyof Omit<CSSStyleDeclaration, "length" | "parentRule">) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    (document.documentElement.style as any)[property] = e.target.value + "px";
  };

const handleFilter = (filter: string) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.filter = `${filter}(${e.target.value}%)`;
  };

export default function Menu({ showFull, setShowFull }: MenuProps) {
    const sliderLetterBig = useRef<HTMLInputElement>(null);
    const sliderLineHeight = useRef<HTMLInputElement>(null);
    const sliderSpacing = useRef<HTMLInputElement>(null);
    const [cursorSize, setCursorSize] = useState(24)
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
    const [cursorVisible, setCursorVisible] = useState(false)


  const toggleBorders = () => {
    const root = document.documentElement;
    const current = getComputedStyle(root).getPropertyValue("--border-toggle").trim();
    root.style.setProperty(
      "--border-toggle",
      current === "none" ? "3px solid var(--high-contrast)" : "none"
    );
  };

  const toggleHighContrast = () => {
    document.documentElement.classList.toggle("highcontrast");
  };

  const toggleChangeFont = () => {
    document.documentElement.classList.toggle("alt-font");
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY })
        setCursorVisible(true)
    }
    const hide = () => setCursorVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    return () => {
        window.removeEventListener('mousemove', move)
        window.removeEventListener('mouseleave', hide)
    }
}, [])

  return (
    <>
    {cursorVisible && (
      <div style={{
        position: 'fixed',
        left: cursorPos.x,
        top: cursorPos.y,
        width: cursorSize,
        height: cursorSize,
        borderRadius: '50%',
        background: 'var(--high-contrast)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }} />
    )}
    <button popoverTarget="mypopover">Open het toegankelijkheidsmenu</button>
    <header id="mypopover" popover="auto" className="fixed left-0 right-0 top-0 bg-black">
        <nav>
          <ul role="list">
            <li>
              <button
                onClick={() => setShowFull(!showFull)}
                className="w-full cursor-pointer text-white font-bold hover:bg-black-700 border-solid border-2 border-white-500"
              >
                {showFull ? "Korte tekst" : "Volledige tekst"}
              </button>
            </li>
            <Button btnId="hoogContrast" name="Hoog contrast" onClick={toggleHighContrast} />
            <Button btnId="borders" name="Borders" onClick={toggleBorders} />
            <Button btnId="customFont" name="Custom lettertype" onClick={toggleChangeFont} />
            <ButtonSlider min={"16"} max={"30"} initValue={"16"} ref={sliderLetterBig} id="letterBig" name="Letter grote" onChange={handleStyle("fontSize")} />
            <ButtonSlider min={"20"} max={"50"} initValue={"20"} ref={sliderLineHeight} id="lineHeight" name="Line Height" onChange={handleStyle("lineHeight")} />
            <ButtonSlider min={"0"} max={"20"} initValue={"0"} ref={sliderSpacing} id="lineSpacing" name="Line Spacing" onChange={handleStyle("letterSpacing")} />
            <ButtonSlider min={"0"} max={"100"} initValue={"100"} id="saturation" name="Saturate" onChange={handleFilter("saturate")} />
            <ButtonSlider min={"0"} max={"100"} initValue={"24"} id="cursorSize" name="Cursor grote" onChange={(e) => setCursorSize(Number(e.target.value))}/>
            <li>
              <button className="w-full cursor-pointer bg-red hover:bg-pink-100 text-white font-bold">
                Reset
              </button>
            </li>
          </ul>
        </nav>
    </header>
    </>
  );
}