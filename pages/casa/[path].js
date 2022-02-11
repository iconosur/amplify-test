import { useRouter } from 'next/router'
import Amplify from 'aws-amplify';
import config from '../../src/aws-exports';
Amplify.configure({...config, ssr: true});

export default function Casa(props) {
	console.log(props);
	return <>
		<p>id: ${query}</p>
	</>
}
export async function getServerSideProps( { query } ) {
	return {
		props: query,
	}
}

