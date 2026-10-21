<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="jakarta.tags.core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Course for Instructor</title>
</head>
<body>

	<h1>The title of course is</h1>
	
	<div>Add section <a href="/openAddSection?id=${courseId}">add section</a></div>
	
	
	<table border="1" cellpadding="10" cellspacing="0">
	
	<tr>
	<th>topic name</th>
	<th>view</th>
	<th>add content</th>
	<th>delete</th>
	</tr>
	
	<c:forEach var="section" items="${courseSections}">
	
				<tr>
					<td>${section.title}</td>
				
                	<td><a>view</a></td>
               
                	<td><a href="/openEditSection?id=${section.id}">Edit</a></td>
                
                	<td><a href="deleteSection>id=${section.id}">delete</a></td>
                </tr>
                
                
            </c:forEach>
	
	
	</table>
	
	<ul>
		
		
	</ul>
	

</body>
</html>