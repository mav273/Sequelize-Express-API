const axios = require('axios').default

async function AllWizards(){
    const wizards = await axios({
     url: 'http://localhost:3000/wizards/All',
     method: 'GET'
    })
    console.log(wizards.data)
}

async function NewWizard(){
    try{
        const wizard = await axios({
        url: 'http://localhost:3000/wizards/create',
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        data: {
            "name":"Remus Lupin"
        }
        })
        return wizard
    }
    catch(e){
        console.error(e)
    }
}
NewWizard()
AllWizards()