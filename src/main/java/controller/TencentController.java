package controller;

import bean.TencentReport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/key")
public class TencentController {
    private final static Logger logger = LoggerFactory.getLogger(TencentController.class);
    @RequestMapping("/getReport")
    public TencentReport getReport() {
        logger.info("------------calling get report at " + new Date(System.currentTimeMillis()) + "---------------");
        TencentReport report = new TencentReport();
        report.setCompany("Tencent");
        report.setLanguages();
        report.getLanguages().put("Java", 80);
        report.getLanguages().put("C++", 10);
        report.getLanguages().put("Swift", 5);
        report.getLanguages().put("Groovy", 5);
        return report;
    }
}