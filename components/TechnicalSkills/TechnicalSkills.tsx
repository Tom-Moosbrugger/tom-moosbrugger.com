import ComponentElement from "@/components/Elements/ComponentElement";
import AWSLogo from "@/public/skillIcons/aws.svg";
import CSSLogo from "@/public/skillIcons/css3.svg";
import DockerLogo from "@/public/skillIcons/docker.svg";
import ExpressLogo from "@/public/skillIcons/express.svg";
import FlaskLogo from "@/public/skillIcons/flask.svg";
import GitLogo from "@/public/skillIcons/git.svg";
import HTMLLogo from "@/public/skillIcons/html5.svg";
import JavaScriptLogo from "@/public/skillIcons/javascript.svg";
import NextJSLogo from "@/public/skillIcons/nextdotjs.svg";
import NodeJSLogo from "@/public/skillIcons/nodedotjs.svg";
import PostgreSQLLogo from "@/public/skillIcons/postgresql.svg";
import PythonLogo from "@/public/skillIcons/python.svg";
import ReactLogo from "@/public/skillIcons/react.svg";
import ReduxLogo from "@/public/skillIcons/redux.svg";
import SequelizeLogo from "@/public/skillIcons/sequelize.svg";
import SQLAlchemyLogo from "@/public/skillIcons/sqlalchemy.svg";
import SQLiteLogo from "@/public/skillIcons/sqlite.svg";
import TailwindLogo from "@/public/skillIcons/tailwindcss.svg";
import TypeScriptLogo from "@/public/skillIcons/typescript.svg";

const TechnicalSkills = () => {
  const skillIcons = [
    { id: "javascript", icon: JavaScriptLogo },
    { id: "typescript", icon: TypeScriptLogo },
    { id: "python", icon: PythonLogo },
    { id: "html", icon: HTMLLogo },
    { id: "css", icon: CSSLogo },
    { id: "react", icon: ReactLogo },
    { id: "redux", icon: ReduxLogo },
    { id: "nextjs", icon: NextJSLogo },
    { id: "tailwind", icon: TailwindLogo },
    { id: "nodejs", icon: NodeJSLogo },
    { id: "express", icon: ExpressLogo },
    { id: "flask", icon: FlaskLogo },
    { id: "sqlite", icon: SQLiteLogo },
    { id: "postgresql", icon: PostgreSQLLogo },
    { id: "sequelize", icon: SequelizeLogo },
    { id: "sqlalchemy", icon: SQLAlchemyLogo },
    { id: "git", icon: GitLogo },
    { id: "docker", icon: DockerLogo },
  ];

  const iconClassName = "text-blue dark:text-green rounded-lg dark:bg-black cursor-pointer hover:scale-110 shadow-md shadow-grey"

  return (
    <article className="flex flex-col p-10 mx-10 my-10 border-1 rounded-lg sm:w-1xl md:w-3xl lg:w-5xl xl:w-7xl">
      <header className="mb-14">
        <ComponentElement
          className="text-blue dark:text-green text-2xl sm:text-4xl"
          componentName="TechnicalSkills"
        />
      </header>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center">
        {skillIcons.map(skill => {
            const Icon = skill.icon;

            return (
                <Icon
                    key={skill.id} 
                    height={75}
                    width={75}
                    className={iconClassName}
                />
            )
        })}
      </section>
    </article>
  );
};

export default TechnicalSkills;
