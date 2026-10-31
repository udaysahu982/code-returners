<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add Section Item</title>
</head>
<body>

    <h1>Add Section Item</h1>

    <form action="/addSectionItem"
          method="post"
          enctype="multipart/form-data">

        <!-- Course and Section IDs -->
        <input type="hidden" name="courseId" value="${courseId}">
        <input type="hidden" name="sectionId" value="${sectionId}">

        <!-- Title -->
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title"
               maxlength="200" required><br><br>

        <!-- Description -->
        <label for="description">Description:</label><br>
        <textarea id="description" name="description"
                  rows="5" cols="40"></textarea><br><br>

        <!-- File Upload -->
        <label for="file">Upload File (PDF or other supported file):</label><br>
        <input type="file" id="file" name="uploadedFile"
               accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"><br><br>

        <!-- Video Link -->
        <label for="vidLink">Video URL:</label><br>
        <input type="url" id="vidLink" name="vidLink"
               maxlength="1000"
               placeholder="https://example.com/video"><br><br>

        <!-- Submit -->
        <button type="submit">Add Section Item</button>
    </form>

    <br>

    <a href="/openViewSectionItems?courseId=${courseId}&sectionId=${sectionId}">
        Back to Section Items
    </a>

</body>
</html>
