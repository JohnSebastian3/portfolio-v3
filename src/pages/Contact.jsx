import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";

const Contact = ({ setSelectedPage }) => {
  const contactRef = useRef();

  const { inViewport, enterCount, leaveCount } = useInViewport(contactRef);

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
    <section id="contact" className="py-48" ref={contactRef}>
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
        className="flex md:justify-end justify-center w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-aqua">CONTACT</span> ME
          </p>
          <div className="flex justify-center md:justify-end my-5">
            <LineGradient width="w-5/6" />
          </div>
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
              hover:text-charcoal transition duration-300 rounded-sm"
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
