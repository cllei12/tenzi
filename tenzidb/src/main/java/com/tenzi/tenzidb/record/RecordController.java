/*
* In Spring Boot, the controller class is responsible for processing incoming REST API requests,
* preparing a model, and returning the view to be rendered as a response.
* */

package com.tenzi.tenzidb.record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/record")
public class RecordController {  // API Layer

    private final RecordService recordService;
    private final RecordRepository recordRepository;
    private final String localOrigin = "http://localhost:3000";
    private final String deployOrigin = "https://tenzi-game-ecru.vercel.app";

    @Autowired
    public RecordController(RecordService recordService, RecordRepository recordRepository) {
        this.recordService = recordService;
        this.recordRepository = recordRepository;
    }

    @GetMapping(path = "/getAll")  // http://localhost:8080/api/record/getAll
    @CrossOrigin(origins = {localOrigin, deployOrigin})
    public List<Record> getRecords() {
        return recordService.getRecords();
    }

    @GetMapping(path = "/getBestTime")  // http://localhost:8080/api/record/getBestTime
    @CrossOrigin(origins = {localOrigin, deployOrigin})
    public Optional<Record> getBestTime() {
        return recordRepository.findBestTime();
    }

    @GetMapping(path = "/getOrderByTime")  // http://localhost:8080/api/record/getOrderByTime
    @CrossOrigin(origins = {localOrigin, deployOrigin})
    public List<Record> getOrderByTime() {
        return recordRepository.orderByTime();
    }

    @PostMapping(path = "/add")
    @CrossOrigin(origins = {localOrigin, deployOrigin})
    public void addNewRecord(@RequestBody Record record) {
        recordService.addNewRecord(record);
    }

    @DeleteMapping(path = "/delete/{recordId}")
    @CrossOrigin(origins = {localOrigin, deployOrigin})
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
