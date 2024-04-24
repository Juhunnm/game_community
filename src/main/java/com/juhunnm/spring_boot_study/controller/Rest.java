package com.juhunnm.spring_boot_study.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class Rest {

    @GetMapping("/test")
    public String hello() {
        return "Hello from Spring Boot!";
    }

    @GetMapping("/api/data")
    public String fetchData() {
        return "Data from Spring Boot";
    }




    
}
//@RestController
//@Slf4j
//public class Rest {
//    @GetMapping("/dummy")
//    public String dummy() {
//        log.info("dummy");
//        return "{}";
//    }
//    @GetMapping("/dummy2")
//    public String dummy2() {
//        log.info("dummy2");
//        return "dummy2";
//    }
//    @GetMapping("/member")
//    public String getMember(@RequestParam("empNo") String empNo,@RequestParam("year") int year) {
//        log.info("empNo : {}",empNo);
//        log.info("year : {}",year);
//        return "ok";
//    }
//    @GetMapping("/company/{id}")
//    public String getCompany(@PathVariable("id") String id) {
//        log.info("id : {}",id);
//        return "ok";
//    }
//    @PostMapping("/item")
//    public ResponseDto registerItem(@RequestBody ItemDto item){
//        log.info("item : {}",item);
//        ResponseDto responseDto = new ResponseDto();
//        responseDto.setMessage("success");
//        return responseDto;
//
//    }
//}
