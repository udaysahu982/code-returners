
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ViewCourse from './ViewCourse';
import CourseCard from './CourseCard';
import { useNavigate } from 'react-router-dom';
import useBasePath from '../../hooks/useBasePath';

const API = "http://localhost:8080/api/courses/viewAllCourses";

const BrowseCourses = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const base = useBasePath();
  const navigate = useNavigate();

  const viewCourse = (courseId) => {
    navigate(`${base}/viewCourse/${courseId}`)
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API);

        setData(response.data);
      } catch (err) {
        setError(err.message || 'something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Explore Courses
        </h1>

        <p className="mt-2 text-slate-500">
          Discover new skills and take your learning journey forward.
        </p>
      </div>

      {/* Course Cards */}
      {data.length === 0 ? (

        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
          <div className="mb-3 text-5xl">📚</div>
          <h2 className="text-xl font-semibold text-slate-700">
            No Courses Available
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            New courses will appear here.
          </p>
        </div>

      ) : (

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {data.map((e) => (

            <CourseCard  key={e.id} e={e} onClick={ () => viewCourse(e.id)}  />
            

          ))}

        </div>

      )}

    </div>
  );
};

export default BrowseCourses;
