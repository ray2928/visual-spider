package report;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TencentReport {
    private String company;
    private List Languages;

    public TencentReport() {
        setLanguages();
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public List getLanguages() {
        return Languages;
    }

    public void setLanguages() {
        Languages = new ArrayList<Language>();
    }
}
