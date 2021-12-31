export default function Casa({ year, month, day, id }) {
	return <>
		<p>year: ${year}</p>
		<p>month: ${month}</p>
		<p>day: ${day}</p>
		<p>id: ${id}</p>
	</>
}
export async function getServerSideProps( { query } ) {
	const { year, month, day, id } = query;

	return {
		props: query,
	}
}