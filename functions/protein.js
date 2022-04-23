import slice from "slice.js";

export default function getProtein(dna) {
  var mrna,
    proteinFrame1,
    proteinFrame2,
    proteinFrame3,
    proteinFrame4,
    proteinFrame5,
    proteinFrame6,
    reversedMrna;
  mrna = convertTomRna(dna);
  mrna = slice(mrna);
  reversedMrna = mrna["::-1"];
  [proteinFrame1, proteinFrame2] = calculateProtein(0, mrna, reversedMrna);
  [proteinFrame3, proteinFrame4] = calculateProtein(1, mrna, reversedMrna);
  [proteinFrame5, proteinFrame6] = calculateProtein(2, mrna, reversedMrna);
  return [
    proteinFrame1,
    proteinFrame2,
    proteinFrame3,
    proteinFrame4,
    proteinFrame5,
    proteinFrame6,
  ];
}

function calculateProtein(i, mrna, reversedMrna) {
  var dicti, p1, p2;
  dicti = {
    Ala: ["GCU", "GCA", "GCG", "GCC"],
    Arg: ["AGA", "AGG", "CGU", "CGA", "CGG", "CGC"],
    Asn: ["AAU", "AAC"],
    Asp: ["GAU", "GAC"],
    Cys: ["UGU", "UGC"],
    Glu: ["GAA", "GAG"],
    Gln: ["CAA", "CAG"],
    Gly: ["GGU", "GGA", "GGG", "GGC"],
    His: ["CAU", "CAC"],
    Ile: ["AUU", "AUC", "AUA"],
    Leu: ["UUA", "UUG"],
    Lys: ["AAA", "AAG"],
    Met: ["AUG"],
    Phe: ["UUU", "UUC"],
    Pro: ["CCU", "CCA", "CCC", "CCG"],
    Ser: ["UCA", "UCU", "UCC", "UCG"],
    Thr: ["ACA", "ACU", "ACG", "ACC"],
    Trp: ["UGG"],
    Tyr: ["UAU", "UAC"],
    Val: ["GUA", "GUU", "GUC", "GUG"],
    "-": ["UGA", "UAA", "UAG"],
  };
  p1 = "";
  p2 = "";

  //   while i < len(mrna) - 2:
  //   for key in dicti:
  //       if mrna[i:i + 3] in dicti[key]:
  //           p1 += key
  //       if reversedMrna[i:i + 3] in dicti[key]:
  //           p2 += key
  // return p1, p2

  while (i < mrna.length - 2) {
    for (key in dicti) {
      console.log(key);
    }
  }

  return [p1, p2];
}