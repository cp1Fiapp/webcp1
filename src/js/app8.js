const text = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";

// 1) Buscar a primeira posição de em
const firstPosition = text.toLowerCase().indexOf("em");
console.log("Primeira posição de 'um':", firstPosition);

// 2) Buscar a última posição de ia
const lastPosition = text.lastIndexOf("ia");
console.log("Última posição de 'go':", lastPosition);

// 3) Buscar a palavra "ciencias" 
const searchWord = text.toLowerCase().includes("ciência");
console.log("A palavra 'ciência' está presente:", searchWord);

// 4) Buscar a palavra "métodos"  
const searchWord2 = text.toLowerCase().includes("métodos");
console.log("A palavra 'métodos' está presente:", searchWord2);