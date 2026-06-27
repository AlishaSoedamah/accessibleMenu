"use client";
import Button from "./Button";
import ButtonSlider from "./ButtonSlider";
import { useRef, useState, useEffect } from "react";

interface MenuProps {
    showFull: boolean;
    setShowFull: (val: boolean) => void;
    onReset: () => void;
};

declare module "react" {
  interface HTMLAttributes<T> {
    popover?: "" | "auto" | "manual" | "hint";
    popovertarget?: string;
    popovertargetaction?: "hide" | "show" | "toggle";
  }
};

const handleStyle = (property: keyof Omit<CSSStyleDeclaration, "length" | "parentRule">) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    (document.documentElement.style as any)[property] = e.target.value + "px";
};

const applyFilters = (invert: boolean, sat: number) => {
  document.documentElement.style.filter = `invert(${invert ? 1 : 0}) saturate(${sat}%)`;
};

export default function Menu({ showFull, setShowFull, onReset }: MenuProps) {
    const sliderLetterBig = useRef<HTMLInputElement>(null);
    const sliderLineHeight = useRef<HTMLInputElement>(null);
    const sliderSpacing = useRef<HTMLInputElement>(null);
    const popoverRef = useRef<HTMLElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const [inverted, setInverted] = useState(false);
    const [saturation, setSaturation] = useState(100);
    const [cursorSize, setCursorSize] = useState(26)
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
    const [cursorVisible, setCursorVisible] = useState(false)
    const cursorSrc = "/accessibleMenu/images/cursor.svg"

    const handleReset = () => {
        document.documentElement.style.fontSize = "";
        document.documentElement.style.lineHeight = "";
        document.documentElement.style.letterSpacing = "";
        document.documentElement.style.filter = "";
        document.documentElement.style.removeProperty("--border-toggle");
        document.documentElement.classList.remove("highcontrast");
        document.documentElement.classList.remove("alt-font");
        setCursorSize(Number("24"));
        setInverted(false);
        setSaturation(100);
        if (sliderLetterBig.current) sliderLetterBig.current.value = "10";
        if (sliderLineHeight.current) sliderLineHeight.current.value = "20";
        if (sliderSpacing.current) sliderSpacing.current.value = "0";
        onReset();
    };

    const toggleInvert = () => {
        const newInverted = !inverted;
        setInverted(newInverted);
        applyFilters(newInverted, saturation);
    };

    const handleSaturation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setSaturation(val);
        applyFilters(inverted, val);
    };

    const toggleBorders = () => {
        const root = document.documentElement;
        const current = getComputedStyle(root).getPropertyValue("--border-toggle").trim();
        root.style.setProperty(
            "--border-toggle", current === "none" ? "3px solid var(--high-contrast)" : "none");
    };

    const toggleClass = (className: string) => {
        document.documentElement.classList.toggle(className);
    };

  //bron: Claude
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

    useEffect(() => {
        const popover = popoverRef.current;
        if (!popover)
            return;
        const handler = (e: Event) => {
            const toggle = e as ToggleEvent;
            btnRef.current?.setAttribute('aria-expanded', toggle.newState === 'open' ? 'true' : 'false');
        };

        popover.addEventListener('toggle', handler);
        return () => popover.removeEventListener('toggle', handler);
    }, []);

  return (
    <>
    {cursorVisible && (
    <img
        src={cursorSrc}
        style={{
        position: 'fixed',
        left: cursorPos.x,
        top: cursorPos.y,
        width: cursorSize,
        height: cursorSize,
        transform: 'translate(-30%, -10%)',
        pointerEvents: 'none',
        zIndex: 99999,
    }}
        alt=""
    />
    )}
    <button tabIndex={1} ref={btnRef} className="fixed left-0 bg-white top-0 w-auto cursor-pointer text-white font-bold" popoverTarget="mypopover">
        <img src="/accessibleMenu/images/toegankelijkheid.svg" alt="Toegangkelijkheidsmenu" />
    </button>
    <header tabIndex={1} ref={popoverRef} id="mypopover" popover="auto" className="fixed left-0 right-0 top-0">
        <nav>
          <ul role="list">
            <Button btnId="summary" name= {showFull ? "Korte tekst" : "Volledige tekst"} onClick={() => setShowFull(!showFull)}/>
            <Button btnId="hoogContrast" name="Hoog contrast" onClick={() => toggleClass("highcontrast")} />
            <Button btnId="borders" name="Borders" onClick={toggleBorders} />
            <Button btnId="customFont" name="Custom lettertype" onClick={() => toggleClass("alt-font")} />
            <Button btnId="lightMode" name="Negatief contrast" onClick={toggleInvert}/>
            <ButtonSlider id="lineHeight" min={"20"} max={"100"} initValue={"20"} ref={sliderLineHeight} name="Line Height" onChange={handleStyle("lineHeight")} />
            <ButtonSlider id="lineSpacing" min={"0"} max={"20"} initValue={"0"} ref={sliderSpacing} name="Letter Spacing" onChange={handleStyle("letterSpacing")} />
            <ButtonSlider id="saturation" min={"0"} max={"100"} initValue={"100"} name="Saturate" onChange={handleSaturation} />
            <ButtonSlider id="cursorSize" min={"24"} max={"100"} initValue={"24"}  name="Cursor grote" onChange={(e) => setCursorSize(Number(e.target.value))}/>
            <ButtonSlider id="letterBig" min={"16"} max={"30"} initValue={"16"} ref={sliderLetterBig} name="Letter grote" onChange={handleStyle("fontSize")} />
            <li>
              <button onClick={handleReset} className="w-full cursor-pointer bg-red text-white font-bold">
                Reset
              </button>
            </li>
          </ul>
        </nav>
    </header>
    </>
  );
}