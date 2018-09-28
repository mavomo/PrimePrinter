package fr.soat.ms_clean_code;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.io.*;

public class PrimePrinterTest {

    private PrintStream out;

    @Before
    public void setup() throws FileNotFoundException {
        out = System.out;
        System.setOut(new PrintStream(new FileOutputStream("lead.txt")));
    }

    @After
    public void teardown() {
        System.setOut(out);
        new File("lead.txt").delete();
    }

    @Test
    public void makeSureOutputMatchesGold() throws Exception {
        PrimePrinter.main(new String[0]);
        BufferedReader lead = new BufferedReader(new FileReader("lead.txt"));
        BufferedReader gold = new BufferedReader(new FileReader("gold.txt"));

        String line;
        while ((line = gold.readLine()) != null) {
            Assert.assertEquals(line, lead.readLine());
        }

        Assert.assertNull(lead.readLine());
    }


}