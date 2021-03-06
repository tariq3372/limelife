import React, { useState } from 'react'
import { Grid, Box, Typography, Card, CardContent, TextField, Stack, Button, Divider, CircularProgress } from '@mui/material';
import emailjs from "emailjs-com";
import { useForm, Controller } from "react-hook-form";
import { EMAIL_REGEX } from '../../helpers';
import Swal from "sweetalert2";

const Footer = () => {
  const SERVICE_ID = "service_ewj3s4j";
  const TEMPLATE_ID = "template_78kwgbh";
  const USER_ID = "H3n90pCcYNhOV5IsJ";
  const date = `Copyright LimeLife © ${new Date().getUTCFullYear()}. All rights reserved.`
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
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
          reset()
        },
        (error) => {
          setLoading(false)
          Swal.fire(
            'Error',
            "Something went wrong, Please try again later",
            "error"
          );
        }
      );
  };
  const renderError = (error) => (error && <Typography sx={{ fontSize: '12px', marginBottom: 0, marginTop: 1, color: "#e55353" }} className='error'>{error.message}</Typography>);

  return (
    <Box sx={{ backgroundColor: 'black', padding: '5%', position: 'relative' }}>
      <Grid container spacing={5} sx={{ justifyContent: 'space-between' }} >
        <Grid item lg={4} md={12}>
          <img
            src={require('../../assets/images/LimeLife-Logo-Light.png')}
            alt="logo"
            className="footer-logo"
          />
          <Typography color="#707070" fontFamily='muli' fontSize={14} >LIMELIFE Studios is your bridge to the NFT world. We walk our clients through every step of the way. From design to launch, helping individuals and companies connect with their fan/customer base through NFTs.</Typography>
          <div style={{ margin: '50px' }} />
          <Typography fontFamily='muli' fontSize={14} color='#707070'><span style={{ color: "#afeb34" }}>A:</span> First NFT Studios in KSA Located in Riyadh,</Typography>
          <Typography fontFamily='muli' fontSize={14} color='#707070'><span style={{ color: "#afeb34" }}>E:</span> limelifesaudia@gmail.com </Typography>
        </Grid>
        <Grid item lg={4} md={12}>
          <Card>
            <CardContent>
              <Stack flexDirection='column' >
                <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
                  <Typography fontFamily="muli-bold" color="#252525" fontSize={20} >We will love to hear from you!</Typography>

                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <TextField
                        disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
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
                    disabled={loading}
                    sx={{ borderColor: "black", color: "black", mt: 3 }}
                    variant="outlined"
                    type="submit"
                    value="SEND MESSAGE"
                  >
                    {loading ? <CircularProgress color="inherit" size={25} /> : 'SUBMIT FORM'}
                  </Button>
                </form>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid sx={{ mt: '34px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography fontFamily='muli-bold' color="#707070" fontSize={12}>{date}</Typography>
      </Grid>
    </Box>
  )
}

export default Footer

