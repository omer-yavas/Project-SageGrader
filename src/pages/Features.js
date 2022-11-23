import { Fragment } from 'react';

const Features = () => {
  return (
    <Fragment>
      <h1>SageGrader Features</h1>
      <div>
        <h3>Designed by Educators for Educators</h3>
        <p>
          <strong>SageGrader (SG)</strong> is a secure, cloud-based assessment
          marking & management platform with support for various text,
          numerical, and programming based questions. SG facilitates full
          control of the marking process via rule-based automation of partial
          credits and custom student feedback as well as utilisation of
          state-of-the-art artificial intelligence (AI) algorithms for
          auto-marking of essay-type questions. The marking and feedback rules
          are simply Python expressions (or Python functions in case a single
          expression would be insufficient). In addition, SG marking & feedback
          criteria are case-, space-, and quote-insensitive. This feature
          greatly simplifies the amount of work for defining marking and
          feedback criteria. <br></br>Please note that we use the terms
          "marking" and "grading" interchangeably throughout this page as well
          as within SG. <br></br>SG allows for hybrid marking between automated
          and manual marking for all question types. That is, if required, you
          can always override any automated marking results for any student
          submission before publishing these results.
        </p>
      </div>
      <div>
        <h3>Key Principles</h3>
        <p>SageGrader is built upon three key principles:</p>
        <p>
          <strong>Control</strong>: As educators, we would like to have complete
          control over how we conduct & evaluate our assessments. This control
          and flexibility need to apply across the following four aspects of an
          assessment:<br></br> • Question types: We would like to include
          various types of questions for a 360-degree view of student
          performance. <br></br>• Partial credits: We would like to award
          various types of partial credits for different types of questions and
          different answers. We also would like to be able to award some partial
          credits for a correct follow-through even if the answer itself is
          incorrect. <br></br>• Feedback: We would like to be able to provide
          rich and informative feedback under a wide variety of circumstances.
          <br></br> • Batches of submissions: Rather than marking the
          submissions all at once, we would like to have the flexibility to mark
          different batches of student submissions in different times.
        </p>
        <p>
          <strong>Speed</strong>: Simply having complete control over our
          assessments is not enough: we would like to do that as quickly as
          possible in the most effective and efficient manner: <br></br>• SG
          provides a flexible structure for defining multiple marking criteria
          with partial credits and custom feedback for each question. In SG, you
          can even write your own computer code for evaluation of answers,
          providing total control over student scores and feedback. <br></br>•
          SG allows for fully automated rule-based marking of assessments as
          well as manual override of these automation results. <br></br>• For
          essay type questions, SG utilises state-of-the-art artificial
          intelligence (AI) algorithms for auto-marking of student answers once
          you manually mark a certain number of answers yourself. For example,
          you can manually mark about a hundred student answers and let the AI
          predict scores for the remaining students within just a few minutes.
          But don't worry, you can still review and override any AI-produced
          score recommendations. <br></br>• You can perform batch auto-marking
          using parallel processing, which can dramatically speed up the
          process.
        </p>
        <p>
          <strong>Quality Feedback</strong>: We would like to give our students
          timely, rich, detailed, and individualised feedback for their
          assessments. Furthermore, we would like to receive feedback ourselves
          from our grading tools we use on how the students performed overall
          and what the common mistakes were for each question. In essence, we
          would like to provide quality feedback to help our students see what
          mistakes they made and how to improve upon their performance in a
          timely manner so that we avoid belated feedback overlapping with
          future assessments.
        </p>
      </div>
    </Fragment>
  );
};

export default Features;
