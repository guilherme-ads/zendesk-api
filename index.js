const fetch = require('node-fetch')

class ZendeskAPI{
    constructor(urlBase='', email='', token='', language=''){
        this.config = {
            urlBase,
            email,
            token,
            language,
            authString : `${email}/token:${token}`
        }
    }

    async getUsers(){
        const options = {
            method : 'GET',
            headers : {
                Authorization : 'Basic ' + Buffer.from(this.config.authString).toString('base64')
            }
        }

        let endpoint = this.config.urlBase + `/api/v2/users.json`

        const users = []

        while(endpoint){
            console.log(`Capturando usuários de: ${endpoint}`)

            const response = await fetch(endpoint, options)

            if(response.status >= 400){
                console.log(`Error ${response.status}: ${response.statusText}`)
                break
            }

            const json = await response.json()

            json.users.forEach(user => {
                users.push(user)
            })

            endpoint = json.next_page
        }

        if(response.status >= 400){
            console.log('Successfully captured users')
        }

        return users
    }
}

module.exports = ZendeskAPI