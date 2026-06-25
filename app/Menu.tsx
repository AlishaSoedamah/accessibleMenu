import Button from "./Button";
import ButtonSlider from "./ButtonSlider";

export default function Menu() {
    return (
        <header>
            <nav className="border-solid border-2 border-white-500 rounded py-8 px-8">
                <ul>
                    <li>
                        <button className="my-2 cursor-pointer bg-red hover:bg-pink-100 text-white font-bold py-2 px-4 rounded">
                            Compacte versie
                        </button>
                    </li>
                    <Button name="Custom Fonts"/>
                    <ButtonSlider name="Line Height"/>
                    <ButtonSlider name="Line Spacing"/>
                    <Button name="Kleurenblind Filter"/>
                    <Button name="Hoog contrast"/>
                    <Button name="Negatief"/>
                    <ButtonSlider name="Saturation"/>
                    <ButtonSlider name="Grayscale"/>
                    <ButtonSlider name="Cursor grote"/>
                </ul>
            </nav>
        </header>
    )
}
