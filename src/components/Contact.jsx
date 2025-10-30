import { z } from "zod";
import styles from "./Contact.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { onSubmit } from "../api/api";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

const schema = z.object({
  firstName: z
    .string()
    .min(6, "At Least 6 Characters")
    .max(20, "Max Charachters Are 20"),
  lastName: z
    .string()
    .min(6, "At Least 6 Characters")
    .max(20, "Max Charachters Are 20"),
  email: z.email("Wrong Email"),
  phoneNumber: z.string().min(6, "Number Too Short").max(20, "Number Too Long"),
  description: z.string().min(20, "Too Short").max(1000, "Too Long"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      description: "",
    },
  });

  return (
    <div className="bg-[#FFFFFF0A] min-w-[1256px] min-h-[576px] border rounded-[16px] flex relative">
      <div className="flex flex-col pl-[60px] pt-[20px] min-h-[536px] min-w-[506px] ">
        <div className="pt-[40px] max-w-[426px] ">
          <h1 className="text-white font-semibold text-[30px]">
            Let’s connect constellations
          </h1>
          <p className="text-[#FFFFFFB3] ">
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>
        </div>
        <div className={styles.mainContainer}>
          <img src="/eclipse.svg" alt="" className={styles.secondEclipse} />
          <img src="/eclipse.svg" alt="" className={styles.thirdEclipse} />
          <form
            onClick={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col max-w-[426px] max-h-[333px] gap-[14px] "
          >
            <div className="flex max-w-[426px] max-h-[42px] gap-[14px]">
              <input
                type="text"
                placeholder="Last Name"
                className="text-[#FFFFFF99] min-w-[206px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D]  border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px]  "
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-400  text-[5px]">
                  {errors.lastName.message}
                </p>
              )}
              <input
                type="text"
                placeholder="First Name"
                className="text-[#FFFFFF99] min-w-[206px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px]  "
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-400 text-[5px]">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <input
              type="text"
              placeholder="Email"
              className="text-[#FFFFFF99] min-w-[426px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px]  "
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-[5px] ">{errors.email.message}</p>
            )}
            <input
              type="text"
              placeholder="Phone Number"
              className="text-[#FFFFFF99] min-w-[426px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px] "
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-400  text-[5px]">
                {errors.phoneNumber.message}
              </p>
            )}
            <input
              type="text"
              placeholder="Message"
              className="text-[#FFFFFF99] min-w-[426px] min-h-[109px]  bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px] pb-[70px]"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-400  text-[5px]">
                {errors.description.message}
              </p>
            )}
            <button
              className="text-[#FFFFFF] max-w-[426px] min-h-[42px] bg-gradient-to-r from-[#763AF5] to-[#A604F2] flex justify-center items-center gap-[10px] font-medium  border border-none rounded-[8px]  "
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send It To Moon"}{" "}
              <img src="/rocket.svg" alt="rocket logo" />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.container}>
        <div className="flex flex-col max-w-[466px] pt-[425px] pl-[28px]">
          <p className="text-[#FFFFFF80]">
            “Two lunar months revealed Earth's fragile beauty against vast
            silence, transforming my view of our place in the universe.
          </p>
          <h2 className="text-[#FFFFFFA6]">Irinel Traista</h2>
          <img src="/eclipse.svg" alt="" className={styles.eclipse} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
