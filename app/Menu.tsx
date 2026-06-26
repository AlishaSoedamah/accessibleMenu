import Button from "./Button";
import ButtonSlider from "./ButtonSlider";
import "react";
import { useRef } from "react";

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

export default function Menu() {

    const sliderLetterBig = useRef<HTMLInputElement>(null);
    const sliderLineHeight = useRef<HTMLInputElement>(null);
    const sliderSpacing = useRef<HTMLInputElement>(null);

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
        document.documentElement.classList.toggle('alt-font');
    };

    return (
        <>
        <button popoverTarget="mypopover">Open het toegankelijkheidsmenu</button>
        <header id="mypopover" popover="auto" className="fixed left-0 right-0 top-0 bg-black md:w-md sm:w-sm">
            <nav className="rounded py-8 px-8">
                <ul role="list">
                    <li>
                        <button className="w-full my-2 cursor-pointer bg-red hover:bg-pink-100 text-white font-bold py-2 px-4 rounded">
                            Compacte versie
                        </button>
                    </li>
                    <Button btnId="hoogContrast" name="Hoog contrast" onClick={toggleHighContrast}/>
                    <Button btnId="borders" name="Borders" onClick={toggleBorders}/>
                    <Button btnId="customFont" name="Custom lettertype" onClick={toggleChangeFont}/>
                    <ButtonSlider min={"10"} max={"60"} initValue={"10"} ref={sliderLetterBig} id="letterBig" name="Letter grote" onChange={handleStyle("fontSize")}/>
                    <ButtonSlider min={"20"} max={"50"} initValue={"20"} ref={sliderLineHeight} id="lineHeight" name="Line Height" onChange={handleStyle("lineHeight")}/>
                    <ButtonSlider min={"0"} max={"20"} initValue={"0"}  ref={sliderSpacing} id="lineSpacing" name="Line Spacing" onChange={handleStyle("letterSpacing")}/>
                    <ButtonSlider min={"0"} max={"100"} initValue={"100"} id="saturation" name="Saturate" onChange={handleFilter("saturate")}/>
                    {/* <ButtonSlider id="cursorGrote" name="Cursor grote"/> */}
                </ul>
            </nav>
        </header>
        </>
    )
}
