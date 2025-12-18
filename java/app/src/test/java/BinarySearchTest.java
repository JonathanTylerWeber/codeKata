import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class BinarySearchTest {

    @Test
    void returnsMinusOneForEmptyArray() {
        assertEquals(-1, BinarySearch.binarySearch(new int[] {}, 10));
    }

    @Test
    void returnsMinusOneWhenNotFound() {
        assertEquals(-1, BinarySearch.binarySearch(new int[] {1, 3, 5, 7, 9}, 2));
    }

    @Test
    void findsMiddleElement() {
        assertEquals(2, BinarySearch.binarySearch(new int[] {1, 3, 5, 7, 9}, 5));
    }

    @Test
    void findsFirstElement() {
        assertEquals(0, BinarySearch.binarySearch(new int[] {1, 3, 5, 7, 9}, 1));
    }

    @Test
    void findsLastElement() {
        assertEquals(4, BinarySearch.binarySearch(new int[] {1, 3, 5, 7, 9}, 9));
    }

    @Test
    void worksWithNegativeNumbers() {
        assertEquals(1, BinarySearch.binarySearch(new int[] {-10, -3, 0, 4, 8}, -3));
        assertEquals(4, BinarySearch.binarySearch(new int[] {-10, -3, 0, 4, 8}, 8));
    }

    @Test
    void singleElementArrayFound() {
        assertEquals(0, BinarySearch.binarySearch(new int[] {42}, 42));
    }

    @Test
    void singleElementArrayNotFound() {
        assertEquals(-1, BinarySearch.binarySearch(new int[] {42}, 7));
    }

    @Test
    void worksWithDuplicatesReturnsValidMatchingIndex() {
        int[] arr = new int[] {1, 2, 2, 2, 3, 4};
        int idx = BinarySearch.binarySearch(arr, 2);
        assertTrue(idx >= 1 && idx <= 3, "index should be within the duplicate range");
        assertEquals(2, arr[idx]);
    }

    @Test
    void handlesLargeInput() {
        int n = 10_000;
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = i * 2;

        assertEquals(0, BinarySearch.binarySearch(arr, 0));
        assertEquals(9999, BinarySearch.binarySearch(arr, 19998));
        assertEquals(-1, BinarySearch.binarySearch(arr, 19999));
    }

    @Test
    void doesNotMutateArray() {
        int[] arr = new int[] {1, 3, 5, 7, 9};
        int[] copy = arr.clone();

        BinarySearch.binarySearch(arr, 7);

        assertArrayEquals(copy, arr);
    }
}
