<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Section page</title>
</head>
<body>

<form action="/addSection" method="post">
	<input type="hidden" name="courseId" value="${id}">
	<input type="text" name="title">
	<input type="submit" value="add">
</form>

</body>
</html>