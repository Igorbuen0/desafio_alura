

function descriptografar() {
    const textarea = document.getElementById("texto").value.toLowerCase();
    const result = document.getElementById('result');
  
    isValue(textarea);
  
    const textoSemAcentos = removerAcentosEspeciais(textarea);
    const descriptografado = textoSemAcentos
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
  
    result.innerHTML = descriptografado;
  }
  
  
  function criptografar() {
    const textarea = document.getElementById("texto").value.toLowerCase();
    const result = document.getElementById('result');
  
    isValue(textarea);
  
    const textoSemAcentos = removerAcentosEspeciais(textarea);
    const criptografado = textoSemAcentos
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
  
    result.innerHTML = criptografado;
  }
  
  
  function isValue(textarea) {
    const defaultDiv = document.getElementById('default');
    const boxResultDiv = document.getElementById('boxResult');
  
    const hasValue = Boolean(textarea);
  
    defaultDiv.classList.toggle("hide", hasValue);
    boxResultDiv.classList.toggle("hide", !hasValue);
  }
  
  
  function removerAcentosEspeciais(texto) {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/gi, '');
  }
  
  
  
  function copiar() {
    const result = document.getElementById('result').innerText;
  
    navigator.clipboard.writeText(result)
      .then(() => alert("Texto copiado para a área de transferência!"))
      .catch(err => console.error('Erro ao copiar texto: ', err));
  }