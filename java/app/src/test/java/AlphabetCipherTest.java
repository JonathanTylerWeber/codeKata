import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class AlphabetCipherTest {

    @Test
    void encodesSampleFromPrompt() {
        assertEquals("egsgqwtahuiljgs",
                AlphabetCipher.encode("meetmebythetree", "scones"));
    }

    @Test
    void decodesSampleFromPrompt() {
        assertEquals("meetmebythetree",
                AlphabetCipher.decode("egsgqwtahuiljgs", "scones"));
    }

    @Test
    void roundTripsSimpleInputs() {
        String msg = "helloworld";
        String key = "abc";
        String c = AlphabetCipher.encode(msg, key);
        assertEquals(msg, AlphabetCipher.decode(c, key));
    }

    @Test
    void normalizesCase() {
        assertEquals("egsgqwtahuiljgs",
                AlphabetCipher.encode("MeetMeByTheTree", "SCONES"));
    }

    @Test
    void ignoresNonLettersInMessageAndKeyword() {
        assertEquals("egsgqwtahuiljgs",
                AlphabetCipher.encode("meet me by the tree!!", "sco-nes"));
    }

    @Test
    void returnsEmptyIfMessageBecomesEmptyAfterNormalization() {
        assertEquals("", AlphabetCipher.encode("!!!", "scones"));
    }

    @Test
    void throwsIfKeywordHasNoLettersAfterNormalization() {
        assertThrows(IllegalArgumentException.class, () ->
                AlphabetCipher.encode("meetmebythetree", "!!!"));
        assertThrows(IllegalArgumentException.class, () ->
                AlphabetCipher.decode("egsgqwtahuiljgs", "!!!"));
    }
}
