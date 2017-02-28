package controller;

import bean.TencentReport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/key")
public class TencentController {
    private final static Logger logger = LoggerFactory.getLogger(TencentController.class);
    @RequestMapping("/getReport")
    public TencentReport getReport() {
        logger.info("------------calling get report---------------");
        TencentReport report = new TencentReport();
        report.setKey("test");
        return report;
    }
}