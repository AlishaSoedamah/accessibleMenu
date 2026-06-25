import Button from "./Button";

export default function Menu() {
    return (
        <header>
            <nav className="border-solid. border-3 border-light-blue-500">
                <ul>
                    <li>
                        <button className="bg-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Compacte versie
                        </button>
                    </li>
                    <Button name="Custom Fonts"/>
                    <Button name="Line Height/Spacing"/>
                    <Button name="Kleurenblind filter"/>
                    <Button name="Hoog contrast"/>
                    <Button name="Saturation/Desaturation"/>
                    <Button name="Grayscale"/>
                    <Button name="Cursor grote"/>
                </ul>
            </nav>
        </header>
    )
}
