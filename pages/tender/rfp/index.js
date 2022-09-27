import {
  Card,
  CardContent,
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const steps = [
  "Project Overview: ",
  "Project Goals: ",
  "Scope of Work: ",
  "Current Roadblocks and Barriers to Success: ",
  "Evaluation Metrics and Criteria: ",
  "Submission Requirements: ",
  "Project Due By: ",
  "Budget: ",
  "Terms and Conditions: ",
];
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";

const RFP = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [state, setState] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
    text7: "",
    text8: "",
    text9: "",
    text10: "",
    text11: "",
    text12: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(state);
  });

  const printPDF = () => {
    const domElement = document.getElementById("download");
    html2canvas(domElement).then((canvas) => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF("p", "mm");
      var position = 0;

      doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save(`${new Date().toISOString()}.pdf`);
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="RFP">
                Project Overview:
              </CustomFormLabel>
              <TextField
                value={state.text1}
                onChange={handleChange}
                name="text1"
                id="RFP"
                placeholder="Description of Project"
                multiline
                fullWidth
                rows={5}
                maxRows={Infinity}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="project">
                Name of your Project?
              </CustomFormLabel>
              <TextField
                id="project"
                placeholder="Project..."
                multiline
                fullWidth
                rows={1}
                maxRows={Infinity}
                value={state.text2}
                onChange={handleChange}
                name="text2"
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6} lg={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="why">
                Goal 1
              </CustomFormLabel>
              <TextField
                id="why"
                placeholder="Goal 1 "
                multiline
                fullWidth
                rows={1}
                maxRows={Infinity}
                value={state.text3}
                onChange={handleChange}
                name="text3"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="when">
                Goal 2
              </CustomFormLabel>
              <TextField
                id="when"
                placeholder="Goal 2"
                multiline
                fullWidth
                rows={1}
                maxRows={Infinity}
                value={state.text4}
                onChange={handleChange}
                name="text4"
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6} lg={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Organization">
                Scope of Work:
              </CustomFormLabel>
              <TextField
                id="Organization"
                placeholder="Describe Scope of Work in Greater Detail"
                multiline
                fullWidth
                rows={6}
                maxRows={Infinity}
                value={state.text5}
                onChange={handleChange}
                name="text5"
              />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Features">
                Roadblock 1
              </CustomFormLabel>
              <TextField
                id="Features"
                placeholder="Roadblock 1 "
                multiline
                fullWidth
                rows={3}
                maxRows={Infinity}
                value={state.text6}
                onChange={handleChange}
                name="text6"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Importance">
                Roadblock 2
              </CustomFormLabel>
              <TextField
                id="Importance"
                placeholder="Roadblock 2"
                multiline
                fullWidth
                rows={3}
                maxRows={Infinity}
                value={state.text7}
                onChange={handleChange}
                name="text7"
              />
            </Grid>
          </Grid>
        );
      case 4:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Exsisting">
                Criteria #1
              </CustomFormLabel>
              <TextField
                id="Exsisting"
                placeholder="Criteria #1 "
                multiline
                fullWidth
                rows={5}
                maxRows={Infinity}
                value={state.text8}
                onChange={handleChange}
                name="text8"
              />
            </Grid>
          </Grid>
        );
      case 5:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="role">
                Requirement #1
              </CustomFormLabel>
              <TextField
                id="role"
                placeholder="Requirement #1 "
                multiline
                fullWidth
                rows={3}
                maxRows={Infinity}
                value={state.text9}
                onChange={handleChange}
                name="text9"
              />
            </Grid>
          </Grid>
        );
      case 6:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="plan">
                Enter Project Due Date
              </CustomFormLabel>
              <TextField
                id="plan"
                placeholder="Enter Project Due Date"
                multiline
                fullWidth
                rows={3}
                maxRows={Infinity}
                value={state.text10}
                onChange={handleChange}
                name="text10"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="update">
                Give updated regularity
              </CustomFormLabel>
              <TextField
                id="update"
                placeholder="Update  ..."
                multiline
                fullWidth
                rows={3}
                maxRows={Infinity}
                value={state.text11}
                onChange={handleChange}
                name="text11"
              />
            </Grid>
          </Grid>
        );
      case 7:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Organization">
                Enter Budget
              </CustomFormLabel>
              <TextField
                id="Organization"
                placeholder="Organization  ..."
                multiline
                fullWidth
                rows={3}
                maxRows={Infinity}
                value={state.text12}
                onChange={handleChange}
                name="text12"
              />
            </Grid>
          </Grid>
        );
      case 8:
        return (
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h5">Terms and condition</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Sard about this site or you have been to it, but you cannot
                figure out what it is or what it can do. MTA web directory
                isSard about this site or you have been to it, but you cannot
                figure out what it is or what it can do. MTA web directory is
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Agree"
                />
              </FormGroup>
            </Grid>
          </Grid>
        );
    }
  };
  return (
    <Card data-aos="zoom-in-up">
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                  <StepContent>
                    <Box>{handleSteps(activeStep)}</Box>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                sx={{
                  m: 3,
                  p: 2,
                  backgroundColor: "primary.light",
                  borderRadius: 1,
                }}
                textAlign="center"
              >
                <Typography>
                  All steps completed - your RFP is Created
                </Typography>
                <Box>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={printPDF}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Download
                  </Button>
                </Box>
              </Box>

              <Card
                id="download"
                sx={{ p: 3 }}
                style={{
                  minWidth: "912px",
                  position: "relative",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Project Overview:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text1}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Project Goals:
                  </Typography>
                  <Typography
                    sx={{ mathStyle: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text2}
                  </Typography>
                  <Typography
                    sx={{ my: 2 }}
                    variant="h4"
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Scope of Work:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text3}
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="600"
                    sx={{ my: 2 }}
                    style={{ wordWrap: "break-word" }}
                  >
                    Current Roadblocks and Barriers to Success:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text4}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Evaluation Metrics and Criteria:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text5}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Submission Requirements:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text6}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Project Due By:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text7}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Budget:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text8}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Project Proposal by:
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text9}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Terms and Condition
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text10}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Updated regularity
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text11}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    About Organization and their plans
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    {state.text12}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ my: 2 }}
                    fontWeight="600"
                    style={{ wordWrap: "break-word" }}
                  >
                    Agreed Terms and condition
                  </Typography>
                  <Typography
                    sx={{ my: 2, textAlign: "justify" }}
                    style={{ wordWrap: "break-word" }}
                  >
                    Sard about this site or you have been to it, but you cannot
                    figure out what it is or what it can do. MTA web directory
                    isSard about this site or you have been to it, but you
                    cannot figure out what it is or what it can do. MTA web
                    directory is
                  </Typography>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Box display="flex" sx={{ flexDirection: "row", p: 3 }}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button
                  onClick={handleNext}
                  variant="contained"
                  // disabled={productItems.length == 0}
                  color={
                    activeStep === steps.length - 1 ? "success" : "secondary"
                  }
                >
                  {activeStep === steps.length - 1 ? "Complete" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default RFP;
