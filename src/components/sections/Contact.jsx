import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background-color: red;
  background: linear-gradient(
    225deg,
    #ff5f5f 0%,
    #ff2a2a 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #ff2a2a;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #ff5f5f;
    transform: translateY(2px);
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.error};
  font-size: 14px;
  margin-top: 4px;
`;

const SuccessText = styled.p`
  color: ${({ theme }) => theme.success};
  font-size: 14px;
  margin-top: 4px;
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};

    if (!formData.get("from_email").trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("from_email"))) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.get("from_name").trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.get("message").trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form.current,
        "SybVGsYS52j2TfLbi"
      );

      setSubmitStatus("success");
      form.current.reset();
      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Contact</Title>
          <Desc>
            Feel free to reach out to me for any questions or opportunities!
          </Desc>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm onSubmit={handleSubmit} ref={form}>
            <ContactTitle>Email Me 🚀</ContactTitle>

            <div>
              <ContactInput
                placeholder="Your Email"
                name="from_email"
                type="email"
                disabled={isSubmitting}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>

            <div>
              <ContactInput
                placeholder="Your Name"
                name="from_name"
                disabled={isSubmitting}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </div>

            <ContactInput
              placeholder="Subject"
              name="subject"
              disabled={isSubmitting}
            />

            <div>
              <ContactInputMessage
                placeholder="Message"
                rows="4"
                name="message"
                disabled={isSubmitting}
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </div>

            <ContactButton
              type="submit"
              value={isSubmitting ? "Sending..." : "Send"}
              disabled={isSubmitting}
            />

            {submitStatus === "success" && (
              <SuccessText>Message sent successfully!</SuccessText>
            )}
            {submitStatus === "error" && (
              <ErrorText>Failed to send message. Please try again.</ErrorText>
            )}
          </ContactForm>
        </motion.div>
      </Wrapper>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ position: "absolute", right: 0, bottom: 0 }}
      >
        <EarthCanvas />
      </motion.div>
    </Container>
  );
};

export default Contact;
