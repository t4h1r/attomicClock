package AtomicClock;
import java.time.Instant;
import java.util.Date;
import java.util.TimeZone;

class Main {
    public static void main(String[] args) {
        Instant instant = Instant. now();

        Date now = new Date();
        TimeZone.setDefault(TimeZone.getTimeZone("Europe/London"));
        System.out.println(now);
    }
}


