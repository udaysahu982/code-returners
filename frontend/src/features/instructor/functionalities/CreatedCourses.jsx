
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateCourse from './CreateCourse';
import CourseCard from '../../courses/CourseCard';


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

                        <CourseCard key={e.id} e={e}  />

                    ))}

                </div>

            )}

        </div>
    );
};

export default CreatedCourses;
