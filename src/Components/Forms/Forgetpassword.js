import { TextInput, Button, Group, Box, Input, NumberInput } from "@mantine/core";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { DatePicker } from "@mantine/dates";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import "./Forgetpassword.css";


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

  // const handleChangeInput = (e) => {
  //   setPhoneNumber(e.target.value);
  // };
  const [otp, setotp] = useState();
  const [email, setEmail] = useState();


  const isValid =  email 

  return (
    <Box className="form" sx={{ maxWidth: 400 }} mx="auto">
        <h1>Forget Password</h1>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
          
         {/* <TextInput
          required
          label="Phone Number"
          placeholder="Phone Number"
          type="text"
          onChange={handleChangeInput}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          value={phoneNumber}
          maxLength="10"
          {...form.getInputProps("phoneNumber")}
        /> */}

        
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          onChange={setEmail}
        />
        
        <TextInput className="otp-text"
         type='number'
         
          required
          label="OTP"
          placeholder=""
          onChange={setotp}
          />
        <Group>

        <Button 
        className="Otp-button" >
        SEND CODE        
        </Button>
        </Group>
            



        
        <Group>
          <Button
            className="btn"
            type="submit"
            value="Submit"
            disabled={!isValid}
          >
            Submit
          </Button>
        </Group>

        
      </form>
    </Box>
  );
}

export default Demo;