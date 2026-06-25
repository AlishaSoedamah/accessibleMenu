export default function Form()
{
	return (
		<>
		<form className="contact-card" action="#" method="post">
            <h2>Stuur een bericht</h2>
            <label htmlFor="name">Naam</label>
            <input type="text" id="name" name="name" placeholder="Vul je naam in" />
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Vul je e-mailadres in" />
            <label htmlFor="message">Bericht</label>
            <textarea id="message" name="message" placeholder="Waar kunnen we je mee helpen?"></textarea>
            <button type="submit">Verstuur bericht →</button>
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