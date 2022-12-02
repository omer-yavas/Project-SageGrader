import classes from './HomeP4.module.css';
import React from 'react';
const HomeP4 = () => {
  return (
    <div className={classes.p4box}>
      <h2 className={classes.p4Header}>Features</h2>
      <h3 className={classes.p4Header}>Set question types</h3>
      <p>
        <strong>SageGrader</strong> allows you to create various types of
        questions: multiple-choice, short text, essay, numerical, and
        programming questions. Assisted by AI, SageGrader first auto-marks
        student submissions and then provides individualised rich feedback to
        your students.
      </p>
      <div className={classes.gallery}>
        <div className={classes.galleryParts}>
          <img
            id="w-node-_6c28a523-576f-3645-6269-7c95437699f1-0dc93a04"
            srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0bcf5142726359e7ab1_Text-Question-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0bcf5142726359e7ab1_Text-Question-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0bcf5142726359e7ab1_Text-Question-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0bcf5142726359e7ab1_Text-Question.png 1118w"
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0bcf5142726359e7ab1_Text-Question.png"
            loading="lazy"
            alt=""
            className={classes.galleryImage}
          />
          <p>
            SageGrader can handle answers in a mix of lower and upper cases,
            excessive white spacing, and inclusion of quotation marks - making
            custom marking criteria creation a breeze.
          </p>
        </div>
        <div className={classes.galleryParts}>
          <img
            id="w-node-_0317ad6a-2782-6555-2828-de3a2e0341ad-0dc93a04"
            srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0d4f085f9f94a1e931d_Numerical-Q-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0d4f085f9f94a1e931d_Numerical-Q-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0d4f085f9f94a1e931d_Numerical-Q-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0d4f085f9f94a1e931d_Numerical-Q.png 1090w"
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/635fd0d4f085f9f94a1e931d_Numerical-Q.png"
            loading="lazy"
            alt=""
            className={classes.galleryImage}
          />
          <p>
            Non-numeric answers for numerical questions? No worries, SageGrader
            can clean students' answers before grading them!
          </p>
        </div>
        <div className={classes.galleryParts + ' ' + classes.thirdgallery}>
          <img
            srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6347e4117a0ff7c2b97247a1_CodingQ-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6347e4117a0ff7c2b97247a1_CodingQ-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6347e4117a0ff7c2b97247a1_CodingQ-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6347e4117a0ff7c2b97247a1_CodingQ.png 1090w"
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6347e4117a0ff7c2b97247a1_CodingQ.png"
            loading="lazy"
            alt=""
            className={classes.galleryImage}
          />
          <p>
            For numerical or programming questions, SageGrader can detect any
            hard-coded answers and give zero (or partial) credit and tell
            students in the feedback!
          </p>
        </div>
      </div>
      <a href="/featurepage" className={classes.learnMore}>
        Learn More
      </a>
    </div>
  );
};

export default HomeP4;
