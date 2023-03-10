import decode from 'jwt-decode';

class AuthService {
	getProfile() {
		return decode(this.getToken() as string);
	}

	loggedIn() {
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token);
	}

	isTokenExpired(token: string) {
		try {
			const decoded: any = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				return true;
			} else return false;
		} catch (err) {
			return false;
		}
	}

	getToken() {
		return localStorage.getItem('id_token');
	}

	login(idToken: string) {
		localStorage.setItem('id_token', idToken);
		window.location.assign('/');
	}

	logout() {
		localStorage.removeItem('id_token');
		window.location.assign('/');
	}
}

export default new AuthService();
