import React from 'react';
import { ProjectData } from '../services/payload';

type ProjectListProps = {
  projects: ProjectData[];
  title?: string;
  subtitle?: string;
  description?: string;
};

export default function ProjectList({ 
  projects, 
  title = "Daftar Proyek Kami", 
  subtitle = "PORTOFOLIO", 
  description = "Berikut adalah daftar proyek yang telah kami selesaikan." 
}: ProjectListProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-blue-800 font-medium mb-2 uppercase tracking-wider">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden bg-white shadow-md rounded-lg">
            <ul className="divide-y divide-gray-200">
              {projects.map((project) => (
                <li key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      {project.description && (
                        <p className="mt-1 text-gray-600 text-sm">{project.description}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-gray-500">
                      {project.client && (
                        <span className="inline-flex items-center">
                          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {project.client}
                        </span>
                      )}
                      {project.location && (
                        <span className="inline-flex items-center mt-1">
                          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </span>
                      )}
                      {project.completionDate && (
                        <span className="inline-flex items-center mt-1">
                          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(project.completionDate).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
