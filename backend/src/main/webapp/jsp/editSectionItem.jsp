<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Section Item</title>
</head>
<body>

	 <h1>Edit Section Item</h1>

    <form action="/editSectionItem?id=${item.id}"
          method="post"
          enctype="multipart/form-data">

        <!-- Course and Section IDs -->
        <input type="hidden" name="courseId" value="${item.courseId}">
        <input type="hidden" name="sectionId" value="${item.sectionId}">

        <!-- Title -->
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title" value="${item.title}"
               maxlength="200" ><br><br>

        <!-- Description -->
        <label for="description">Description:</label><br>
        <textarea id="description" name="description" 
                  rows="5" cols="40"> ${item.description} </textarea><br><br>

        <!-- File Upload -->
        <c:if test="${not empty item.file}">
    			<p>Current file:</p>
    			<a href="/viewSectionItemFile?id=${item.id}"
       				target="_blank" rel="noopener noreferrer">
        			 View Current File
    			</a>
		</c:if>

						<br>

		<label for="file">Upload Replacement File:</label><br>
		<input type="file" id="file" name="uploadedFile"
       	accept=".pdf,.doc,.docx,.ppt,.pptx,.txt">
       
       
        <!-- Video Link -->
        <label for="vidLink">Video URL:</label><br>
        <input type="url" id="vidLink" name="vidLink" value="${item.vidLink}"
               maxlength="1000"
               placeholder="https://example.com/video"><br><br>

        <!-- Submit -->
        <button type="submit">Edit Section Item</button>
    </form>

    <br>

    <a href="/openViewSectionItems?courseId=${courseId}&sectionId=${sectionId}">
        Back to Section Items
    </a>
	

</body>
</html>