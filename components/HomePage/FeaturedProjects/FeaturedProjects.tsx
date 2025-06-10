import ComponentElement from "@/components/Elements/ComponentElement";

const FeaturedProjects = () => {
 return (
    <article className="flex flex-col p-10 mx-10 my-10 border-1 rounded-lg sm:w-1xl md:w-3xl lg:w-5xl xl:w-7xl">
        <header className="mb-14">
        <ComponentElement
          className="text-blue dark:text-green text-xl sm:text-4xl"
          componentName="FeaturedProjects"
        />
      </header>
    </article>
 )
};

export default FeaturedProjects;

/* 

The goal is to have a carousel-like horizontal container that can scroll through projects
there should be arrows to either side of an image of a project
clicking an arrow scrolls to the next project, changing the image

*/