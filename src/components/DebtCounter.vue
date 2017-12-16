<template>
 <div> 
    <div class="header">
      <h2>{{ msg }}</h2>
    </div>

    <div class="topnav">
      <label for="peopleCount">Počet účastníků:</label>
      <input type="number" id="peopleCount" v-model="pCount" width="2" maxlength="2" /> 
      <input type="button" class="small_grey_btn" value="generuj" @click="reRender" />
    </div>

      <div class="row">
        <div class="leftcolumn">

          <h2>Účastníci</h2>

          <!-- 
          <Payer
            v-for="payer in payers"
            v-bind:key="payer.idx" />
 -->

          <div class="card"  v-for="payer in payers" v-bind:key="payer.idx">
            <input type="text" placeholder="jméno" v-model="payer.name" />
            <input type="number" placeholder="zaplatil" v-model="payer.val" />
          </div>
          
        </div>
        
        <div class="rightcolumn">
          <h2>Výsledky: {{ debtAvg }}</h2>
          <div class="card">
            

            <table>
              <tr>
                <th>Kdo</th>
                <th>Komu</th>
                <th>Kolik</th>
              </tr>
              <tr>
                <td>Jirka</td>
                <td>Eve</td>
                <td>200,-</td>
              </tr>
              <tr>
                <td>Jirka</td>
                <td>Martine</td>
                <td>150,-</td>
              </tr>
              <tr>
                <td>Marek</td>
                <td>Eve</td>
                <td>100,-</td>
              </tr>

            </table>

          </div>
        </div>
      </div>

    <div class="footer">
      <button class="all_btn green_btn" @click="countDebts">spočítat</button>
    </div>
</div>
</template>

<script>
import Payer from './Payer.vue'

var initPayerCount = 4
var allPayers = []

var step
for (step = 0; step < initPayerCount; step++) {
  allPayers.push({idx: step, val: 0, name: ''})
}

export default {
  name: 'DebtCounter',
  components: { Payer },
  methods: {
    reRender () {
      if (this.pCount > 0 && this.pCount < 20) {
        this.payers = []
        var step

        for (step = 0; step < this.pCount; step++) {
          this.payers.push({idx: step, val: 0, name: ''})
        }
      }
    },
    countDebts () {
      var idx = 0
      var sum = 0
      for (idx = 0; idx < this.payers.length; idx++) {
        sum += Number(this.payers[idx].val)
      }
      this.debtAvg = sum / this.payers.length

      console.log('sum: ' + sum + ', avg: ' + this.debtAvg)
    }
  },
  data () {
    return {
      msg: 'Má dáti, dal',
      pCount: initPayerCount,
      payers: allPayers,
      debtAvg: 0.0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
