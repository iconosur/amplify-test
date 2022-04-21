import Amplify from 'aws-amplify';
import config from '../../src/aws-exports';
Amplify.configure({...config, ssr: true});

export default function Page({name}) {
	return <>
		<p>Seccion: {name}</p>
	</>
}
export async function getServerSideProps( { query } ) {
	const { name } = query;
	return {
		props: {
			name
		},
	}
}

