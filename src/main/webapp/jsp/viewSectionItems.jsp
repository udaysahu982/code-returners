<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>view Section Items</title>
</head>
<body>

<h1>Section Items</h1>
	<div>
	<a href="/openAddSectionItem?courseId=${courseId}&sectionId=${sectionId}">add Section Item</a>
	</div>
	
	  <br>

    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>File</th>
                <th>Video Link</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            <c:forEach var="item" items="${items}">
                <tr>
                    <td><c:out value="${item.id}" /></td>
                    <td><c:out value="${item.title}" /></td>
                    <td><c:out value="${item.description}" /></td>

                    <td>
   						 <c:choose>
   						     <c:when test="${not empty item.file}">
   						         <a href="${pageContext.request.contextPath}/viewSectionItemFile?id=${item.id}"
   						            target="_blank"
   						            rel="noopener noreferrer">
   						             View File
   						         </a>
   						     </c:when>
   						     <c:otherwise>
   						         No file uploaded
   						     </c:otherwise>
   						 </c:choose>
					</td>

                    <td>
                        <c:if test="${not empty item.vidLink}">
                            <a href="<c:out value='${item.vidLink}'/>"
                               target="_blank" rel="noopener noreferrer">
                                Watch Video
                            </a>
                        </c:if>
                        <c:if test="${empty item.vidLink}">
                            No video link
                        </c:if>
                    </td>

                    <td>
                        <a href="/openEditSectionItem?id=${item.id}">
                            Edit
                        </a>
                    </td>
                     <td>
                        <a href="/deleteSectionItem?id=${item.id}">
                            Delete
                        </a>
                    </td>
                </tr>
            </c:forEach>

            <c:if test="${empty items}">
                <tr>
                    <td colspan="6">No section items found.</td>
                </tr>
            </c:if>
        </tbody>
    </table>
	

</body>
</html>