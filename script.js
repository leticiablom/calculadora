function somar() {
    let tsum1 = window.document.getElementById("txtsum1");
    let tsum2 = window.document.querySelector("input#txtsum2");
    let resSum = window.document.getElementById("resSum");
    let sum1 = Number(tsum1.value);
    let sum2 = Number(tsum2.value);
    let sum = sum1 + sum2;
    resSum.innerHTML = `A soma entre ${sum1} e ${sum2} é igual a <strong>${sum}</strong>`;
  }
  function subtrair() {
    let tsub1 = window.document.getElementById("txtsub1");
    let tsub2 = window.document.querySelector("input#txtsub2");
    let resSub = window.document.getElementById("resSub");
    let sub1 = Number(tsub1.value);
    let sub2 = Number(tsub2.value);
    let sub = sub1 - sub2;
    resSub.innerHTML = `A subtração entre ${sub1} e ${sub2} é igual a <strong>${sub}</strong>`;
  }
  function multiplicar() {
    let tmult1 = window.document.getElementById("txtmult1");
    let tmult2 = window.document.querySelector("input#txtmult2");
    let resMult = window.document.getElementById("resMult");
    let mult1 = Number(tmult1.value);
    let mult2 = Number(tmult2.value);
    let mult = mult1 * mult2;
    resMult.innerHTML = `A multiplicação entre ${mult1} e ${mult2} é igual a <strong>${mult}</strong>`;
  }
  function dividir() {
    let tdiv1 = window.document.getElementById("txtdiv1");
    let tdiv2 = window.document.querySelector("input#txtdiv2");
    let resDiv = window.document.getElementById("resDiv");
    let div1 = Number(tdiv1.value);
    let div2 = Number(tdiv2.value);
    let div = div1 / div2;
    resDiv.innerHTML = `A divisão entre ${div1} e ${div2} é igual a <strong>${div}</strong>`;
  }
  function potencia() {
      let tpot1 = window.document.getElementById("txtpot1");
      let tpot2 = window.document.querySelector("input#txtpot2");
      let resPot = window.document.getElementById("resPot");
      let pot1 = Number(tpot1.value);
      let pot2 = Number(tpot2.value);
      let pot = pot1 ** pot2;
      resPot.innerHTML = `A potenciação de ${pot1} ^ ${pot2} é igual a <strong>${pot}</strong>`;
    }