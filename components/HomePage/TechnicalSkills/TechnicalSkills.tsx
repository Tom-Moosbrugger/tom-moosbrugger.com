import ComponentElement from '@/components/Elements/ComponentElement';
import CSSLogo from '@/public/skillIcons/css3.svg';
import DockerLogo from '@/public/skillIcons/docker.svg';
import ExpressLogo from '@/public/skillIcons/express.svg';
import FlaskLogo from '@/public/skillIcons/flask.svg';
import GitLogo from '@/public/skillIcons/git.svg';
import HTMLLogo from '@/public/skillIcons/html5.svg';
import JavaScriptLogo from '@/public/skillIcons/javascript.svg';
import NextJSLogo from '@/public/skillIcons/nextdotjs.svg';
import NodeJSLogo from '@/public/skillIcons/nodedotjs.svg';
import PostgreSQLLogo from '@/public/skillIcons/postgresql.svg';
import PythonLogo from '@/public/skillIcons/python.svg';
import ReactLogo from '@/public/skillIcons/react.svg';
import ReduxLogo from '@/public/skillIcons/redux.svg';
import SequelizeLogo from '@/public/skillIcons/sequelize.svg';
import SQLAlchemyLogo from '@/public/skillIcons/sqlalchemy.svg';
import SQLiteLogo from '@/public/skillIcons/sqlite.svg';
import TailwindLogo from '@/public/skillIcons/tailwindcss.svg';
import TypeScriptLogo from '@/public/skillIcons/typescript.svg';

const TechnicalSkills = () => {
  const skillIcons = [
    { id: 'JavaScript', icon: JavaScriptLogo },
    { id: 'TypeScript', icon: TypeScriptLogo },
    { id: 'Python', icon: PythonLogo },
    { id: 'HTML', icon: HTMLLogo },
    { id: 'CSS', icon: CSSLogo },
    { id: 'React', icon: ReactLogo },
    { id: 'Redux', icon: ReduxLogo },
    { id: 'Next.js', icon: NextJSLogo },
    { id: 'Tailwind', icon: TailwindLogo },
    { id: 'Node.js', icon: NodeJSLogo },
    { id: 'Express.js', icon: ExpressLogo },
    { id: 'Flask', icon: FlaskLogo },
    { id: 'SQLite', icon: SQLiteLogo },
    { id: 'PostgreSQL', icon: PostgreSQLLogo },
    { id: 'Sequelize', icon: SequelizeLogo },
    { id: 'SQLAlchemy', icon: SQLAlchemyLogo },
    { id: 'Git', icon: GitLogo },
    { id: 'Docker', icon: DockerLogo },
  ];

  const iconClassName =
    'text-blue dark:text-green rounded-lg dark:bg-black cursor-pointer hover:scale-110 shadow-md shadow-grey dark:shadow-sm dark:shadow-white';

  return (
    <article className="w-1xl m-10 flex flex-col rounded-lg border-1 px-6 sm:px-10 py-10 md:w-3xl lg:w-5xl xl:w-7xl">
      <header className="mb-8 sm:mb-14">
        <ComponentElement
          className="text-blue dark:text-green text-xl sm:text-4xl"
          componentName="TechnicalSkills"
        />
      </header>
      <section className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-4">
        {skillIcons.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center justify-center"
            >
              <Icon
                key={skill.id}
                height={75}
                width={75}
                className={iconClassName}
              />
              <span className="w-content absolute -bottom-12 z-1 border-1 bg-white p-2 opacity-0 group-hover:opacity-100 dark:bg-black">
                {skill.id}
              </span>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default TechnicalSkills;
