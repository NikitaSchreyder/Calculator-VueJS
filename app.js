const calculator = {
    data() {
        return {
            value: '',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
            operations: ['-', '+', '/', '*', '=', 'C']
        }
    },
    methods: {
        btnClick(value) {
            this.value += value
        },
        reset() {
            this.value = ''
        },
        calc() {
            this.value = eval(this.value)
        }
    }
}

Vue.createApp(calculator).mount('#root')