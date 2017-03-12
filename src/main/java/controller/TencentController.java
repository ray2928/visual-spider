package controller;

import report.Language;
import report.TencentReport;
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
        report.getLanguages().add(new Language("Java", 80));
        report.getLanguages().add(new Language("Groovy", 10));
        report.getLanguages().add(new Language("C++", 5));
        report.getLanguages().add(new Language("Swift", 5));
        return report;
    }
}