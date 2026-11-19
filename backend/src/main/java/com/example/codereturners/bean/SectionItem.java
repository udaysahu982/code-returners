package com.example.codereturners.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "section_item")
public class SectionItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column( nullable = false)
    private Long courseId;

    @Column( nullable = false)
    private Long sectionId;

    @Column(name = "title", nullable = false, length = 200)
    private String title;

    @Lob
    @Column(name = "file_data", columnDefinition = "LONGBLOB")
    private byte[] file;

    @Column(name = "vid_link", length = 1000)
    private String vidLink;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    // No-argument constructor
    public SectionItem() {
        super();
    }

    // Parameterized constructor
    public SectionItem(Long courseId, Long sectionId,
                       String title, byte[] file,
                       String vidLink, String description) {
        this.courseId = courseId;
        this.sectionId = sectionId;
        this.title = title;
        this.file = file;
        this.vidLink = vidLink;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public Long getSectionId() {
        return sectionId;
    }

    public void setSectionId(Long sectionId) {
        this.sectionId = sectionId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getVidLink() {
        return vidLink;
    }

    public void setVidLink(String vidLink) {
        this.vidLink = vidLink;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "SectionItem [id=" + id
                + ", courseId=" + courseId
                + ", sectionId=" + sectionId
                + ", title=" + title
                + ", file=" + (file != null ? file.length + " bytes" : "null")
                + ", vidLink=" + vidLink
                + ", description=" + description + "]";
    }
}
