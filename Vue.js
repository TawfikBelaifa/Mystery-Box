const API = [
    {id:1, producName:"CHRISTIAN LOUBOUTIN", producS_Name:"Morbi euismod molestie dolor, sed", description:"A signature style of the brand, these Lou Spikes Orlato sneakers from Christian Louboutin come in dark grey", price:"750", img:"1.jpg", cat:"Men", type:"shoes"},
    {id:2, producName:"GUCCI", producS_Name:"Nulla massa felis, venenatis elementum.", description:"A signature style of the brand, these Lou Spikes Orlato sneaker", price:"550",img:"2.jpg", cat:"Men", type:"shoes"},
    {id:2, producName:"BALENCIAGA", producS_Name:"Duis cursus lectus quis ullamcorper.", description:"A signature style of the brand, these Lou Spik", price:"775",img:"2.jpg", cat:"Men", type:"shoes"},
]

const Accueil = {
    template: '#accueil', 
    name: 'Accueil',
}

const routes = [
    {path: '/', component: Accueil},
    
]

const router = new VueRouter({
    routes
})

const vm = new Vue({
    router
}).$mount('#app_prise')