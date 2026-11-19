
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBasePath from '../../hooks/useBasePath';
import CoursePaymentPopup from './CoursePaymentPopup';

const COURSEAPI = "http://localhost:8080/api/courses/viewCourse";

const ViewCourse = () => {

  const { courseId } = useParams();
  const navigate = useNavigate();
  const base = useBasePath();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  useEffect(() => {

    console.log("param is " + courseId)
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');

        // Passing courseId as a path variable
        const response = await axios.get(`${COURSEAPI}/${courseId}`);

        setCourse(response.data);

      } catch (err) {
        setError(
          err.response?.data?.message || 'Unable to load course details.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [courseId]);

  const handleBuyNow = () => {
    navigate(`${base}/checkout/${courseId}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-slate-500">Loading course details...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3">
        <h2 className="text-xl font-bold text-slate-800">
          Course Not Found
        </h2>
        <p className="text-slate-500">{error || 'Course does not exist.'}</p>
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (

    <div className="h-screen overflow-y-auto bg-slate-50 px-4 py-8 md:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-slate-500">
          Courses / {course.title}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* LEFT SIDE - COURSE DETAILS */}
          <div className="space-y-7 lg:col-span-2">

            {/* Course Header */}
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {course.categoryName || course.category?.name || 'Course'}
              </span>

              <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                {course.title}
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                {course.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-6 text-sm text-slate-600">

                <div>
                  <span className="font-semibold text-slate-800">
                    Level
                  </span>
                  <p>{course.level || 'All Levels'}</p>
                </div>

                <div>
                  <span className="font-semibold text-slate-800">
                    Course ID
                  </span>
                  <p>{course.id}</p>
                </div>

                <div>
                  <span className="font-semibold text-slate-800">
                    Created
                  </span>
                  <p>
                    {course.creationDate
                      ? new Date(course.creationDate).toLocaleDateString()
                      : 'Recently'}
                  </p>
                </div>

              </div>

            </div>

            {/* What you will learn */}
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-800">
                What You Will Learn
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                {[
                  'Understand the core concepts',
                  'Learn through practical examples',
                  'Build real-world projects',
                  'Improve your technical skills',
                  'Develop problem-solving ability',
                  'Apply your knowledge practically'
                ].map((item, index) => (

                  <div key={index} className="flex gap-3 text-slate-600">
                    <span className="font-bold text-green-600">✓</span>
                    <p>{item}</p>
                  </div>

                ))}

              </div>

            </div>

            {/* Course Description */}
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-slate-800">
                About This Course
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {course.description}
              </p>

            </div>

          </div>

          {/* RIGHT SIDE - BUY CARD */}
          <div className="lg:col-span-1">

            <div className="sticky top-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

              {/* Course Preview */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-900">
                <span className="text-7xl">📚</span>
              </div>

              <div className="p-6">

                <p className="text-sm font-medium text-slate-500">
                  Course Price
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  ₹{course.price}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  One-time course purchase
                </p>

                <button
                  onClick={() => setShowPaymentPopup(true)}
                  className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                >
                  Buy Now
                </button>

                {showPaymentPopup && (
                    <CoursePaymentPopup
                      course={course}
                      onClose={() => setShowPaymentPopup(false)}
                      onConfirm={handleBuyNow}
                      />
                  )}

                <p className="mt-4 text-center text-xs text-slate-500">
                  Start your learning journey today.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="font-semibold text-slate-800">
                  This course includes
                </h3>

                <div className="mt-4 space-y-4 text-sm text-slate-600">

                  <p>✓ Course learning materials</p>
                  <p>✓ Practical learning experience</p>
                  <p>✓ Structured course content</p>
                  <p>✓ Access to course lessons</p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ViewCourse;
