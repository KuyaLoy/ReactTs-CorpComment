import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
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
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
