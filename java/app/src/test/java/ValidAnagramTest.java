import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class ValidAnagramTest {

    @Test
    void returnsTrueForSimpleAnagram() {
        assertTrue(ValidAnagram.validAnagram("racecar", "carrace"));
    }

    @Test
    void returnsFalseWhenCharactersDiffer() {
        assertFalse(ValidAnagram.validAnagram("jar", "jam"));
    }

    @Test
    void returnsTrueForIdenticalStrings() {
        assertTrue(ValidAnagram.validAnagram("abc", "abc"));
    }

    @Test
    void returnsFalseWhenLengthsDiffer() {
        assertFalse(ValidAnagram.validAnagram("ab", "abc"));
    }

    @Test
    void handlesRepeatedCharacters() {
        assertTrue(ValidAnagram.validAnagram("aabbcc", "ccbbaa"));
        assertFalse(ValidAnagram.validAnagram("aabbcc", "ccbbba"));
    }

    @Test
    void handlesSingleCharacterStrings() {
        assertTrue(ValidAnagram.validAnagram("a", "a"));
        assertFalse(ValidAnagram.validAnagram("a", "b"));
    }

    @Test
    void returnsTrueForEmptyStrings() {
        assertTrue(ValidAnagram.validAnagram("", ""));
    }

    @Test
    void doesNotMutateInputs() {
        String s = "anagram";
        String t = "nagaram";

        ValidAnagram.validAnagram(s, t);

        assertEquals("anagram", s);
        assertEquals("nagaram", t);
    }
}
