interface ButtonProps {
	name: string;
}

export default function Button({name}: ButtonProps)
{
	return (
		<li>
			<button>{name}</button>
		</li>
	)
}
