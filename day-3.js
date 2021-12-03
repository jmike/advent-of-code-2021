const ratings = [
  "111100000101",
  "001110100010",
  "101110110011",
  "100000001101",
  "001101010011",
  "101111110000",
  "011101110001",
  "000000010111",
  "011011000010",
  "110110010000",
  "011101000000",
  "110010001001",
  "101110100111",
  "001001101111",
  "101001011010",
  "101001000001",
  "101110111101",
  "010100101100",
  "001000110010",
  "010100011110",
  "100100000001",
  "000110011000",
  "110100100001",
  "111000110000",
  "000111100100",
  "101100110100",
  "101111101001",
  "101110101001",
  "010010110001",
  "000111100001",
  "001100001000",
  "100011101001",
  "100010111000",
  "000001011000",
  "001011110100",
  "011110010001",
  "110000011010",
  "100011011111",
  "001001110101",
  "001010000101",
  "100000010010",
  "000011100010",
  "101010110101",
  "001110000101",
  "000111101101",
  "010100101010",
  "101111101011",
  "010001100000",
  "110101100010",
  "001001001111",
  "001101011010",
  "111010010101",
  "110001000011",
  "000011110100",
  "100010111101",
  "111100101110",
  "110110001101",
  "001000011011",
  "101110101110",
  "111011101110",
  "010000110001",
  "101111011111",
  "000001001110",
  "111101100011",
  "000100000000",
  "100001001111",
  "110010000010",
  "101111010011",
  "010000101000",
  "011010101111",
  "110101101100",
  "101101011100",
  "100101111101",
  "011101011110",
  "111001001000",
  "100111001101",
  "101101000100",
  "110111111010",
  "011001101001",
  "111101010110",
  "001111001110",
  "111100010111",
  "000100111100",
  "011100101001",
  "111100111100",
  "101000011100",
  "011100111100",
  "011010110010",
  "101111101101",
  "010111101010",
  "001011000111",
  "000010011111",
  "101000100110",
  "000100110101",
  "100101001100",
  "010100110110",
  "011111100110",
  "000000101011",
  "111111101110",
  "001011101101",
  "000010001101",
  "001100100100",
  "101010010111",
  "100010011001",
  "010100000110",
  "010000001101",
  "010001101011",
  "000111111001",
  "101110010010",
  "011100101000",
  "010101010001",
  "111011110111",
  "000010110001",
  "101111000111",
  "001101110000",
  "111111011011",
  "100010011010",
  "001011011010",
  "110111001001",
  "110101110100",
  "101100111100",
  "011110101010",
  "010000001010",
  "001111100001",
  "000110000110",
  "111010111010",
  "101110100100",
  "000001110010",
  "110111001101",
  "000001101000",
  "000010001111",
  "110000100011",
  "000000001001",
  "000111111110",
  "111101111010",
  "010110101010",
  "110101011111",
  "000111000110",
  "111001100001",
  "101111100000",
  "011011010111",
  "101011010111",
  "110011101111",
  "001110001111",
  "010001100100",
  "111001010000",
  "100111000100",
  "110101010100",
  "000011111101",
  "100010010000",
  "110110100100",
  "100111011110",
  "101011001101",
  "111011100110",
  "100000010000",
  "110000001111",
  "001000000111",
  "111011011011",
  "101111101000",
  "001110001010",
  "100110000000",
  "110001100110",
  "011110100010",
  "000001010110",
  "010100000101",
  "101010101010",
  "001101000110",
  "110100001111",
  "110000001101",
  "101101000000",
  "101101101011",
  "111001100101",
  "101010001111",
  "101101001101",
  "010111101011",
  "101000101101",
  "001010000111",
  "011110111001",
  "001011101000",
  "101101000010",
  "110111111110",
  "110001011011",
  "101111101100",
  "101110110101",
  "101100111101",
  "001110001101",
  "010111000110",
  "110101110110",
  "101001101001",
  "010100001000",
  "011011111110",
  "111010010001",
  "101110100000",
  "000101111100",
  "001111110111",
  "001010110011",
  "010011011001",
  "101111100001",
  "100101111110",
  "010001010011",
  "001101110001",
  "011100001000",
  "101100000101",
  "000111111101",
  "010101110000",
  "100110001100",
  "010101111100",
  "100101110100",
  "110111000001",
  "101110101000",
  "000011010000",
  "101011110101",
  "100011110100",
  "111100010110",
  "110100011001",
  "001001001100",
  "010110111000",
  "001000101111",
  "111101001110",
  "011110000011",
  "000111000100",
  "001101110101",
  "110111011101",
  "100000111001",
  "100000001001",
  "110110111011",
  "010011000110",
  "000100010101",
  "100101010001",
  "100100101100",
  "010001001100",
  "000010001010",
  "101100101101",
  "011011101111",
  "100010111011",
  "111111101111",
  "110001100001",
  "101011101111",
  "000100011101",
  "111000010001",
  "000001011001",
  "001101111101",
  "001000000001",
  "010100010100",
  "110010111011",
  "010100100011",
  "001010001010",
  "111111011010",
  "100101010101",
  "000111000010",
  "011010100000",
  "010100111111",
  "001011100010",
  "101010001011",
  "111011010101",
  "100100100111",
  "101110101010",
  "111100101001",
  "111010001000",
  "000100001111",
  "011010001000",
  "011011100100",
  "110011011111",
  "110111100010",
  "000100001100",
  "001001101101",
  "110111110011",
  "101111001001",
  "101010001001",
  "011011000111",
  "000110001001",
  "111011001010",
  "000110000100",
  "000000111011",
  "010110110110",
  "101000000000",
  "011100101111",
  "111101111000",
  "001110011100",
  "111110011001",
  "000010111000",
  "010111001100",
  "010010111111",
  "110101100111",
  "000110111010",
  "000001111110",
  "111000000000",
  "001110011101",
  "100000111100",
  "100010100001",
  "010011101100",
  "010001101010",
  "001001101011",
  "110100010100",
  "011000000110",
  "011000011001",
  "010001101111",
  "000101001111",
  "011101111101",
  "100010010011",
  "100101111000",
  "001101110111",
  "001000000000",
  "100100101011",
  "111000100011",
  "101100011011",
  "000000101101",
  "001110010011",
  "001010010000",
  "011000001110",
  "101011111001",
  "110101100000",
  "011011111010",
  "001000011111",
  "011000100000",
  "000010101100",
  "111100010011",
  "101010000011",
  "001100111111",
  "000001111000",
  "111101110101",
  "001010100111",
  "011100111111",
  "111010111000",
  "100101011111",
  "011100001101",
  "001011000011",
  "110001110110",
  "000011101000",
  "111110010111",
  "100010101101",
  "110001011101",
  "011010100010",
  "001110000011",
  "101001101111",
  "100110100100",
  "011010000111",
  "001111010011",
  "110111101111",
  "110101100101",
  "100011010000",
  "011110000100",
  "010110100010",
  "011000111001",
  "011111011010",
  "011110110101",
  "011011110111",
  "001111100101",
  "101110100110",
  "101010100000",
  "110100001100",
  "111010110101",
  "011010001111",
  "000010111110",
  "100110010111",
  "011100011011",
  "100101100011",
  "010110111100",
  "010011110111",
  "111001011101",
  "000011111100",
  "000111111111",
  "101000111010",
  "010110110011",
  "100110101111",
  "100010111010",
  "111001111111",
  "000110110011",
  "010010111101",
  "110001100011",
  "111100001000",
  "010011000011",
  "011011101011",
  "001010101101",
  "100011010011",
  "001100101110",
  "111000111111",
  "101001011101",
  "111011010011",
  "110101011101",
  "001011010111",
  "011001010100",
  "010011010100",
  "011100100110",
  "101111110001",
  "110111111101",
  "111110100110",
  "110001100000",
  "010110010011",
  "011100110001",
  "010111111011",
  "001010101000",
  "010100101111",
  "111101000001",
  "100000111010",
  "001010100000",
  "000001011011",
  "100111011101",
  "100011110010",
  "011111010000",
  "111001010110",
  "110111111100",
  "010110100011",
  "101111111010",
  "110111110000",
  "111100000110",
  "111101011110",
  "100101111100",
  "111110001101",
  "111110011110",
  "010101100010",
  "110101101101",
  "111100001101",
  "000100011100",
  "010011110011",
  "000100010100",
  "000110110010",
  "001010111000",
  "110111001111",
  "110101000101",
  "100011110000",
  "101010010010",
  "111110000010",
  "111011001011",
  "010110111010",
  "011101010100",
  "010010101010",
  "010011110001",
  "010000010110",
  "101111000011",
  "111111010100",
  "001111001001",
  "101001100111",
  "000011011111",
  "100111000001",
  "010111010110",
  "010100011100",
  "010100011101",
  "001111110011",
  "101100010111",
  "101110100010",
  "111101110100",
  "100100100010",
  "111010011011",
  "010110000100",
  "100100010100",
  "101000011010",
  "101001111101",
  "010000010001",
  "110111101101",
  "000001110110",
  "010001110100",
  "100100110001",
  "011111010111",
  "100000000110",
  "100001110110",
  "000001011110",
  "011000001100",
  "011001110110",
  "010010101110",
  "111100111000",
  "001010010011",
  "000001000001",
  "100010111001",
  "010001011111",
  "001110000000",
  "000010000000",
  "001101110011",
  "010100011001",
  "000001001010",
  "110001000110",
  "100010100101",
  "011100010001",
  "101100000110",
  "001001100000",
  "110100000000",
  "000010100010",
  "101101100111",
  "100001111011",
  "011000011101",
  "110100110010",
  "001011001101",
  "000111001110",
  "011100100100",
  "100010000100",
  "001101100000",
  "100010011111",
  "010101010111",
  "000101010011",
  "100011100000",
  "100001011101",
  "110011111100",
  "111010011001",
  "001011110111",
  "011010010100",
  "000011001110",
  "010110111001",
  "111000001001",
  "011100111010",
  "011111000010",
  "101100111010",
  "010100111101",
  "111001100100",
  "101111010110",
  "110111110100",
  "111110101010",
  "010011001110",
  "110101101001",
  "111101011000",
  "001010001101",
  "101111000010",
  "111110000111",
  "110000001100",
  "011111001101",
  "101001000101",
  "010111001011",
  "001010011110",
  "111010100100",
  "110000101000",
  "011101000011",
  "010010100110",
  "111010000001",
  "111101000111",
  "001010100101",
  "101011001100",
  "110010111001",
  "111000111100",
  "100101011101",
  "110010101001",
  "010010111000",
  "010101001110",
  "110000101111",
  "001101001101",
  "001000101011",
  "001110110111",
  "101111111011",
  "111001100110",
  "100101110000",
  "010000011011",
  "001010000000",
  "011001010110",
  "010101101010",
  "100100000011",
  "110010101110",
  "110011101000",
  "001010001000",
  "010000101100",
  "100110011110",
  "001010001111",
  "111010001101",
  "100100010000",
  "100100111001",
  "111111010110",
  "100010011101",
  "110100100100",
  "000110011101",
  "000101101001",
  "001011001100",
  "101000000001",
  "111101100000",
  "110110111000",
  "111111000010",
  "001010111011",
  "011011111000",
  "010111000101",
  "011100110011",
  "111111100010",
  "000000100010",
  "001000011110",
  "010001011001",
  "111100111101",
  "001111010010",
  "010110011011",
  "111110001110",
  "101111100100",
  "011100011101",
  "111001111001",
  "101001000100",
  "001011000110",
  "100011010101",
  "001101100010",
  "110111101110",
  "010101111000",
  "111010000111",
  "000110010111",
  "001100111101",
  "100000101101",
  "000110101000",
  "011000011100",
  "000101001110",
  "011010101100",
  "100010010100",
  "001001111001",
  "101100100000",
  "010011011000",
  "100110101011",
  "110111110110",
  "100111001100",
  "111010010011",
  "000100011110",
  "011100011000",
  "010000011001",
  "100110011010",
  "010000001000",
  "101010011010",
  "111111011100",
  "010110100111",
  "000110001101",
  "001011111000",
  "011010111001",
  "111011011101",
  "110000010110",
  "100110111001",
  "110010000001",
  "110001011110",
  "111100001010",
  "101110111100",
  "110011110100",
  "101111011101",
  "000101010010",
  "001111000110",
  "110010011010",
  "000010010001",
  "001110110110",
  "111101100101",
  "000000111101",
  "011110000110",
  "111011001101",
  "110111000110",
  "101100110101",
  "010001001001",
  "001010110101",
  "101100011010",
  "100011001010",
  "001011101110",
  "101000010110",
  "100100111011",
  "001011101100",
  "111110111010",
  "110011111010",
  "000001111101",
  "010000110111",
  "101101101100",
  "000110000000",
  "111110110100",
  "101100000010",
  "011000000001",
  "001000001001",
  "111101111011",
  "010100001110",
  "111100101000",
  "011000010111",
  "001000111101",
  "100000100101",
  "110111000101",
  "001111100000",
  "101110111001",
  "000100101111",
  "101011010100",
  "101111111001",
  "000010000101",
  "001100001111",
  "101001011001",
  "001110111000",
  "010011011101",
  "110110111001",
  "011111010010",
  "100111101011",
  "101110011000",
  "010011100110",
  "101111000000",
  "101000110111",
  "001100000111",
  "110001101111",
  "010011101010",
  "100100000111",
  "100011111101",
  "010111010010",
  "001010111010",
  "011111010110",
  "101101100101",
  "011110001000",
  "000100111111",
  "001010111100",
  "101101100000",
  "010010000011",
  "010011010111",
  "111000011110",
  "110111010101",
  "100100101000",
  "101001001000",
  "001111110100",
  "111011110101",
  "110001000100",
  "100111111001",
  "101010110100",
  "010111101001",
  "011011010010",
  "011111101010",
  "111100111110",
  "110011101101",
  "110110101101",
  "110010100101",
  "111110101111",
  "000011110011",
  "001100001011",
  "111110110111",
  "011011101100",
  "110111101011",
  "010111010000",
  "101000010111",
  "010100010001",
  "111101100100",
  "011101101010",
  "010000110110",
  "111001110000",
  "111111000100",
  "011001100000",
  "111100101111",
  "011001001011",
  "110100100011",
  "011001111000",
  "101010001100",
  "100010001110",
  "010111110110",
  "001011011111",
  "000001011100",
  "010010001111",
  "011101011000",
  "001010011010",
  "100010011110",
  "010011000111",
  "101011011111",
  "100101000010",
  "110111010111",
  "110111101010",
  "010100001011",
  "001001010011",
  "001011001111",
  "011000001111",
  "010100000111",
  "100011001111",
  "110100111100",
  "101110010000",
  "000010110010",
  "100010100010",
  "001010011000",
  "010101100101",
  "101100010001",
  "011011001010",
  "000101100000",
  "000101111010",
  "001001110010",
  "100011100001",
  "011110111011",
  "100000010111",
  "100001001101",
  "111000100010",
  "011000011000",
  "100001100010",
  "000000110011",
  "000101010111",
  "000101000100",
  "110111000111",
  "001100000000",
  "110100010110",
  "101001000011",
  "110111100100",
  "000111100011",
  "101110001001",
  "000010011101",
  "000011010111",
  "111101011001",
  "111010001111",
  "000100110100",
  "000011100001",
  "100100111000",
  "100111101110",
  "001110101011",
  "000111110100",
  "110000010111",
  "110010011111",
  "000001111111",
  "101011110011",
  "101100001101",
  "110101111011",
  "011111000111",
  "011110011011",
  "001000010110",
  "110110110100",
  "010101001011",
  "000100111000",
  "011101111111",
  "000111101001",
  "110101111010",
  "110000111001",
  "011000111101",
  "001101001010",
  "110100110100",
  "100110010001",
  "100000000100",
  "001100111000",
  "100000001110",
  "101000011000",
  "100010110110",
  "101011001001",
  "010010001010",
  "111011101100",
  "100010100110",
  "101101000111",
  "100110110101",
  "111001010100",
  "101000110000",
  "000101011010",
  "010001010110",
  "010111011110",
  "001101011110",
  "000100000101",
  "000001011101",
  "010010100000",
  "110110010001",
  "100111000111",
  "100010110000",
  "010110100000",
  "110111111111",
  "011111011111",
  "001011010010",
  "001111100011",
  "100010110100",
  "011010001011",
  "110011001010",
  "101110111000",
  "111001010011",
  "010011010101",
  "011100100101",
  "101010110011",
  "001001100101",
  "110010100000",
  "011000111110",
  "011101001110",
  "110110000100",
  "001111101100",
  "101100010100",
  "110001100101",
  "111111010001",
  "011001100001",
  "110100000101",
  "000000010000",
  "110101000111",
  "100100110100",
  "010010110100",
  "010010000100",
  "011000111111",
  "011001101010",
  "011111101110",
  "110110010100",
  "110001001110",
  "111111100011",
  "010001100001",
  "001001111011",
  "000101110010",
  "011111110111",
  "000011000110",
  "110101000001",
  "101110000011",
  "000000111010",
  "000101110011",
  "000011100111",
  "010010010011",
  "110011011010",
  "111100100100",
  "110010011101",
  "100001001000",
  "101000110001",
  "101001010011",
  "111000111101",
  "101011111000",
  "110011110110",
  "111110100011",
  "010110100100",
  "010101000011",
  "001010101100",
  "101010101001",
  "111100100000",
  "001111011111",
  "110101010011",
  "101111010000",
  "110011110010",
  "110110110001",
  "011010011110",
  "100010010101",
  "101000101010",
  "010111010001",
  "000001111100",
  "001000011001",
  "011110110001",
  "110100011000",
  "110000111110",
  "001001011100",
  "110110110101",
  "011011100110",
  "011110010100",
  "111011110110",
  "111110111001",
  "111010010100",
  "001000001011",
  "111101010011",
  "100111101010",
  "010100001100",
  "111101111111",
  "000111111000",
  "001010011101",
  "100000001011",
  "010010001110",
  "011011011101",
  "100000000111",
  "100101100100",
  "001110000010",
  "000000000000",
  "101000110100",
  "011010110001",
  "100001101110",
  "110001110011",
  "101100010000",
  "001111111111",
  "111110110101",
  "010111001101",
  "011001000001",
  "111110011100",
  "100100011010",
  "001000011000",
  "011101101100",
  "100110111111",
  "111011011010",
  "101001101000",
  "010011110000",
  "110010110011",
  "111000000001",
  "101101110110",
  "111000001101",
  "011111001001",
  "010010110101",
  "001100010101",
  "111011110010",
  "100011000101",
  "111010000100",
  "011001111101",
  "111010011110",
  "111011111011",
  "110110011010",
  "011111011011",
  "010010001100",
  "110100111110",
  "010100111011",
  "110110011101",
  "110011010000",
  "110001001010",
  "000011000111",
  "100011101101",
  "101010100010",
  "110111001010",
  "100101101110",
  "111100101010",
  "110001011001",
  "011010011001",
  "000001111010",
  "001010101010",
  "010001110000",
  "001001111100",
  "011110000010",
  "000100010001",
  "110100000110",
  "010110111011",
  "001100111100",
  "111100011000",
  "011011011010",
  "111001001010",
  "110110100111",
  "001011000000",
  "000001110001",
  "101100011100",
  "100011000011",
  "001100010001",
  "000100111011",
  "001001110011",
  "100111111100",
  "111010001001",
  "101001000110",
  "001101000100",
  "110000000100",
  "111010110011",
  "000101110000",
  "010000010101",
  "000110111001",
  "100100100000",
  "110010001011",
  "110111100011",
  "101101101001",
  "100001100100",
  "000111010100",
];

