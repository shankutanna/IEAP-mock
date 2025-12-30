package com.ieap.employee.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
@RestController
public class EmployeeController {
  @GetMapping("/health")
  public Map<String,String> health(){ return Map.of("status","ok","service","employee-service"); }
  @GetMapping("/employees")
  public Map<String,Object> employees(){
    return Map.of("count",2,"employees", new String[]{"Alice","Bob"});
  }
}
