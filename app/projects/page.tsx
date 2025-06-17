'use client';

import { ProjectData } from '@/lib/types';
import { useState, useEffect } from 'react';
import Loading from '@/app/loading';
import Project from '@/components/ProjectsPage/Project';
import ComponentElement from '@/components/Elements/ComponentElement';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(`/api/projects`);

        if (response.ok) {
          const data = await response.json();
          setProjects(data.projects);
        } else {
          console.error('HTTP Error!');
          setError(
            'There was an error fetching the projects, please try again',
          );
        }
      } catch (e: unknown) {
        console.error(
          'Whoops, there was an error!',
          e instanceof Error ? e.message : e,
        );

        setError(
          e instanceof Error
            ? e.message
            : 'There was an error fetching the projects, please try again',
        );
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <main>
      <header className="p-10 text-center">
        <ComponentElement
          componentName="RecentProjects"
          className="text-blue dark:text-green text-xl sm:text-4xl"
        />
      </header>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-center text-xl font-semibold text-red-600 sm:text-4xl">
          {error}
        </div>
      ) : (
        <>
          {projects.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
          <ContactBanner threshold={1} />
        </>
      )}
    </main>
  );
};

export default Projects;
