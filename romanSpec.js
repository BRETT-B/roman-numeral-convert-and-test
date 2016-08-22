describe("Converting Integers into Roman Numerals", function(){
	it("Should convert integer to a string", function(){
		var convert = convertToRoman(1009);
		expect(typeof(convert)).toBe('string');
	});
	it("Should check if an integer has a length of 4. Add an 'M' to romanNumeral", function(){
		expect(convertToRoman(1009)).toContain('M');
	});
	it("Should check if an integer is 1. Add an 'I' to romanNumeral", function(){
		expect(convertToRoman(1)).toContain('I');
	});it("Should check if an integer is 2. Add an 'II' to romanNumeral", function(){
		expect(convertToRoman(2)).toContain('II');
	});it("Should check if an integer is 3. Add an 'III' to romanNumeral", function(){
		expect(convertToRoman(3)).toContain('III');
	});it("Should check if an integer is 4. Add an 'IV' to romanNumeral", function(){
		expect(convertToRoman(4)).toContain('IV');
	});it("Should check if an integer is 5. Add an 'V' to romanNumeral", function(){
		expect(convertToRoman(5)).toContain('V');
	});it("Should check if an integer is 6. Add an 'VI' to romanNumeral", function(){
		expect(convertToRoman(6)).toContain('VI');
	});it("Should check if an integer is 7. Add an 'VII' to romanNumeral", function(){
		expect(convertToRoman(7)).toContain('VII');
	});it("Should check if an integer is 8. Add an 'VIII' to romanNumeral", function(){
		expect(convertToRoman(8)).toContain('VIII');
	});it("Should check if an integer is 9. Add an 'IX' to romanNumeral", function(){
		expect(convertToRoman(9)).toContain('IX');
	});it("Should check if an integer is 40. Add an 'XL' to romanNumeral", function(){
		expect(convertToRoman(40)).toContain('XL');
	});it("Should check if an integer is 50. Add an 'L' to romanNumeral", function(){
		expect(convertToRoman(50)).toContain('L');
	});it("Should check if an integer is 90. Add an 'XC' to romanNumeral", function(){
		expect(convertToRoman(90)).toContain('XC');
	});it("Should check if an integer is 100. Add an 'C' to romanNumeral", function(){
		expect(convertToRoman(100)).toContain('C');
	});it("Should check if an integer is 400. Add an 'CD' to romanNumeral", function(){
		expect(convertToRoman(400)).toContain('CD');
	});it("Should check if an integer is 500. Add an 'D' to romanNumeral", function(){
		expect(convertToRoman(500)).toContain('D');
	});it("Should check if an integer is 900. Add an 'CM' to romanNumeral", function(){
		expect(convertToRoman(900)).toContain('CM');
	});

});