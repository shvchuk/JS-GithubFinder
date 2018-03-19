class GitHub {
    constructor(){
        this.client_id = '14ec488ef2250af25c82';
        this.client_secret = 'efb8e639549aedbd118f4a25314fbbd6eae7ec95';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }

}