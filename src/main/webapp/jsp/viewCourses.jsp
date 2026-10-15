<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>View Courses</title>
</head>
<body>

    <h2>All Courses</h2>

    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Level</th>
                <th>Price</th>
                <th>Creation Date</th>
                <th>Edit</th>
                <th>Delete</th>
                
            </tr>
        </thead>

        <tbody>
            <c:forEach var="course" items="${courses}">
                <tr>
                    <td>${course.id}</td>
                    <td><c:out value="${course.title}"/></td>
                    <td><c:out value="${course.description}"/></td>
                    <td><c:out value="${course.level}"/></td>
                    <td>${course.price}</td>
                    <td>${course.creationDate}</td>
                    <td><a href="/editCourse?id=${course.id}">edit</a></td>
                    <td><a href="">delete</a></td>
                </tr>
            </c:forEach>
        </tbody>
    </table>

</body>
</html>