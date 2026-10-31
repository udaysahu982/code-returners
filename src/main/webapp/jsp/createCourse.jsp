<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Create Course Page</title>
</head>
<body>

<div>

		<form action="/createCourse" method="post">
			
				<table>
				
						<tr>
							 <td><input name="facultyId" type="number"  placeholder="Enter faculty id of course"></td>
						</tr>
						
						<tr>
							 <td><input name="category_id" type="number"  placeholder="Enter category id of course"></td>
						</tr>
						
						
				
						<tr>
							 <td><input name="title" type="text"  placeholder="Enter title of course"></td>
						</tr>
						
						<tr>
							 <td><input name="description" type="text"  placeholder="Enter description of course"></td>
						</tr>
												
						<tr>
							 <td><input name="level" type="text"  placeholder="Enter learning level of course"></td>
						</tr>
						
						<tr>
							 <td><input name="price" type="number" placeholder="Enter the price of course"></td>
						</tr>
						
						<tr>
							 <td><input type="submit" value="submit"></td>
						</tr>
				</table>
		</form>
</div>

</body>
</html>