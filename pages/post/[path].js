import Link from 'next/link';
import Amplify from 'aws-amplify';
import config from '../../src/aws-exports';
Amplify.configure({...config, ssr: true});

export default function Post({path}) {
	console.log(path);
	const random = Date.now()
	return <>
		<p>id: {path}</p>
		<Link href="/">
			<a>Home</a>
		</Link>
		<br />
		<Link href={`/casa/${Date.now()}.html`}>
			<a>Nota random: {Date.now()}</a>
		</Link>
	</>
}
export async function getServerSideProps( { query } ) {
	const { path } = query;
	console.log(query)
	return {
		props: {
			path
		},
	}
}

