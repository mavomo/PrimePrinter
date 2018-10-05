//
//  PrimePrinter.swift
//  primePrinter
//
//  Created by Emmanuel Courmont on 03/10/2018.
//  Copyright © 2018 Soat. All rights reserved.
//

import Foundation

class PrimePrinter {
    
    func print() -> String {
        let M = 1000
        let RR = 50
        let CC = 4
        let ORDMAX = 30
        var P = [Int](repeating: 0, count: M+1)
        var PAGENUMBER: Int
        var PAGEOFFSET: Int
        var ROWOFFSET: Int
        var C: Int
        var J: Int
        var K: Int
        var JPRIME: Bool = false
        var ORD: Int
        var SQUARE: Int
        var N = 0
        var MULT = [Int](repeating: 0, count: ORDMAX+1)
        J = 1
        K = 1
        P[1] = 2
        ORD = 2
        SQUARE = 9
        var text = ""
        while (K < M) {
            repeat {
                J = J + 2
                if (J == SQUARE) {
                    ORD = ORD + 1
                    SQUARE = P[ORD] * P[ORD]
                    MULT[ORD - 1] = J
                }
                N = 2
                JPRIME = true
                while (N < ORD && JPRIME) {
                    while (MULT[N] < J) {
                        MULT[N] = MULT[N] + P[N] + P[N]
                    }
                    if (MULT[N] == J) {
                        JPRIME = false
                    }
                    N = N + 1
                }
            } while (!JPRIME)
            K = K + 1
            P[K] = J
        }
        PAGENUMBER = 1
        PAGEOFFSET = 1
        
        while (PAGEOFFSET <= M) {
            text += "The First \(M) Prime numbers --- Page \(PAGENUMBER)\n\n"
            for  ROWOFFSET in PAGEOFFSET..<(PAGEOFFSET + RR) {
                for C in 0..<CC {
                    if (ROWOFFSET + C * RR <= M) {
                        text += "\(P[ROWOFFSET + C * RR])"
                        if C < CC - 1 {
                            text += " "
                        }
                    }
                }
                text += "\n"
            }
            text += "\n"
            PAGENUMBER = PAGENUMBER + 1
            PAGEOFFSET = PAGEOFFSET + RR * CC
        }
        Swift.print(text)
        return text
    }
}
