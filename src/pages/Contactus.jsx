import { Box, Button, Card, CardContent, TextField, Typography, Grid, CardMedia, Container, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import PageTitle from '../components/PageTitle';
import emailjs from "emailjs-com";
import sizes from "../theme/sizes";
import { useForm, Controller } from "react-hook-form";
import { EMAIL_REGEX } from "../helpers";
import Swal from "sweetalert2";

const Contactus = () => {
  const SERVICE_ID = "service_ewj3s4j";
  const TEMPLATE_ID = "template_78kwgbh";
  const USER_ID = "H3n90pCcYNhOV5IsJ";
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  });

  const sendEmail = (formData) => {
    setLoading(true)
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (result) => {
          setLoading(false)
          Swal.fire(
            'Success',
            "Message Sent, We will get back to you shortly",
            "success"
          );
          // alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          setLoading(false)
          Swal.fire(
            'Error',
            "Something went wrong, Please try again later",
            "error"
          );
          // alert("An error occurred, Please try again", error.text);
        }
      );
  };

  const renderError = (error) => (error && <Typography sx={{ fontSize: '12px', marginBottom: 0, marginTop: 1, color: "#e55353" }} className='error'>{error.message}</Typography>);
  if (loading) return (
    <Container style={{ minHeight: "100%", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress color="inherit" />
    </Container>
  )
  return (
    <Box>
      <PageTitle title="CONTACT US" />
      <Container>
        <Grid container spacing={5} sx={{ mb: sizes.base, display: "flex", justifyContent: "center" }}>
          <Grid item md={6} sm={12} >
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardContent>
                <Typography fontFamily="muli-bold" fontSize={24}>
                  Contact us by email!
                </Typography>
                <Typography
                  fontFamily="muli-light"
                  fontSize={14}
                  color="#252525"
                  sx={{ mt: 3 }}
                >
                  At vero eos et accusamus et iusto odios un dignissimos ducimus
                  qui blan ditiis prasixer esentium voluptatum.
                </Typography>

                <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <TextField
                        {...rest}
                        error={errors.name}
                        fullWidth
                        size="small"
                        sx={{ mt: 3 }}
                        label="Full Name"
                        multiline
                        maxRows={2}
                      />
                    )}
                    rules={{
                      required: { value: true, message: 'Required' }
                    }}
                  />
                  {renderError(errors.name)}

                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <TextField
                        {...rest}
                        error={errors.phone}
                        fullWidth
                        size="small"
                        sx={{ mt: 3 }}
                        label="Phone Number"
                        multiline
                        maxRows={2}
                      />
                    )}
                    rules={{
                      required: { value: true, message: 'Required' }
                    }}
                  />
                  {renderError(errors.phone)}

                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <TextField
                        {...rest}
                        error={errors.email}
                        fullWidth
                        size="small"
                        sx={{ mt: 3 }}
                        label="Email-address"
                        multiline
                        maxRows={2}
                      />
                    )}
                    rules={{
                      required: { value: true, message: 'Required' },
                      pattern: { value: EMAIL_REGEX, message: 'Invalid Email' }
                    }}
                  />
                  {renderError(errors.email)}

                  <Controller
                    name="message"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <TextField
                        {...rest}
                        error={errors.message}
                        fullWidth
                        size="small"
                        sx={{ mt: 3 }}
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue=""
                      />
                    )}
                    rules={{
                      required: { value: true, message: 'Required' }
                    }}
                  />
                  {renderError(errors.message)}
                  <Button
                    sx={{ borderColor: "black", color: "black", mt: 3 }}
                    variant="outlined"
                    // onClick={handleSubmit(submit)}
                    type="submit"
                    value="SEND MESSAGE"
                  >
                    SUBMIT FORM
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contactus;
