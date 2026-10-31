<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>View Categories</title>
</head>
<body>

    <h1>All Categories</h1>

    <a href="/openAddCategory">
        Add New Category
    </a>

    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            <c:forEach var="cat" items="${categories}">
                <tr>
                    <td>${cat.id}</td>
                    <td><c:out value="${cat.name}"/></td>

                    <td>
                        <a href="/openEditCategory?id=${cat.id}">
                            Edit
                        </a>
                    </td>

                    <td>
                      <a href="/deleteCategory?id=${cat.id}">
                      Delete</a>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>

</body>
</html>