test("Example", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");
});

test("TC-1: Testing convertIntegerToRoman with 1", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true});
});

test("TC-2: Testing convertIntegerToRoman with 3999", function(assert) {
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true});
});

test("TC-3: Testing convertIntegerToRoman with 58", function(assert) {
  assert.propEqual(convertIntegerToRoman(58), {value: "LVIII", message: '', result: true});
});

test("TC-4: Testing convertIntegerToRoman with 1994", function(assert) {
  assert.propEqual(convertIntegerToRoman(1994), {value: "MCMXCIV", message: '', result: true});
});

test("TC-5: Testing convertIntegerToRoman with 0", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false});
});

test("TC-6: Testing convertIntegerToRoman with 4000", function(assert) {
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false});
});

test("TC-7: Testing convertIntegerToRoman with -100", function(assert) {
  assert.propEqual(convertIntegerToRoman(-100), {value: 0, message: 'Please enter a valid integer', result: false});
});

test("TC-8: Testing convertIntegerToRoman with 'X'", function(assert) {
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false});
});

test("TC-9: Testing convertIntegerToRoman with 500", function(assert) {
  assert.propEqual(convertIntegerToRoman(500), {value: "D", message: '', result: true});
});

test("TC-10: Testing convertIntegerToRoman with 1000", function(assert) {
  assert.propEqual(convertIntegerToRoman(1000), {value: "M", message: '', result: true});
});

// For convertRomanToInteger
test("TC-11: Testing convertRomanToInteger with 'I'", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true});
});

test("TC-12: Testing convertRomanToInteger with 'MMMCMXCIX'", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true});
});

test("TC-13: Testing convertRomanToInteger with 'LVIII'", function(assert) {
  assert.propEqual(convertRomanToInteger("LVIII"), {value: 58, message: '', result: true});
});

test("TC-14: Testing convertRomanToInteger with 'MCMXCIV'", function(assert) {
  assert.propEqual(convertRomanToInteger("MCMXCIV"), {value: 1994, message: '', result: true});
});

test("TC-15: Testing convertRomanToInteger with 'IIII'", function(assert) {
  assert.propEqual(convertRomanToInteger("IIII"), {value: 0, message: 'Please enter a valid roman', result: false});
});

test("TC-16: Testing convertRomanToInteger with 'MMMM'", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false});
});
test("TC-17: Testing convertRomanToInteger with an empty string", function(assert) {
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false});
});


test("TC-18: Testing convertRomanToInteger with '111'", function(assert) {
  assert.propEqual(convertRomanToInteger("111"), {value: 0, message: 'Please enter a valid roman', result: false});
});

test("TC-19: Testing convertRomanToInteger with 'D'", function(assert) {
  assert.propEqual(convertRomanToInteger("D"), {value: 500, message: '', result: true});
});

test("TC-20: Testing convertRomanToInteger with 'M'", function(assert) {
  assert.propEqual(convertRomanToInteger("M"), {value: 1000, message: '', result: true});
});
