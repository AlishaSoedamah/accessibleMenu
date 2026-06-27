export default function Form()
{
	return (
		<>
          <aside>
                <h2 className="py-6 lg:text-4xl md:text-3xl text-2xl">Contactgegevens</h2>
                <h3 className="py-4 text-2xl">Community</h3>
                <p>Sluit je aan bij onze community en denk mee over projecten,<br/> activiteiten en toegankelijkheid.</p>
                <h3 className="py-4 text-2xl" >E-mail</h3>
                <a href="mailto:info@videlio.nl">info@videlio.nl</a>
                <h3 className="py-4 text-2xl">Telefoon</h3>
                <a href="tel:+31628386697">+31 6 28 38 66 97</a>
            </aside>
            <form className="lg:w-2/4 md:w-full gap-x-1 contact-card rounded p-10" action="#" method="post">
                <h2 className="py-6 lg:text-4xl md:text-3xl text-2xl">Stuur een bericht</h2>
                <label htmlFor="name">Naam</label>
                <input className="p-4 lg:w-1/2 md:w-full sm:w-full rounded" type="text" id="name" name="name" />
                <label htmlFor="email">E-mail</label>
                <input className="p-4 lg:w-1/2 md:w-full sm:w-full rounded" type="email" id="email" name="email"/>
                <label htmlFor="message">Bericht</label>
                <textarea className="p-10 w-full rounded" id="message" name="message"></textarea>
                <input className="w-auto p-4 my-4 cursor-pointer bg-red text-white font-bold rounded" type="submit" value="Verstuur bericht →" />
            </form>
		</>
			
	)
}