import BookingForm from "./Booking_page_comp/Booking_Form";

function Booking(props) {


  return(
    <>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    </>
  );
}

  export default Booking;