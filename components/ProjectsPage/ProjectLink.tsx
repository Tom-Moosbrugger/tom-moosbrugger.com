interface ProjectLinkProps {
  url: string;
  linkText: string;
}

const ProjectLink = ({ url, linkText }: ProjectLinkProps) => {
  return (
    <a
      href={url}
      className="text-xl px-3 py-1 cursor-pointer border-l-2 border-b-2 border-blue dark:border-green hover:border-2 hover:text-blue dark:hover:text-green"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {linkText}
    </a>
  );
};

export default ProjectLink;
