import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import {
    Card,
    CardContent,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Fab,
    Typography,
} from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";

moment.locale("en-In");
const localizer = momentLocalizer(moment);
function index() {
    const [calevents, setCalEvents] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState("");
    const [slot, setSlot] = useState();
    const [update, setUpdate] = useState();
   const addNewEventAlert = (slotInfo) => {
      setOpen(true);
      setSlot(slotInfo);
    };
    const editEvent = (event) => {
      setOpen(true);
      const newEditEvent = calevents.find((elem) => elem.title === event.title);
      setColor(event.color);
      setTitle(newEditEvent.title);
      setUpdate(event);
    };
    const updateEvent = (e) => {
      e.preventDefault();
  
      setCalEvents(
        calevents.map((elem) => {
          if (elem.title === update.title) {
            return { ...elem, title, color };
          }
          return elem;
        })
      );
      setOpen(false);
      setTitle("");
      setUpdate(null);
    };
    const inputChangeHandler = (e) => setTitle(e.target.value);
  
    const submitHandler = (e) => {
      e.preventDefault();
      const newEvents = calevents;
      newEvents.push({
        title,
        start: slot.start,
        end: slot.end,
      });
      setOpen(false);
      e.target.reset();
  
      setCalEvents(newEvents);
      setTitle("");
    };
    const deleteHandler = (event) => {
      const updatecalEvents = calevents.filter(
        (ind) => ind.title !== event.title
      );
      setCalEvents(updatecalEvents);
    };
    const handleClose = () => {
      setOpen(false);
      setTitle("");
      setUpdate(null);
    };
  
 
  
    return (
      <div  data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Calendar
              selectable
              events={calevents}
              defaultView="month"
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date()}
              localizer={localizer}
              style={{ height: "calc(100vh - 200px" }}
              onSelectEvent={(event) => editEvent(event)}
              onSelectSlot={(slotInfo) => addNewEventAlert(slotInfo)}
            />
          </CardContent>
        </Card>
  
        <Dialog open={open} onClose={handleClose} fullWidth>
          <form onSubmit={update ? updateEvent : submitHandler}>
            <DialogContent>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {update ? "Update Event" : "Add Event"}
              </Typography>
              <CustomFormLabel htmlFor="Event Title">Event Title</CustomFormLabel>
              <CustomTextField
                id="Event Title"
                placeholder="Enter Event Title"
                variant="outlined"
                fullWidth
                value={title}
                sx={{ mb: 2 }}
                onChange={inputChangeHandler}
                size="small"
              />
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
  
              {update ? (
                <Button
                  type="submit"
                  color="error"
                  variant="contained"
                  onClick={() => deleteHandler(update)}
                >
                  Delete
                </Button>
              ) : (
                ""
              )}
              <Button type="submit" disabled={!title} variant="contained">
                {update ? "Update" : "Add"}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  };
  

export default index