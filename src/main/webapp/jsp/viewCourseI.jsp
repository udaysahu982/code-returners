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
	
	
	<ul>
		
		<c:forEach var="section" items="${courseSections}">
                
                <li><div>${section.title}</div> <a>view</a> </li>
            </c:forEach>
	</ul>
	

</body>
</html>