// Part 1
// What is the power consumption of the submarine?

const bitSize = ratings[0].length;
const bitCountByPosition = [Array(bitSize).fill(0), Array(bitSize).fill(0)];

ratings.forEach((rating) => {
  const bits = rating.split("");

  bits.forEach((bit, index) => {
    bitCountByPosition[bit][index] += 1;
  });
});

let mostCommonRatingArr = [];

for (let index = 0; index < bitSize; index++) {
  const countOf0 = bitCountByPosition[0][index];
  const countOf1 = bitCountByPosition[1][index];

  if (countOf0 > countOf1) {
    mostCommonRatingArr.push(0);
  } else {
    mostCommonRatingArr.push(1);
  }
}

const gammaRate = parseInt(mostCommonRatingArr.join(""), 2);
const epsilonRate = parseInt(
  mostCommonRatingArr.map((bit) => (bit + 1) % 2).join(""),
  2
);

const powerConsumption = gammaRate * epsilonRate;

console.log(powerConsumption);

// Part 2

function getBitsInPosition(arr, position) {
  return arr.map((rating) => rating[position]);
}

function getMostCommonBit(bits) {
  const counts = [0, 0]; // corresponding to 0 and 1

  for (const bit of bits) {
    if (bit == 0) {
      counts[0]++;
    } else {
      counts[1]++;
    }
  }

  if (counts[0] > counts[1]) {
    return 0;
  }

  return 1;
}

