package fr.soat.ms_clean_code;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import java.io.*;

public class PrimePrinterTest {

    private String leadFile;

    @Before
    public void setup() throws Exception {
        generateLeadFile();
    }

    @Test
    public void makeSureOutputMatchesGold() throws Exception {
        fr.soat.ms_clean_code.PrimePrinter.main(new String[0]);
        BufferedReader lead = new BufferedReader(new FileReader(leadFile));

        String goldFilePath = new File("gold.txt").getAbsolutePath();
        BufferedReader gold = new BufferedReader(new FileReader(goldFilePath));
        String line;
        while ((line= gold.readLine()) != null)
            Assertions.assertThat(line).isEqualTo(lead.readLine());

        Assertions.assertThat(lead.readLine()).isNull();

    }

    private void generateLeadFile() throws FileNotFoundException {
        leadFile = new File("lead.txt").getAbsolutePath();
        FileOutputStream fileOutputStream = new FileOutputStream(leadFile);
        System.setOut(new PrintStream(fileOutputStream));
    }


}