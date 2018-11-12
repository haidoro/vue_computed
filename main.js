var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  // computed: {
  //   // 算出 getter 関数
  //   reversedMessage: function () {
  //     // `this` は vm インスタンスを指します
  //     return this.message.split('').reverse().join('')
  //   }
  // },
  methods: {
  reverseMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
})

// console.log(vm.reversedMessage) 
// vm.message = 'Tahara'
// console.log(vm.reversedMessage) 
console.log(vm.message)