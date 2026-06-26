import Button from "./Button";
import ButtonSlider from "./ButtonSlider";
import "react";
import { useRef } from "react";


const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
  document.documentElement.style.fontSize = e.target.value + "px";
};

const handleLineHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
  document.documentElement.style.lineHeight = e.target.value + "px";
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
        <header id="mypopover" popover="auto" className="fixed left-0 right-0 top-0 bg-black w-md">
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
                    <ButtonSlider ref={sliderLetterBig} id="letterBig" name="Letter grote" onChange={handleFontSize}/>
                    <ButtonSlider ref={sliderLineHeight} id="lineHeight" name="Line Height" onChange={handleLineHeight}/>
                    {/* <ButtonSlider id="lineSpacing" name="Line Spacing"/>
                    <ButtonSlider id="saturation" name="Saturation"/>
                    <ButtonSlider id="grayscale" name="Grayscale"/>
                    <ButtonSlider id="cursorGrote" name="Cursor grote"/> */}
                </ul>
            </nav>
        </header>
        </>
    )
}
