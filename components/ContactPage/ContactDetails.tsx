import LinkedIn from "@/public/other/linkedin.svg";
import GitHub from "@/public/other/github.svg";
import Email from "@/public/other/email.svg";

const ContactDetails = () => {
    return (
        <section className="text-sm sm:text-xl">
            <header>
                <p className="mb-6 font-medium">If contact forms aren&apos;t your thing, feel free to reach out to me on these other platforms:</p>
            </header>
            <section className="flex flex-col justify-center items-baseline">
                <div className="flex flex-row items-center gap-2">
                    <Email height={60} width={60} fill="white" className="dark:fill-white fill-black" />
                    <p>: tamoosbrugger@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <GitHub height={60} width={60} className="dark:fill-white dark:stroke-white" />
                    <p>: github.com/Tom-Moosbrugger</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <LinkedIn height={60} width={60} className="dark:fill-white" />
                    <p>: in/tom-moosbrugger/</p>
                </div>
            </section>
        </section>
    )
};

export default ContactDetails