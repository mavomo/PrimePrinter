class PrimePrinter {
	
	static print() {
		let M = 1000;
		let RR = 50;
		let CC = 4;
		let ORDMAX = 30;
		let P = new Array(M + 1);
		let PAGENUMBER;
		let PAGEOFFSET;
		let ROWOFFSET;
		let C;
		let J;
		let K;
		let JPRIME;
		let ORD;
		let SQUARE;
		let N = 0;
		let MULT = new Array(ORDMAX + 1);
		J = 1;
		K = 1;
		P[1] = 2;
		ORD = 2;
		SQUARE = 9;
		let text = "";
		while (K < M) {
			do {
				J = J + 2;
				if (J == SQUARE) {
					ORD = ORD + 1;
					SQUARE = P[ORD] * P[ORD];
					MULT[ORD - 1] = J;
				}
				N = 2;
				JPRIME = true;
				while (N < ORD && JPRIME) {
					while (MULT[N] < J)
						MULT[N] = MULT[N] + P[N] + P[N];
					if (MULT[N] == J)
						JPRIME = false;
					N = N + 1;
				}
			} while (!JPRIME);
			K = K + 1;
			P[K] = J;
		}
		PAGENUMBER = 1;
		PAGEOFFSET = 1;
		
		while (PAGEOFFSET <= M) {
			text += "The First " + M + " Prime numbers --- Page " + PAGENUMBER + " \n";
			for (ROWOFFSET = PAGEOFFSET; ROWOFFSET < PAGEOFFSET + RR; ROWOFFSET++) {
				for (C = 0; C < CC; C++)
					if (ROWOFFSET + C * RR <= M)
						text += P[ROWOFFSET + C * RR] + " ";
				text += "\n";
			}
			text += '\f';
			PAGENUMBER = PAGENUMBER + 1;
			PAGEOFFSET = PAGEOFFSET + RR * CC;
		}
		console.log(text);
		return text;
	}
}

module.exports = PrimePrinter;