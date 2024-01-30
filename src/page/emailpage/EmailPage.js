import React from "react";
import "./EmailPage.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const EmailPage = () => {
  const fieldvalidationscheme = yup.object({
    name: yup.string().required(""),
    email: yup.string().required(""),
    mobile: yup.number().required(""),
    organiztion: yup.string(),
  });
  const resetForm = () => {
    values.name = "";
    values.email = "";
    values.mobile = "";
    values.organiztion = "";
  };
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
    },
    validationSchema: fieldvalidationscheme,
    onSubmit: async (requestInfo) => {
      // EmailJS service ID, template ID, and Public Key

      const serviceId = "service_jd0qzwb";

      const templateId = "template_4135jaw";

      const publickey = "lneoFDiOsEdEasyy3";

      // Object that contains dynamic template params A

      const templateParams = {
        user_name: requestInfo.name,
        user_email: requestInfo.email,
        message: `Mobile Number : ${requestInfo.mobile} ,
        Organiztion : ${requestInfo.organiztion},
        From : ${localStorage["meynikara-from-page"]}`,
      };

      // Send the email Ising EmailJS

      await emailjs
        .send(serviceId, templateId, templateParams, publickey)
        .then(async (response) => {
          resetForm();
          toast.success("Request sent successfully!");
        })
        .catch((err) => {
          const fail_res = err.text;
          toast.warning("Request not sent! ");
          toast.warning(fail_res);
        });
    },
  });

  return (
    <Box p={{ base: "5vh 5vw" }}>
      <form className="inp-form row" onSubmit={handleSubmit}>
        <Heading
          textAlign={"center"}
          fontWeight={{ base: "700" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          pb={"2vh"}
        >
          Let's Work <span className="text-cyan">Together</span>
        </Heading>
        <div className="inp-group col-md-3">
          <input
            type="email"
            className="page-inputs"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email *"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inp-group col-md-3">
          <input
            type="name"
            className="page-inputs"
            placeholder="Name *"
            id="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inp-group col-md-3">
          <input
            type="number"
            className={"page-inputs "}
            placeholder="Mobile Number *"
            id="mobile"
            value={values.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inp-group col-md-3">
          <input
            type="text"
            className={"page-inputs "}
            placeholder="Organization"
            id="organiztion"
            value={values.organiztion}
            onChange={handleChange}
          />
        </div>
        <Box display={{ base: "black", md: "none" }}>
          <br />
        </Box>
        {errors.mobile && (
          <>
            <Box textAlign={"center"} color={"red.500"}>
              *Enter valid Mobile number
            </Box>
            <br />
            <br />
          </>
        )}
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            type="submit"
            border={{ base: "2px solid #20c997" }}
            bg={"white"}
            w={{ base: "", md: "", lg: "25vw" }}
            h={{ base: "40px", md: "", lg: "50px" }}
            borderRadius={{ base: "20px", md: "", lg: "25px" }}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontSize={{ base: "lg", md: "xl", lg: "xl" }}
            _hover={{
              bg: "#20c997",
              color: "white",
            }}
          >
            <Box visibility={"hidden"} rotate={"45"}>
              <ArrowForwardIcon fontWeight={{ base: "500" }} fontSize={"xl"} />
            </Box>
            Request Access
            <Box rotate={"45"}>
              <ArrowForwardIcon transform="rotate(-45deg)" fontSize={"2xl"} />
            </Box>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EmailPage;
