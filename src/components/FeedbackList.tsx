import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";

const exampleFeedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "test test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "test test test",
    daysAgo: 4,
  },
];

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
      ))}
    </ol>
  );
}
