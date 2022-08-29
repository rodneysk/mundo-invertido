
import { getHellfireClubSubscriptions, subscribeToHellfireClub } from "./firebase/hellfire-club.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        chacacter: txtCharacter.value
    }
    
    const subscriptioID = await subscribeToHellfireClub(subscription)
    
    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

    alert(`Obrigado, você será convocado ao Mundo Invertido!`)

})

/*** 'Exportar' dados no console ***/
async function loadData() {
    const subscriptions = await getHellfireClubSubscriptions()
    console.log(subscriptions)
}

loadData()