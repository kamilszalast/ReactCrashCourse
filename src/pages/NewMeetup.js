import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupData(meetupData) {
    fetch(
      "https://react-getting-started-ac66a-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupData} />
    </section>
  );
}
export default NewMeetupPage;
