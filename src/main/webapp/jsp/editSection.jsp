<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Section</title>
</head>
<body>

	<h1>Edit Section form</h1>
	
	<form action="/editSection" method="post">
			<table>
					<tr>
						 <td> <input name="id" type="hidden" value="${section.id}"></td>
					</tr>
					
					<tr>
						 <td> <input name="courseId" type="hidden" value="${section.courseId}"></td>
					</tr>
					
					<tr>
						<td><input name="title" value="${section.title}"></td>
					</tr>
					<tr>
						 <td><input type="submit" value="submit"></td>
					</tr>
			</table>
	</form>

</body>
</html>