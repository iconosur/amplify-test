import Link from 'next/link';
import Amplify from 'aws-amplify';
import config from '../../src/aws-exports';
Amplify.configure({...config, ssr: true});

export default function Casa({path}) {
	return <>
		<p>Seccion: {path}</p>
	</>
}
export async function getServerSideProps( { query } ) {
	const { path } = query;
	return {
		props: {
			path
		},
	}
}

