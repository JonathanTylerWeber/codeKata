import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class AddTest {
  @Test
  void addsTwoNumbers() {
    assertEquals(5, Add.add(2, 3));
  }
}
