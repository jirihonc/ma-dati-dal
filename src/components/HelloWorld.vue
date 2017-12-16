<template>
 <div> 
    <div class="header">
      <h2>{{ msg }}</h2>
    </div>

    <div class="topnav">
      <label for="peopleCount">Počet účastníků:</label>
      <input type="number" id="peopleCount" value="4" width="2" maxlength="2" /> 
    </div>

      <div class="row">
        <div class="leftcolumn">

          <h2>Účastníci</h2>

          <div class="card">
            <input type="text" placeholder="jméno" />
            <input type="number" placeholder="zaplatil" />
          </div>

          <div class="card">
            <input type="text" placeholder="jméno" />
            <input type="number" placeholder="zaplatil" />
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
      <button class="all_btn green_btn">spočítat</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Má dáti, dal'
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
