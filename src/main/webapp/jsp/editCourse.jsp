<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Edit course </title>
</head>
<body>

			<h1>Edit Course</h1>

<div>
		
		<form action="/editCourse/${course.id}" method="post">
			
				<table>
				
						<tr>
							 <td><input name="facultyId" type="number"  value="${course.facultyId}"></td>
						</tr>
						
						<tr>
							 <td><input name="category_id" type="number"  value="${course.category_id}"></td>
						</tr>
						
						
				
						<tr>
							 <td><input name="title" type="text"  value="${course.title }"></td>
						</tr>
						
						<tr>
							 <td><input name="description" type="text"  value="${course.description}"></td>
						</tr>
												
						<tr>
							 <td><input name="level" type="text"  value="${course.level}"></td>
						</tr>
						
						<tr>
							 <td><input name="price" type="number" value="${course.price}"></td>
						</tr>
						
						<tr>
							 <td><input type="submit" value="edit"></td>
						</tr>
				</table>
		</form>

</div>

</body>
</html>