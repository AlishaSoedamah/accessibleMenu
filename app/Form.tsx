export default function Form()
{
	return (
		<>
		<form className="contact-card rounded p-10" action="#" method="post">
            <h2>Stuur een bericht</h2>
            <label htmlFor="name">Naam</label>
            <input className="p-4" type="text" id="name" name="name" />
            <label htmlFor="email">E-mail</label>
            <input className="p-4" type="email" id="email" name="email"/>
            <label htmlFor="message">Bericht</label>
            <textarea className="p-10" id="message" name="message"></textarea>
            <input className="w-full cursor-pointer bg-red hover:bg-pink-100 text-white font-bold" type="submit" value="Verstuur bericht →" />
        </form>
        <aside>
            <h2>Contactgegevens</h2>
            <h3>E-mail</h3>
            <a href="mailto:info@videlio.nl">info@videlio.nl</a>
            <h3>Telefoon</h3>
            <a href="tel:+31628386697">+31 6 28 38 66 97</a>
            <h3>Community</h3>
            <p> Sluit je aan bij onze community en denk mee over projecten, activiteiten en toegankelijkheid.</p>
        </aside>
		</>
			
	)
}