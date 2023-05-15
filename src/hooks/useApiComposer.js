import md5 from 'md5';

function setKey(userData) {
	const ts = new Date().getTime();
	const concatStrings = `${ts}${userData.keys.privateKey}${userData.keys.publicKey}`;
	const hash = md5(concatStrings);

	return { ts, publicKey: userData.keys.publicKey, hash };
}

export default setKey;
