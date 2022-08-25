/*
* In Spring Boot, the controller class is responsible for processing incoming REST API requests,
* preparing a model, and returning the view to be rendered as a response.
* */

package com.tenzi.tenzidb.record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(path = "api/record")
public class RecordController {  // API Layer

    private final RecordService recordService;

    @Autowired
    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @GetMapping(path = "/getAll")  // http://localhost:8080/api/record/getAll
    public List<Record> getUsers() {
        return recordService.getRecords();
    }

    @PostMapping(path = "/add")
    public void addNewRecord(@RequestBody Record record) {
        recordService.addNewRecord(record);
    }

    @DeleteMapping(path = "/delete/{recordId}")
    public void deleteRecord(@PathVariable("recordId") Long recordId) {
        recordService.deleteRecord(recordId);
    }

//    @PutMapping(path = "/update/{recordId}")
//    public void updateRecord(
//            @PathVariable("recordId") Long recordId,
//            @RequestParam(required = false) LocalDateTime recordTime,
//            @RequestParam(required = false) Long time,
//            @RequestParam(required = false) int time
//    ) {
//        recordService.updateRecord(recordId, recordTime, time, time)
//    }

}
