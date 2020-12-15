// ---------------------------------------------------------------
//  ex02.js
//
//                  Aug/18/2018
//
// ---------------------------------------------------------------
var app = new Vue({
    el: '#app',
    data: {
        info: null
    },
    methods: {
        async getCities() {
            var url = 'https://run-test03-yaguchi-x5tsjpmxia-an.a.run.app/'
            await axios.get(url).then(x => { this.info = x.data })
        }
    },
    mounted() {
        this.getCities()
    }
})
// ---------------------------------------------------------------
