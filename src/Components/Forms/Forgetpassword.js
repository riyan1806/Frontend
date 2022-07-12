import { TextInput, Button, Group, Box, Input, NumberInput } from "@mantine/core";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { DatePicker } from "@mantine/dates";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import "./Forgetpassword.css";
import { Stepper } from '@mantine/core';
import PasswordRequirement from "./password.js";
import ResetPasswordRequirement from "./confirmpassword.js";


function Demo() {
  const form = useForm({
    initialValues: {
      email: "",
      otp: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const [otp, setotp] = useState();
  const [email, setEmail] = useState();
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


  const isValid =  email 

  return (
    <Box className="form" sx={{ maxWidth: 700 }} >
      <Stepper color={"violet"} active={active} onStepClick={setActive} breakpoint="sm">
        
        <Stepper.Step label="Enter Email" >
          
          <h1>Forgot Password</h1>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>

          
        <TextInput
          required
          label="Email" className="label"
          placeholder="Your@email.com"
          onChange={setEmail}
        />       
      </form>
        </Stepper.Step>
        <Stepper.Step label="Verification" >
        <h1>Enter Verification Code </h1>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
         
        <TextInput
          type="number"
          required
          
          label= "Enter OTP" 
          placeholder="Enter OTP"
          onChange={setotp}
        />       
      </form>
        </Stepper.Step>
        <Stepper.Step label="New Password" >
        <h1>New Password</h1>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
         
        <PasswordRequirement></PasswordRequirement>   
        <ResetPasswordRequirement></ResetPasswordRequirement>

      </form>
        </Stepper.Step>
        <Stepper.Completed>
           <h1>Your Password has been Reset</h1>
        </Stepper.Completed>
      </Stepper>
      <Group className="buttons" position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button className="Nextbtn" onClick={nextStep}>Next step</Button>
      </Group>
    </Box>
  ); 


  


}
export default Demo;