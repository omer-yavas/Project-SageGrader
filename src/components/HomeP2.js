import classes from './HomeP2.module.css';

const HomeP2 = () => {
  return (
    <div className={classes.p2box}>
      <div>
        <h2>Supported educators Satisfied students</h2>
        <p>
          SageGrader gives you the flexibility to set question types, define
          multiple marking criteria, provide custom feedback, and grade
          submissions all at once! As instructors, you have complete control
          over how you want to conduct and evaluate your assessments.<br></br>
          <br></br> Once you have your assessment set up within SageGrader, you
          will have the peace of mind that all student submissions will be
          graded consistently across the board with rich and individualised
          feedback - whether it's a cohort of a few dozen students or a few
          thousands.
        </p>
      </div>
      <div>
        <div className={classes.secondDivParts}>
          <img
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/632090d2b1e2f10030775e8c_PythonAndR.png"
            loading="lazy"
            width="80"
            alt=""
            class="image-2"
          />
          <p>
            SageGrader currently supports both <strong>Python</strong> and{' '}
            <strong>R</strong>.
          </p>
        </div>
        <div className={classes.secondDivParts}>
          <img
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63417056e3265c3ad135e1e9_ConnectCanvas-Final.png"
            loading="lazy"
            width="82"
            srcset="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63417056e3265c3ad135e1e9_ConnectCanvas-Final-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63417056e3265c3ad135e1e9_ConnectCanvas-Final-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63417056e3265c3ad135e1e9_ConnectCanvas-Final.png 1008w"
            sizes="82px"
            alt=""
          />
          <p>
            SageGrader can work independent of any learning management system
            (LMS). It can also seamlessly communicate with{' '}
            <strong>Canvas</strong>. If you require integration with another
            LMS, please let us know!
          </p>
        </div>
        <div className={classes.secondDivParts}>
          <img
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634171dcebf97b210b1013cd_AutoGrader-Final.png"
            loading="lazy"
            width="80"
            srcset="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634171dcebf97b210b1013cd_AutoGrader-Final-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634171dcebf97b210b1013cd_AutoGrader-Final-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634171dcebf97b210b1013cd_AutoGrader-Final.png 921w"
            sizes="80px"
            alt=""
          />
          <p>
            Once auto-marking is completed, SageGrader emails{' '}
            <strong>rich feedback in HTML format</strong> to students' email
            addresses on file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeP2;