let oxygenGeneratorRatings = [...ratings];
for (let position = 0; position < bitSize; position++) {
  // transpose the ratings in position
  const bits = getBitsInPosition(oxygenGeneratorRatings, position);
  const mostCommonBit = getMostCommonBit(bits);

  oxygenGeneratorRatings = oxygenGeneratorRatings.filter((rating) => {
    return rating[position] == mostCommonBit;
  });

  if (oxygenGeneratorRatings.length <= 1) {
    break;
  }
}

function getLeastCommonBit(bits) {
  const counts = [0, 0]; // corresponding to 0 and 1

  for (const bit of bits) {
    if (bit == 0) {
      counts[0]++;
    } else {
      counts[1]++;
    }
  }

  if (counts[1] < counts[0]) {
    return 1;
  }

  return 0;
}

let co2ScrubberRatings = [...ratings];
for (let position = 0; position < bitSize; position++) {
  // transpose the ratings in position
  const bits = getBitsInPosition(co2ScrubberRatings, position);
  const leastCommonBit = getLeastCommonBit(bits);

  co2ScrubberRatings = co2ScrubberRatings.filter((rating) => {
    return rating[position] == leastCommonBit;
  });

  if (co2ScrubberRatings.length <= 1) {
    break;
  }
}

const oxygenGeneratorRating = parseInt(oxygenGeneratorRatings.join(""), 2);
const co2ScrubberRating = parseInt(co2ScrubberRatings.join(""), 2);

const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;

console.log(lifeSupportRating);
