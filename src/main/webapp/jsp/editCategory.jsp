<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Edit Category</title>
</head>
<body>

    <h1>Edit Category</h1>

    <form action="/updateCategory"
          method="post">

        <input type="hidden" name="id" value="${category.id}">

        <input type="text"
               name="name"
               value="${category.name}"
               required>

        <input type="submit" value="Update">

    </form>

    <a href="/viewAllCategory">
        Back to Categories
    </a>

</body>
</html>