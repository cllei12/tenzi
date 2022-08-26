package com.tenzi.tenzidb.record;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RecordService {
    private final RecordRepository recordRepository;

    @Autowired
    public RecordService(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

    public List<Record> getRecords() {
        return recordRepository.findAll();
    }

    public void addNewRecord(Record record) {
//        Optional<Record> usersOptional = recordRepository.findUsersByRecordID(record.getRecordID());
//        if (usersOptional.isPresent()){
//            throw new IllegalStateException("Record ID taken");
//        }
        recordRepository.save(record);
    }

    public void deleteRecord(Long recordId) {
        boolean exists = recordRepository.existsById(recordId);
        if (!exists) {
            throw new IllegalStateException("Record " + recordId + " doesn't exist");
        }
        recordRepository.deleteById(recordId);
    }

    public Optional<Record> getRecordsByRecordId(Long recordId) {
        return recordRepository.findById(recordId);
    }

//    @Transactional
//    public void truncateMyTable() {
//        recordRepository.truncateMyTable();
//    }
}
