class PrimePrinter {
	
	static print() {
		let finIteration = 1000;
		let numberItemByPage = 50;
		let numberColum = 4;
		let length = 30;
		let P = new Array(finIteration + 1);
		let PAGENUMBER;
		let PAGEOFFSET;
		let ROWOFFSET;
		let C;
		let J;
		let Iteration;
		let JPRIME;
		let ORD;
		let SQUARE;
		let N = 0;
		let MULT = new Array(length + 1);
		let primesToPrint = "";
		J = 1;
		Iteration = 1;
		P[1] = 2;
		ORD = 2;
		SQUARE = 9;
		
		let J2 = J;
		let SQUARE2 = SQUARE;
		let N2 = N;
		let Iteration2 = Iteration;
		let ORD2 = ORD;
		let JPRIME2 = JPRIME;
		while (Iteration2 < finIteration) {
			do {
				J2 = J2 + 2; //3
				if (J2 == SQUARE2) { // J == 9
					ORD2 = ORD2 + 1; //3
					SQUARE2 = P[ORD2] * P[ORD2];
					MULT[ORD2 - 1] = J2;
				}
				N2 = 2;
				JPRIME2 = true;
				while (N2 < ORD2 && JPRIME2) {
					while (MULT[N2] < J2)
						MULT[N2] = MULT[N2] + P[N2] + P[N2];
					if (MULT[N2] == J2)
						JPRIME2 = false;
					N2 = N2 + 1;
				}
			} while (!JPRIME2);
			Iteration2 = Iteration2 + 1;
			P[Iteration2] = J2;
		}
		PAGENUMBER = 1;
		PAGEOFFSET = 1;
		
		while (PAGEOFFSET <= finIteration) {
			primesToPrint += "The First " + finIteration + " Prime numbers --- Page " + PAGENUMBER + " \n";
			for (ROWOFFSET = PAGEOFFSET; ROWOFFSET < PAGEOFFSET + numberItemByPage; ROWOFFSET++) {
				for (C = 0; C < numberColum; C++)
					if (ROWOFFSET + C * numberItemByPage <= finIteration)
						primesToPrint += P[ROWOFFSET + C * numberItemByPage] + " ";
				primesToPrint += "\n";
			}
			primesToPrint += '\f';
			PAGENUMBER = PAGENUMBER + 1;
			PAGEOFFSET = PAGEOFFSET + numberItemByPage * numberColum;
		}
		console.log(primesToPrint);
		return primesToPrint;
	}
}

module.exports = PrimePrinter;
