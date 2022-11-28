import classes from './HomeP6.module.css';

const HomeP6 = () => {
  return (
    <div className={classes.p6box}>
      <div className={classes.p6container}>
        <h2>Customise & Optimise Your Grading</h2>
        <p>
          Output of the auto-marking process is a rich and detailed student
          feedback file in HTML format that is emailed directly to the student's
          email address in the system. <br></br>
          <br></br> You can define custom consequential marking criteria for
          advanced partial credit logic or prohibit use of certain keywords
          while answering a particular question.
          <br></br>
          <br></br>You can specify a minimum partial credit amount or define a
          custom numerical tolerance for any question.<br></br>
          <br></br>While writing feedback for a marking criteria you define, any
          feedback left blank will be replaced by system-generated sensible
          feedback (depending on full/ none/ partial credit) so that you do not
          have to write a feedback yourself every single time.<br></br>
          <br></br> You can decide whether or not you would like to award any
          partial credits for a programming-type question with multiple unit
          tests. <br></br>
          <br></br>For essay-type questions, first you manually mark a certain
          number of answers, which is then fed into the AI engine for training
          to produce predictions for the remaining answers. Next, you review
          these predictions and revise them if necessary before publishing the
          results. If you like, you can also include additional feedback on a
          case-by-case basis. Our AI engine reduces time required for marking of
          essay-type questions from days to hours. <br></br>
          <br></br>SageGrader is simple, easy to understand (both for
          instructors and students), and most importantly, 100% transparent in
          the auto-generated feedbacks to minimise student complaints as the
          students will be able to see justification for any points lost
          together with feedback on how to improve their performance. <br></br>
          <br></br>If needed, the instructor can add multiple graders for the
          same assessment by delegating tasks such as revising marking criteria,
          adding unit tests, or adding general & custom feedback. However, only
          an instructor role can create a new assessment. <br></br>
          <br></br>In SageGrader, auto-marking can be run in batches. This way,
          you can auto-mark student submissions in different batches at
          different times.<br></br>
          <br></br> During the auto-marking process, you can revise the marking
          criteria and the unit tests and then perform auto-marking once again
          for as many times as you like until you are happy with the results!
          For instance, you can increase your partial credits or set minimum
          partial credits for certain questions if the class average turns out
          to be a bit lower than desired. <br></br>
          <br></br>You can customise how the Sagerader feedback is presented to
          the students.<br></br>
          <br></br>
          <br></br>
          <span>
            <strong>
              Examples of student feedback that SageGrader can output
              automatically:
            </strong>
          </span>
          <br></br>
          <em>
            - "Points deducted for misspelling of Sydney." <br></br>
            <br></br>-"Federation University is not in Melbourne, though it is
            in Victoria. Partial credit was awarded for this answer."<br></br>
            <br></br>- "Population variance reported instead of sample variance;
            3.0 points awarded."<br></br>
            <br></br> - "Equation solved correctly, however, the incorrect root
            of -10 is reported as the final answer; 2.5 points awarded."{' '}
            <br></br>
            <br></br>- "Perimeter cannot be negative; no credit awarded."{' '}
            <br></br>
            <br></br>- "The question required the perimeter, not the area; 2.0
            points awarded." <br></br>
            <br></br>- "This answer of 21.8 units for the perimeter is
            incorrect. However, it is a correct follow-through of your previous
            incorrect answer of 5.4 units for the square's side length. For this
            reason, you have been awarded a partial credit of 2.5 points."
          </em>
        </p>
      </div>
      <div className={classes.imagebox}>
        <img className={classes.image}
          src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635e56b6bc9d9c847be78be2_InteractiveFeedback-Final.png"
          loading="lazy"
          srcset="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635e56b6bc9d9c847be78be2_InteractiveFeedback-Final-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635e56b6bc9d9c847be78be2_InteractiveFeedback-Final-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635e56b6bc9d9c847be78be2_InteractiveFeedback-Final-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635e56b6bc9d9c847be78be2_InteractiveFeedback-Final-p-1600.png 1600w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635e56b6bc9d9c847be78be2_InteractiveFeedback-Final-p-2000.png 2000w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635e56b6bc9d9c847be78be2_InteractiveFeedback-Final.png 2319w"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeP6;
