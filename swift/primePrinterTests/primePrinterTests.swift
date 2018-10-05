//
//  primePrinterTests.swift
//  primePrinterTests
//
//  Created by Emmanuel Courmont on 03/10/2018.
//  Copyright © 2018 Soat. All rights reserved.
//

import XCTest
@testable import primePrinter

class primePrinterTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testPrint() {
        let expected = self.readGoldFile()
        let primePrinter = PrimePrinter()
        XCTAssertEqual(expected, primePrinter.print())
    }

    private func readGoldFile() -> String {
        let bundle = Bundle(for: type(of: self))
        guard
            let fileUrl = bundle.url(forResource: "Gold", withExtension: "txt"),
            let fileContent = try? String(contentsOf: fileUrl)
            else { return "" }

        return fileContent
    }


}
