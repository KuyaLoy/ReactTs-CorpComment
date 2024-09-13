import { useState } from "react";
import { MAX_CHARACTER } from "../lib/constant";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const charCount = MAX_CHARACTER - text.length;

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(event) => {
          const newText = event.target.value;

          if (newText.length > MAX_CHARACTER) {
            return;
          }
          setText(newText);
        }}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
      ></textarea>

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
