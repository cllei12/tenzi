package com.tenzi.tenzidb.record;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {
//    // select * from users where userid = ?
    @Query("SELECT min(time) from Record ")
    Optional<Record> findBestTime();

    @Query("SELECT r from Record r order by r.time")
    List<Record> orderByTime();

//    @Modifying
//    @Query(
//            value = "truncate table record;",
//            nativeQuery = true
//    )
//    void truncateMyTable();
}
