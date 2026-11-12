
import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/api/courses/createcourse";

const CreateCourse = () => {
    const [course, setCourse] = useState({
        facultyId: 1,
        category_id: "",
        title: "",
        description: "",
        level: "Beginner",
        price: ""
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    // Generate image preview
    useEffect(() => {
        if (!image) {
            setPreview("");
            return;
        }

        const imageUrl = URL.createObjectURL(image);
        setPreview(imageUrl);

        return () => URL.revokeObjectURL(imageUrl);
    }, [image]);

    // Handle text, number and select fields
    const handleChange = (e) => {
        const { name, value } = e.target;

        setCourse((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle image selection
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (!selectedImage) return;

        if (!selectedImage.type.startsWith("image/")) {
            setMessageType("error");
            setMessage("Please select a valid image.");
            e.target.value = "";
            return;
        }

        if (selectedImage.size > 5 * 1024 * 1024) {
            setMessageType("error");
            setMessage("Image size must be less than 5 MB.");
            e.target.value = "";
            return;
        }

        setMessage("");
        setImage(selectedImage);
    };

    // Submit form data to Spring Boot
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setMessageType("");

        if (!course.title.trim()) {
            setMessageType("error");
            setMessage("Please enter course title.");
            return;
        }

        if (!course.category_id) {
            setMessageType("error");
            setMessage("Please select course category.");
            return;
        }

        if (!image) {
            setMessageType("error");
            setMessage("Please select course thumbnail.");
            return;
        }

        if (course.price === "" || Number(course.price) < 0) {
            setMessageType("error");
            setMessage("Please enter a valid course price.");
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("facultyId", String(course.facultyId));
            formData.append("category_id", String(course.category_id));
            formData.append("title", course.title);
            formData.append("description", course.description);
            formData.append("level", course.level);
            formData.append("price", String(course.price));
            formData.append("image", image);

            // Do not manually set Content-Type.
            // Axios/browser will add the multipart boundary.
            console.log("Sending course data:", {
                ...course,
                imageName: image.name,
                imageSize: image.size
            });

            const response = await axios.post(API, formData);

            console.log("Backend response:", response.data);

            setMessageType("success");
            setMessage(response.data || "Course created successfully!");

            setCourse({
                facultyId: 1,
                category_id: "",
                title: "",
                description: "",
                level: "Beginner",
                price: ""
            });

            setImage(null);

            // Clear the file input after successful submission
            const fileInput = document.getElementById("courseImage");
            if (fileInput) fileInput.value = "";

        } catch (error) {
            console.error("Course creation failed:", error);

            setMessageType("error");

            if (error.response) {
                console.error("Status:", error.response.status);
                console.error("Response:", error.response.data);

                const errorData = error.response.data;
                setMessage(
                    typeof errorData === "string"
                        ? errorData
                        : errorData?.message || `Server error: ${error.response.status}`
                );
            } else if (error.request) {
                setMessage(
                    "Backend did not respond. Check whether Spring Boot is running and the API URL is correct."
                );
            } else {
                setMessage(error.message || "Something went wrong.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        // Scrollable page
        <div className="h-full min-h-0 w-full overflow-y-auto bg-white p-4 md:p-8">

            <div className="mx-auto max-w-4xl pb-8">

                {/* Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Create New Course
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Add course details and upload a course thumbnail.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-7"
                >

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* Course title */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Course Title *
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={course.title}
                                onChange={handleChange}
                                placeholder="Enter course title"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Course Category *
                            </label>

                            <select
                                name="category_id"
                                value={course.category_id}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="1">Java</option>
                                <option value="2">Frontend</option>
                                <option value="3">Backend</option>
                                <option value="4">Data Analytics</option>
                            </select>
                        </div>

                        {/* Level */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Course Level *
                            </label>

                            <select
                                name="level"
                                value={course.level}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Course Price (₹) *
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={course.price}
                                onChange={handleChange}
                                placeholder="Enter course price"
                                min="0"
                                step="0.01"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Course Description
                            </label>

                            <textarea
                                name="description"
                                value={course.description}
                                onChange={handleChange}
                                placeholder="Describe what students will learn..."
                                rows={4}
                                className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Image upload */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Course Thumbnail *
                            </label>

                            <div className="rounded-xl border-2 border-dashed border-slate-300 p-5 text-center">

                                <input
                                    type="file"
                                    accept="image/*"
                                    id="courseImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                                <label
                                    htmlFor="courseImage"
                                    className="cursor-pointer"
                                >
                                    <span className="font-semibold text-blue-600 hover:text-blue-700">
                                        Click to upload image
                                    </span>

                                    <p className="mt-2 text-xs text-slate-500">
                                        PNG, JPG or WEBP (Maximum 5 MB)
                                    </p>
                                </label>

                                {preview && (
                                    <div className="mt-5">
                                        <img
                                            src={preview}
                                            alt="Course preview"
                                            className="mx-auto h-44 max-w-full rounded-lg object-cover"
                                        />

                                        <p className="mt-2 text-sm text-slate-600">
                                            {image?.name}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setImage(null);
                                                document.getElementById("courseImage").value = "";
                                            }}
                                            className="mt-2 text-sm font-medium text-red-500 hover:text-red-700"
                                        >
                                            Remove Image
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Success / error message */}
                    {message && (
                        <div
                            className={`mt-5 rounded-lg border p-3 text-sm ${
                                messageType === "success"
                                    ? "border-green-200 bg-green-50 text-green-700"
                                    : "border-red-200 bg-red-50 text-red-700"
                            }`}
                        >
                            {message}
                        </div>
                    )}

                    {/* Submit button */}
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Creating Course..." : "Create Course"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
