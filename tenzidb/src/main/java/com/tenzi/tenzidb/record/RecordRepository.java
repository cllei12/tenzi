package com.tenzi.tenzidb.record;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {
//    // select * from users where userid = ?
//    @Query("SELECT u from  u where u.recordID = ?1")
//    Optional<Record> findUsersByRecordID(Long recordId);
}
