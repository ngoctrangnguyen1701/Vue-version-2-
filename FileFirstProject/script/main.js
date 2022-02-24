const initialGame = {
  healthbarYou: 0,
  healthbarMonster: 0,
  healthbarProgressYou: 0,
  healthbarProgressMonster: 0,
  isStartGame: false,
  winner: '',
  isYourTurn: true,
}

new Vue({
  el: '#app',
  data: {
    // healthbarYou: 0,
    // healthbarMonster: 0,
    // isStartGame: false,
    // winner: '',
    // isYourTurn: true,
    ...initialGame
  },
  computed: {
    // healthbarProgressYou: function(){
    //   if(this.healthbarYou < 0){
    //     console.log('healthbarProgressYou');
    //     this.winner = 'Monster' //--> nếu máu của You dưới 0, Monster sẽ thắng, và ngược lại
    //     return 0
    //   }
    //   return this.healthbarYou
    // },
    // healthbarProgressMonster: function(){
    //   if(this.healthbarMonster < 0){
    //     console.log('healthbarProgressMonster');
    //     this.winner = 'You'
    //     return 0
    //   }
    //   return this.healthbarMonster
    // },
    monsterAttack: function(){
      if(this.isYourTurn === false && !this.winner){
        console.log('monsterAttack');
        //nếu không phải lượt của You và chưa có người thắng
        // const minDamage = 5
        // const maxDamage = 40
        // const damageYou = Math.floor(Math.random() * (maxDamage - minDamage + 1) ) + minDamage
        // this.healthbarYou -= damageYou
        this.healthbarYou -= this.setDamage(5, 40)
        // this.isYourTurn = true
        this.setWinner()

        // if(this.healthbarYou <= 0 && this.isStartGame){
        //   this.winner = 'Monster' //--> nếu máu của You dưới 0, Monster sẽ thắng, và ngược lại
        //   this.healthbarProgressYou = 0
        // }
        // else{
        //   this.healthbarProgressYou = this.healthbarYou
        // }
      }
    },
    // setWinner: function(){
    //   if(this.healthbarYou < 0){
    //     this.winner = 'Monster' //--> nếu máu của You dưới 0, Monster sẽ thắng, và ngược lại
    //     this.healthbarProgressYou = 0
    //     return
    //   }
    //   this.healthbarProgressYou = this.healthbarYou

    //   if(this.healthbarMonster < 0){
    //     this.winner = 'You'
    //     this.healthbarProgressMonster = 0
    //     return
    //   }
    //   this.healthbarProgressMonster = this.healthbarMonster
    // }
  },
  methods: {
    startGame: function(){
      this.healthbarYou = 100
      this.healthbarMonster = 100
      this.healthbarProgressYou = 100
      this.healthbarProgressMonster = 100
      this.isStartGame = true
      this.winner = ''
      this.isYourTurn = true
    },
    attack: function(){
      if(!this.winner){ //nếu chưa có người thắng
        console.log('attack');
        // const minDamage = 5
        // const maxDamage = 40
        // const damageMonster = Math.floor(Math.random() * (maxDamage - minDamage + 1) ) + minDamage
        // this.healthbarMonster -= damageMonster
        this.healthbarMonster -= this.setDamage(5, 40)
        // this.isYourTurn = false
        this.setWinner()
  
        // const damageMonster = Math.floor(Math.random() * (maxDamage - minDamage + 1) ) + minDamage
        // this.healthbarMonster -= damageMonster

        // if(this.healthbarMonster <= 0 && this.isStartGame){
        //   this.winner = 'You'
        //   this.healthbarProgressMonster = 0
        // }
        // else{
        //   this.healthbarProgressMonster = this.healthbarMonster
        // }
      }
    },
    setDamage: function(minDamage, maxDamage){
      return Math.floor(Math.random() * (maxDamage - minDamage + 1) ) + minDamage
    },
    setWinner: function(){
      if(this.isYourTurn){
        if(this.healthbarMonster <= 0 && this.isStartGame){
          this.winner = 'You'
          this.healthbarProgressMonster = 0
        }
        else{
          this.healthbarProgressMonster = this.healthbarMonster
          this.isYourTurn = false
        }
      }
      else{
        if(this.healthbarYou <= 0 && this.isStartGame){
          this.winner = 'Monster' //--> nếu máu của You dưới 0, Monster sẽ thắng, và ngược lại
          this.healthbarProgressYou = 0
        }
        else{
          this.healthbarProgressYou = this.healthbarYou
          this.isYourTurn = true
        }      
      }
    }
  }
})