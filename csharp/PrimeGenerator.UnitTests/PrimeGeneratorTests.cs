using System;
using System.IO;
using System.Linq;
using System.Reflection;
using NFluent;
using Xunit;

namespace PrimeGenerator.UnitTests
{
    public class PrimeGeneratorTests
    {
        private const string GoldenMasterPath = @".\gold.txt";
        private const string OutputsPath      = @".\out.txt";

        private StreamWriter _streamWriter;

        /**
         * Chemin vers le répertoire /bin où est copié le golden master lors du build.
         * Cf. https://stackoverflow.com/questions/3461865/#answer-3461871
         */
        private static string BinaryDirectoryPath =>
            Path.GetDirectoryName(Assembly.GetExecutingAssembly()
                                          .GetName()
                                          .CodeBase)
                ?.Replace(@"file:\", "");

        [Fact]
        public void Main_Should_Output_Equivalent_Of_Golden_Master()
        {
            // Arrange
            RedirectConsoleOutputToLeadFile();

            // Act
            PrimePrinter.Main(new string[0]);

            // Assert
            ResetConsoleOutput();
            AssertTextFilesHaveSameContent(GoldenMasterPath, OutputsPath);
        }

        private static void AssertTextFilesHaveSameContent(string expectedFilePath, string actualFilePath)
        {
            var expectedLines   = File.ReadAllLines(Path.Combine(BinaryDirectoryPath, expectedFilePath));
            var actualLines     = File.ReadAllLines(Path.Combine(BinaryDirectoryPath, actualFilePath));
            var unexpectedLines = actualLines.Except(expectedLines);
            Check.That(unexpectedLines).IsEmpty();
        }

        private void RedirectConsoleOutputToLeadFile()
        {
            Directory.SetCurrentDirectory(BinaryDirectoryPath);
            _streamWriter = new StreamWriter(OutputsPath)
            {
                AutoFlush = true
            };
            Console.SetOut(_streamWriter);
        }

        private void ResetConsoleOutput()
        {
            _streamWriter.Close();
            Console.SetOut(Console.Out);
        }
    }
}
