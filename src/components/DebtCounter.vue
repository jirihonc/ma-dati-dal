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
            <input type="text" class="nameInp" placeholder="jméno" v-model="payer.name" />
            <input type="number" class="paidInp" placeholder="zaplatil" v-model="payer.val" />
          </div>
          
        </div>
        
        <div class="rightcolumn">
          <h2>Výsledky</h2>
          <div class="card">
            

            <table>
              <tr>
                <th>Kdo</th>
                <th>Komu</th>
                <th>Kolik</th>
              </tr>
              <tr v-for="result in results" v-bind:key="result.idx">
                <td>{{ result.who }}</td>
                <td>{{ result.whom }}</td>
                <td>{{ result.val }},-</td>
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
var whoToWhom = []

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
      var acceptedLength = 0

      for (idx = 0; idx < this.payers.length; idx++) {
        var pPaid = Number(this.payers[idx].val)
        var pName = this.payers[idx].name

        sum += pPaid

        if (pName || pPaid > 0) {
          acceptedLength++
        }
      }

      var debtAvg = Number(sum / acceptedLength).toFixed(2)

      console.log('sum: ' + sum + ', avg: ' + debtAvg)

      var debts = []
      var toPay = []

      var dIdx = 0
      var pIdx = 0

      for (idx = 0; idx < this.payers.length; idx++) {
        var payerPaid = Number(this.payers[idx].val)
        var payerName = this.payers[idx].name
        if (payerName || payerPaid > 0) {
          var value = Number(payerPaid - debtAvg).toFixed(2)

          console.log('value = ' + value + ' for: ' + payerName + ', payerPaid: ' + payerPaid)

          if (value < 0) {
            debts[dIdx++] = {name: payerName, val: value}
          } else if (value > 0) {
            toPay[pIdx++] = {name: payerName, val: value}
            console.log('toPay: ' + payerPaid + ', :' + value)
          }
        }
      }

      // let's sort them from most to less
      toPay.sort(function (a, b) {
        return (a.val > b.val) ? -1 : ((b.val > a.val) ? 1 : 0)
      })

      console.log('Calculating results')

      dIdx = 0
      pIdx = 0
      var rIdx = 0
      this.results = []
      var toPayLen = toPay.length
      var debtLen = debts.length

      while (pIdx < toPayLen && dIdx < debtLen) {
        var debtInst = debts[dIdx]
        var debt = Number(debtInst.val)

        if (debt !== 0 && Math.abs(debt) > 0.01) {
          var toPayInst = toPay[pIdx]
          var toPayVal = Number(toPayInst.val)
          if (toPayVal > 0) {
            var maxToPay = Math.min(Math.abs(debt), toPayVal).toFixed(2)

            this.results[rIdx] = {idx: rIdx, who: debtInst.name, whom: toPayInst.name, val: maxToPay}
            rIdx++

            debtInst.val = Number(debtInst.val) + Number(maxToPay)
            toPayInst.val = Number(toPayInst.val) - Number(maxToPay)
          } else {
            pIdx++
          }
        } else {
          dIdx++
        }
      }
    }
  },
  data () {
    return {
      msg: 'Má dáti, dal',
      pCount: initPayerCount,
      payers: allPayers,
      results: whoToWhom
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
