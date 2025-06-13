interface ProjectLinkProps {
  url: string;
  linkText: string;
}

const ProjectLink = ({ url, linkText }: ProjectLinkProps) => {
  return (
    <a
      href={url}
      className="border-blue dark:border-green hover:text-blue dark:hover:text-green cursor-pointer border-b-2 border-l-2 px-3 py-1 text-xl hover:border-2"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {linkText}
    </a>
  );
};

export default ProjectLink;
