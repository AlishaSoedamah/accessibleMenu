import Button from "./Button";
import ButtonSlider from "./ButtonSlider";
import "react";
import { useRef } from "react";

const handleStyle = (property: keyof CSSStyleDeclaration) => 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style[property] = e.target.value + "px";
};

declare module "react" {
  interface HTMLAttributes<T> {
    popover?: "" | "auto" | "manual" | "hint";
    popovertarget?: string;
    popovertargetaction?: "hide" | "show" | "toggle";
  }
}

export default function Menu() {

    const sliderLetterBig = useRef<HTMLInputElement>(null);
    const sliderLineHeight = useRef<HTMLInputElement>(null);
    const sliderSpacing = useRef<HTMLInputElement>(null);
    const sliderRef = useRef<HTMLInputElement>(null);

    const toggleBorders = () => {
    const root = document.documentElement;
    const current = getComputedStyle(root).getPropertyValue("--border-toggle").trim();

    root.style.setProperty(
        "--border-toggle",
        current === "none" ? "3px solid var(--high-contrast)" : "none"
        );
    };

    const toggleNegatief = () => {
        document.documentElement.classList.toggle("inverted");
    };

    return (
        <>
        <button popoverTarget="mypopover">Toggle the popover</button>
        <header id="mypopover" popover="auto" className="fixed left-0 right-0 top-0 bg-black md:w-md sm:w-sm">
            <nav className="rounded py-8 px-8">
                <ul role="list">
                    <li>
                        <button className="my-2 cursor-pointer bg-red hover:bg-pink-100 text-white font-bold py-2 px-4 rounded">
                            Compacte versie
                        </button>
                    </li>
                    <Button btnId="kleurenBlind" name="Kleurenblind Filter"/>
                    <Button btnId="hoogContrast" name="Hoog contrast"/>
                    <Button btnId="borders" name="Borders" onClick={toggleBorders}/>
                    <Button btnId="negatief" name="Negatief" onClick={toggleNegatief}/>
                    <Button btnId="customFont" name="Custom lettertype"/>
                    <ButtonSlider ref={sliderLetterBig} id="letterBig" name="Letter grote" onChange={handleStyle("fontSize")}/>
                    <ButtonSlider ref={sliderLineHeight} id="lineHeight" name="Line Height" onChange={handleStyle("lineHeight")}/>
                    <ButtonSlider ref={sliderSpacing} id="lineSpacing" name="Line Spacing" onChange={handleStyle("letterSpacing")}/>
                    {/* <ButtonSlider id="saturation" name="Saturation" onChange={toggleSat}/> */}
                    {/* <ButtonSlider id="grayscale" name="Grayscale"/> */}
                    {/* <ButtonSlider id="cursorGrote" name="Cursor grote"/> */}
                </ul>
            </nav>
        </header>
        </>
    )
}
