import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";

const Contact = ({ setSelectedPage }) => {
  const contactRef = useRef();

  const { inViewport, enterCount, leaveCount } = useInViewport(contactRef, {
    threshold: 0.3,
  });

  useEffect(() => {
    if (inViewport) {
      setSelectedPage("contact");
    }
  }, [inViewport]);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-28 overflow-x-hidden" ref={contactRef}>
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=""
      >
        <div>
          <p
            className="flex pb-2 gap-2 w-full font-semibold justify-center text-3xl 
                      border-b border-aqua border-opacity-40 md:text-4xl mb-5 
                      before:hidden xs:border-none xs:before:block before:h-[1px] before:flex-1 before:bg-aqua 
                     before:bg-opacity-40 before:relative before:top-5 before:ml-[20px]  "
          >
            <span className="text-aqua">CONTACT</span> ME
          </p>
          <div className="flex justify-center md:justify-end my-5"></div>
        </div>
      </motion.div>

      {/* FORM  */}
      <div className="mt-5">
        <motion.div
          className="mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mb-8 flex flex-col gap-2 items-center text-center">
            <p>Looking to get in touch? Let's chat. Coffee's on me.</p>
            <p>
              Reach out to me on{" "}
              <a
                href="https://twitter.com/SebaCodes"
                className="text-aqua hover:text-light-aqua transiton duration-200"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/johnsguerrero/"
                className="text-aqua hover:text-light-aqua transiton duration-200"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              , or shoot me an email at <strong>johnsebastiandev@gmail.com</strong>
            </p>
            <p>Or, you could send me a message below!</p>
          </div>
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/9ca689fdc1086f9a4f26d38ff3693551"
            method="POST"
          >
            <input
              className="w-full bg-iron font-semibold text-charcoal placeholder:text-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}

            <input
              className="w-full bg-iron font-semibold text-charcoal placeholder:text-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-iron font-semibold text-charcoal placeholder:text-opaque-black p-3 mt-5
                        "
              type="text"
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
              rows="4"
              cols="50"
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-dark-aqua font-semibold text-charcoal mt-5 hover:bg-light-aqua
              hover:text-charcoal transition duration-200 rounded-sm"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
