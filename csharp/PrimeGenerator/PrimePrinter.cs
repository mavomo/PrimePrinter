using System;

namespace PrimeGenerator
{
    public class PrimePrinter
    {
        public static void Main(string[] args)
        {
            const int M = 1000;
            const int RR = 50;
            const int CC = 4;
            const int ORDMAX = 30;
            var P = new int[M + 1];
            int PAGENUMBER;
            int PAGEOFFSET;
            int ROWOFFSET;
            int C;
            int J;
            int K;
            bool JPRIME;
            int ORD;
            int SQUARE;
            var N = 0;
            var MULT = new int[ORDMAX + 1];

            J = 1;
            K = 1;
            P[1] = 2;
            ORD = 2;
            SQUARE = 9;

            while (K < M)
            {
                do
                {
                    J += 2;
                    if (J == SQUARE)
                    {
                        ORD++;
                        SQUARE = P[ORD] * P[ORD];
                        MULT[ORD - 1] = J;
                    }
                    N = 2;
                    JPRIME = true;
                    while (N < ORD && JPRIME)
                    {
                        while (MULT[N] < J)
                            MULT[N] += P[N] + P[N];
                        if (MULT[N] == J)
                            JPRIME = false;
                        N++;
                    }
                } while (!JPRIME);
                K++;
                P[K] = J;
            }
            PAGENUMBER = 1;
            PAGEOFFSET = 1;
            while (PAGEOFFSET <= M)
            {
                Console.Write("The First ");
                Console.Write(M);
                Console.Write(" Prime Numbers --- Page ");
                Console.Write(PAGENUMBER);
                Console.WriteLine("\n");
                for (ROWOFFSET = PAGEOFFSET; ROWOFFSET <= PAGEOFFSET + RR - 1; ROWOFFSET++)
                {
                    for (C = 0; C <= CC - 1; C++)
                        if (ROWOFFSET + C * RR <= M)
                            Console.Write("{0} ", P[ROWOFFSET + C * RR]);
                    Console.WriteLine();
                }
                Console.WriteLine("");

                PAGENUMBER++;
                PAGEOFFSET += RR * CC;
            }
        }
    }
}