import Button from "./Button";
import ButtonSlider from "./ButtonSlider";

import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    popover?: "" | "auto" | "manual";
    popovertarget?: string;
    popovertargetaction?: "hide" | "show" | "toggle";
  }
}

export default function Menu() {
    return (
        <>
        <button popoverTarget="mypopover">Toggle the popover</button>
        <header id="mypopover" popover="auto" className="fixed left-0 right-0 top-0 bg-black w-md">
            <nav className="rounded py-8 px-8">
                <ul>
                    <li>
                        <button className="my-2 cursor-pointer bg-red hover:bg-pink-100 text-white font-bold py-2 px-4 rounded">
                            Compacte versie
                        </button>
                    </li>
                    <Button name="Kleurenblind Filter"/>
                    <Button name="Hoog contrast"/>
                    <Button name="Borders"/>
                    <Button name="Negatief"/>
                    <Button name="Custom lettertype"/>
                    <ButtonSlider name="Line Height"/>
                    <ButtonSlider name="Line Spacing"/>
                    <ButtonSlider name="Saturation"/>
                    <ButtonSlider name="Grayscale"/>
                    <ButtonSlider name="Cursor grote"/>
                </ul>
            </nav>
        </header>
        </>
    )
}
