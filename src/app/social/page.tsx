'use client';

import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUsers, FaAward } from 'react-icons/fa';

interface Activity {
  title: string;
  organization: string;
  year: string;
  description: string;
}

interface ActivitiesData {
  professional: Activity[];
  volunteer: Activity[];
  hobby: Activity[];
}

export default function Social() {
  const [activitiesData, setActivitiesData] = useState<ActivitiesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function loadActivitiesData() {
      try {
        const response = await fetch('/assets/data/activities.json');
        if (!response.ok) {
          throw new Error('Failed to fetch activities data');
        }
        const data = await response.json();
        setActivitiesData(data);
      } catch (error) {
        console.error('Error loading activities data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadActivitiesData();
  }, []);

  if (!mounted) {
    return null;
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  if (!activitiesData) {
    return <div className="container mx-auto px-4 py-8 text-center">Error loading data</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Professional Activities</h1>
        
        <div className="grid grid-cols-1 gap-6 mb-12">
          {activitiesData.professional.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaAward className="text-2xl text-primary mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="text-gray-600">{activity.organization}</p>
                  <p className="text-gray-500 text-sm mb-2">{activity.year}</p>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Volunteer Activities</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {activitiesData.volunteer.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaUsers className="text-2xl text-primary mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="text-gray-600">{activity.organization}</p>
                  <p className="text-gray-500 text-sm mb-2">{activity.year}</p>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center mt-12">Hobby Activities</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {activitiesData.hobby.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaCalendarAlt className="text-2xl text-primary mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="text-gray-600">{activity.organization}</p>
                  <p className="text-gray-500 text-sm mb-2">{activity.year}</p>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 