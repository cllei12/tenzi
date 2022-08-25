package com.tenzi.tenzidb.record;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table
public class Record {
    // create user table
    @Id
    @SequenceGenerator(
            name = "record_sequence",
            sequenceName = "record_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "record_sequence"
    )
    private Long recordID;
    private Long userID;
    private String name;
    private LocalDateTime recordTime;
    private Long time;
    private int rolls;


    public Record(Long recordID, Long userID, String name, LocalDateTime recordTime, Long time, int rolls) {
        this.recordID = recordID;
        this.userID = userID;
        this.name = name;
        this.recordTime = recordTime;
        this.time = time;
        this.rolls = rolls;
    }

    public Record(Long userID, String name, LocalDateTime recordTime, Long time, int rolls) {
        this.userID = userID;
        this.name = name;
        this.recordTime = recordTime;
        this.time = time;
        this.rolls = rolls;
    }

    public Record() {

    }

    public Long getRecordID() {
        return recordID;
    }

    public void setRecordID(Long recordID) {
        this.recordID = recordID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getRecordTime() {
        return recordTime;
    }

    public void setRecordTime(LocalDateTime recordTime) {
        this.recordTime = recordTime;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public int getRolls() {
        return rolls;
    }

    public void setRolls(int rolls) {
        this.rolls = rolls;
    }

    @Override
    public String toString() {
        return "Record{" +
                "recordID=" + recordID +
                ", userID=" + userID +
                ", name='" + name + '\'' +
                ", recordTime=" + recordTime +
                ", time=" + time +
                ", rolls=" + rolls +
                '}';
    }
}
