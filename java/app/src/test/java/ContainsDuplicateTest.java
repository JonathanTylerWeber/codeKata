import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class ContainsDuplicateTest {

    @Test
    void returnsFalseForEmptyArray() {
        assertFalse(ContainsDuplicate.containsDuplicate(new int[] {}));
    }

    @Test
    void returnsFalseForSingleElement() {
        assertFalse(ContainsDuplicate.containsDuplicate(new int[] {1}));
    }

    @Test
    void returnsTrueWhenDuplicateExists() {
        assertTrue(ContainsDuplicate.containsDuplicate(new int[] {1, 2, 3, 1}));
    }

    @Test
    void returnsFalseWhenAllUnique() {
        assertFalse(ContainsDuplicate.containsDuplicate(new int[] {1, 2, 3, 4}));
    }

    @Test
    void handlesMultipleDuplicates() {
        assertTrue(ContainsDuplicate.containsDuplicate(new int[] {1, 1, 2, 2, 3}));
    }

    @Test
    void handlesNegativeNumbers() {
        assertTrue(ContainsDuplicate.containsDuplicate(new int[] {-1, -2, -3, -1}));
        assertFalse(ContainsDuplicate.containsDuplicate(new int[] {-1, -2, -3}));
    }

    @Test
    void handlesZeros() {
        assertTrue(ContainsDuplicate.containsDuplicate(new int[] {0, 1, 2, 0}));
        assertFalse(ContainsDuplicate.containsDuplicate(new int[] {0, 1, 2}));
    }

    @Test
    void doesNotMutateInputArray() {
        int[] nums = new int[] {3, 2, 1, 0};
        int[] copy = nums.clone();

        ContainsDuplicate.containsDuplicate(nums);

        assertArrayEquals(copy, nums);
    }
}
