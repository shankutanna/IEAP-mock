package com.ieap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    public Map<String, Object> health() {
        RestTemplate restTemplate = new RestTemplate();

        String pythonStatus;
        try {
            pythonStatus = restTemplate
                    .getForObject("http://python-svc:8000/parser/health", String.class);
        } catch (Exception e) {
            pythonStatus = "DOWN";
        }

        return Map.of(
                "service", "java-backend",
                "status", "UP",
                "python", pythonStatus
        );
    }
}
