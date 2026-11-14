
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateCourse from './CreateCourse';

const API = "http://localhost:8080/api/courses/createdCourses";

const CreatedCourses = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);

    const facultyId = 1;

    // Fetch course data using Axios
    const fetchData = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await axios.post(API, 
                {facultyId: facultyId}, 
                { headers: {"Content-Type": "application/json"}
            });
            setCourses(response.data);
        }
        catch (err) {
            setError(err.message || "Something went wrong");
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Show Create Course form
    if (showForm) {
        return (
            <CreateCourse
                goBack={() => setShowForm(false)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-8">

            {/* Page Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        My Created Courses
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Manage and view all the courses you have created.
                    </p>
                </div>

                <button
                    onClick={() => setShowForm(true)}
                    className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                    + Create Course
                </button>

            </div>

            {/* Loading */}
            {loading ? (

                <div className="flex min-h-[300px] items-center justify-center">
                    <p className="text-lg font-medium text-indigo-600">
                        Loading courses...
                    </p>
                </div>

            ) : error ? (

                /* Error Message */
                <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-red-200 bg-white">
                    <p className="text-red-600">
                        {error}
                    </p>
                </div>

            ) : courses.length === 0 ? (

                /* Empty State */
                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">

                    <div className="mb-3 text-5xl">📚</div>

                    <h2 className="text-xl font-semibold text-slate-700">
                        No Courses Created
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Start by creating your first course.
                    </p>

                    <button
                        onClick={() => setShowForm(true)}
                        className="mt-5 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                    >
                        Create Your First Course
                    </button>

                </div>

            ) : (

                /* Course Cards */
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {courses.map((e) => (

                        <div
                            key={e.id}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* Course Thumbnail */}
                            <div className="relative flex h-44 items-center justify-center overflow-hidden bg-white">

                                {e.imageUrl ? (

                                    <img
                                        src={e.imageUrl}
                                        alt={e.title}
                                        className="h-full w-full object-contain"
                                    />

                                ) : (

                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500">

                                        <div className="text-6xl font-bold text-white/90">
                                            {e.title?.charAt(0).toUpperCase()}
                                        </div>

                                    </div>

                                )}

                                <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm">
                                    {e.level}
                                </span>

                            </div>

                            {/* Course Information */}
                            <div className="p-5">

                                {/* Course Title */}
                                <h2 className="mb-2 text-xl font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                                    {e.title}
                                </h2>

                                {/* Description */}
                                <p className="mb-5 line-clamp-3 min-h-[60px] text-sm leading-6 text-slate-500">
                                    {e.description}
                                </p>

                                {/* Course Details */}
                                <div className="flex items-center justify-between border-t border-slate-100 pt-4">

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Course Price
                                        </p>

                                        <p className="mt-1 text-xl font-bold text-indigo-600">
                                            ₹{e.price}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-slate-400">
                                            Course ID
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-slate-600">
                                            #{e.id}
                                        </p>
                                    </div>

                                </div>

                                {/* Creation Date */}
                                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                                    <span>📅</span>

                                    <span>
                                        Created: {e.creationDate
                                            ? new Date(e.creationDate).toLocaleDateString("en-IN")
                                            : "Not available"}
                                    </span>
                                </div>

                                {/* Course Actions */}
                                <div className="mt-5 border-t border-slate-100 pt-4">

                                    <button
                                        className="w-full rounded-lg border border-indigo-200 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                                    >
                                        View Course
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default CreatedCourses;
