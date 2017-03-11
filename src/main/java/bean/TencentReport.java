package bean;

import java.util.HashMap;
import java.util.Map;

public class TencentReport {
    private String company;
    private Map<String, Integer> Languages;

    public TencentReport() {
        setLanguages();
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public Map<String, Integer> getLanguages() {
        return Languages;
    }

    public void setLanguages() {
        Languages = new HashMap<>();
    }
}
