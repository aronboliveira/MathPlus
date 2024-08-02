<script lang="ts">
  import Vue from "vue";
  import { IndexScript } from "../components/componentsScripts/index";
  import CalcInp from "../components/CalcInp.vue";
  import CalcRes from "../components/CalcRes.vue";
  import Header from "../components/Header.vue";
  import BtnCalc from "../components/buttons/BtnCalc.vue";
  export default Vue.extend({
    name: "IndexPage",
    components: {
      Header,
      CalcInp,
      BtnCalc,
      CalcRes,
    },
    mounted() {
      IndexScript("mounted");
    },
  });
</script>

<template>
  <div id="index-root">
    <Header />
    <main>
      <section>
        <div>
          <div id="divEntry">
            <CalcInp
              labTxt="Insira os valores numéricos para cálculos gerais"
              inpId="gValuesInp"
              inpPh="Somente valores numéricos, espaçados"
            />
            <CalcInp
              labTxt="Insira o segundo conjunto para cálculos de Pearson"
              inpId="sValuesInp"
              inpPh="Somente valores numéricos, espaçados"
            />
            <CalcInp
              labTxt="Insira o conjunto total de valores para cálculo de probabilidade"
              inpId="tValuesInp"
              inpPh="Somente valores espaçados"
            />
            <CalcInp
              labTxt="Insira os valores para cálculo de probabilidade"
              inpId="pValuesInp"
              inpPh="Somente espaçados"
            />
          </div>
          <BtnCalc />
          <div id="resultsGrid">
            <div id="divResults1">
              <CalcRes labTxt="Média Arimética" outpId="average" />
              <CalcRes labTxt="Média Harmônica" outpId="averageHarm" />
              <CalcRes labTxt="Média Geométrica" outpId="averageGeo" />
              <CalcRes labTxt="Mediana" outpId="median" />
              <CalcRes labTxt="Moda" outpId="mode" />
              <CalcRes labTxt="Variância Aritmética" outpId="variance" />
              <CalcRes labTxt="Variância Geométrica" outpId="varianceGeo" />
              <CalcRes labTxt="Desvio-padrão Aritmético" outpId="stdDev" />
              <CalcRes labTxt="Desvio-padrão Geométrico" outpId="stdDevGeo" />
              <CalcRes labTxt="Coeficiente de Variação" outpId="cVar" />
            </div>
            <div id="divResults2">
              <CalcRes labTxt="Primeiro Quartil" outpId="q1" />
              <CalcRes labTxt="Índice do Primeiro Quartil" outpId="q1i" />
              <CalcRes labTxt="Segundo Quartil" outpId="q2" />
              <CalcRes labTxt="Índice do Segundo Quartil" outpId="q2i" />
              <CalcRes labTxt="Terceiro Quartil" outpId="q3" />
              <CalcRes labTxt="Índice do Terceiro Quartil" outpId="q3i" />
              <CalcRes labTxt="Intervalo entre Quartis" outpId="iqr" />
              <CalcRes labTxt="Whisker Inferior" outpId="lowWhisk" />
              <CalcRes labTxt="Whisker Superior" outpId="upWhisk" />
              <CalcRes labTxt="Curtose" outpId="curtosis" />
            </div>
            <div id="divResults3">
              <CalcRes labTxt="Outliers inferiores:" outpId="lowOl" />
              <CalcRes labTxt="Outliers Superiores:" outpId="upOl" />
              <CalcRes
                labTxt="Índice de Assimetria de Pearson:"
                outpId="pearsonAssymetryIndex"
              />
              <CalcRes
                labTxt="Resultado do teste de Pearson:"
                outpId="testPearsonIndex"
              />
              <CalcRes
                labTxt="Índice de Correlação de Pearson:"
                outpId="pearsonCorrelationIndex"
              />
              <CalcRes
                labTxt="Probabilidade Simples dos Eventos:"
                outpId="probSimple"
              />
              <CalcRes
                labTxt="Probabilidade Condicional Independente dos Eventos:"
                outpId="probCond"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="reactRoot"></section>
    </main>
    <div id="dlg-root"></div>
  </div>
</template>

<style scoped>
  #index-root {
    position: relative;
  }
</style>
