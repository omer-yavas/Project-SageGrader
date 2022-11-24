import classes from './HomeP8.module.css';

const HomeP8 = () => {
  return (
    <div className={classes.p8box}>
      <div className={classes.containerp8}>
        <h3>What SageGrader users have to say</h3>
        <p>
          <em>
            "SageGrader is a handy marking tool that has not only saved me from
            many hours of repetitive marking, but also given me an intuitive
            means to provide informative feedback to students. <br></br>
            <br></br>Prior to using SageGrader, marking was the most
            time-consuming part of assessments, especially in cohorts with
            hundreds of students. Several markers would need to coordinate the
            marks scheme and a partial marks scheme, then revise it constantly
            with each new approach to a question which may lead to marking
            inconsistencies from different markers and the need to go over a
            single paper multiple times. SageGrader removes most opportunities
            for human error and completely eliminates marking bias by applying a
            unified mark scheme across all papers. <br></br>
            <br></br>Furthermore, SageGrader provides a birds-eye-view of the
            submission landscape by compiling and presenting the unique answers
            for each question, ensuring that all answers are considered and
            partial marks can be awarded accordingly. This is but one of many
            assessment insights which allow for easy identification and
            quantification of the common mistakes for each question in which
            SageGrader grants the ability to apply answer specific feedback,
            question level feedback, and finally general class level feedback.
            <br></br>
            <br></br>Personally, I have used SageGrader for a first year,
            undergraduate course that generally has 300+ students enrolled each
            semester. This course has 75-minute-long weekly quizzes which as a
            whole contribute a somewhat significant portion to their overall
            grade. I am able to confidently mark the entire cohort of quizzes
            and provide next day results and feedback due to SageGrader removing
            all the repetitive motions of marking. The informative insights and
            compilation of unique answers allow me to have a one and done
            examination of each question. This means I have more time on
            polishing the quiz feedback to ensure it holistically covers all
            relevant content. The results returned to students are not only
            transparent but also informative, and alongside the appropriate
            feedback, tend to minimise mark disputes."
          </em>
        </p>
        <h3>Anders Yeo</h3>
        <div>
          Teaching assistant, Introduction to Analytics, RMIT University
        </div>
      </div>
    </div>
  );
};

export default HomeP8;
