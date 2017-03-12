package report;

/**
 * Created by ruixie on 3/11/17.
 */
public class Language {
    private String name;
    private int percentage;

    public Language(String name, int percentage) {
        setName(name);
        setPercentage(percentage);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }
}
