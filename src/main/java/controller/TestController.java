package controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ruixie on 2/26/17.
 */
@RestController
@RequestMapping("/get")
public class TestController {
    private final static Logger logger = LoggerFactory.getLogger(TestController.class);
    @RequestMapping("/name")
    public String getReport() {
        logger.info("------------calling api---------------");
        return "Ray";
    }
}
